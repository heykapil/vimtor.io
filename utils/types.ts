export interface Education {
    title: string;
    schoolName: string;
    startDate: Date;
    endDate: Date;
}

export interface ProjectType {
    slug: string;
    name: string;
}

export interface Project {
    slug: string;
    title: string;
    summary: string;
    banner: string;
    demoUrl: string;
    ctaMessage: string;
    gitHubRepositoryUrl: string;
    type: ProjectType;
    technologies: Array<string>;
    startDate: Date;
    endDate: Date;
    experienceDescription: string;
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
    experience: Array<Project>;
    educations: Array<Education>;
}
