import type {  authRoleEnum } from '@enums/authRoleEnum';
export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    role: authRoleEnum;
    birthDate: Date;
}
