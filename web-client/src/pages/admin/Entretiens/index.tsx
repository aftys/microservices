import { Steps } from 'antd';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Step1 from './forms/Step1';
import Step2 from './forms/Step2';
import Step3 from './forms/Step3';

export const Entretiens = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        { id: 1, title: "Step 1" },
        { id: 2, title: "Step 2" },
        { id: 3, title: "Step 3" },
    ]

    const next = () => {
        currentStep < steps.length - 1 && setCurrentStep(prev => prev + 1);
    };

    const previous = () => {
        currentStep > 0 && setCurrentStep(prev => prev - 1);
    };

    const transition = {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
    };


    const pageVariants = {
        exit: { y: -200, opacity: 0, transition },
        enter: { y: 0, opacity: 1, transition: { delay: 0.3, ...transition } }
    };


    return (
        <motion.div variants={pageVariants} initial="exit" animate="enter" exit="exit" className="w-full h-full flex flex-col items-center justify-between">
            <Steps className='w-full' current={currentStep} items={steps} />
            <div className="px-20">
                <AnimatePresence mode='wait'>
                    {currentStep == 0 && <Step1 />}
                    {currentStep == 1 && <Step2 />}
                    {currentStep == 2 && <Step3 />}
                </AnimatePresence>
            </div>
            <div className="relative w-full flex justify-between h-10">

                {currentStep != 0 && <button className="rounded-xl font-bold px-4 h-full  cursor-pointer dark:bg-blue-900 bg-[#22d3ee] dark:text-gray-300 text-gray-100 text-sm" onClick={previous}>Previous</button>}
                {currentStep == steps.length - 1 && <button className="rounded-xl font-bold px-4 h-full  cursor-pointer dark:bg-blue-900 bg-[#22d3ee] dark:text-gray-300 text-gray-100 text-sm" onClick={next}>Done</button>}
                {currentStep != steps.length - 1 && <button className="absolute right-0 my-auto rounded-xl font-bold px-4 h-full  cursor-pointer dark:bg-blue-900 bg-[#22d3ee] dark:text-gray-300 text-gray-100 text-sm" onClick={next}>Next</button>}
            </div>
        </motion.div>
    )
}