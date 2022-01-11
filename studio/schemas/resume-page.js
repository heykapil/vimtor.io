export default {
    name: "resumePage",
    title: "Resume Page",
    type: "document",
    fieldsets: [
        {
            name: "contactInformation",
            title: "Contact Information",
            options: {
                columns: 2,
            },
        },
    ],
    fields: [
        {
            name: "location",
            title: "Location",
            type: "string",
            fieldset: "contactInformation",
            placeholder: "Barcelona, Spain",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            fieldset: "contactInformation",
            validation: (Rule) => {
                return Rule.required().email();
            },
        },
        {
            name: "experience",
            title: "Experience",
            type: "array",
            of: [{ type: "reference", to: { type: "jobExperience" } }],
        },
        {
            name: "education",
            title: "Education",
            type: "array",
            of: [{ type: "reference", to: { type: "education" } }],
        },
    ],
};
