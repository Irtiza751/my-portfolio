import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitHub } from "react-feather";
import { projects } from "../data";

export default function ProjectSection() {
  return (
    <section id="projects" className="max-w-7xl mb-24 mx-auto text-center container">
      <p className="text-xl text-sky-400 tracking-wider mb-1">Projects</p>
      <h1 className="font-bold text-3xl text-gray-200 mb-12">
        Some of the projects that <span className="text-sky-400">I've build.</span>
      </h1>
      {/* projects */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
        {projects.map(project => {
          return (
            <div className="transition duration-150 transform hover:-translate-y-2 rounded" key={project.id}>
              <Image src={project.image} alt={project.title} width={384} height={280} className="rounded object-fit aspec-square" />
              <div className="text-left">
                <h4 className="text-sky-400 font-semibold text-xl border-b-2 mt-4 border-gray-400/10 mb-4 pb-4">{project.title}</h4>
                <p className="text-lg mb-8">{project.description}</p>
                <ul className="flex flex-wrap gap-4 mb-6 font-mono">
                  {project.tags.map((tag, i) => <li key={i} className="text-sky-400 text-sm hover:text-gray-100">{tag}</li>)}
                </ul>

                <ul className="flex justify-between">
                  <Link href="#">
                    <a className="hover:text-sky-400"><GitHub /></a>
                  </Link>
                  <Link href="#">
                    <a className="hover:text-sky-400"><ExternalLink /></a>
                  </Link>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
      <Link href="#">
        <a className="flex items-center w-80 mx-auto justify-center gap-4 font-bold text-300 text-sky-400 border-2 border-sky-400 px-8 py-4 rounded hover:bg-sky-300/10">
          <span>Browse All Projects</span>
          <GitHub />
        </a>
      </Link>
    </section>
  );
}