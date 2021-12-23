interface ProjectListProps {
    children: any;
}

function ProjectList({ children }: ProjectListProps) {
    return (
        <ul className="sm:grid s:grid-flow-row sm:auto-rows-fr sm:justify-center sm:gap-12 sm:min-h-[256px] 3xl:mx-auto 3xl:my-0 3xl:grid-cols-projects">
            {children}
        </ul>
    );
}

export default ProjectList;
