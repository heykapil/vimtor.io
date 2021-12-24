import { getSdk } from "./schema";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_CONTENT_API as string);
const graphCms = getSdk(client);

export default graphCms;
