import { groq } from "next-sanity";

const projectQuery = groq`
    {
      name,
      summary,
      "banner": banner.asset,
      demoUrl,
      ctaMessage,
      gitHubRepositoryUrl,
      'tags': *[(_type == "technology" && _id in ^.technologies[]->._id) || (_type == "projectType" && _id == ^.projectType->._id)].slug.current
    }
`;

const technologyQuery = groq`
    {
      name,
      'slug': slug.current,
      'icon': icon.asset->.url
    }
`;

const jobExperienceQuery = groq`
    {
      jobTitle,
      jobDescription,
      employmentType,
      startedOn,
      endedOn,
      currentlyWorking,
      'projectName': relatedProject->.name,
      'projectUrl': relatedProject->.demoUrl,
      'technologies': relatedProject->.technologies[]->.name
    }
`;

const educationQuery = groq`
    {
      title,
      description,
      startedOn,
      endedOn,
      school{
        name,
        url
      }
    }
`;

const projectTagsQuery = groq`
    *[_type == "projectType" || _type == "technology"]{
      name,
      'slug': slug.current
    }
`;

export const resumePageQuery = groq`
    *[_type == "resumePage" && _id == "resumePage"][0] {
      location,
      email,
      'experience': experience[]->${jobExperienceQuery},
      'education': education[]->${educationQuery}
    }
`;

const projectsQuery = groq`
    *[_type == "project"]${projectQuery}
`;

export const technologiesPageQuery = groq`
    *[_type == "technologiesPage" && _id == "technologiesPage"][0]{
      'levels': levels[] {
        name,
        description,
        'technologies': technologies[]->${technologyQuery}
      }
    }
`;

export const homePageQuery = groq`
    *[_type == "homePage" && _id == "homePage"][0]{
      'projects': projects[]->${projectQuery}
    }
`;

export const projectsPageQuery = groq`
    {
        'projects': ${projectsQuery},
        'tags': ${projectTagsQuery}
    }
`;
