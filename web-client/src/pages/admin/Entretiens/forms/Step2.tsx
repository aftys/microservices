import { motion } from "framer-motion";

export default function Step1() {
    const transition = {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
    };

    const stepCariant = {
        initial: { x: 200, opacity: 1, transition },
        animate:{ x: 0, opacity: 1, transition },
        exit: { x: -200, opacity: 1, transition: transition  }
    };
    return (
        <motion.div variants={stepCariant} initial="initial" animate="animate" exit="exit" className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Step 1</h1>
            <p className="text-center">This is the content for step1</p>
        </motion.div>
    )
}