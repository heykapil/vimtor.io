import Image from "next/image";
import { Project } from "../utils/types";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="project-list">
      {projects.map(project => (
        <li key={project.title} className="project-item">
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
            <a href={project.source}>{project.message}</a>
          </div>
          <a href={project.source} className="project-banner" aria-label={`${project.message} source`}>
            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;