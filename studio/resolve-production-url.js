const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

const remoteUrl = `https://www.vimtor.io`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
    const baseUrl = window.location.hostname === "localhost" ? localUrl : remoteUrl;

    const previewUrl = new URL(baseUrl);
    previewUrl.pathname = `/api/enter-preview`;
    previewUrl.searchParams.append(`secret`, previewSecret);
    previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

    return previewUrl.toString();
}
