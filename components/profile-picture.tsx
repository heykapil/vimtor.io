import { useEffect, useState } from "react";
import Image from "next/image";
import MessageBubble from "./message-bubble";
import ImageShadow from "./image-shadow";
import profile1 from "../public/images/profile.jpg";
import profile2 from "../public/images/profile-2.png";
import profile3 from "../public/images/profile-3.png";
import { Transition } from "@headlessui/react";

const PROFILE_IMAGES = [profile1, profile2, profile3];

interface ProfileImageProps {
    src: StaticImageData;
    visible: boolean;
}

const ImageSlide = ({ src, visible }: ProfileImageProps) => {
    return (
        <Transition show={visible} leave="transition-all duration-75" leaveFrom="blur-none" leaveTo="blur" className="shadow-inner" unmount={false}>
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
                className="transition-all rounded-full opacity-0 motion-safe:animate-bounce-in overflow-hidden w-[200px] h-[200px] outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80"
                onClick={() => {
                    const newIndex = (currentProfileIndex + 1) % PROFILE_IMAGES.length;
                    setCurrentProfileIndex(newIndex);
                }}
            >
                {PROFILE_IMAGES.map((src, index) => (
                    <ImageSlide key={index} src={src} visible={currentProfileIndex === index} />
                ))}
            </button>
        </div>
    );
};

export default ProfilePicture;
