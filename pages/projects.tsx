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
import { uniq } from "lodash";

interface EmptyMessageProps {
    shownCount: number;
}

const EmptyMessage = ({ shownCount }: EmptyMessageProps) => {
    useEffect(() => {
        if (shownCount === 5) {
            setTimeout(() => window.open("https://www.youtube.com/watch?v=4dC_nRYIDZU"), 3500);
        }
    }, [shownCount]);

    if (shownCount === 0) {
        return (
            <p>
                Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" />
            </p>
        );
    }

    if (shownCount === 1) {
        return (
            <p>
                I haven&apos;t build that yet <Emoji label="smiling face with sunglasses" icon="😎" />
            </p>
        );
    }

    if (shownCount === 2) {
        return (
            <p>
                Are you that interested?
                <br />
                We can <Link href="/#contact">build that together</Link>
            </p>
        );
    }

    if (shownCount === 3) {
        return (
            <p>
                We can get married if you insist <Emoji label="wedding ring" icon="💍" />
            </p>
        );
    }

    if (shownCount === 4) {
        return <p>I&apos;m sure you have better things to do...</p>;
    }

    return (
        <p>
            I leave you with something interesting to watch.
            <br />
            Sayonara baby!
        </p>
    );
};

interface ProjectProps {
    projects: Project[];
    labels: string[];
}

const Projects = ({ projects, labels }: ProjectProps) => {
    const [emptyMessageIndex, { inc: incrementMessageIndex }] = useCounter(0);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
    const [visibleProjects, setVisibleProjects] = useState(projects);

    useEffect(() => {
        const filteredProjects = projects.filter((project) => {
            return selectedLabels.every((label) => project.labels.includes(label));
        });
        if (filteredProjects.length === 0) {
            incrementMessageIndex();
        }
        setVisibleProjects(filteredProjects);
    }, [incrementMessageIndex, projects, selectedLabels]);

    return (
        <Layout title="Projects" description="List of projects made by Victor Navarro">
            <Section className="text-center mt-24 sm:mt-32">
                <Section.Title>
                    All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
                </Section.Title>
                <Section.Subtitle>A list of projects I worked on that are worth mentioning</Section.Subtitle>
                <LabelFilters value={selectedLabels} onChange={setSelectedLabels} options={labels} />
                {visibleProjects.length !== 0 ? <ProjectList projects={visibleProjects} /> : <EmptyMessage shownCount={emptyMessageIndex} />}
            </Section>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    const labels = uniq(projects.flatMap((project) => project.labels));
    return {
        props: {
            projects,
            labels,
        },
    };
};

export default Projects;
