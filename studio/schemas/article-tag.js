export default {
    name: "articleTag",
    title: "Article Tag",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
    ],
    preview: {
        select: {
            title: "name",
        },
    },
};
