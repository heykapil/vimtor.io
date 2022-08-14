export default {
    name: "article",
    title: "Article",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "articleTag" }],
                },
            ],
        },
        {
            name: "publishedAt",
            title: "Published At",
            type: "date",
        },
        {
            name: "content",
            title: "Content",
            type: "richText",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "content",
        },
    },
};
