import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./block-content";
import technology from "./technology";
import technologiesPage from "./technologies-page";
import homePage from "./home-page";
import project from "./project";
import projectType from "./project-type";
import resumePage from "./resume-page";
import education from "./education";
import simpleRichText from "./simple-rich-text";
import jobExperience from "./job-experience";
import privacyPolicy from "./privacy-policy";
import richText from "./rich-text";
import article from "./article";
import articleTag from "./article-tag";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        simpleRichText,
        richText,
        resumePage,
        education,
        jobExperience,
        technologiesPage,
        projectType,
        homePage,
        technology,
        project,
        privacyPolicy,
        blockContent,
        articleTag,
        article,
    ]),
});
