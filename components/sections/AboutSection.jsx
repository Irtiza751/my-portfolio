export default function AboutSection({ noOfRepos, followers }) {
  return (
    <>
      <section
        id="about"
        className="max-w-7xl mx-auto my-12 container text-left"
      >
        <div className="relative max-w-4xl mx-auto">
          <h1 className="font-extrabold lg:text-6xl md:4xl text-3xl text-gray-200 mb-8">
            About Me
          </h1>
          <p className="lg:text-3xl text-2xl text-gray-200 font-bold mb-6">
            Hello! my name is{" "}
            <span className="text-sky-400">Muhammad Irtiza</span>, a software
            engineer based in Karachi, Pakistan.
          </p>
          <p className="text-xl mb-6 leading-9">
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant user
            experiences.
          </p>
          <p className="text-xl leading-9">
            I am studding <span className="text-sky-400">Computer Science</span>{" "}
            from <span className="text-sky-400">ILMA University</span>, I am
            also working with an engineering team at{" "}
            <span className="text-sky-400">Shispare Ltd.</span> as a software
            engineer, where I am working on a wide variety of large scale
            interesting and meaningful projects on a daily basis.
          </p>
          <h1 className="mt-12 font-extrabold lg:text-6xl md:4xl text-3xl text-gray-200 mb-8">
            Personal Achievements
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="bg-gray-800 pt-4 px-4 pb-12 rounded">
              <h4 className="text-3xl text-gray-200 font-bold">{noOfRepos}+</h4>
              <p className="text-lg text-gray-300 mt-2">Open Source Projects</p>
            </div>
            <div className="bg-gray-800 pt-4 px-4 pb-12 rounded">
              <h4 className="text-3xl text-gray-200 font-bold">3+</h4>
              <p className="text-lg text-gray-300 mt-2">
                Years of work experience
              </p>
            </div>
            <div className="bg-gray-800 pt-4 px-4 pb-12 rounded">
              <h4 className="text-3xl text-gray-200 font-bold">{followers}+</h4>
              <p className="text-lg text-gray-300 mt-2">Github Followers</p>
            </div>
            <div className="bg-gray-800 pt-4 px-4 pb-12 rounded">
              <h4 className="text-3xl text-gray-200 font-bold">500+</h4>
              <p className="text-lg text-gray-300 mt-2">Github Stars</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
