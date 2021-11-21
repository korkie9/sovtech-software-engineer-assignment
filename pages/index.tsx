import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../components/about-card";
import { Reasons } from "../components/reasons-card";

const Home: NextPage = () => {
  return (
    // main Container
    <div
      className="h-auto
        w-screen 
        lg:h-auto
        md:h-auto 
        sm:h-auto 
        flex-grow 
        overflow-x-hidden
        overflow-y-scroll
        bg-blue-300 
        grid 
        gap-7 
        grid-cols-7 
        grid-rows-6 
        p-7"
    >
      <Head>
        <title>SovTech Assignment</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* About me Card */}
      <Reasons />
      <About />
      {/* Reasons Card */}
      
    </div>
  );
};

export default Home;
