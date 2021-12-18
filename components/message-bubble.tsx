import { Transition } from "@headlessui/react";

interface MessageBubbleProps {
    hidden: boolean;
    id: string;
}

const MessageBubble = ({ id, hidden }: MessageBubbleProps) => {
    return (
        <Transition
            appear
            show={!hidden}
            enter="transition-all delay-2500 duration-500"
            enterFrom="translate-y-4 sm:-translate-y-4 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="absolute -translate-x-1/2 left-1/2 -top-16 sm:top-56"
        >
            <div id={id} role="tooltip" className="bg-gray-800 text-white py-2 px-3 whitespace-nowrap text-center rounded-lg" aria-hidden={hidden}>
                Click for a new flavour
                <svg
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="absolute bottom-[6px] text-gray-800 w-4 h-4 left-1/2 translate-y-full -translate-x-1/2 rotate-180 sm:rotate-0 sm:bottom-auto sm:-translate-y-full sm:top-[6px]"
                >
                    <path d="M3 30 A3 3 0 0 1 0.4 25.5 L13.4 2.5 A3 3 0 0 1 18.6 2.5 L31.6 25.5 A3 3 0 0 1 29 30 Z" fill="currentColor" />
                </svg>
            </div>
        </Transition>
    );
};

export default MessageBubble;
