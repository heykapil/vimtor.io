import { classNames } from "../../utils/style";
import { ComponentPropsWithoutRef } from "react";

function SectionTitle({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
    return <h2 className={classNames("mb-4 text-3xl sm:text-4xl font-extrabold", className)} {...props} />;
}

export default SectionTitle;
