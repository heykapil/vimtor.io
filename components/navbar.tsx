import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "./link";
import { classNames, focusRingClasses } from "../utils/style";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const routes = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/#contact" },
];

const Navbar = () => {
    const { asPath } = useRouter();

    return (
        <Disclosure as="nav" className="absolute top-0 left-0 w-full z-10">
            {({ open }) => (
                <div className={classNames(open ? "bg-white shadow-lg rounded-md" : "", "px-6 py-4 md:px-6 md:py-8 lg:px-8 lg:py-10")}>
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-end">
                            <div className="hidden md:block md:ml-6">
                                <div className="flex space-x-8">
                                    {routes.map((route, index) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            style={{ animationDelay: `${index * 200 + 1000}ms` }}
                                            className={classNames(`md:text-xl opacity-0 animate-fade-in-down`, asPath === route.href ? "text-gray-600" : "")}
                                        >
                                            {route.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button
                                    className={classNames("inline-flex items-center justify-center p-2 rounded-md text-gray-400", focusRingClasses)}
                                >
                                    <span className="sr-only">Open navbar</span>
                                    {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                    >
                        <Disclosure.Panel static className="md:hidden">
                            <ul className="pt-6 pb-2 flex flex-col space-y-2">
                                {routes.map((route, index) => (
                                    <Transition.Child
                                        as="li"
                                        key={route.href}
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform opacity-0 scale-50"
                                        enterTo="transform opacity-100 scale-100"
                                        className={classNames(
                                            "px-3 py-2 rounded-md text-center text-gray-400 font-medium",
                                            asPath === route.href ? "bg-gray-100 text-gray-500 shadow-inner" : "ring-1 ring-gray-200"
                                        )}
                                        style={{ transitionDelay: `${index * 100 + 100}ms` }}
                                    >
                                        <Link href={route.href} className="no-underline">
                                            {route.title}
                                        </Link>
                                    </Transition.Child>
                                ))}
                            </ul>
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    );
};

export default Navbar;
