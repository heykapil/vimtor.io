import Link from "next/link";
import Emoji from "./emoji";
import Section from "./section";
import ProjectList from "./project-list";
import { Project } from "../utils/types";

interface ExperienceSectionProps {
  projects: Project[];
}

const ExperienceSection = ({ projects }: ExperienceSectionProps) => {
  return (
    <Section>
      <Section.Title>Experience <Emoji label="rocket" icon="🚀" /></Section.Title>
      <Section.Subtitle>Some of the things I've built</Section.Subtitle>
      <ProjectList projects={projects} />
      <Section.CTO>
        Feel free to see <Link href="/projects">all of my projects</Link>
      </Section.CTO>
    </Section>
  );
};

export default ExperienceSection;