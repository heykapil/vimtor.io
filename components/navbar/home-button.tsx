import Link from "next/link";
import { Disclosure, Transition } from "@headlessui/react";
import { HomeIcon } from "@heroicons/react/solid";

function HomeButton() {
    return (
        <Link href="/" passHref>
            <a>
                <Disclosure.Button className="flex items-center group" as="span">
                    <Transition.Child
                        enter="transition duration-700 ease-elastic"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transition duration-150"
                        leaveFrom="opacity-100"
                    >
                        <HomeIcon className="transition-color duration-300 block h-8 w-auto text-gray-400 group-hover:text-gray-900" aria-hidden="true" />
                    </Transition.Child>
                    <p className="transition-color hidden sm:block text-lg ml-4 text-gray-500 group-hover:text-gray-900">Home</p>
                </Disclosure.Button>
            </a>
        </Link>
    );
}

export default HomeButton;
