import { useEffect, useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import MessageBubble from "./message-bubble";
import ImageShadow from "./image-shadow";

const PROFILE_IMAGES = ["/images/profile.jpg", "/images/profile-2.png", "/images/profile-3.png"];

interface ProfileImageProps {
    src: string;
    visible: boolean;
}

const ImageSlide = ({ src, visible }: ProfileImageProps) => {
    return (
        <Transition
            show={visible}
            enter="transition-all ease-in duration-100"
            enterFrom="blur-sm"
            enterTo="blur-none"
            leave="transition-all ease-out duration-100"
            leaveFrom="blur-none"
            leaveTo="blur-sm"
            className="shadow-inner"
        >
            <Image priority src={src} alt="victor profile picture" width={200} height={200} />
            <ImageShadow className="rounded-full" />
        </Transition>
    );
};

const ProfilePicture = () => {
    const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
    const [profileHasChanged, setProfileHasChanged] = useState(false);

    useEffect(() => {
        if (currentProfileIndex > 0) {
            setProfileHasChanged(true);
        }
    }, [currentProfileIndex]);

    return (
        <div className="relative mb-4 sm:mr-12 sm:mb-0">
            <MessageBubble id="profile-bubble" hidden={profileHasChanged} />
            <button
                aria-describedby="profile-bubble"
                className="transition-all rounded-full opacity-0 animate-bounce-in overflow-hidden w-[200px] h-[200px] outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80"
                onClick={() => {
                    const newIndex = (currentProfileIndex + 1) % PROFILE_IMAGES.length;
                    setCurrentProfileIndex(newIndex);
                }}
            >
                {PROFILE_IMAGES.map((src, index) => (
                    <ImageSlide key={src} src={src} visible={currentProfileIndex === index} />
                ))}
            </button>
        </div>
    );
};

export default ProfilePicture;
