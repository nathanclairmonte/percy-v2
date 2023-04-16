import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar, Footer } from "@/components/list";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children, ...customMeta }) => {
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
                <meta property="og:site_name" content="Manu Arora" />
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
            <main className="w-full bg-[#fffbf5] dark:bg-gray-800">
                <Navbar />
                <div>{children}</div>
                <Footer />
            </main>
        </div>
    );
};

export default MainLayout;
