import NextLink from "next/link";
import { ReactNode } from "react";

export interface LinkProps {
    href: string;
    className?: string;
    children: ReactNode;
}

const Link = ({ href, className, children }: LinkProps) => {
    return (
        <NextLink href={href}>
            <a
                className={`transition duration-200 ease-in-out text-gray-400 outline-none rounded-lg focus:ring-2 focus:ring-gray-900 inline-block underline hover:text-gray-800 ${className}`}
            >
                {children}
            </a>
        </NextLink>
    );
};

export default Link;
