import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuthStatus();
    }, []);

    const checkAuthStatus = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setIsAuthenticated(!!token);
        setIsLoading(false);
    };

    const login = async (username: string, password: string) => {
        const url = 'https://core.venueboost.io/api/v1/auth/login?SN-BOOST-CORE-ADMIN-API-KEY=boost-sn-23010xC0R3-admin!';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    email: username,
                    password: password,
                    source_app: 'sales-associate',
                }),
            });

            // Check if the response is okay
            if (!response.ok) {
                const errorResponse = await response.json(); // Get the error response
                throw new Error(errorResponse.error); // Throw an error with the message from the backend
            }

            // If successful, parse the JSON response
            const data = await response.json();
            const token = data.access_token; // Adjust based on your API response structure

            // Save the token and update authentication state
            await AsyncStorage.setItem('userToken', token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
            throw error; // You can handle error feedback here if needed
        }
    };

    const logout = async () => {
        try {
            // Call the logout API if needed
            const url = 'https://core.venueboost.io/api/v1/auth/logout?SN-BOOST-CORE-ADMIN-API-KEY=boost-sn-23010xC0R3-admin!';
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Remove the user token from AsyncStorage
            await AsyncStorage.removeItem('userToken');
            setIsAuthenticated(false); // Update the authentication state
        } catch (error) {
            console.error("Logout failed:", error);
            // Handle error feedback if needed
        }
    };


    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
