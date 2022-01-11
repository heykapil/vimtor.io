import SimpleDateInput from "../components/simple-date-input";

export default {
    name: "education",
    title: "Education",
    type: "document",
    fieldsets: [{ name: "school", title: "School", options: { columns: 2 } }],
    fields: [
        {
            name: "degree",
            title: "Degree",
            type: "string",
        },
        {
            name: "school",
            title: "School",
            type: "object",
            fields: [
                {
                    name: "name",
                    title: "Name",
                    type: "string",
                },
                {
                    name: "url",
                    title: "URL",
                    type: "url",
                },
                {
                    name: "logo",
                    title: "Logo",
                    type: "image",
                },
            ],
        },
        {
            name: "startedOn",
            title: "Started On",
            type: "date",
            inputComponent: SimpleDateInput,
        },
        {
            name: "endedOn",
            title: "Ended On",
            type: "date",
            inputComponent: SimpleDateInput,
        },
    ],
};
