import { Transition } from "@headlessui/react";
import Link from "next/link";
import Button from "../button";
import { useRouter } from "next/router";
import { classNames } from "../../lib/style";

interface NavbarItemProps {
    href: string;
    children: string;
}

function NavbarItem({ href, children }: NavbarItemProps) {
    const { pathname } = useRouter();

    const active = pathname === href;

    return (
        <Transition.Child enter="transition delay-500 duration-700 ease-in-out" enterFrom="opacity-0 translate-y-2" enterTo="opacity-100 translate-y-0">
            <Link href={href} passHref>
                <a className={classNames("transition-color text-lg hover:text-gray-900 relative group", active ? "text-gray-900" : "text-gray-400")}>
                    {children}
                    <span
                        className={classNames(
                            "absolute left-0 -bottom-2 transition-all group-hover:w-full group-hover:opacity-100 bg-gray-600 h-0.5 duration-300",
                            active ? "w-full opacity-100" : "w-0 opacity-0"
                        )}
                    />
                </a>
            </Link>
        </Transition.Child>
    );
}

function DesktopNavbar() {
    return (
        <div className="flex items-center">
            <div className="hidden sm:block">
                <Transition appear show className="flex items-baseline space-x-8">
                    <NavbarItem href="/projects">Projects</NavbarItem>
                    <NavbarItem href="/technologies">Technologies</NavbarItem>
                    <NavbarItem href="/resume">Resume</NavbarItem>
                    <Transition.Child enter="transition delay-700 duration-700 ease-elastic" enterFrom="opacity-0 scale-75" enterTo="opacity-100 scale-100">
                        <Link href="/contact" passHref>
                            <Button variant="primary" size="small">
                                Contact
                            </Button>
                        </Link>
                    </Transition.Child>
                </Transition>
            </div>
        </div>
    );
}

export default DesktopNavbar;
