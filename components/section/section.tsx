import { ComponentPropsWithoutRef } from "react";
import { classNames } from "../../utils/style";

function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
    return <section className={classNames("text-center mt-24 sm:mt-32", className)} {...props} />;
}

export default Section;
