import Image from "next/image";
import MessageBubble from "./message-bubble";
import ImageShadow from "./image-shadow";
import profile1 from "../public/images/profile-1.jpeg";
import profile2 from "../public/images/profile-2.png";
import profile3 from "../public/images/profile-3.png";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const profileImages = [profile1, profile2, profile3];

function ProfilePicture() {
    const [profileIndex, setProfileIndex] = useState(0);
    const profileHasChanged = profileIndex > 0;

    function showNextPicture() {
        setProfileIndex(profileIndex + 1);
    }

    return (
        <div className="relative mb-4 sm:mr-12 sm:mb-0">
            <MessageBubble id="profile-bubble" visible={!profileHasChanged} />
            <button
                aria-describedby="profile-bubble"
                className="transition-all rounded-full opacity-0 animate-bounce-in overflow-hidden w-[200px] h-[200px] outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80"
                onClick={showNextPicture}
            >
                {profileImages.map((src, index) => (
                    <Transition
                        key={index}
                        show={profileIndex % profileImages.length === index}
                        unmount={false}
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
            </button>
        </div>
    );
}

export default ProfilePicture;
