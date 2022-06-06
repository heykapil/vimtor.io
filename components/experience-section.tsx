import Emoji from "./emoji";
import ProfilePicture from "./profile-picture";
import FadeIn from "./fade-in";
import Section from "./section/section";
import SectionTitle from "./section/section-title";
import SectionSubtitle from "./section/section-subtitle";
import ProjectList from "./projects/project-list";
import ProjectItem from "./projects/project-item";
import SectionCTO from "./section/section-cta";
import Link from "next/link";
import { Project } from "../lib/types";

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
