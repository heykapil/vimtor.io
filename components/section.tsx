import { ReactNode } from "react";
import { classNames } from "../utils/style";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section className={className} id={id}>
            {children}
        </section>
    );
};

Section.Title = function SectionTitle({ children, className }: SectionProps) {
    return <h2 className={classNames("mb-4 text-3xl sm:text-4xl font-extrabold", className)}>{children}</h2>;
};

Section.Subtitle = function SectionSubtitle({ children, className }: SectionProps) {
    return <p className={classNames("mb-6 sm:mb-12 text-xl sm:text-2xl px-8", className)}>{children}</p>;
};

Section.CTO = function SectionCTO({ children, className }: SectionProps) {
    return <p className={classNames("text-lg sm:text-xl mt-0 sm:mt-8 mb-0 mx-auto max-w-[550px] px-0 py-8", className)}>{children}</p>;
};

export default Section;
