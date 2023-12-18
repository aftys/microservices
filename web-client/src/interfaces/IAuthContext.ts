import { IAuth } from "./IAuth";

export interface IAuthContext {
    // isAuthenticated: boolean;
    auth: IAuth | null;
    // setIsAuthenticated:(isAuthenticated:boolean)=>void;
    setAuth:(auth:IAuth | null)=>void;
}