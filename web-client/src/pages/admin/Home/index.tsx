import {motion} from 'framer-motion';
export const Home = () => {
    const transition = {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
    };


    const variants = {
        exit: { y: -200, opacity: 0, transition },
        enter: { y: 0, opacity: 1, transition: { delay: 0.3, ...transition } }
    };

    return (
        <motion.div variants={variants} initial="exit" animate="enter" exit="exit">
            <h1>Home</h1>
        </motion.div>
    )
}