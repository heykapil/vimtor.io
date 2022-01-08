export default {
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        {
            name: "projects",
            title: "Projects",
            type: "array",
            of: [{ type: "reference", to: { type: "project" } }],
        },
    ],
};
