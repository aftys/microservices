import {useNavigate} from 'react-router-dom';   

const NoMatch = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 right-0 w-screen h-screen bg-light-bg-main dark:bg-dark-bg-main z-50 flex flex-col justify-center items-center">
            <h1 className="mb-4 text-6xl font-semibold text-[#22d3ee]">404</h1>
            <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
            <div className="animate-bounce">
                <svg className="mx-auto h-16 w-16 text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <p className="mt-4 text-gray-600">Let's get you back <button onClick={()=>navigate(-1)} className="text-[#22d3ee]">Click here</button>.</p>
        </div>
    )
}

export default NoMatch;