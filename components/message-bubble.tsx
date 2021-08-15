import { Transition } from "@headlessui/react";

interface MessageBubbleProps {
    hidden: boolean;
    id: string;
}

const MessageBubble = ({ id, hidden }: MessageBubbleProps) => {
    return (
        <Transition
            show={!hidden}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div
                id={id}
                role="tooltip"
                className={
                    "animate-fly-in-up sm:animate-fly-in-down opacity-0 bg-gray-800 text-white absolute py-2 px-3 whitespace-nowrap -top-1/3 left-1/2 transform -translate-x-1/2 text-center rounded-lg sm:top-full sm:mt-4"
                }
                aria-hidden={hidden}
            >
                Click for a new flavour
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="absolute bottom-[6px] transform text-gray-800 w-4 h-4 left-1/2 translate-y-full -translate-x-1/2 rotate-180 sm:rotate-0 sm:bottom-auto sm:-translate-y-full sm:top-[6px]"
                >
                    <path d="M3 30 A3 3 0 0 1 0.4 25.5 L13.4 2.5 A3 3 0 0 1 18.6 2.5 L31.6 25.5 A3 3 0 0 1 29 30 Z" fill="currentColor" />
                </svg>
            </div>
        </Transition>
    );
};

export default MessageBubble;
