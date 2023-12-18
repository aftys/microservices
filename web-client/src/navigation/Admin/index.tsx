import { Routes, Route } from 'react-router-dom';
import AdminLayout from '@components/Layout/AdminLayout';
import { Home } from '@pages/admin/Home';
import { Entretiens } from '@pages/admin/Entretiens';
import NoMatch from '@pages/noMatch';
import { AnimatePresence } from 'framer-motion';
// import useAuth from '@hooks/useAuth';
// import { useEffect } from 'react';
// import { server_api } from '@apis/serverApi';
// import useAxios from '@hooks/useAxios';
// import { IAuth } from '@interfaces/IAuth';
// import useLocalStorage from '@hooks/useLocalStorage';
// import { IApiResponse } from '@interfaces/IApiResponse';


const Admin = () => {
    // const navigate = useNavigate();
    // const { setAuth } = useAuth();
    // const storedAuth = useLocalStorage<IAuth>('auth');
    // const config = { axiosInstance: server_api, method: 'GET', url: '/verify', data: { token: storedAuth.getItem()?.token } };
    // const { fetch, destruct } = useAxios<IAuth>(config);

    // async function verifyToken() {
    //     const token = storedAuth.getItem()?.token;
    //     if (!token) {
    //         navigate('/login');
    //         setAuth(null);
    //         return;
    //     }
    //     try {
    //         const response: IApiResponse<IAuth> = await fetch();
    //         setAuth(response.data);
    //     } catch (err) {
    //         setAuth(null);
    //         navigate('/login');
    //     } finally {
    //         destruct();
    //     }
    // }

    // useEffect(() => {
    //     verifyToken();
    // }, []);


    return (
        <AnimatePresence mode='wait'>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Home />} />
                    <Route path="entretiens" element={<Entretiens />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Admin;
