import Emoji from "../../components/emoji";
import ProjectList from "../../components/project-list";
import { useEffect, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import TagFilters from "../../components/tag-filters";
import EmptyMessage from "../../components/empty-message";
import { useQueryArrayState } from "../../hooks/use-query-state";
import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import { ProjectsPage } from "../../lib/types";
import { getProjectsPage } from "../../lib/sanity/api";

const projects = [
    {
        banner: {
            _ref: "image-5357af298719a136c29c4438100aa48898adc216-1080x720-jpg",
            _type: "reference",
        },
        ctaMessage: "Work with us",
        demoUrl: "https://mankind.technology/",
        gitHubRepositoryUrl: null,
        name: "Mankind Technologies",
        summary: [
            {
                _key: "16dba69856e6",
                _type: "block",
                children: [
                    {
                        _key: "f0ce46fcc8ad",
                        _type: "span",
                        marks: [],
                        text: "Counsulting firm based in Barcelona that gives a friendly boost for companies. I am currently working here as a technnical lead with a lovely development team",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: ["next-js"],
    },
    {
        banner: {
            _ref: "image-277bc65c861bd0440d3b27fa394ac80ca376799d-1419x839-png",
            _type: "reference",
        },
        ctaMessage: "Start prospecting",
        demoUrl: "https://bloobirds.com",
        gitHubRepositoryUrl: null,
        name: "Bloobirds",
        summary: [
            {
                _key: "5de3b6dd8492",
                _type: "block",
                children: [
                    {
                        _key: "62ac5b5ae264",
                        _type: "span",
                        marks: [],
                        text: "The best B2B prospecting app. Here I learned how nurturing can be to work with other people and how to manage complexity in React.js and Java projects",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: [
            "mongodb",
            "kubernetes",
            "node-js",
            "reactjs",
            "postgresql",
            "web-app",
            "elasticsearch",
            "cypress",
            "spring",
            "java",
            "aws",
            "typescript",
            "docker",
        ],
    },
    {
        banner: {
            _ref: "image-fad803e79b69561144febc5130e6682c630794bb-1544x830-jpg",
            _type: "reference",
        },
        ctaMessage: "Join the master",
        demoUrl: "https://nuclio.school",
        gitHubRepositoryUrl: null,
        name: "Nuclio Digital School",
        summary: [
            {
                _key: "a90586df61d9",
                _type: "block",
                children: [
                    {
                        _key: "81033ec788d6",
                        _type: "span",
                        marks: [],
                        text: "Teacher of full-stack development master on this awesome digital school located in Barcelona",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: ["mongodb", "node-js", "reactjs", "express-js", "docker"],
    },
    {
        banner: {
            _ref: "image-eaec61368f59901ca98033a33cc01f59deb0158b-1721x1248-png",
            _type: "reference",
        },
        ctaMessage: "Rejuvenate your roof",
        demoUrl: "https://roofmaxx.com/",
        gitHubRepositoryUrl: null,
        name: "Roof Maxx",
        summary: [
            {
                _key: "aa1c15b691f1",
                _type: "block",
                children: [
                    {
                        _key: "00c260bda818",
                        _type: "span",
                        marks: [],
                        text: "Optimisation of form submissions and user experience for multiple complex forms that Roof Maxx uses to increase sales. Using React and Cypress to ensure maximum quality while improving conversion rates",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: ["landing-page", "reactjs", "cypress", "tailwind-css", "typescript"],
    },
    {
        banner: {
            _ref: "image-3e2049c4d7ab189e786e1510ed54314ebe74f127-1085x724-png",
            _type: "reference",
        },
        ctaMessage: "Start being productive",
        demoUrl: "https://play.google.com/store/apps/details?id=com.pocket.todo",
        gitHubRepositoryUrl: null,
        name: "Pocket Todo",
        summary: [
            {
                _key: "2ff8d08014e4",
                _type: "block",
                children: [
                    {
                        _key: "7a5d0f336275",
                        _type: "span",
                        marks: [],
                        text: "To-do list app that actually makes you productive. Built with my lovely startup using technologies like React, Capacitor and Firebase. It was built between 3 people, were I took part a CTO and project manager",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: ["reactjs", "capacitor", "firebase", "typescript", "mobile-app"],
    },
    {
        banner: {
            _ref: "image-2c2a317a3cdb80b0879e8952cd574c545e99c66a-1074x695-jpg",
            _type: "reference",
        },
        ctaMessage: "Buy the game",
        demoUrl: "https://atomo-games.com/en/nuestros-juegos/59-10-nights.html",
        gitHubRepositoryUrl: null,
        name: "10 Nights",
        summary: [
            {
                _key: "53691de15a30",
                _type: "block",
                children: [
                    {
                        _key: "c4e19904ea49",
                        _type: "span",
                        marks: [],
                        text: "Mystery board game with ",
                    },
                    {
                        _key: "8b955e8bcba1",
                        _type: "span",
                        marks: ["48d5ef6f7b22"],
                        text: "mobile app",
                    },
                    {
                        _key: "0bf1316ac86a",
                        _type: "span",
                        marks: [],
                        text: " to have fun with friends and family. ",
                    },
                    {
                        _key: "eea1062b7350",
                        _type: "span",
                        marks: ["1142c26a7675"],
                        text: "It won a 2nd place at DAU",
                    },
                    {
                        _key: "77a1259c7cad",
                        _type: "span",
                        marks: [],
                        text: " and traveled all the way to France's ",
                    },
                    {
                        _key: "fde42cda4cfa",
                        _type: "span",
                        marks: ["bb7b6e34d745"],
                        text: "Cannes International Festival of Jeux",
                    },
                ],
                markDefs: [
                    {
                        _key: "48d5ef6f7b22",
                        _type: "link",
                        href: "https://play.google.com/store/apps/details?id=com.atomogames.tennights",
                    },
                    {
                        _key: "1142c26a7675",
                        _type: "link",
                        href: "https://www.verkami.com/games-contest-2020",
                    },
                    {
                        _key: "bb7b6e34d745",
                        _type: "link",
                        href: "https://www.festivaldesjeux-cannes.com/en/",
                    },
                ],
                style: "normal",
            },
        ],
        tags: ["reactjs", "capacitor", "firebase", "typescript", "mobile-app"],
    },
    {
        banner: {
            _ref: "image-89e4c5e0390dd5e915d7b145adee1ef6ed38db5f-1024x545-jpg",
            _type: "reference",
        },
        ctaMessage: "Help the organization",
        demoUrl: "https://ihr.world/",
        gitHubRepositoryUrl: null,
        name: "IHR World",
        summary: [
            {
                _key: "fcdd8413bce7",
                _type: "block",
                children: [
                    {
                        _key: "fcddca06c51d",
                        _type: "span",
                        marks: [],
                        text: "Backend developer for NGO organisation dedicated Spanish civil war documentation. I improved the search experience for their huge dataset.",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: ["landing-page", "postgresql", "elasticsearch", "spring", "java"],
    },
    {
        banner: {
            _ref: "image-906830a763823ff273e77eb8ca62f93698fa7857-1844x1068-png",
            _type: "reference",
        },
        ctaMessage: "Tomato or potato?",
        demoUrl: "https://tomacons.cat/",
        gitHubRepositoryUrl: null,
        name: "Tomacons",
        summary: [
            {
                _key: "e70c0c7b0a7d",
                _type: "block",
                children: [
                    {
                        _key: "b519f5fc16b6",
                        _type: "span",
                        marks: [],
                        text: "Website and packaging design for the most delicious tomato producer in Catalonia",
                    },
                ],
                markDefs: [],
                style: "normal",
            },
        ],
        tags: ["landing-page", "vue-js"],
    },
];

export default function Projects({ tags = [] }: ProjectsPage) {
    const [emptyListCount, setEmptyListCount] = useState(0);
    const [selectedTags, setSelectedTags] = useQueryArrayState("tags");

    const visibleProjects = useMemo(() => {
        return projects.filter((project) => {
            return selectedTags.every((slug) => project.tags.includes(slug));
        });
    }, [selectedTags, projects]);

    useEffect(() => {
        if (visibleProjects.length === 0) {
            setEmptyListCount((c) => c + 1);
        }
    }, [visibleProjects]);

    return (
        <Page title="Projects" description="List of projects made by Victor Navarro">
            <PageTitle>
                All my projects <Emoji label="rocket" icon="🚀" reset={false} animation="rocket" />
            </PageTitle>
            <PageSubtitle>A list of projects I worked on that are worth mentioning</PageSubtitle>
            <TagFilters value={selectedTags} labels={tags} onChange={setSelectedTags} />
            {visibleProjects.length !== 0 ? (
                <ProjectList projects={visibleProjects} />
            ) : (
                <EmptyMessage shownCount={emptyListCount} />
            )}
        </Page>
    );
}

export const getStaticProps: GetStaticProps<ProjectsPage> = async () => {
    return {
        // props: await getProjectsPage(),
        props: {},
    };
};
