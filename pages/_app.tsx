import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="subpixel-antialiased text-gray-900">
            <div className="lg:grid lg:grid-rows-layout min-h-screen overflow-x-hidden">
                <Navbar />
                <main className="bg-white">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </div>
    );
}
export default MyApp;
