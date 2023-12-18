export interface IApiResponse<T extends object> {
    data: T;
    success: boolean;
    status: number;
}