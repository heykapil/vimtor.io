import Emoji from "./emoji";
import ProfilePicture from "./profile-picture";

function IntroSection() {
    return (
        <header className="px-8 text-center sm:mt-0 sm:text-left sm:w-full sm:flex sm:justify-center sm:items-center">
            <ProfilePicture />
            <div className="max-w-[80%] opacity-0 m-8 mx-auto sm:mx-0 animate-fade-in-down animation-delay-1000">
                <h1 className="mt-5 mb-2 text-3xl sm:text-4xl font-extrabold sm:mt-0">
                    Covandonga <Emoji label="hello" icon="👋" />
                </h1>
                <div className="text-xl">
                    <p>Hi, I am Victor Navarro!</p>
                    <p>When I was a child, my dream was to become an inventor</p>
                    <p className="mt-5">Today, I help quality businesses build quality software</p>
                </div>
            </div>
        </header>
    );
}

export default IntroSection;
