import { classNames } from "../utils/style";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"a"> {
    variant: "primary" | "secondary";
    size: "small" | "medium";
}

function Button({ variant, size, className, ...props }: ButtonProps) {
    return (
        <a
            className={classNames(
                "inline-flex justify-center items-center border border-2 border-transparent shadow-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",
                variant === "primary"
                    ? "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-600"
                    : "text-gray-800 bg-white border-gray-800 hover:bg-gray-100 focus:ring-gray-600",
                size === "medium" ? "px-6 py-3 text-lg" : "",
                className
            )}
            {...props}
        />
    );
}

export default Button;