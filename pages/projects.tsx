import Emoji from "../components/emoji";
import ProjectList from "../components/project-list";
import { useEffect, useState } from "react";
import { Project } from "../utils/types";
import { useCounter } from "react-use";
import { GetStaticProps } from "next";
import { getProjects } from "../utils/data";
import Layout from "../components/layout";
import Section from "../components/section";
import LabelFilters from "../components/label-filters";
import Link from "../components/link";

const INTERESTING_URL = "https://www.youtube.com/watch?v=4dC_nRYIDZU";

const MESSAGES = [
    () => (
        <p>
            Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
        </p>
    ),
    () => (
        <p>
            I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
        </p>
    ),
    () => (
        <p>
            Are you that interested?
            <br />
            We can <Link href="/#contact">build that together</Link>
        </p>
    ),
    () => (
        <p>
            We can get married if you insist <Emoji label="wedding ring" icon="💍" />
        </p>
    ),
    () => <p>I&apos;m sure you have better things to do...</p>,
    () => (
        <p>
            I leave you with something interesting to watch.
            <br />
            Sayonara baby!
        </p>
    ),
];

interface EmptyMessageProps {
    shownCount: number;
}

const EmptyMessage = ({ shownCount }: EmptyMessageProps) => {
    const Component = MESSAGES[shownCount % MESSAGES.length];
    return <Component />;
};

interface ProjectProps {
    allProjects: Project[];
    labels: string[];
}

const Projects = ({ allProjects, labels }: ProjectProps) => {
    const [emptyMessageIndex, { inc: incrementMessageIndex }] = useCounter(0);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
    const [projects, setProjects] = useState(allProjects);

    useEffect(() => {
        const filteredProjects = allProjects.filter((project) => {
            return selectedLabels.every((label) => project.labels.includes(label));
        });
        if (filteredProjects.length === 0) {
            incrementMessageIndex();
        }
        setProjects(filteredProjects);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedLabels]);

    useEffect(() => {
        if (emptyMessageIndex === MESSAGES.length - 1) {
            setTimeout(() => window.open(INTERESTING_URL), 3000);
        }
    }, [emptyMessageIndex]);

    return (
        <Layout title="Projects" description="List of projects made by Victor Navarro">
            <Section className="text-center mt-24 sm:mt-32">
                <Section.Title>
                    All my projects <Emoji label="rocket" icon="🚀" />
                </Section.Title>
                <Section.Subtitle>A list of projects I worked on that are worth mentioning</Section.Subtitle>
                <LabelFilters value={selectedLabels} onChange={setSelectedLabels} options={labels} />
                {projects.length !== 0 ? <ProjectList projects={projects} /> : <EmptyMessage shownCount={emptyMessageIndex} />}
            </Section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    // @ts-ignore
    const labels = [...new Set(projects.flatMap((project) => project.labels))];
    return {
        props: {
            allProjects: projects,
            labels,
        },
    };
};

export default Projects;
