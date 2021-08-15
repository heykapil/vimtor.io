import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getPlaiceholder } from "plaiceholder";
import { Project } from "./types";

export const getProjects = async (): Promise<Project[]> => {
    const files = fs.readdirSync(path.join("./content/projects"));
    const projects = await Promise.all(
        files.map(async (filename) => {
            const markdown = fs.readFileSync(path.join("./content/projects", filename), "utf-8");
            const { data, content } = matter(markdown);
            const { base64, img } = await getPlaiceholder(`/images/${data.image}`);

            return {
                title: data.title,
                image: img.src,
                blurDataURL: base64,
                labels: data.labels,
                message: data.message,
                order: data.order,
                source: data.source,
                content: content,
            };
        })
    );

    return projects.sort((a, b) => a.order - b.order);
};
