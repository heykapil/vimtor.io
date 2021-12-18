import { Project, Technology } from "./types";
import { createClient } from "contentful";
import { getPlaiceholder } from "plaiceholder";

const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    space: process.env.CONTENTFUL_SPACE_ID as string,
});

interface GetContentOptions {
    limit?: number;
}

export const getProjects = async ({ limit }: GetContentOptions = {}): Promise<Array<Project>> => {
    const collection = await client.getEntries<Omit<Project, "blurredBanner">>({
        content_type: "project",
        order: "fields.order",
        limit,
    });

    return Promise.all(
        collection.items.map(async (item) => {
            const { base64 } = await getPlaiceholder("https:" + item.fields.banner.fields.file.url);
            return {
                ...item.fields,
                blurredBanner: base64,
            };
        })
    );
};

export const getTechnologies = async ({ limit }: GetContentOptions = {}): Promise<Array<Technology>> => {
    const collection = await client.getEntries<Technology>({ content_type: "technology", limit });
    return collection.items.map((item) => item.fields);
};

export const getProjectTypes = async ({ limit }: GetContentOptions = {}): Promise<Array<Technology>> => {
    const collection = await client.getEntries<Technology>({ content_type: "projectType", limit });
    return collection.items.map((item) => item.fields);
};
