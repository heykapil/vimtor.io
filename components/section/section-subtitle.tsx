import { classNames } from "../../lib/style";
import { ComponentPropsWithoutRef } from "react";

function SectionSubtitle({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={classNames("mb-6 sm:mb-12 text-xl sm:text-2xl px-8", className)} {...props} />;
}

export default SectionSubtitle;
