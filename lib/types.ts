export type Slug = string;

export type RichText = Record<any, any>;

export interface JobExperience {
    jobTitle: string;
    employmentType: string;
    startedOn: Date;
    endedOn: Date;
    currentlyWorking: boolean;
    projectName: string;
}

export interface Education {
    title: string;
    schoolName: string;
    schoolUrl: string;
    startedOn: Date;
    endedOn: Date;
}

export interface ProjectTag {
    slug: string;
    name: string;
}

export interface Project {
    name: string;
    summary: RichText;
    banner: string;
    demoUrl: string;
    ctaMessage: string;
    gitHubRepositoryUrl: string;
    tags: Array<Slug>;
}

export interface Technology {
    slug: string;
    name: string;
    icon: string;
}

export interface TechnologyLevel {
    name: string;
    description: string;
    technologies: Array<Technology>;
}

export interface HomePage {
    projects: Array<Project>;
}

export interface TechnologiesPage {
    levels: Array<TechnologyLevel>;
}

export interface ResumePage {
    location: string;
    email: string;
    experience: Array<JobExperience>;
    education: Array<Education>;
}

export interface ProjectsPage {
    projects: Array<Project>;
    tags: Array<ProjectTag>;
}
