import Link from "next/link";
import { Transition } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/solid";

interface HomeButtonProps {
    onClick: () => void;
}

function HomeButton({ onClick }: HomeButtonProps) {
    return (
        <Link href="/" passHref>
            <a
                onClick={onClick}
                className="outline-none focus:ring-gray-900 pr-1 focus:ring-2 ring-offset-4 rounded-md block"
            >
                <span className="flex items-center group">
                    <Transition.Child
                        enter="transition duration-700 ease-elastic"
                        enterFrom="opacity-0 scale-50 -rotate-90"
                        enterTo="opacity-100 scale-100 rotate-0"
                        leave="transition duration-150"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 -rotate-90"
                    >
                        <HomeIcon
                            className="transition-color duration-300 block h-8 w-auto text-gray-400 group-hover:text-gray-900"
                            aria-hidden="true"
                        />
                    </Transition.Child>
                    <p className="transition-color hidden md:block text-lg ml-4 text-gray-500 group-hover:text-gray-900">
                        Home
                    </p>
                </span>
            </a>
        </Link>
    );
}

export default HomeButton;
