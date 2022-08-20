import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "../../lib/style";

interface NavbarItemProps {
  children: string;
  href: string;
}

function NavbarItem({ children, href }: NavbarItemProps) {
  const { pathname } = useRouter();

  const active = pathname === href;

  return (
    <Link href={href} passHref>
      <a className="block outline-none ring-gray-800 rounded-md ring-offset-2 focus:ring-2">
        <Disclosure.Button
          as="span"
          className={classNames(
            "text-center text-lg border block p-3 rounded-md text-base font-medium",
            active ? "border-gray-800 bg-gray-800 text-white" : "border-gray-300 shadow-inner text-gray-400"
          )}
        >
          {children}
        </Disclosure.Button>
      </a>
    </Link>
  );
}

function MobileNavbar() {
  return (
    <Disclosure.Panel className="sm:hidden absolute bg-white shadow-md w-full">
      <div className="px-3 pt-2 pb-5 space-y-3">
        <NavbarItem href="/projects">Projects</NavbarItem>
        <NavbarItem href="/blog">Articles</NavbarItem>
        <NavbarItem href="/technologies">Technologies</NavbarItem>
        <NavbarItem href="/resume">Resume</NavbarItem>
        <NavbarItem href="/contact">Contact</NavbarItem>
      </div>
    </Disclosure.Panel>
  );
}

export default MobileNavbar;
