import { useState } from "react";
import { IUseAxiosConfig } from "@interfaces/IUseAxiosConfig";
import { IApiResponse } from "@interfaces/IApiResponse";
import { IApiError } from "@interfaces/IApiError";

const useAxios = <T extends object>({ axiosInstance, method, url,data}: IUseAxiosConfig) => {


    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const controller = new AbortController();

    async function fetch(): Promise<IApiResponse<T>> {
        try {
            setLoading(true);
            const res:IApiResponse<T>= await axiosInstance({
                method,
                url,
                data,
                // signal: controller.signal,
            });
            console.log(res);
            return res ;
        } catch (err ) {
            setError((err as IApiError).response.data);
            console.log(err)
            throw err;  
        } finally {
            console.log("finnaly")
            setLoading(false);
        }
    } 

    function destruct (){ controller.abort()}


    return { error, loading, fetch,destruct };
}

export default useAxios