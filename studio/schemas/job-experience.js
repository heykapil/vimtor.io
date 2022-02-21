import SimpleDateInput from "../components/simple-date-input";

export default {
    name: "jobExperience",
    title: "Job Experience",
    type: "document",
    fields: [
        {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
            options: {
                list: [
                    { title: "Team Lead", value: "Team Lead" },
                    { title: "Full Stack Developer", value: "Full Stack Developer" },
                    { title: "Backend Developer", value: "Backend Developer" },
                    { title: "Frontend Developer", value: "Frontend Developer" },
                    { title: "Teacher", value: "Teacher" },
                    { title: "Mobile App Developer", value: "Mobile App Developer" },
                ],
            },
        },
        {
            name: "employmentType",
            title: "Employment Type",
            type: "string",
            options: {
                list: [
                    { title: "Full-time", value: "Full-time" },
                    { title: "Part-time", value: "Part-time" },
                    { title: "Contract", value: "Contract" },
                    { title: "Internship", value: "Internship" },
                    { title: "Volunteer", value: "Volunteer" },
                    { title: "Freelance", value: "Freelance" },
                ],
            },
        },
        {
            name: "jobDescription",
            title: "Job Description",
            type: "text",
        },
        {
            name: "currentlyWorking",
            title: "Currently Working",
            type: "boolean",
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
            hidden: ({ parent }) => parent.currentlyWorking,
        },
        {
            name: "relatedProject",
            title: "Related Project",
            type: "reference",
            to: { type: "project" },
        },
    ],
    initialValue: {
        currentlyWorking: false,
    },
    preview: {
        select: {
            jobTitle: "jobTitle",
            employmentType: "employmentType",
            projectBanner: "relatedProject.banner",
            projectName: "relatedProject.name",
        },
        prepare(selection) {
            const { jobTitle, employmentType, projectBanner, projectName } = selection;
            return {
                title: jobTitle,
                subtitle: `${projectName} - ${employmentType}`,
                media: projectBanner,
            };
        },
    },
};
