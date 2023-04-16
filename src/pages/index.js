import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { MainLayout, Hero } from "@/components/list";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            </MainLayout>
        </>
    );
}
