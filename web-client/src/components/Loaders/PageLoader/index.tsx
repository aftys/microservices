const PageLoader = () => {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-half-trans dark:bg-dark-trans z-50">
            <div className="flex justify-center items-center mt-[50vh]">
                <div className="page-loader">
                    <div className="page-loader-ball"></div>
                    <div className="page-loader-ball"></div>
                    <div className="page-loader-ball"></div>
                </div>
            </div>
        </div>
    )
};

export default PageLoader;