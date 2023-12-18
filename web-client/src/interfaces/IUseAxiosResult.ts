import { IApiResponse } from "./IApiResponse";

export interface IUseAxiosResult<T extends {}>{
    response: IApiResponse<T>[];
    error: string|null;
    loading: boolean;
    refetch: () => void;

}