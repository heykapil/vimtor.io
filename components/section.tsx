import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section className={`${className}`} id={id}>
            {children}
        </section>
    );
};

Section.Title = function SectionTitle({ children }: SectionProps) {
    return <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold">{children}</h2>;
};

Section.Subtitle = function SectionSubtitle({ children }: SectionProps) {
    return <p className="mb-6 sm:mb-12 text-xl sm:text-2xl">{children}</p>;
};

Section.CTO = function SectionCTO({ children }: SectionProps) {
    return <p className="text-lg sm:text-xl mt-0 sm:mt-8 mb-0 mx-auto max-w-[550px] px-0 py-8">{children}</p>;
};

export default Section;
