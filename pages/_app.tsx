import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden subpixel-antialiased">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
