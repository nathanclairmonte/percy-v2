/* Same as MainLayout, but without NavBar */

import Head from "next/head";
import { useRouter } from "next/router";
import { CountdownFooter } from "@/components/list";

const NoNavbarLayout = ({ children, ...customMeta }) => {
    const router = useRouter();

    const meta = {
        title: "Nathan Clairmonte",
        description: `Full-stack developer, Machine Learning Engineer, Data Scientist.`,
        image: "/avatar.png", // remember to add our own here
        type: "website",
        ...customMeta,
    };

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://www.nathanclairmonte.dev${router.asPath}`}
                />
                <link rel="canonical" href={`https://www.nathanclairmonte.dev${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Nathan Clairmonte" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@cIairmonte" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && <meta property="article:published_time" content={meta.date} />}
            </Head>
            <main className="flex h-screen w-full flex-col justify-between bg-black pt-20">
                <div className="h-full">{children}</div>
                <CountdownFooter className="w-full self-end" />
            </main>
        </div>
    );
};

export default NoNavbarLayout;
