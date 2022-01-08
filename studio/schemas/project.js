import UrlInput from "../components/url-input";

export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "banner",
            title: "Banner",
            type: "image",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "technology" } }],
        },
        {
            name: "startedAt",
            title: "Started At",
            type: "date",
        },
        {
            name: "endedAt",
            title: "Ended At",
            type: "date",
        },
        {
            name: "ctaMessage",
            title: "CTA Message",
            type: "string",
        },
        {
            name: "demoUrl",
            title: "Demo URL",
            type: "url",
        },
        {
            name: "gitHubRepositoryUrl",
            title: "GitHub Repository URL",
            type: "url",
            inputComponent: UrlInput,
            options: {
                baseUrl: 'https://github.com/'
            }
        },
        {
            name: "summary",
            title: "Summary",
            type: "blockContent",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "reference",
            to: { type: "projectType" },
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "banner",
        },
    },
};
