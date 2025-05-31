import NavBar from "../NavBar";

export default function Resume() {
  return (
    <>
      <NavBar />

      <div className="text-center py-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          Resume
        </h1>
      </div>

      <div className="flex justify-center items-start px-4 sm:px-8 ">
        {/* Outer container */}
        <div className="border border-black w-full max-w-5xl">
          {/* Top: Three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-black items-stretch">
            <div className="border-b sm:border-b-0 sm:border-r border-black p-4">
              <p className="tracking-widest text-sm sm:text-base md:text-lg uppercase text-center">Languages</p>
              <ul className="text-center text-sm sm:text-base leading-relaxed space-y-1">
                <li><span className="font-semibold">Proficient:</span> Python, C</li>
                <li><span className="font-semibold">Experienced:</span> C++, Rust, JavaScript, SQL, Golang, C#, Lisp</li>
              </ul>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-black p-4">
              <p className="tracking-widest text-sm sm:text-base md:text-lg uppercase text-center">Frameworks & Libraries</p>
              <ul className="text-center text-sm sm:text-base leading-relaxed space-y-1">
                <li><span className="font-semibold">Web & UI:</span> React, Node.js, Flask</li>
                <li><span className="font-semibold">Machine Learning:</span> TensorFlow, PyTorch</li>
                <li><span className="font-semibold">Embedded & Audio:</span> RNBO, Unity, ROS</li>
              </ul>
            </div>
            <div className="p-4">
              <p className="tracking-widest text-sm sm:text-base md:text-lg uppercase text-center">Tools & Platforms</p>
              <ul className="text-center text-sm sm:text-base leading-relaxed space-y-1">
                <li><span className="font-semibold">DevOps:</span> Docker, Kubernetes, Git</li>
                <li><span className="font-semibold">Cloud & Infra:</span> AWS, Linux</li>
                <li><span className="font-semibold">Systems & Interfaces:</span> WebSockets, GPIO, Embedded Toolchains</li>
              </ul>
            </div>
          </div>

          {/* Coursework Section */}
          <div className="p-4 border-black">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="col-span-1 sm:col-span-2">
                <p className="tracking-widest text-sm sm:text-base md:text-lg uppercase text-center mb-2">Coursework</p>
              </div>

              {/* Left Column: Core CS and Math */}
              <div className="flex flex-col gap-4 px-2">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-center uppercase mb-1 tracking-widest">Core CS</p>
                  <ul className="text-sm sm:text-base leading-relaxed space-y-1 text-center">
                    <li>Intro to Computer Science</li>
                    <li>Data Structures & Programming Techniques</li>
                    <li>Systems Programming & Computer Organization</li>
                    <li>Algorithms</li>
                    <li>Senior Project</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-center uppercase mb-1 tracking-widest">Mathematics</p>
                  <ul className="text-sm sm:text-base leading-relaxed space-y-1 text-center">
                    <li>Calculus I & II</li>
                    <li>Multivariable Calculus</li>
                    <li>Linear Algebra</li>
                    <li>Discrete Mathematics</li>
                    <li>Real Analysis I</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Advanced Computing */}
              <div className="px-2 mt-6 sm:mt-0">
                <p className="text-sm sm:text-base font-semibold text-center uppercase mb-1 tracking-widest">Advanced Computing</p>
                <ul className="text-sm sm:text-base leading-relaxed space-y-1 text-center">
                  <li>Natural Language Processing</li>
                  <li>Deep Learning on Graph-Structured Data</li>
                  <li>Distributed Systems</li>
                  <li>Full Stack Web Programming</li>
                  <li>Automated Decision Systems</li>
                  <li>Embedded Robotic Systems</li>
                  <li>Intro to Quantum Computing</li>
                  <li>Creative Embedded Systems</li>
                  <li>Computer Music: Sound Synthesis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="border-t border-black p-4">
            <p className="tracking-widest text-sm sm:text-base md:text-lg uppercase text-center mb-2">Experience</p>
            <ul className="text-left text-sm sm:text-base leading-relaxed space-y-4 px-2">
              <li>
                <span className="font-semibold">The Aerospace Center (cSETR), Research Assistant</span> — El Paso, TX (May 2022 – August 2024)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Developed and executed onboard experiments on a CubeSat; collaborated with graduate engineering team.</li>
                  <li>Evaluated GPU/TPU performance limits under vacuum and ambient environments for AI workloads; developed software in Python & C++ for automated benchmarking of embedded systems.</li>
                  <li>Designed hardware communication protocol between satellite microcontroller and onboard System-on-a-Chip to trigger experiments using GPIO pins.</li>
                  <li>Designed and implemented an embedded file storage system for a TI MCU enabling persistent data logging and retrieval for autonomous experiments.</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold">Yale Open Music Initiative, Research Assistant</span> — New Haven, CT (May 2023 – August 2023)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Optimized inventory system for 80+ synthesizers and embedded music devices improving lab organization and accessibility; integrated C++ sound libraries and embedded systems for advanced sound synthesis research.</li>
                  <li>Developed hands-on expertise in soldering, circuit design, and embedded systems; gained proficiency in advanced sound synthesis software and audio libraries, enabling the implementation and testing of synthesis algorithms.</li>
                </ul>
              </li>
            </ul>

          </div>

          {/* Resume PDF Link */}
          <div className="border-t border-black p-4">
            <p className="tracking-widest text-sm sm:text-base md:text-lg uppercase text-center mb-2">Resume</p>
            <div className="text-center">
              <a
                href="/DiegoAlderete_Resume_May25.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-black px-4 py-2 text-sm sm:text-base uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
              >
                View / Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-[10px] sm:text-xs text-gray-500 text-right px-4 py-2">
        © Diego Alderete {new Date().getFullYear()}
      </footer>
    </>
  );
}
