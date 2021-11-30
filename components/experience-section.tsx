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
        <Section className="text-center mt-24 sm:mt-32">
            <Section.Title>
                Experience <Emoji label="rocket" icon="🚀" animation="rocket" reset={false} />
            </Section.Title>
            <Section.Subtitle>Some of the things I&apos;ve built</Section.Subtitle>
            <ProjectList projects={projects} />
            <Section.CTO>
                Feel free to see{" "}
                <Link href="/projects">
                    <a className="transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800 cursor-pointer">
                        all of my projects
                    </a>
                </Link>
            </Section.CTO>
        </Section>
    );
};

export default ExperienceSection;
