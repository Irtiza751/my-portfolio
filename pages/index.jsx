import Head from "next/head";
import AboutSection from "../components/sections/AboutSection";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectSection from "../components/sections/ProjectSection";
import TechSection from "../components/sections/TechSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Irtiza | Software engineer</title>
      </Head>
      <HeroSection />
      <ProjectSection />
      <TechSection />
      <AboutSection />
      <Footer />
    </>
  );
}
