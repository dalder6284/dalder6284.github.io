import { useState } from "react";
import NavBar from "../NavBar";

const sidebarItems = [
  {
    id: 1,
    label: "Real-Time Performance Control",
    subtitle: "Real-Time Networked Sound Control",
    image: "/images/rtpc-app.png",
    description:
      "A distributed system for synchronizing real-time audio playback across mobile devices. RTPC enables performers to control sound diffusion using a central WebSocket server, offering precise timing coordination for live, spatially-aware performances.",
    link: "https://github.com/dalder6284/rtpc-app",
  },
  {
    id: 2,
    label: "Bitcoin Fraud Detection",
    subtitle: "Graph Neural Networks",
    image: "/images/bitcoin-gat.png",
    description:
      "Trained a Graph Attention Network (GAT) on the Elliptic Bitcoin dataset to identify illicit transactions in cryptocurrency networks. Developed a stabilized self-training pipeline to handle extreme class imbalance and improve generalization.",
    link: "https://github.com/dalder6284/elliptic-bitcoin-GAT",
  },
  {
    id: 3,
    label: "Yale Sound Garden",
    subtitle: "Location-Based Synthesis",
    image: "/images/soundgarden.png",
    description:
      "A SuperCollider composition interfaced with a Python script that queries a mobile device's location to drive sound generation. The system uses GPS coordinates retrieved via a custom API to influence real-time synthesis parameters, exploring spatial presence as a compositional variable.",
    link: "https://github.com/dalder6284/yale-sound-garden",
  },
  {
    id: 4,
    label: "Creative Embedded Systems",
    subtitle: "Generative Art & Motion",
    image: "/images/cpsc334.png",
    description:
      "An archive of projects from CPSC 334: Creative Embedded Systems, featuring generative art, motion detection, and kinetic sculpture. These projects are an inquiry into how computational hardware can serve as a medium for artistic expression.",
    link: "https://github.com/dalder6284/cpsc334-archive",
  },
  {
    id: 5,
    label: "Diet-VOTE",
    subtitle: "Goal-Based Decision Modeling",
    image: "/images/diet-vote.png",
    description:
      "A simplified Python replication of the original LISP-based VOTE system by Stephen Slade for roll call prediction. Diet-VOTE models congressional decision-making by inferring agents' goals from past voting behavior and relationships to political groups, bills, and issues. The project includes a standardized JSON conversion of all original database entities and supports interactive evaluation via strategy-based inference.",
    link: "https://github.com/dalder6284/Diet-VOTE-CPSC458",
  },
];

export default function Projects() {
  const [hoveredItem, setHoveredItem] = useState<typeof sidebarItems[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow flex flex-col">
        {/* Page title */}
        <div className="text-center py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
            Projects
          </h1>
        </div>

        {/* ────────────────────────────────────────────────────────────── */}
        {/* DESKTOP / TABLET: fixed‐height sidebar + preview */}
        {/* ────────────────────────────────────────────────────────────── */}
        <div className="hidden md:flex justify-center items-center px-4">
          {/* Give this grid a fixed height (e.g. 600px) */}
          <div className="w-full border max-w-4xl grid grid-cols-3 h-[600px]">
            {/* Sidebar: full height, scroll if overflow */}
            <div
              className="col-span-1 border-r overflow-y-auto scrollbar-hide h-full"
              /* no inline style needed now */
            >
              {sidebarItems.map((item) => (
                <div
                  key={item.id}
                  className="py-6 px-4 border-b hover:bg-gray-100 cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item)}
                >
                  <div className="text-lg font-medium">{item.label}</div>
                  <div className="text-sm text-gray-500">
                    {item.subtitle}
                  </div>
                </div>
              ))}
            </div>

            {/* Preview Pane: also fill that same 600px, with overflow handling */}
            <div className="col-span-2 p-4 flex flex-col justify-between h-full overflow-hidden">
              {hoveredItem ? (
                <>
                  <h2 className="text-2xl font-semibold">
                    {hoveredItem.label}
                  </h2>

                  <div className="flex-grow flex items-center justify-center overflow-hidden px-4 py-5">
                    <img
                      src={hoveredItem.image}
                      alt={hoveredItem.label}
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>

                  <p className="text-gray-600 text-left w-full">
                    {hoveredItem.description}
                  </p>

                  <div className="mt-4 text-right">
                    <a
                      href={hoveredItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500 italic text-center px-4">
                    Hover over a project title to preview it.
                    <br />
                    Click “View on GitHub →” once it appears.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────── */}
        {/* MOBILE: stack each project as its own card */}
        {/* ────────────────────────────────────────────────────────────── */}
        <div className="block md:hidden flex-1 px-4 overflow-y-auto space-y-8">
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className="border overflow-hidden"
            >
              <a href={item.link} className="block">
                {/* Image */}
                <div className="w-full h-48 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                {/* Title + subtitle */}
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{item.label}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-700 mb-4">
                    {item.description}
                  </p>

                  {/* Link */}
                  <span className="text-blue-600 hover:underline text-sm">
                    View on GitHub →
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto text-[10px] sm:text-xs text-gray-500 text-right px-4 py-2">
        © Diego Alderete {new Date().getFullYear()}
      </footer>
    </div>
  );
}
