import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface HamburgerButtonProps {
    open: boolean;
}

function HamburgerButton({ open }: HamburgerButtonProps) {
    return (
        <Transition
            show
            appear
            enter="transition-opacity delay-1000 duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current">
                <span className="sr-only">Open main menu</span>
                {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
            </Disclosure.Button>
        </Transition>
    );
}

export default HamburgerButton;
