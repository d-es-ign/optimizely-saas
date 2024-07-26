import { type PropsWithChildren } from "react";
import type { Metadata } from "next";
import Script from "next/script";

// Components
import { MoseyBankHeader } from "@/components/header"; //TODO: REMOVE DEMO COMPONENT
import { MoseyBankFooter } from "@/components/footer"; //TODO: REMOVE DEMO COMPONENT
import { ThemeProvider, Body } from "@/components/theme";
import Header from "../components/organisms/Header/Header";
import headerData from "../utility/mocks/header.mocks";

// Styling
import { Figtree } from "next/font/google";
import "./global/index.scss";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "An Optimizely demo for Jotun colour picker tool",
  keywords: "Jotun, Colour picker, Optimizely",
  title: {
    default: "Jotun colour picker - An Optimizely Demo",
    template: "%s - An Optimizely Demo",
  },
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Script
        src="https://cdn.optimizely.com/js/30057130179.js"
        data-test="script"
      />
      <html lang="en">
        <ThemeProvider value={{ theme: "system" }}>
          <Body
            className={`${figtree.className} bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white`}
          >
            <div className="flex min-h-screen flex-col justify-between">
              {/* TODO: Use data from Optimizely */}
              <Header {...headerData} animation={true} />
              {/* {children} */}
              {/* <MoseyBankFooter /> */}
            </div>
          </Body>
        </ThemeProvider>
      </html>
    </>
  );
}
