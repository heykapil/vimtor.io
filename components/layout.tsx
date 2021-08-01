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
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <main className="bg-white">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
