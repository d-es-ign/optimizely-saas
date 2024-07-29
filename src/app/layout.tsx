import { type PropsWithChildren } from "react";
import type { Metadata } from "next";
import Script from "next/script";

// Components
import { MoseyBankHeader } from "@/components/header"; //TODO: REMOVE DEMO COMPONENT
import  { Footer } from "@/components/organisms/Footer/Footer"
import { ThemeProvider, Body } from "@/components/theme";
import Header from "../components/organisms/Header/index";

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
            className={`${figtree.className} tw-overflow-x-hidden bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white`}
          >
            <div className="flex min-h-screen flex-col justify-between">
              {/* TODO: Use data from Optimizely */}
              <Header/>
              {children}
              <Footer />
            </div>
          </Body>
        </ThemeProvider>
      </html>
    </>
  );
}
