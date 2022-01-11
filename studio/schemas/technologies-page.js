import React from "react";

export default {
    name: "technologiesPage",
    title: "Technologies Page",
    type: "document",
    fields: [
        {
            name: "levels",
            title: "Levels",
            type: "array",
            of: [
                {
                    type: "object",
                    name: "level",
                    fields: [
                        {
                            name: "name",
                            title: "Name",
                            type: "string",
                        },
                        {
                            name: "description",
                            title: "Description",
                            type: "string",
                        },
                        {
                            name: "technologies",
                            title: "Technologies",
                            type: "array",
                            of: [{ type: "reference", to: { type: "technology" } }],
                        },
                    ],
                },
            ],
        },
    ],
};
