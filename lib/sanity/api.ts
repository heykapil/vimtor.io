import { HomePage, ProjectsPage, ResumePage, TechnologiesPage } from "../types";
import { getClient } from "./client";
import { homePageQuery, projectsPageQuery, resumePageQuery, technologiesPageQuery } from "./queries";

export async function getHomePage() {
    const client = getClient(false);
    return client.fetch<HomePage>(homePageQuery);
}

export async function getTechnologiesPage() {
    const client = getClient(false);
    return client.fetch<TechnologiesPage>(technologiesPageQuery);
}

export async function getResumePage() {
    const client = getClient(false);
    return client.fetch<ResumePage>(resumePageQuery);
}

export async function getProjectsPage() {
    const client = getClient(false);
    return client.fetch<ProjectsPage>(projectsPageQuery);
}
