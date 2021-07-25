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
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;