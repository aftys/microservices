// import { lazy } from 'react';
import { Route,  Routes } from 'react-router-dom';

// const Login = lazy(() => import('@pages/auth/Login'));
import Login from '@pages/auth/Login';
// const ChangePassword = lazy(() => import('@pages/auth/changePassword'));
// const ForgetPassword = lazy(() => import('@pages/auth/forgetPassword'));
// const NoMatch = lazy(() => import('@pages/noMatch'));
// const Signup = lazy(() => import('@pages/auth/Signup'));
// const AuthLayout =lazy(() => import('@components/Layout/AuthLayout'));
import NoMatch from '@pages/noMatch';
import AuthLayout from '@components/Layout/AuthLayout';
import Signup from '@pages/auth/Signup';

const Auth = () => {
    return (
        <Routes >
            <Route  path='/' element={<AuthLayout />}>
                <Route path='/login'   element={<Login />} />
                <Route path='/signup' element={<Signup />}/>
                {/* <Route path="change-password" element={<ChangePassword />} /> */}
                {/* <Route path="forget-password" element={<ForgetPassword />} /> */}
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default Auth;
