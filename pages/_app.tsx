import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Header } from "../components/Header";
import {ThemeProvider} from 'next-themes'
import '../styles/detail-page.scss';
import '../styles/country-listing-page.scss';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider defaultTheme={'dark'} themes={['light', 'dark']}>
      <Head>
        <title>Where in the world</title>
        <meta name="description" content="Test app"/>
        <link rel="icon" href="/world.ico"/>
      </Head>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
