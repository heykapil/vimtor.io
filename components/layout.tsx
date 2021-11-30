import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
    children: ReactNode;
    title: string;
    description: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
    return (
        <div className="subpixel-antialiased text-gray-900">
            <Head>
                <title>{title} | Victor Navarro</title>
                <meta name="description" content={description} />
            </Head>
            <div className="lg:grid lg:grid-rows-layout min-h-screen">
                <main className="bg-white">
                    <Navbar />
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
