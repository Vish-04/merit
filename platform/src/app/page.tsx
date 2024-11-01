import LandingPage from "@/components/LandingPage";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sphere AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}
