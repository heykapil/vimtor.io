import { withOGImage } from "next-api-og-image";

enum QueryParams {
  "title",
  "images",
}

export default withOGImage<"query", keyof typeof QueryParams>({
  strategy: "query",
  type: "jpeg",
  quality: 90,
  width: 1280,
  height: 720,
  template: {
    html: ({ title, images }) => `
          <html>
            <head>
              <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet" >
            </head>
            <body style="font-family: 'Nunito', sans-serif;">
              <div class="flex flex-col items-center justify-center text-center border-gray-800 pb-12" style="width: 1280px; height: 720px; border-width: 12px;">
                <div class="flex items-center gap-x-12">
                  ${images
                    .split("$$$$")
                    .map(decodeURIComponent)
                    .map(decodeURIComponent)
                    .map((url) => `<img width="196" height="196" src="${url}" alt="" />`)
                    .join(`<div class="text-6xl text-gray-400">+</div>`)}
                </div>  
                <h1 style="max-width: 70%" class="flex mt-12 flex-row text-6xl font-extrabold text-gray-800">${title}</h1>
                <p class="text-4xl text-gray-600 mt-6">by Victor Navarro</p>
              </div>
            </body>
          </html>
        `,
  },
});
