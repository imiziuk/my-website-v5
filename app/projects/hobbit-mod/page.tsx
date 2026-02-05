import Header from "@/app/components/header";
import Footing from "@/app/components/footing";
import Nav from "@/app/components/nav";
// DATA: Add your real image paths here later (e.g., "/screenshots/evo1.jpg")
const GALLERY_IMAGES = [
  {
    id: 1,
    src: "../s2.png",
    alt: "Genetic Learning Iteration",
    caption: "Genetic Learning Iteration",
  },
  {
    id: 2,
    src: "../2.png",
    alt: "Energy Distribution Map",
    caption: "Energy Distribution Map",
  },
  {
    id: 3,
    src: "../s1.png",
    alt: "RGB Cellular Interaction",
    caption: "Multi-dimensional RGB Interaction, Bird",
  },
];

export default function HobbitModPage() {
  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      <Nav />

      <div className="max-w-6xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-screen flex flex-col">
        {/* 1. HERO SECTION */}
        <section className="p-10 md:p-16 border-b border-[#b8b8b8] bg-[#39352f] text-[#d1d1d1]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight text-white">
              Hobbit <span className="text-[#d67d7d]">Multiplayer</span>
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-[#d67d7d] text-white px-3 py-1 text-sm font-bold uppercase tracking-wider">
                Modding
              </span>
              <span className="bg-[#555] text-white px-3 py-1 text-sm font-bold uppercase tracking-wider">
                Reverse Engineering
              </span>
            </div>

            <p className="text-xl leading-relaxed opacity-90 mb-8 border-l-4 border-[#d67d7d] pl-6">
              Injecting modern multiplayer functionality into a single-player
              engine from 2003.
              <br className="hidden md:block" />
              Achieved by reverse-engineering memory pointers and hooking into
              the main game loop.
            </p>

            {/* Technical Achievement Metric */}
            <div className="inline-flex items-center gap-4 bg-[#2d2a26] p-4 rounded border border-[#555]">
              <div className="text-right">
                <span className="block text-xs uppercase tracking-widest text-gray-400">
                  Core Challenge
                </span>
                <span className="block font-bold text-white">
                  Memory Analysis
                </span>
              </div>
              <div className="text-4xl font-black text-[#d67d7d]">RAM</div>
              <div className="text-left text-sm opacity-80 leading-tight">
                Direct manipulation of
                <br />
                Process Memory & Entities
              </div>
            </div>
          </div>
        </section>

        {/* 2. TECH STACK GRID */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-[#b8b8b8]">
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Analysis Tools
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Ghidra (Assembly)</li>
              <li>Cheat Engine</li>
              <li>Visual Studio</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Core Tech
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>C / C++</li>
              <li>.NET API</li>
              <li>Unity 3D</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Concepts
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>DLL Injection</li>
              <li>Pointer Scanning</li>
              <li>Networking Sync</li>
            </ul>
          </div>
          <a
            href="https://github.com/hobbit-kingdom/hobbit-synchrony-v2"
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
          <section className="md:w-2/3 p-10 md:p-16 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
                The Mission: "Mod The Un-Moddable"
              </h2>
              <p className="leading-relaxed mb-4">
                The Hobbit (2003) was never built for multiplayer. It has no
                networking stack, no server browser, and no synchronization
                logic.
              </p>
              <p className="leading-relaxed">
                Inspired by the speedrunning community, I joined a competition
                to engineer a solution. My specific role was to{" "}
                <b>reverse engineer the game components</b> directly from the
                process memory.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Reverse Engineering Process
              </h2>
              <p className="leading-relaxed mb-6">
                To sync two players, you first need to find where the "Player"
                exists in the computer's RAM.
              </p>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#39352f]">
                <h4 className="font-bold text-sm uppercase mb-4 text-gray-500">
                  The Workflow
                </h4>
                <ol className="list-decimal list-inside space-y-3 font-medium">
                  <li>
                    <span className="text-[#39352f] font-bold">
                      Ghidra Decompilation:
                    </span>{" "}
                    Reading the game's assembly code to understand logic flow.
                  </li>
                  <li>
                    <span className="text-[#39352f] font-bold">
                      Dynamic Analysis:
                    </span>{" "}
                    Using Cheat Engine to locate scene loads, entity data, and
                    hidden game states.
                  </li>
                  <li>
                    <span className="text-[#39352f] font-bold">
                      Custom Tooling:
                    </span>{" "}
                    I developed a bespoke memory analysis tool for Windows to
                    abstract memory access, making future updates easier.
                  </li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
                Architecture & Security
              </h2>
              <p className="leading-relaxed mb-4">
                Early prototypes were messy. I refactored the codebase to follow
                modern OOP practices, abstracting the memory access layer. This
                reduced overhead and improved stability.
              </p>
              <p className="leading-relaxed text-sm opacity-80 italic border-l-2 border-[#d67d7d] pl-4">
                Future Roadmap: Implementing security signatures and encryption
                to prevent malicious client data from corrupting the game state.
              </p>
            </div>
          </section>

          {/* SIDEBAR */}
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
                        src="https://www.youtube.com/embed/MzeVkYa0fpU"
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
