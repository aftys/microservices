import Switcher from "@components/Switcher";

const Navbar: React.FC = () => {
    return(
        <>
            <nav
                className="fixed top-0 left-0 right-0 flex gap-6 justify-end w-full py-2 px-12    z-40 bg-white dark:bg-dark-bg-main border-b-[1px] dark:border-gray-700 border-gray-200"
            >
                <Switcher/>
                

            </nav>
        </>
    )
};

export default Navbar;