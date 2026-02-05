"use client"; // Required for useState in Next.js App Router

import { useState } from "react";
import Header from "@/app/components/header";
import Footing from "@/app/components/footing";
import ContactButton from "@/app/components/contact_me";
import Nav from "@/app/components/nav";

// DATA: Add your real image paths here later (e.g., "/screenshots/evo1.jpg")
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "../mona.png",
    alt: "Genetic Learning Iteration",
    caption: "Genetic Learning Iteration",
  },
  {
    id: 2,
    src: "../energy.png",
    alt: "Energy Distribution Map",
    caption: "Energy Distribution Map",
  },
  {
    id: 3,
    src: "../rgb.png",
    alt: "RGB Cellular Interaction",
    caption: "Multi-dimensional RGB Interaction, Bird",
  },
];

// Reusable Component for the Expandable Tabs
function RuleTab({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow-sm border-l-4 border-[#d67d7d] overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group"
      >
        <h4 className="font-bold text-sm uppercase text-gray-500 group-hover:text-[#d67d7d] transition-colors">
          {title}
        </h4>
        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Animated Plus/Minus Icon */}
          <span
            className={`absolute w-4 h-0.5 bg-[#d67d7d] transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-90"
            }`}
          ></span>
          <span
            className={`absolute w-4 h-0.5 bg-[#d67d7d] transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          ></span>
        </div>
      </button>

      {/* Content Area */}
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
}

export default function CellularAutomatonPage() {
  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      <Nav />

      <div className="max-w-6xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-screen flex flex-col">
        {/* 1. HERO SECTION: The Hook */}
        <section className="p-10 md:p-16 border-b border-[#b8b8b8] bg-[#39352f] text-[#d1d1d1]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight text-white">
              Project <span className="text-[#d67d7d]">Evolution</span>
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8 border-l-4 border-[#d67d7d] pl-6">
              A High-Performance Computing (HPC) engine that simulates
              artificial life and evolutionary image generation.
              <br className="hidden md:block" />
              Optimized from a single-threaded CPU task to a massively parallel
              GPU architecture.
            </p>

            {/* "The Metric" - Front and Center */}
            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-4 bg-[#2d2a26] p-4 rounded border border-[#555]">
                <div className="text-right">
                  <span className="block text-xs uppercase tracking-widest text-gray-400">
                    Optimization Goal
                  </span>
                  <span className="block font-bold text-white">
                    Simulations Multithreading
                  </span>
                </div>
                <div className="text-4xl font-black text-[#d67d7d]">100x</div>
                <div className="text-left text-sm opacity-80 leading-tight">
                  Speedup achieved via
                  <br />
                  CUDA & C++ Implementation
                </div>
              </div>
              <ContactButton />
            </div>
          </div>
        </section>

        {/* 2. TECH STACK GRID */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-[#b8b8b8]">
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Core Engine
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>C++ / C</li>
              <li>NVIDIA CUDA</li>
              <li>OpenGL</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Automata Made
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Colonial Organism</li>
              <li>CA Artist</li>
              <li>RGB Game of Life</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              References
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>
                <a
                  href="https://youtu.be/PCx228KcOow?si=Q_kXJRxGmuK8E6RW"
                  className="hover:text-[#d67d7d]"
                >
                  YouTube: foo52ru
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://github.com/imiziuk/CellularAutomaton"
            target="_blank"
            className="p-8 bg-[#39352f] text-white flex flex-col items-center justify-center group gap-2 hover:bg-[#d67d7d] transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-bold text-sm tracking-widest border-b border-transparent group-hover:border-[#39352f]">
              VIEW SOURCE
            </span>
          </a>
        </section>

        {/* 3. DEEP DIVE CONTENT */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* LEFT: The Narrative */}
          <section className="md:w-2/3 p-10 md:p-16 space-y-12">
            {/* The Problem & Solution */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
                The Optimization Arc
              </h2>
              <p className="leading-relaxed mb-4">
                Inspired by evolutionary algorithms, which were implemented in{" "}
                <a href="https://warmplace.ru/soft/pixilang/">Pixilang</a>{" "}
                demonstrated by{" "}
                <a href="https://youtu.be/PCx228KcOow?si=Q_kXJRxGmuK8E6RW">
                  YouTube channel foo52ru
                </a>
                . My first Cellular Automaton was written in C# utilizing .NET
                APIs. The results were astonishing, but to get them I had to
                keep my PC running for days.
              </p>
              <p className="leading-relaxed">
                In the first implementation, all calculations were performed on
                the CPU. When I was introduced to shaidng in Unity3D, I decided
                to run Cellular Automaton using the Graphic Cards. Moving to
                multithreading gave me the speed and scale to test various grid
                rules.
              </p>
            </div>

            {/* Colonial Organism */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Evolution of Colonial Organism
              </h2>
              <div className="flex item-centered justify-center p-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/l6Z7j8ed-gA?si=XhhNHf5dXN0lcUYK"
                  title="YouTube video player"
                  className="border-none" // If using Tailwind
                  style={{ border: 0 }} // If using inline styles
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <p className="leading-relaxed mb-6">
                The well-known Game of Life has a condition where each cell can
                be alive or dead. But what if we mimic some of the complexity
                that we encounter in real-life cellular organisms? Adding genes,
                and the ability to share with or attack neighbor cells, produced
                an astonishingly complex simulation. The cells become more
                organized, they evolve various behaviors with one goal - Give a
                successful offspring.
              </p>

              <RuleTab title="The Simulation Rules">
                <div className="space-y-8">
                  {/* 1. Cell States - Visual Grid */}
                  <div>
                    <h5 className="font-bold text-[#39352f] text-sm uppercase mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#d67d7d]"></span>
                      Cell States
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 rounded border border-gray-200">
                        <span className="text-[#d67d7d] font-bold block mb-1">
                          Alive
                        </span>
                        <p className="text-sm leading-tight text-gray-600">
                          Active agent. Can perform actions, consume energy, and
                          reproduce.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded border border-gray-200">
                        <span className="text-gray-500 font-bold block mb-1">
                          Dead
                        </span>
                        <p className="text-sm leading-tight text-gray-600">
                          Organic waste. Contains residual energy that living
                          cells can consume.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded border border-gray-200">
                        <span className="text-gray-400 font-bold block mb-1">
                          Empty
                        </span>
                        <p className="text-sm leading-tight text-gray-600">
                          Vacuum space. Available for movement or new offspring
                          placement.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2. Functions - Badge Cloud */}
                  <div>
                    <h5 className="font-bold text-[#39352f] text-sm uppercase mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#d67d7d]"></span>
                      Cell Capabilities
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "View Self Energy",
                        "Attack Neighbor",
                        "Rotate",
                        "Move to Empty",
                        "Reproduce",
                        "Analyze Neighbors",
                        "Photosynthesis",
                      ].map((func) => (
                        <span
                          key={func}
                          className="px-3 py-1 bg-[#e5e5e5] text-[#39352f] text-xs font-mono font-bold rounded border border-[#d1d1d1]"
                        >
                          {func}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3. Mechanics - Definition List */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 border-l-2 border-[#d67d7d] shadow-sm">
                      <span className="block text-[#39352f] font-bold mb-1">
                        Reproduction Logic
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Triggered when energy exceeds a specific threshold. The
                        parent divides into an empty neighbor slot, splitting
                        its energy pool with the offspring.
                      </p>
                    </div>

                    <div className="bg-white p-4 border-l-2 border-[#d67d7d] shadow-sm">
                      <span className="block text-[#39352f] font-bold mb-1">
                        Genetic Mutation
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Occurs during the copying process. Random weights are
                        applied to neural weights or behavioral genes, creating
                        evolutionary drift.
                      </p>
                    </div>
                  </div>

                  {/* 4. Environment */}
                  <div className="bg-[#39352f] text-gray-300 p-5 rounded">
                    <h5 className="font-bold text-white text-sm uppercase mb-2">
                      Global Conditions
                    </h5>
                    <ul className="list-disc list-inside text-sm space-y-1 font-mono">
                      <li>
                        <span className="text-[#d67d7d]">Light Source:</span>{" "}
                        Emits from top (Y=0). Cells cast dynamic shadows.
                      </li>
                      <li>
                        <span className="text-[#d67d7d]">Water:</span> Static
                        energy sources placed in world generation.
                      </li>
                      <li>
                        <span className="text-[#d67d7d]">Entropy:</span> Living
                        cells burn energy every tick.
                      </li>
                    </ul>
                  </div>
                </div>
              </RuleTab>

              <p className="mt-4">
                These are general rules that can be modified adding more
                complexity a cell can have. Over the years I have made many
                configurations, while keeping the general rules listed above
                mostly unchanged.
              </p>
            </div>

            {/* The AI Logic */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                AI & Genetic Algorithms
              </h2>
              <div className="flex justify-center items-center">
                <img
                  src="../ca.gif"
                  alt="Cellular Artist"
                  className="w-auto h-auto rounded-full border-4 border-[#39352F] shadow-md mb-6"
                />
              </div>
              <p className="leading-relaxed mb-6">
                This isn't just Conway's Game of Life. I implemented a genetic
                learning model where cells attempt to reconstruct a target image
                through evolution.
              </p>

              <RuleTab title="The Learning Cycle">
                <ol className="list-decimal list-inside space-y-3 font-medium">
                  <li>
                    <span className="text-[#39352f]">Error Calculation:</span>{" "}
                    Each cell compares its current RGB value to the target
                    pixel.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Selection:</span> Cells
                    scan their [Moore/Von Neumann] neighborhood.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Overwriting:</span> If a
                    neighbor has a lower error rate, the cell copies that
                    neighbor's state.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Mutation:</span> During
                    copying, random weights are applied to introduce genetic
                    variance.
                  </li>
                </ol>
              </RuleTab>

              {/* UPGRADED GITHUB LINK */}
              <a
                href="https://github.com/imiziuk/Cell-artist"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex items-center gap-4 p-4 border-2 border-[#39352f] rounded bg-transparent hover:bg-[#39352f] transition-all duration-300 cursor-pointer"
              >
                {/* GitHub Logo SVG */}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-[#39352f] group-hover:text-white transition-colors"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>

                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#d67d7d] group-hover:text-[#d67d7d]">
                    Explore the Code
                  </span>
                  <span className="font-mono text-lg font-bold text-[#39352f] group-hover:text-white transition-colors">
                    imiziuk/Cell-artist
                  </span>
                </div>

                {/* Arrow Icon that moves on hover */}
                <span className="ml-auto text-[#39352f] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  &rarr;
                </span>
              </a>
            </div>

            {/* RGB Game of Life */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Game of Life but RGB
              </h2>
              <div className="flex item-centered justify-center p-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/pWhpKTOVlno?si=OIv6TYas7KUhaZ3Z"
                  title="YouTube video player"
                  className="border-none" // If using Tailwind
                  style={{ border: 0 }} // If using inline styles
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
              <p className="leading-relaxed mb-6">
                The Neil deGrasse Tyson interview about string theory, where
                many dimensions affect each other to some extent, has motivated
                me to implement something where we have a multidimensional
                simulation but where one dimension effects the other similarly.
                In other words: A &rarr; B, B &rarr; C, C &rarr; A.
              </p>

              <RuleTab title="Simulation Rules">
                <ol className="list-decimal list-inside space-y-3 font-medium">
                  <li>
                    <span className="text-[#39352f]">General Rules</span>{" "}
                    <ol className="pl-6 list-[lower-alpha] mt-2 space-y-1 text-sm text-gray-700">
                      <li>
                        Any cell that has 2 or 3 living neighbors survives.
                      </li>
                      <li>
                        Any dead cell with 3 live neighbors becomes a live cell.
                      </li>
                      <li>All other live cells die in the next generation.</li>
                      <li>All the other dead cells stay dead.</li>
                    </ol>
                  </li>
                  <li className="pt-2">
                    <span className="text-[#39352f]">
                      Calculating Neighbors
                    </span>
                    <br />
                    <span className="text-sm">
                      Here we play 3 cellular Automata named R, G, and B.
                    </span>
                    <div className="grid grid-cols-2 gap-4 mt-2 bg-gray-50 p-3 rounded text-sm font-mono">
                      <div>1. R &larr; R </div>
                      <div>4. R &larr; B * 0.5</div>
                      <div>2. G &larr; G </div>
                      <div>5. G &larr; R * 0.5</div>
                      <div>3. B &larr; B </div>
                      <div>6. B &larr; G * 0.5</div>
                    </div>
                  </li>
                </ol>
              </RuleTab>

              {/* UPGRADED ITCH.IO LINK */}
              <a
                href="https://imiziuk.itch.io/cell-artist"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 flex items-center gap-4 p-4 border-2 border-[#fa5c5c] rounded bg-transparent hover:bg-[#fa5c5c] transition-all duration-300 cursor-pointer"
              >
                {/* itch.io Logo SVG */}

                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#fa5c5c] group-hover:text-white">
                    Play Online
                  </span>
                  <span className="font-sans text-lg font-bold text-[#39352f] group-hover:text-white transition-colors">
                    Cell Artist on itch.io
                  </span>
                </div>

                {/* Arrow Icon */}
                <span className="ml-auto text-[#fa5c5c] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                  &rarr;
                </span>
              </a>
            </div>
          </section>

          {/* RIGHT: Visuals / Sidebar */}
          <aside className="md:w-1/3 bg-[#39352f] text-[#d1d1d1] p-10 flex flex-col gap-8">
            {/* Video Placeholder */}
            <div>
              <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block">
                Simulation Demo
              </label>
              <div className="aspect-video w-full bg-black rounded border border-gray-700 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                {/* Replaced placeholder div with a robust placeholder image */}
                <img
                  src="https://placehold.co/600x400/000000/d67d7d?text=VIDEO+PREVIEW"
                  alt="Video Preview"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-center px-4 bg-black/50 p-2 rounded text-[#d67d7d] border border-[#d67d7d]">
                    <div className="flex item-centered justify-center">
                      <iframe
                        src="https://www.youtube.com/embed/5NXUEYfetc0?si=Cti_jboNDQbcKZys"
                        title="YouTube video player"
                        className="border-none" // If using Tailwind
                        style={{ border: 0 }} // If using inline styles
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* Gallery Section - Now with Real Images */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block">
                Snapshots
              </label>

              <div className="grid grid-cols-1 gap-6">
                {GALLERY_IMAGES.map((img) => (
                  <div key={img.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded border border-gray-600 aspect-[4/3]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-[#d67d7d] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <span className="block mt-2 text-xs font-mono text-gray-400 group-hover:text-[#d67d7d] transition-colors">
                      {img.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-auto pt-8 border-t border-gray-600">
              <p className="text-sm italic opacity-70 mb-4">
                "Cellular Automata is the perfect puzzle for multi-threaded
                implementation."
              </p>
              <a
                href="/contact"
                className="block w-full text-center bg-[#d67d7d] text-white font-bold py-3 rounded hover:bg-white hover:text-[#39352f] transition-colors"
              >
                Discuss This Architecture
              </a>
            </div>
          </aside>
        </div>
      </div>
      <Footing />
    </main>
  );
}
