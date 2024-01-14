import Head from "next/head";
import AboutSection from "../components/sections/AboutSection";
import Footer from "../components/sections/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectSection from "../components/sections/ProjectSection";
import TechSection from "../components/sections/TechSection";

const url = `https://api.github.com/users/Irtiza751`;

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Muhammad Irtiza | Software engineer</title>
      </Head>
      <HeroSection name={data.name} bio={data.bio} />
      <ProjectSection />
      <TechSection />
      <AboutSection noOfRepos={data.public_repos} followers={data.followers} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
