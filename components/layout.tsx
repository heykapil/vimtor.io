import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./footer";

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
            <main className="bg-white mt-24 mb-16">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
