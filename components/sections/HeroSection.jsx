import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen-9 container flex flex-col items-center justify-center gap-12">
      <div className="text-center">
        <small className="text-sky-400 text-xl mb-2 tracking-wider">Hi, My name is</small>
        <h1 className="text-gray-200 font-extrabold lg:text-6xl md:text-4xl text-3xl">Muhammad Irtiza.</h1>
        <h1 className="text-gray-300 font-extrabold lg:text-6xl md:text-4xl text-3xl mt-4">I build things for the web.</h1>
        <p className="lg:max-w-3xl lg:text-2xl text-lg lg:mt-8 mt-4">
          I am a javascript developer with robust problem-solving skills, and proven experience in creating and designing the software in a test-driven environment.
        </p>
      </div>
      <Link href="/resume.pdf">
        <a target="_blank" className="font-bold text-300 text-sky-400 border-2 border-sky-400 inline-block px-8 py-4 rounded hover:bg-sky-300/10">
          Check My Resume
        </a>
      </Link>
    </section>
  );
}
