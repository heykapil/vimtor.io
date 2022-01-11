import UrlInput from "../components/url-input";

export default {
    name: "project",
    title: "Project",
    type: "document",
    fieldsets: [
        {
            name: "details",
            title: "Project Details",
            options: {
                collapsible: true,
            },
        },
        {
            name: "links",
            title: "Links & Sources",
            options: {
                collapsible: true,
            },
        },
    ],
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "summary",
            title: "Summary",
            type: "simpleRichText",
        },
        {
            name: "ctaMessage",
            title: "CTA Message",
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
            fieldset: "details",
            of: [{ type: "reference", to: { type: "technology" } }],
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "reference",
            fieldset: "details",
            to: { type: "projectType" },
        },
        {
            name: "demoUrl",
            title: "Demo URL",
            type: "url",
            fieldset: "links",
        },
        {
            name: "gitHubRepositoryUrl",
            title: "GitHub Repository URL",
            type: "url",
            fieldset: "links",
            inputComponent: UrlInput,
            options: {
                baseUrl: "https://github.com/",
            },
        },
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "summary",
            media: "banner",
        },
        prepare(value) {
            const block = (value.subtitle || []).find((block) => block._type === "block");
            return {
                title: value.title,
                media: value.media,
                subtitle: block
                    ? block.children
                          .filter((child) => child._type === "span")
                          .map((span) => span.text)
                          .join("")
                          .split(". ")[0]
                    : undefined,
            };
        },
    },
};
