import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

export interface Technology {
    name: string;
    slug: string;
}

export interface Project {
    title: string;
    source: string;
    content: Document;
    technologies: Array<Entry<Technology>>;
    order: number;
    banner: Asset;
    blurredBanner: string;
    githubRepositoryUrl: string;
    ctaMessage: string;
}
