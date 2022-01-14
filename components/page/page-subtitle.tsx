import { ComponentPropsWithoutRef } from "react";
import { classNames } from "../../lib/style";

function PageSubtitle({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={classNames("mb-6 sm:mb-12 text-xl sm:text-2xl px-8 text-center", className)} {...props} />;
}

export default PageSubtitle;
