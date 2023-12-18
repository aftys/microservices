
import useTheme from "@hooks/useTheme";
import { ConfigProvider, theme as antdTheme } from "antd";
import useLocalStorage from "@hooks/useLocalStorage";
import { IAuth } from "@interfaces/IAuth";
import useAuth from "@hooks/useAuth";
import { useEffect, lazy, Suspense } from "react"
// import { authRoleEnum } from "@enums/authRoleEnum";
import PageLoader from "@components/Loaders/PageLoader";
const Admin = lazy(() => import('../Admin'));
const Auth = lazy(() => import('../Auth'));



const Root = () => {
    const { defaultAlgorithm, darkAlgorithm } = antdTheme;
    const storedAuth = useLocalStorage<IAuth>('auth');
    const { auth } = useAuth();
    const { theme } = useTheme();
    useEffect(() => {
        console.log("auth: ", auth?.user);
    })

    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: theme == 'dark' ? 'rgb(30 58 138 1)' : "#22d3ee" },
                algorithm: theme == 'dark' ? darkAlgorithm : defaultAlgorithm,
            }}
        >
            <div className={`${theme == 'dark' && "dark "}`}>
                <Suspense fallback={<PageLoader/>}>
                    {!storedAuth.getItem() && <Auth />}
                    {/* {storedAuth.getItem()?.user.role == authRoleEnum.ADMIN && <Admin />} */}
                    {storedAuth.getItem() && <Admin />}
                </Suspense>
            </div>
        </ConfigProvider>
    )
};

export default Root;