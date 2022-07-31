import Image from "next/image";
import ImageShadow from "./image-shadow";
import profile1 from "../public/images/profile-1.jpeg";
import profile2 from "../public/images/profile-2.png";
import profile3 from "../public/images/profile-3.png";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMedia } from "react-use";

const profileImages = [profile1, profile2, profile3];

function ProfilePicture() {
    const [profileIndex, setProfileIndex] = useState(0);
    const isDesktop = useMedia("(min-width: 640px)");

    const profileHasChanged = profileIndex > 0;

    function showNextPicture() {
        setProfileIndex(profileIndex + 1);
    }

    return (
        <div className="relative mb-4 sm:mr-12 sm:mb-0">
            <div className="absolute -translate-x-1/2 left-1/2 -top-16 sm:top-56">
                <AnimatePresence>
                    {!profileHasChanged && (
                        <motion.div
                            initial={{ y: isDesktop ? -12 : 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { delay: 3 } }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            id="profile-bubble"
                            role="tooltip"
                            className="bg-gray-800 text-white py-2 px-3 whitespace-nowrap text-center rounded-lg"
                            aria-hidden="false"
                        >
                            Click for a new face
                            <svg
                                id="svg"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="absolute bottom-[6px] text-gray-800 w-4 h-4 left-1/2 translate-y-full -translate-x-1/2 rotate-180 sm:rotate-0 sm:bottom-auto sm:-translate-y-full sm:top-[6px]"
                            >
                                <path
                                    d="M3 30 A3 3 0 0 1 0.4 25.5 L13.4 2.5 A3 3 0 0 1 18.6 2.5 L31.6 25.5 A3 3 0 0 1 29 30 Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.15, 1.5, 0.5, 1] }}
                aria-describedby="profile-bubble"
                className="rounded-full overflow-hidden w-[200px] h-[200px] outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80"
                onClick={showNextPicture}
            >
                {profileImages.map((src, index) => (
                    <Transition
                        key={index}
                        show={profileIndex % profileImages.length === index}
                        unmount={false}
                        className="relative"
                        enter="transition-all duration-75"
                        enterFrom="blur"
                        enterTo="blur-none"
                        leave="transition-all duration-75"
                        leaveFrom="blur-none"
                        leaveTo="blur"
                    >
                        <Image priority src={src} alt="victor profile picture" width={200} height={200} />
                        <ImageShadow className="rounded-full" />
                    </Transition>
                ))}
            </motion.button>
        </div>
    );
}

export default ProfilePicture;
