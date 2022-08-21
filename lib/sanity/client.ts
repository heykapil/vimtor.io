import { ClientConfig, createClient, createImageUrlBuilder, createPreviewSubscriptionHook } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Image } from "../types";

export const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (image: Image) => createImageUrlBuilder(config).image(image as SanityImageSource);

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview?: boolean) => (usePreview ? previewClient : sanityClient);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export function filterDataToSingleItem(data: any, preview?: boolean) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}
