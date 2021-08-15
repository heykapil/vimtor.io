import { useEffect, useState } from "react";
import Image from "next/image";
import MessageBubble from "./message-bubble";
import ImageShadow from "./image-shadow";
import profile1 from "../public/images/profile.jpg";
import profile2 from "../public/images/profile-2.png";
import profile3 from "../public/images/profile-3.png";
import { classNames } from "../utils/style";

const PROFILE_IMAGES = [profile1, profile2, profile3];

interface ProfileImageProps {
    src: StaticImageData;
    visible: boolean;
    priority: boolean;
}

const ImageSlide = ({ src, visible, priority }: ProfileImageProps) => {
    return (
        <div className={classNames("shadow-inner", visible ? "" : "hidden")}>
            <Image priority={priority} src={src} placeholder="blur" alt="victor profile picture" width={200} height={200} />
            <ImageShadow className="rounded-full" />
        </div>
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
                    <ImageSlide key={index} priority={index === 0} src={src} visible={currentProfileIndex === index} />
                ))}
            </button>
        </div>
    );
};

export default ProfilePicture;
