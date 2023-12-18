import { server_api } from '@apis/serverApi';
import PageLoader from '@components/Loaders/PageLoader';
import useAuth from '@hooks/useAuth';
import useAxios from '@hooks/useAxios';
import { IApiResponse } from '@interfaces/IApiResponse';
import { IAuth } from '@interfaces/IAuth';
import { Alert } from 'antd';
import {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {setAuth}=useAuth();
    const navigate=useNavigate();

    const config ={ axiosInstance: server_api, method: 'POST', url: '/auth/register', data:{firstName,lastName,email,birthDate:date,password,confirmPassword,role:"ROLE_ADMIN"} };

    const { error, loading, fetch,destruct }=useAxios<IAuth>(config);
    
    async function submit(e:React.FormEvent){
        e.preventDefault();
        try {
            const response: IApiResponse<IAuth>=await fetch();
            if (!response) {
                console.error('Failed to fetch response:', response);
                return;
              }
              setAuth(response.data);
              console.log('response: ',response);
              navigate('/');
        }catch(err){
            console.log(err);
        }finally{
            destruct();
        }
        
    }
    


    return (
        <div className="flex flex-col justify-start pt-36 items-center h-screen px-6">
            {
                error &&
                <Alert
                    className='absolute top-6'
                    message="An error has occurred."
                    type="error"
                    style={{ backgroundColor: '#f5f5f5', borderColor: '#ccc', color: '#999' }}
                />
            }
            {
                loading
                &&
                <PageLoader />
            }


            <div className="w-full max-w-md p-10 rounded-md drop-shadow-md border border-gray-200 dark:border-0  bg-white dark:bg-dark-bg-main">
                <form  onSubmit={submit}className="space-y-6">
                    <div className="grid gap-6">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#22d3ee]">Sign Up</h2>
                        <div className="w-full flex gap-3">
                            <input
                                className="capitalize  rounded-md  shadow-2xl p-3 ex w-full border-gray-200  border  outline-none focus:border-[#035ec5] placeholder:text-black"
                                type="text" placeholder="First Name"
                                name="First-Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                required />
                            <input
                                className="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                name="Last-Name"
                                required
                            />
                        </div>
                        <div className="grid gap-6 w-full">
                            <input className="p-3 shadow-2xl  glass w-full placeholder:text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="Email"
                                placeholder="Email"
                                name="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input 
                                className="p-3 shadow-2xl   glass w-full text-black border-gray-200  border rounded-md outline-none focus:border-[#035ec5]" 
                                type="date" 
                                required 
                                onChange={(e)=>setDate(new Date(e.target.value))}
                            />
                        </div>
                        <div className="flex gap-3">
                            <input
                                className="p-3 glass shadow-2xl  w-full placeholder:text-black  border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <input
                                className="p-3 glass shadow-2xl  w-full placeholder:text-black  border-gray-200  border rounded-md outline-none focus:border-[#035ec5]"
                                type="password"
                                placeholder="Confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required />
                        </div>
                        <button type="submit" value="Login" className="flex w-full justify-center rounded-md bg-[#22d3ee] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        <p className="dark:text-gray-200 text-center">
                            Already have an account?
                            <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold"> Sign in</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup;