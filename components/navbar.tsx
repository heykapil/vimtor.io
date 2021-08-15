import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "./link";
import { classNames, focusRingClasses } from "../utils/style";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const routes = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
];

function Navbar() {
    const { asPath, back } = useRouter();

    return (
        <Disclosure as="nav" className="absolute top-0 left-0 w-full z-10">
            {({ open }) => (
                <div className={classNames(open ? "bg-white shadow-lg rounded-md" : "", "px-6 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10")}>
                    <div className="max-w-5xl mx-auto">
                        <div
                            className={classNames(
                                "flex items-center justify-end sm:justify-center lg:justify-end",
                                asPath !== "/" ? "justify-between sm:justify-between lg:justify-between" : ""
                            )}
                        >
                            {asPath !== "/" ? (
                                <button onClick={back} className={classNames("inline-flex justify-center items-center p-2 rounded-md", focusRingClasses)}>
                                    <ArrowLeftIcon aria-hidden="true" className="h-6 w-6 text-gray-400" />
                                    <span className="sr-only sm:not-sr-only	sm:ml-2 text-gray-700 transition duration-200 ease-in-out text-gray-400">
                                        Go back
                                    </span>
                                </button>
                            ) : null}
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-8">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className={classNames("sm:text-xl", asPath === route.href ? "text-gray-600" : "")}
                                        >
                                            {route.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="-mr-2 flex sm:hidden">
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
                        <Disclosure.Panel static className="sm:hidden">
                            <div className="pt-6 pb-2 flex flex-col space-y-2">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className={classNames(
                                            "no-underline text-center text-gray-400 text-white block px-3 py-2 rounded-md text-base font-medium",
                                            asPath === route.href ? "bg-gray-100 text-gray-500 shadow-inner" : "ring-1 ring-gray-200"
                                        )}
                                    >
                                        {route.title}
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    );
}

export default Navbar;
