import Emoji from "./emoji";
import Section from "./section/section";
import SectionTitle from "./section/section-title";
import SectionSubtitle from "./section/section-subtitle";
import ProjectList from "./projects/project-list";
import ProjectItem from "./projects/project-item";
import SectionCTO from "./section/section-cta";
import { Project } from "../lib/types";
import Link from "./link";

interface ExperienceSectionProps {
    projects: Array<Project>;
}

function ExperienceSection({ projects }: ExperienceSectionProps) {
    return (
        <Section>
            <SectionTitle>
                Experience <Emoji label="rocket" icon="🚀" animation="rocket" reset={false} />
            </SectionTitle>
            <SectionSubtitle>Some of the things I&apos;ve built</SectionSubtitle>
            <ProjectList>
                {projects.map((project) => (
                    <ProjectItem key={project.name} {...project} />
                ))}
            </ProjectList>
            <SectionCTO>
                Feel free to see <Link href="/projects">all of my projects</Link>
            </SectionCTO>
        </Section>
    );
}

export default ExperienceSection;
