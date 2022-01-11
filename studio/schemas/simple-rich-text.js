export default {
    title: "Simple Rich Text",
    name: "simpleRichText",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [{ title: "Normal", value: "normal" }],
            lists: [],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                ],
                annotations: [
                    {
                        title: "URL",
                        name: "link",
                        type: "object",
                        fields: [
                            {
                                title: "URL",
                                name: "href",
                                type: "url",
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
