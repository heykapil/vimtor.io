import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={`home-section ${className}`} id={id}>
      {children}
    </section>
  );
};

Section.Title = function SectionTitle({ children }: SectionProps) {
  return <h2 className="home-title">{children}</h2>;
};

Section.Subtitle = function SectionSubtitle({ children }: SectionProps) {
  return <p className="home-subtitle">{children}</p>;
};

Section.CTO = function SectionCTO({ children }: SectionProps) {
  return <p className="section-cto">{children}</p>;
};

export default Section;
