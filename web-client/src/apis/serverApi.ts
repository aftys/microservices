import axios from "axios";

export const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL;

export const server_api = axios.create({
    baseURL: SERVER_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

