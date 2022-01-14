import { ComponentPropsWithoutRef } from "react";
import { classNames } from "../../lib/style";

function PageTitle({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
    return <h1 className={classNames("mb-4 text-3xl sm:text-4xl font-extrabold text-center", className)} {...props} />;
}

export default PageTitle;
