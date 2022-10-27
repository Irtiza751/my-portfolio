import { Database, Figma, Layout } from "react-feather";

export default function TechSection() {
  return (
    <>
      <section id="tech" className="max-w-7xl mx-auto my-24 container text-center">
        <h1 className="font-bold lg:text-6xl md:4xl text-3xl text-gray-200 my-4 mt-12">
          Technologies
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          I've worked with a range of technologies in the web development world. From Front-end &amp; Design, to Back-end.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gray-800 py-8 px-12 flex flex-col items-center gap-2 text-sky-400 rounded-lg">
            <Layout size={24}/>
            <h4 className="text-3xl font-bold text-gray-200 mt-4">Front-end</h4>
            <p className="text-lg text-gray-300">Experiece with React.js, React Native &amp; Vue.js</p>
          </div>
          <div className="bg-gray-800 py-8 px-12 flex flex-col items-center gap-2 text-sky-400 rounded-lg">
            <Database size={24 }/>
            <h4 className="text-3xl font-bold text-gray-200 mt-4">Back-end</h4>
            <p className="text-lg text-gray-300">Experience with Nodejs, Python, MongoDB &amp; MySQL</p>
          </div>
          <div className="bg-gray-800 py-8 px-12 flex flex-col items-center gap-2 text-sky-400 rounded-lg">
            <Figma size={24}/>
            <h4 className="text-3xl font-bold text-gray-200 mt-4">UI/UX Design</h4>
            <p className="text-lg text-gray-300">Experience with tools like Figma &amp; Adobe XD</p>
          </div>
        </div>
      </section>
    </>
  );
}
