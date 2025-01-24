import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_CONFIG } from "@/config/api.config";
import { router } from 'expo-router';
import { ApiRequest } from '@/types/api.types';

class ApiFactory {
    private instance: AxiosInstance;
    private isRefreshing = false;
    private failedQueue: { resolve: (value?: unknown) => void; reject: (reason?: any) => void }[] = [];

    constructor() {
        this.instance = axios.create({
            baseURL: API_CONFIG.BASE_URL,
            timeout: 30000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            proxy: false,
            withCredentials: false
        });

        this.instance.interceptors.request.use(
            async (config) => {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                if (config.data instanceof FormData) {
                    config.headers['Content-Type'] = 'multipart/form-data';
                }

                if (config.url?.includes('login') || config.url?.includes('logout')) {
                    config.params = {
                        'SN-BOOST-CORE-ADMIN-API-KEY': API_CONFIG.ADMIN_KEY
                    };
                } else {
                    config.params = {
                        'SN_BOOST_CORE_VB_APPS_API_KEY': API_CONFIG.VB_APPS_KEY,
                        // 'venue_short_code': 'ELE3269SCDX'
                        'venue_short_code': 'BLU0531SCDW'
                    };
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        this.instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const { config, response } = error;
                if (response?.status === 401 && !config._retry) {
                    if (this.isRefreshing) {
                        return new Promise((resolve, reject) => {
                            this.failedQueue.push({ resolve, reject });
                        })
                            .then(() => this.instance(config))
                            .catch((err) => Promise.reject(err));
                    }

                    config._retry = true;
                    this.isRefreshing = true;

                    try {
                        const newToken = await this.refreshToken();
                        if (newToken) {
                            config.headers.Authorization = `Bearer ${newToken}`;
                            this.processQueue(null, newToken);
                            return this.instance(config);
                        }
                    } catch (refreshError) {
                        this.processQueue(refreshError, null);
                        return Promise.reject(refreshError);
                    } finally {
                        this.isRefreshing = false;
                    }
                }
                return Promise.reject(error);
            }
        );
    }

    private async refreshToken(): Promise<string | null> {
        try {
            const details = await AsyncStorage.getItem('userDetails');
            let userDetails = details ? JSON.parse(details) : null;
            if(userDetails){
                const response = await axios.post(`${API_CONFIG.BASE_URL}/auth/refresh`, { }, {
                    headers: {
                        'Authorization': `Bearer ${userDetails.refresh_token}`
                    },
                    params: {
                        'SN-BOOST-CORE-ADMIN-API-KEY': API_CONFIG.ADMIN_KEY
                    }
                });
                const newToken = response.data?.access_token;
                if (newToken) {
                    await AsyncStorage.setItem('userToken', newToken);
                    userDetails.refresh_token = response.data?.refresh_token;
                    await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));
                    return newToken;
                }
            }

            return null;
        } catch (error) {
            console.error('Token refresh failed, logging out user:', error);
            await AsyncStorage.removeItem('userToken');
            await AsyncStorage.removeItem('userDetails');
            router.replace('/(auth)/login');
            return null;
        }
    }

    private processQueue(error: any, token: string | null = null) {
        this.failedQueue.forEach((prom) => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });
        this.failedQueue = [];
    }

    async request<T = any>(
        api: ApiRequest,
        payload = {},
        token?: string | null,
        responseType?: any,
        hasToken = false,
        onUploadProgress?: (progressEvent: number) => void
    ): Promise<T> {
        try {
            const path = typeof api.path === 'function' ? api.path(payload) : api.path;
            const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

            const config: AxiosRequestConfig = {
                url: normalizedPath,
                method: api.method,
                responseType,
                onUploadProgress: onUploadProgress
                    ? (progressEvent) => {
                        const percentCompleted = progressEvent.total
                            ? (progressEvent.loaded * 100) / progressEvent.total
                            : 0;
                        onUploadProgress(percentCompleted / 100);
                    }
                    : undefined
            };

            if (payload instanceof FormData) {
                config.data = payload;
            } else if (api.method === 'GET') {
                config.params = { ...config.params, ...payload };
            } else {
                config.data = payload;
            }

            const response = await this.instance.request(config);
            return response.data;
        } catch (error: any) {
            console.log('Error', error?.response?.data)
            console.error('Request failed:', error);
            throw error?.response?.data || error;
        }
    }
}

export default new ApiFactory();