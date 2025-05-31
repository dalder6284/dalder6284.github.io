import NavBar from "../NavBar";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex justify-center items-start px-8 lg:py-10 md:py-10">
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full">
          {/* Image column */}
          <div className="flex-shrink-0">
            <img
              src="/images/portfolio-image.png"
              alt="Diego Alderete"
              className="w-80 h-80 object-cover shadow-lg mx-auto md:mx-0 md:w-90 md:h-150"
            />
          </div>

          {/* Bio column */}
          <div className="flex flex-col justify-center border border-black border-solid p-6">
            <h1 className="text-2xl">About Me</h1>
            <p>
              Hi, I'm Diego Alderete, and I'm a software engineer and researcher. I'm a recent Yale graduate with a B.S. in Computer Science, and I focus on building distributed systems, creative tools, and AI applications. I’ve built everything from embedded robotics drivers to synchronized audio networks and machine learning models for fraud detection. The thing I care the most about is making my work feel alive and human.
            </p>
            <br></br>
            <p>
              With my background in embedded systems, machine learning, and creative audio tech, I bring both precision and expressiveness to engineering problems. Right now, I'm open to opportunities where I can contribute to thoughtful, technically engaging work. I'm proficient in Python and C, and I have experience in Golang, C++, C#, SQL, Javascript/Typescript, Rust, and Lisp. Check out my <a href="/#/resume" className="underline hover:text-gray-500">resume</a> for my full tech stack and experience.
            </p>
            <br></br>
            <p>
              Outside of work, I like writing, making music with friends, and going on TVTropes deep dives.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-auto text-xs text-gray-500 text-right px-4 py-2">
        © Diego Alderete {new Date().getFullYear()}
      </footer>
    </div>
  );
}
