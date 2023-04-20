import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { MainLayout, Hero, LatestRepos, CommitHistory } from "@/components/list";
import { getLatestRepos } from "@/utils/getLatestRepos";
import { myInfo } from "@/data/myInfo";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ repos }) {
    return (
        <>
            <Head>
                <title>Nathan Clairmonte</title>
                <meta name="description" content="Personal website. Made by Nathan Clairmonte" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout title="Nathan Clairmonte" description="My personal website">
                {/* <div style={{ height: "75vh" }}>Temp</div> */}
                <Hero />
                <LatestRepos repos={repos} />
                <CommitHistory />
            </MainLayout>
        </>
    );
}

export const getStaticProps = async () => {
    const repos = await getLatestRepos(myInfo, 10);

    return {
        props: {
            repos,
        },
    };
};
