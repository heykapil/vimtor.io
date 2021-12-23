import { classNames } from "../../utils/style";
import { ComponentPropsWithoutRef } from "react";

function SectionCTO({ className, ...props }: ComponentPropsWithoutRef<"p">) {
    return <p className={classNames("text-lg sm:text-xl mt-0 sm:mt-8 mb-0 mx-auto max-w-[550px] px-0 py-8", className)} {...props} />;
}

export default SectionCTO;
