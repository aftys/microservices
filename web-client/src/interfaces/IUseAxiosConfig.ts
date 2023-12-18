import { AxiosInstance } from 'axios';

export interface IUseAxiosConfig {
    axiosInstance: AxiosInstance;
    method: string;
    url: string;
    data?: object;
}