import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import HeroSection from "@/components/home/hero-section";
import Portfolio from "@/components/home/portfolio";
import TechStacks from "@/components/home/tech-stacks";
import Tools from "@/components/home/tools";
import MainLayout from "@/components/layouts/main-layout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Rifaldi Judri</title>
        <meta name="title" content="Muhammad Rifaldi Judri" />
        <meta name="description" content="Ini adalah website pribadi saya" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rifaldi-porto.vercel.app/" />
        <meta property="og:title" content="Muhammad Rifaldi Judri" />
        <meta
          property="og:description"
          content="Ini adalah website pribadi saya"
        />
        <meta
          property="og:image"
          content="https://rifaldi-porto.vercel.app/logo-rifaldi.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://rifaldi-porto.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Ini adalah website pribadi saya"
        />
        <meta
          property="twitter:description"
          content="Ini adalah website pribadi saya"
        />
        <meta
          property="twitter:image"
          content="https://rifaldi-porto.vercel.app/logo-rifaldi.png"
        />

        <link rel="icon" href="/images/logo-rifaldi.png" />
      </Head>

      {/* Hero */}
      <HeroSection />
      {/* tech stack */}
      <TechStacks />
      {/* about */}
      <Education />
      {/* Experience */}
      <Experience />
      {/* 
      <Portfolio /> */}
    </MainLayout>
  );
};

export default Home;
