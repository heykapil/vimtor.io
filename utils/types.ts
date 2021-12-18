import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

export interface Technology {
    name: string;
    slug: string;
}

export interface ProjectType {
    name: string;
    slug: string;
}

export interface Project {
    title: string;
    source: string;
    content: Document;
    technologies: Array<Entry<Technology>>;
    type: Entry<ProjectType>;
    order: number;
    banner: Asset;
    blurredBanner: string;
    githubRepositoryUrl: string;
    ctaMessage: string;
}
