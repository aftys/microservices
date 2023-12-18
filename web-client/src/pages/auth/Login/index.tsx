import React, { useState } from 'react';
import { Alert } from 'antd';
import PageLoader from '@components/Loaders/PageLoader';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '@hooks/useAxios';
import { IAuth } from '@interfaces/IAuth';
import { server_api } from '@apis/serverApi';
import useAuth from '@hooks/useAuth';
import { IApiResponse } from '@interfaces/IApiResponse';


function Login() {
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setAuth } = useAuth();
    const config = { axiosInstance: server_api, method: 'POST', url: '/authenticate', data: { email, password } };
    const navigate = useNavigate();
    const { error, loading, fetch, destruct } = useAxios<IAuth>(config);

    async function login(e: React.FormEvent) {
        try {
            e.preventDefault();

            const response: IApiResponse<IAuth> = await fetch();
            if (!response) {
                return;
            }
            setAuth(response.data);
            navigate('/');
        } catch (err) {
            setEmail('');
            setPassword('');
        } finally {
            destruct();
        }
    }




    return (
        <div className=" flex flex-col justify-start pt-36 items-center h-screen px-6">
            {
                error
                &&
                <Alert
                    className='absolute top-6'
                    message={error} type="error" showIcon
                />
            }

            {
                loading
                &&
                <PageLoader />
            }

            <div className="w-full max-w-md p-10 rounded-md drop-shadow-md border border-gray-200 dark:border-0  bg-white dark:bg-dark-bg-main">
                <form className="space-y-6" onSubmit={login}>
                    <div className='grid gap-6 w-full'>
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#22d3ee]">Sign In</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="p-3 shadow-2xl  glass w-full placeholder:text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='p-3 shadow-2xl  glass w-full placeholder:text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]'
                        />
                        <button type="submit" value="Login" className="flex w-full justify-center rounded-md bg-[#22d3ee] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        <p className="dark:text-gray-200 text-center">
                            Need an account?
                            <Link to="/signup" className="text-blue-500 hover:text-blue-700 font-semibold">   Create an
                                account</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;