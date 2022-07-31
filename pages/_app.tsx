import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

function handleExitComplete() {
    if (typeof window !== "undefined") {
        window.scrollTo({ top: 0 });
    }
}

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            <DefaultSeo
                titleTemplate="%s | Victor Navarro"
                defaultTitle="Victor Navarro"
                openGraph={{
                    type: "website",
                    locale: "en_US",
                    url: "https://vimtor.io/",
                    site_name: "Victor Navarro's Personal Website",
                }}
                twitter={{
                    handle: "@vimtor_",
                    site: "@vimtor_",
                }}
            />
            <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </AnimatePresence>
        </div>
    );
}
