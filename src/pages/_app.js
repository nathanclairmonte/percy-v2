import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-8DRPJ1KR4T"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8DRPJ1KR4T', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
            <ThemeProvider defaultTheme="light" attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
            <Analytics />
        </>
    );
}
