import type { Metadata } from 'next';
import Script from 'next/script';
import { type PropsWithChildren } from 'react';

// Components
import { Footer } from '@/components/organisms/Footer/Footer';
import { Body, ThemeProvider } from '@/components/theme';
import Header from '../components/organisms/Header/index';

// Styling
import { Figtree } from 'next/font/google';
import Head from 'next/head';
import './global/index.scss';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'An Optimizely demo for Jotun colour picker tool',
  keywords: 'Jotun, Colour picker, Optimizely',
  title: {
    default: 'Jotun colour picker - An Optimizely Demo',
    template: '%s - An Optimizely Demo',
  },
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <Script src="https://cdn.optimizely.com/js/30057130179.js" data-test="script" />
        <Script src="foobar" />
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TDNQ3PPP');
          `,
          }}
        />
      </Head>

      <ThemeProvider value={{ theme: 'system' }}>
        <Body
          className={`${figtree.className} bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white tw-overflow-x-hidden`}
        >
          <iframe
            // <!-- Google Tag Manager -->
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDNQ3PPP"
            height="0"
            width="0"
            className="tw-invisible tw-hidden"
          ></iframe>
          <div className="flex min-h-screen flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </div>
        </Body>
      </ThemeProvider>
    </html>
  );
}
