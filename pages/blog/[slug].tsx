import Emoji from "../../components/emoji";
import Page from "../../components/page/page";
import PageTitle from "../../components/page/page-title";
import PageSubtitle from "../../components/page/page-subtitle";
import { useEffect } from "react";
import { useForm } from "@formspree/react";
import { useRouter } from "next/router";

export default function Blog() {
    const { replace, prefetch, asPath } = useRouter();
    const [state, handleSubmit] = useForm("mayvqjpj");

    useEffect(() => {
        if (state.succeeded) {
            replace("/");
        } else {
            prefetch("/");
        }
    }, [prefetch, replace, state.succeeded]);

    return (
        <Page title="Blog Posts" description="List of my articles by date and category" className="min-h-[45vh] flex flex-col items-center justify-center">
            <PageTitle>Blog post not ready</PageTitle>
            <PageSubtitle>Submit your email so I can notify you&nbsp;when it&apos;s written</PageSubtitle>
            <form onSubmit={handleSubmit} className="flex justify-center rounded-md shadow-sm px-4">
                <input hidden name="path" value={asPath} />
                <div className="relative flex items-stretch focus-within:z-10">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        disabled={state.submitting}
                        className="sm:px-4 sm:py-3 focus:ring-gray-700 focus:border-gray-700 block w-full md:w-80 rounded-none rounded-l-md sm:text-xl border-gray-300"
                        placeholder="your@email.com"
                    />
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="-ml-px relative inline-flex flex-shrink-0 items-center space-x-2 px-4 py-2 border border-gray-300 sm:text-xl font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-700 focus:border-gray-700"
                >
                    <span>Notify me</span>
                </button>
            </form>
            <PageSubtitle className="!px-4 mt-12">
                I promise you I won&apos;t send anything else <Emoji label="handshake" icon="🤝" />
            </PageSubtitle>
        </Page>
    );
}
