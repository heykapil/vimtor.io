import Link from "next/link";
import Emoji from "./emoji";
import Section from "./section/section";
import ProjectList from "./projects/project-list";
import { Project } from "../utils/types";
import ProjectItem from "./projects/project-item";
import SectionTitle from "./section/section-title";
import SectionSubtitle from "./section/section-subtitle";
import SectionCTO from "./section/section-cta";

interface ExperienceSectionProps {
    projects: Project[];
}

function ExperienceSection({ projects }: ExperienceSectionProps) {
    return (
        <Section className="opacity-0 motion-safe:animate-fade-in-down animation-delay-3000">
            <SectionTitle>
                Experience <Emoji label="rocket" icon="🚀" animation="rocket" reset={false} />
            </SectionTitle>
            <SectionSubtitle>Some of the things I&apos;ve built</SectionSubtitle>
            {/*<ProjectList>*/}
            {/*    {projects.map((project) => (*/}
            {/*        <ProjectItem key={project.title} project={project} />*/}
            {/*    ))}*/}
            {/*</ProjectList>*/}
            <SectionCTO>
                Feel free to see{" "}
                <Link href="/projects">
                    <a className="transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800 cursor-pointer">
                        all of my projects
                    </a>
                </Link>
            </SectionCTO>
        </Section>
    );
}

export default ExperienceSection;
