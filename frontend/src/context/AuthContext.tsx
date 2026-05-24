import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios.ts';

interface User {
    _id?: string;
    id?: string;
    retailerId?: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    createdAt?: string;
    updatedAt?: string;
    isAdmin?: boolean;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (token: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
    refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {
        try {
            const { data } = await api.get('/retailer/profile');
            if (data.success) {
                setUser(data.retailer || data.user);
                return true;
            }
            return false;
        } catch (error) {
            console.error("Profile fetch error:", error);
            return false;
        }
    };

    useEffect(() => {
        const initializeAuth = async () => {
            const currentToken = localStorage.getItem('token');

            if (currentToken) {
                const success = await fetchProfile();
                if (success) {
                    setLoading(false);
                    return;
                }
            }

            try {
                const { data } = await api.post('/retailer/refresh-token');
                if (data.success && data.accessToken) {
                    localStorage.setItem('token', data.accessToken);
                    setToken(data.accessToken);
                    await fetchProfile();
                }
            } catch (error: any) {
                console.error("Silent Refresh Failed:", error.message);
                localStorage.removeItem('token');
                setToken(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = async (newToken: string) => {
        setLoading(true);
        localStorage.setItem('token', newToken);
        setToken(newToken);
        await fetchProfile();
        setLoading(false);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    const refreshProfile = async () => {
        await fetchProfile();
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading, refreshProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
