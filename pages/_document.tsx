import Document, { Head, Html, Main, NextScript } from "next/document";
import * as snippet from "@segment/snippet";

class MyDocument extends Document {
    renderSnippet() {
        const options = {
            apiKey: process.env.ANALYTICS_WRITE_KEY,
            page: true,
        };

        if (process.env.NODE_ENV === "development") {
            return snippet.max(options);
        }

        return snippet.min(options);
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#cd9147" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="theme-color" content="#ffffff" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
                    <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
