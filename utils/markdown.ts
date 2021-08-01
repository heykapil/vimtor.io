import fs from "fs";
import path from "path";
import marked from "marked";
import matter from "gray-matter";
import { Project } from "./types";

export const getProjects = async (): Promise<Project[]> => {
    const files = fs.readdirSync(path.join("./content/projects"));
    const projects = files.map((filename) => {
        const markdown = fs.readFileSync(path.join("./content/projects", filename), "utf-8");
        const { data, content } = matter(markdown);

        return {
            title: data.title,
            image: `/images/${data.image}`,
            labels: data.labels,
            message: data.message,
            order: data.order,
            source: data.source,
            content: marked(content),
        };
    });

    return projects.sort((a, b) => a.order - b.order);
};
