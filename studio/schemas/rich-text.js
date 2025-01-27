import "ace-builds/src-noconflict/mode-sql";

export default {
    title: "Rich Text",
    name: "richText",
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [
                { title: "Title", value: "h2" },
                { title: "Normal", value: "normal" },
                { title: "Quote", value: "blockquote" },
            ],
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Numbered", value: "number" },
            ],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    { title: "Code", value: "code" },
                    { title: "Underline", value: "underline" },
                    { title: "Strike", value: "strike-through" },
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
                                validation: (Rule) =>
                                    Rule.uri({
                                        scheme: ["http", "https", "mailto", "tel"],
                                    }),
                            },
                        ],
                    },
                ],
            },
        },
        { title: "Image", type: "image" },
        {
            title: "Code",
            type: "code",
            options: {
                languageAlternatives: [
                    { title: "JavaScript", value: "js" },
                    { title: "TypeScript", value: "ts" },
                    { title: "CSS", value: "css" },
                    {
                        title: "SQL",
                        value: "sql",
                        mode: "sql",
                    },
                ],
            },
        },
    ],
};
