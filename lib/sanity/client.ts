import { ClientConfig, createClient, createImageUrlBuilder, createPortableTextComponent } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const config: ClientConfig = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    apiVersion: "2021-03-25",
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

export const PortableText = createPortableTextComponent({
    ...config,
    serializers: {},
});

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient);
