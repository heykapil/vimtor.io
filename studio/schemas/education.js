export default {
    name: "education",
    title: "Education",
    type: "document",
    fieldsets: [
        {name: 'school', title: 'School'}
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "schoolName",
            title: "Name",
            type: "string",
            fieldset: 'school',
        },
        {
            name: "schoolUrl",
            title: "URL",
            type: "url",
            fieldset: 'school',
        }
    ],
};
