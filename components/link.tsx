import NextLink from "next/link";
import { ComponentProps } from "react";
import { classNames } from "../lib/style";

export interface LinkProps extends ComponentProps<"a"> {
    href?: string;
}

function Link({ href, className, ...props }: LinkProps) {
    return (
        <NextLink href={href as string}>
            <a
                {...props}
                target={href && href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={classNames(
                    "transition duration-200 ease-in-out text-gray-400 outline-gray-800 underline hover:text-gray-800 focus:text-gray-800",
                    className
                )}
            />
        </NextLink>
    );
}

export default Link;
