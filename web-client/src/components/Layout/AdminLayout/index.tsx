import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { sidebarLinks } from "@assets/index";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="min-h-screen   bg-light-bg-main dark:bg-dark-app flex flex-col items-center pl-[85px] py-[75px] pr-4 ">
            <Navbar />
            <Sidebar sidebarLinks={sidebarLinks} />
            <main className="w-full h-full  max-w-screen-xl flex flex-col items-center " >
                <Outlet/>
            </main>
        </div> 
    );
};

export default AdminLayout;
