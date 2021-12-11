import NextLink from "next/link";
import { CSSProperties, ReactNode } from "react";
import { classNames } from "../utils/style";

export interface LinkProps {
    href: string;
    className?: string;
    children: ReactNode;
    style?: CSSProperties;
}

const Link = ({ href, className, style, children }: LinkProps) => {
    return (
        <NextLink href={href}>
            <a
                style={style}
                className={classNames(
                    "transition duration-200 ease-in-out text-gray-400 outline-none inline-block underline hover:text-gray-800 focus:text-gray-800",
                    className
                )}
            >
                {children}
            </a>
        </NextLink>
    );
};

export default Link;
