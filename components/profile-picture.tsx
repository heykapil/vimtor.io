import { useEffect, useState } from "react";
import Image from "next/image";

const PROFILE_IMAGES = [
  "/images/profile.jpg",
  "/images/profile-2.png",
  "/images/profile-3.png"
];

interface ProfileImageProps {
  src: string;
  visible: boolean;
}

const ImageSlide = ({ src, visible }: ProfileImageProps) => {
  return (
    <div className={`h-[200px] w-[200px] ${visible ? "" : "hidden"}`}>
      <Image priority src={src} width={200} height={200} />
    </div>
  );
};

const MessageBubble = () => {
  return (
    <div id="profile-bubble" role="tooltip"
         className="bg-gray-800 text-white absolute py-2 px-3 whitespace-nowrap -top-1/3 left-1/2 transform -translate-x-1/2 text-center rounded-lg sm:top-full sm:mt-4">
      Click for a new flavour
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
           className="absolute bottom-[6px] transform text-gray-800 w-4 h-4 left-1/2 translate-y-full -translate-x-1/2 rotate-180 sm:rotate-0 sm:bottom-auto sm:-translate-y-full sm:top-[6px]">
        <path d="M3 30 A3 3 0 0 1 0.4 25.5 L13.4 2.5 A3 3 0 0 1 18.6 2.5 L31.6 25.5 A3 3 0 0 1 29 30 Z" fill="currentColor" />
      </svg>
    </div>
  );
};

const ProfilePicture = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [profileHasChanged, setProfileHasChanged] = useState(false);

  useEffect(() => {
    if (currentProfile > 0) {
      setProfileHasChanged(true);
    }
  }, [currentProfile]);

  return (
    <div className="relative mb-4 sm:mr-12 sm:mb-0">
      {profileHasChanged ? null : <MessageBubble />}
      <button
        className="rounded-full transition-all overflow-hidden outline-none ring-gray-900 focus:ring-4 hover:ring-4 ring-opacity-80"
        onClick={() => setCurrentProfile((currentProfile + 1) % PROFILE_IMAGES.length)}
      >
        {PROFILE_IMAGES.map((src, index) => (
          <ImageSlide src={src} visible={currentProfile === index} />
        ))}
      </button>
    </div>
  );
};

export default ProfilePicture