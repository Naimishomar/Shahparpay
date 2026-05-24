import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api/v1',
    withCredentials: true,
});

api.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (originalRequest.url === '/retailer/refresh-token') {
                return Promise.reject(error);
            }
            originalRequest._retry = true;
            try {
                const { data } = await api.post('/retailer/refresh-token');
                if (data.success) {
                    localStorage.setItem('token', data.accessToken);
                    api.defaults.headers.common['Authorization'] = data.accessToken;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                localStorage.removeItem('token');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
