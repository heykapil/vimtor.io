import Emoji from "./emoji";
import ProfilePicture from "./profile-picture";

const IntroSection = () => {
    return (
        <header className="mt-32 px-8 text-center sm:mt-36 sm:text-left sm:w-full sm:flex sm:justify-center sm:items-center">
            <ProfilePicture />
            <div className="max-w-[80%] opacity-0 m-8 mx-auto sm:mx-0 animate-fade-in-down animation-delay-1000">
                <h1 className="mt-5 mb-2 text-3xl sm:text-4xl font-bold sm:mt-0">
                    Covandonga <Emoji label="hello" icon="👋" />
                </h1>
                <div className="text-xl">
                    <p>Hi, I am Victor Navarro!</p>
                    <p>When I was a child, my dream was to become an inventor</p>
                    <p className="mt-5">This is my best attempt</p>
                </div>
            </div>
        </header>
    );
};

export default IntroSection;
