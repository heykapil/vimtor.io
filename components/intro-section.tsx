import Emoji from "./emoji";
import ProfilePicture from "./profile-picture";
import { motion } from "framer-motion";

function IntroSection() {
    return (
        <header className="sm:px-4 text-center sm:mt-0 sm:text-left sm:w-full sm:flex sm:justify-center sm:items-center">
            <ProfilePicture />
            <div className="px-3 max-w-sm md:max-w-xl m-8 mx-auto sm:mx-0">
                <motion.h1
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-5 mb-2 text-3xl sm:text-4xl font-extrabold sm:mt-0"
                >
                    Covadonga <Emoji appear label="hello" icon="👋" delay={300} />
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="text-xl"
                >
                    <p>Hi, I am Victor Navarro!</p>
                    <p>When I was a child, my dream was to become an inventor</p>
                    <p className="mt-5">Today, I help quality businesses build quality software</p>
                </motion.div>
            </div>
        </header>
    );
}

export default IntroSection;
