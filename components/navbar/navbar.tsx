import { Disclosure, Transition } from "@headlessui/react";
import { classNames } from "../../utils/style";
import { useRouter } from "next/router";
import MobileNavbar from "./mobile-navbar";
import HamburgerButton from "./hamburger-button";
import HomeButton from "./home-button";
import DesktopNavbar from "./desktop-navbar";

function Navbar() {
    const { pathname } = useRouter();

    const isHome = pathname === "/";

    return (
        <Disclosure as="nav" className="relative z-10">
            {({ open }) => (
                <>
                    <div className={classNames("max-w-7xl mx-auto py-6 px-8", open ? "bg-white" : "")}>
                        <div className="grid grid-cols-2 items-center justify-between h-16">
                            <Transition
                                show={!isHome}
                                enter="transition-opacity duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                className="col-start-1"
                            >
                                <HomeButton />
                            </Transition>
                            <div className="hidden sm:block col-start-2">
                                <DesktopNavbar />
                            </div>
                            <div className="-mr-2 flex col-start-2 sm:hidden">
                                <HamburgerButton open={open} />
                            </div>
                        </div>
                    </div>
                    <MobileNavbar />
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
