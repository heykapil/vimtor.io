import { withOGImage } from "next-api-og-image";

export default withOGImage<"query", "title" | "images">({
  strategy: "query",
  type: "jpeg",
  quality: 90,
  width: 1200,
  height: 630,
  template: {
    html: ({ title, images }) => `
          <html>
            <head>
              <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap" rel="stylesheet" >
            </head>
            <body style="font-family: 'Nunito', sans-serif;">
              <div class="flex flex-col items-center justify-center text-center bg-white pb-6" style="width: 1200px; height: 630px;">
                <div class="flex items-center gap-x-12">
                  ${images
                    .split("$$$$")
                    .map(decodeURIComponent)
                    .map(decodeURIComponent)
                    .map((url) => `<img width="196" height="196" src="${url}" alt="" />`)
                    .join(`<div class="text-6xl text-gray-400">+</div>`)}
                </div>  
                <h1 style="max-width: 80%" class="flex mt-14 flex-row text-6xl font-extrabold text-gray-800">${title}</h1>
                <p class="text-4xl text-gray-600 mt-6">by Victor Navarro</p>
              </div>
            </body>
          </html>
        `,
  },
});
