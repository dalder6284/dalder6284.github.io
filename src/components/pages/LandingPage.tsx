import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";


export default function LandingPage() {

  const sections = [
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <>
      {/* Desktop Layout (hidden on mobile) */}
      <div className="hidden md:flex h-screen w-screen">
        {/* Left Column */}
        <div className="flex flex-col flex-[3]">
          <div className="flex-[2] p-5 relative">
            <div className="absolute top-4 right-4 flex flex-col space-y-4">
              <a href="https://www.linkedin.com/in/diego-alderete-sanchez/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-gray-600 hover:text-[#0a66c2] transition" />
              </a>
              <a href="https://github.com/dalder6284" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="text-gray-600 hover:text-gray-900 transition" />
              </a>
              <a
                href="https://www.youtube.com/@diego.alderete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaYoutube size={24} />
              </a>
            </div>
            <h1 className="text-[10rem] font-bold tracking-tight leading-none">
              Diego<br />Alderete
            </h1>
            <p className="text-2xl font-semibold italic">Software Engineer & Researcher</p>
            <p className="text-xl"> Hey. I’m a software engineer and researcher with a focus on distributed systems, creative tools, and real-time performance tech. I’ve built everything from embedded robotics drivers to synchronized audio networks and machine learning models for fraud detection. If you're building something technical, thoughtful, or weird, I'd love to be a part of it.</p>
          </div>
          <div className="flex-1 overflow-hidden relative outline outline-1 outline-black">
            <img
              src="/images/bottom-left.jpeg"
              alt="Bottom left visual"
              className="absolute inset-0 w-full h-full object-cover object-[60%_35%] grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-[2]">
          <div className="flex-1 overflow-hidden relative outline outline-1 outline-black">
            <img
              src="/images/top-right.jpeg"
              alt="Top right visual"
              className="absolute inset-0 w-full h-full object-cover object-[50%_25%] grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex-[2] text-lg">
            <div className="flex h-full w-full uppercase tracking-wide">

              {/* Numbers */}
              <div className="flex flex-col justify-center items-start pl-6 items-end pr-6">
                {sections.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              {/* Middle Divider */}
              <div className="w-[1px] bg-black" />

              {/* Section Labels */}
              <div className="flex-1 flex flex-col justify-center items-start pl-6">
                {sections.map(({ label, path }) => (
                  <Link to={path} key={path} className="hover:underline">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute bottom-4 right-4 text-[10px] text-gray-500">
          © Diego Alderete {new Date().getFullYear()}
        </footer>
      </div>

      {/* Mobile Layout (only TopLeft and BottomRight) */}
      <div className="flex flex-col md:hidden min-h-screen">
        {/* header */}
        <header className="p-4">
          <h1 className="text-[6rem] font-bold leading-tight">
            Diego<br />Alderete
          </h1>
          <p className="text-xl italic font-semibold">
            Software Engineer & Researcher
          </p>
        </header>

        {/* content: 3/4 text, 1/4 image */}
        <div className="grid grid-cols-4 flex-1">
          {/* left: spans 3 cols */}
          <div className="col-span-3 p-4 flex flex-col justify-between">
            <p className="text-base mb-6">
              I’m a software engineer and researcher with a focus on distributed
              systems, creative tools, and real-time performance tech. I’ve built
              everything from embedded robotics drivers to synchronized audio networks
              and ML models for fraud detection. If you’re building something
              technical, thoughtful, or weird, I’d love to be a part of it.
            </p>

            <div className="flex space-x-6 mb-6">
              <a
                href="https://www.linkedin.com/in/diego-alderete-sanchez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#0a66c2] transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/dalder6284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.youtube.com/@diego.alderete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
              >
                <FaYoutube size={24} />
              </a>
            </div>

            <div className="text-2xl uppercase tracking-wide flex">
              {/* Numbers */}
              <div className="flex flex-col items-end pr-6">
                {sections.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              {/* Divider */}
              <div className="w-[1px] bg-black" />
              {/* Labels */}
              <div className="flex-1 flex flex-col justify-center items-start pl-6">
                {sections.map(({ label, path }) => (
                  <Link to={path} key={path} className="hover:underline">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* right: spans 1 col, image fills and is flush to grid edge */}
          <div className="col-span-1 relative overflow-hidden">
            <img
              src="/images/bottom-left.jpeg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>

        <footer className="mt-auto w-full flex justify-center pb-4 text-xs text-gray-500">
          © Diego Alderete {new Date().getFullYear()}
        </footer>
      </div>

    </>
  );
}

