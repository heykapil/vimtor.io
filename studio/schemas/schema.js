import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./block-content";
import technology from "./technology";
import technologiesPage from "./technologies-page";
import homePage from "./home-page";
import project from "./project";
import projectType from "./project-type";
import resume from "./resume-page";
import education from "./education";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        resume,
        education,
        technologiesPage,
        projectType,
        homePage,
        technology,
        project,
        blockContent,
    ]),
});
