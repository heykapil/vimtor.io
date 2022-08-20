export type Slug = string;

export type RichText = Record<any, any>;

export type Image = unknown;

export interface JobExperience {
    jobTitle: string;
    jobDescription: string;
    employmentType: string;
    startedOn: string;
    endedOn?: string;
    currentlyWorking: boolean;
    projectName: string;
    projectUrl: string;
    technologies: Array<string>;
}

export interface School {
    name: string;
    url: string;
}

export interface Education {
    title: string;
    description: string;
    startedOn: string;
    endedOn: string;
    school: School;
}

export interface ProjectTag {
    value: string;
    label: string;
}

export interface ArticleTag {
    value: string;
    label: string;
}

export interface Project {
    name: string;
    summary: RichText;
    banner: Image;
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

export interface Article {
    title: string;
    excerpt: string;
    slug: string;
    publishedAt: string;
    tags: Array<ArticleTag>;
    content: RichText;
}

export interface HomePage {
    projects: Array<Project>;
}

export interface BlogPage {
    articles: Array<Article>;
    tags: Array<ArticleTag>;
}

export interface PrivacyPolicy {
    content: RichText;
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
