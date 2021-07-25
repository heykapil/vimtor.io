import Image from "next/image";
import Emoji from "./emoji";
import { useState } from "react";

const IntroSection = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  return (
    <header className="home-header">
      <div className="profile-container" tabIndex={0}>
        {currentProfile === 0 ? (
          <div id="profile-bubble" role="tooltip" className="profile-bubble">
            Click for a new flavour
            <svg xmlns="http://www.w3.org/2000/svg" className="profile-bubble-arrow">
              <path d="M 90,50 10,90 10,10 z" />
            </svg>
          </div>
        ) : null}
        <div role="button" className="profile-image" onClick={() => setCurrentProfile((currentProfile + 1) % 3)}>
          {currentProfile === 0 ? (
            <Image priority className="profile-image" src="/images/profile.jpg" width={200} height={200} />
          ) : null}
          {currentProfile === 1 ? (
            <Image className="profile-image" src="/images/profile-2.png" width={200} height={200} />
          ) : null}
          {currentProfile === 2 ? (
            <Image className="profile-image" src="/images/profile-3.png" width={200} height={200} />
          ) : null}
        </div>
      </div>
      <div className="hero-info">
        <h1 className="hero-title">Covandonga <Emoji label="hello" icon="👋" /></h1>
        <p>Hi, I am Victor Navarro!</p>
        <p>When I was a child, my dream was to become an inventor</p>
        <p>This is my best attempt</p>
      </div>
    </header>
  );
};

export default IntroSection;