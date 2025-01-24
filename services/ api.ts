const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

import apiFactory from './apiFactory';
import { ApiRequest } from '@/types/api.types';

export default async function api<T = any>(
    api: ApiRequest,
    payload = {},
    token?: string | null,
    responseType?: any,
    hasToken = false
): Promise<T> {
    return apiFactory.request<T>(
        api,
        payload,
        token,
        responseType,
        hasToken
    );
}

export async function login(username: string, password: string): Promise<string> {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error('API login error:', error);
        throw error;
    }
}