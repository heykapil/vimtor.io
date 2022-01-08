export default {
    name: "technology",
    title: "Technology",
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
        {
            name: "icon",
            title: "Icon",
            type: "image",
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "icon",
        },
    },
};
