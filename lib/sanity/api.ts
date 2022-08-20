import { BlogPage, HomePage, PrivacyPolicy, ProjectsPage, ResumePage, TechnologiesPage } from "../types";
import { getClient } from "./client";
import {
    blogPageQuery,
    homePageQuery,
    privacyPolicyQuery,
    projectsPageQuery,
    resumePageQuery,
    technologiesPageQuery,
} from "./queries";

export async function getHomePage() {
    const client = getClient(false);
    return client.fetch<HomePage>(homePageQuery);
}

export async function getBlogPage() {
    const client = getClient(false);
    return client.fetch<BlogPage>(blogPageQuery);
}

export async function getPrivacyPolicy() {
    const client = getClient(false);
    return client.fetch<PrivacyPolicy>(privacyPolicyQuery);
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
