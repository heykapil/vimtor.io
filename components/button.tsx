import { classNames } from "../lib/style";
import { ComponentProps, forwardRef } from "react";

interface ButtonProps extends ComponentProps<"a"> {
    variant: "primary" | "secondary";
    size: "small" | "medium";
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(({ variant, size, className, ...props }, ref) => (
    <a
        {...props}
        ref={ref}
        className={classNames(
            "inline-flex justify-center items-center border-2 shadow-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2",
            variant === "primary"
                ? "text-white bg-gray-800 border-gray-800 hover:bg-gray-900 focus:ring-gray-600"
                : "text-gray-800 bg-white border-gray-800 hover:bg-gray-100 focus:ring-gray-600",
            size === "medium" ? "px-6 py-3 text-lg" : "text-lg px-6 py-2",
            className
        )}
    />
));

export default Button;
