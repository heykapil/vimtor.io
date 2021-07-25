import Emoji from "../components/emoji";
import ProjectList from "../components/project-list";
import { useEffect, useState } from "react";
import { Project } from "../utils/types";
import { useCounter, useSet } from "react-use";
import { GetStaticProps } from "next";
import { getProjects } from "../utils/markdown";
import Layout from "../components/layout";

const INTERESTING_URL = "https://www.youtube.com/watch?v=4dC_nRYIDZU";

const MESSAGES = [
  () => <p>Oops, seems like you want me to work a bit too much <Emoji label="flushed face" icon="😳" /></p>,
  () => <p>I haven't build that yet <Emoji label="smiling face with sunglasses" icon="😎" /></p>,
  () => <p>Are you that interested?<br />We can <a href="/#contact">build that together</a></p>,
  () => <p>We can get married if you insist <Emoji label="wedding ring" icon="💍" /></p>,
  () => <p>I'm sure you have better things to do...</p>,
  () => <p>I leave you with something interesting to watch.<br />Sayonara baby!</p>
];

interface EmptyMessageProps {
  shownCount: number;
}

const EmptyMessage =  ({ shownCount }: EmptyMessageProps) => {
    const Component = MESSAGES[shownCount % MESSAGES.length];
    return <Component />;
}

interface ProjectProps {
  allProjects: Project[];
  labels: string[];
}

const Projects = ({ allProjects, labels }: ProjectProps) => {
  const [emptyMessageIndex, {inc: incrementMessageIndex}] = useCounter(0)
  const [selectedLabels, {toggle: selectLabel}] = useSet()
  const [projects, setProjects] = useState(allProjects)

  useEffect(() => {
    const filteredProjects = allProjects.filter(project => {
      // @ts-ignore
      return [...selectedLabels].every(label => project.labels.includes(label));
    });
    if (filteredProjects.length === 0) {
      incrementMessageIndex()
    }
    setProjects(filteredProjects)
  }, [selectedLabels])

  useEffect(() => {
    if (emptyMessageIndex === (MESSAGES.length - 1)) {
      setTimeout(() => window.open(INTERESTING_URL), 3000);
    }
  }, [emptyMessageIndex])

  return (
    <Layout title="Projects by Victor Navarro" description="List of projects made by Victor Navarro">
      <header className="projects-header">
        <div>
          <h1 className="projects-title">All my projects <Emoji label="rocket" icon="🚀" /></h1>
          <p className="projects-subtitle">A list of projects I worked on that are worth mentioning</p>
        </div>
        <ul className="label-list scroll-shadow" aria-label="projects filter" role="menu">
          {labels.map(label => (
            <li key={label} onClick={() => selectLabel(label)} role="menuitemcheckbox" tabIndex={0} className={`label-item ${selectedLabels.has(label) ? "selected" : ""}`}>
              {label}
            </li>
          ))}
        </ul>
      </header>
      {projects.length !== 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <EmptyMessage shownCount={emptyMessageIndex} />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const projects = await getProjects();
  // @ts-ignore
  const labels = [...new Set(projects.flatMap(project => project.labels))];
  return {
    props: {
      allProjects: projects,
      labels,
    }
  };
};


export default Projects;