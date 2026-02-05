import Header from "@/app/components/header";
import Footing from "@/app/components/footing";
import ContactButton from "@/app/components/contact_me";
import Nav from "@/app/components/nav";

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
            <div className="inline-flex items-center gap-4 bg-[#2d2a26] p-4 rounded border border-[#555]">
              <div className="text-right">
                <span className="block text-xs uppercase tracking-widest text-gray-400">
                  Optimization Goal
                </span>
                <span className="block font-bold text-white">
                  Simulation Speed and Increase Complexity
                </span>
              </div>
              <div className="text-4xl font-black text-[#d67d7d]">100x</div>
              <div className="text-left text-sm opacity-80 leading-tight">
                Speedup achieved via
                <br />
                CUDA & C++ Implementation
              </div>
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
            className="p-8 bg-[#39352f] text-white flex items-center justify-center group flex flex-col items-center gap-2 hover:bg-[#d67d7d] transition-colors cursor-pointer"
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
                the CPU. So I left this project for some time, focusing on video
                game development. While developing games, I encountered shading
                algorithms and raycasting using the Graphics Card (GPU). The
                multithreading abilities inspired me to come back to my Cellular
                Automata algorithm, but this time use Unity Compute Shaders.
                Moving to shaders gave me the speed I truly needed. Speeding up
                the work simulations by 100 times and allowing for a much larger
                simulation world size.
              </p>
            </div>
            {/* The AI Logic */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Evolution of Colonial Organism
              </h2>
              <p className="leading-relaxed mb-6">
                The well-known Game of Life has a condition where each cell can
                be alive or dead. But what if we mimic some of the complexity
                that we encounter in real-life cellular organisms? Adding genes,
                and the ability to share with or attack neighbor cells, produced
                an astonishingly complex simulation. The cells become more
                organized, they evolve various behaviors with one goal - Give a
                successful offspring.
              </p>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#d67d7d]">
                <h4 className="font-bold text-sm uppercase mb-4 text-gray-500">
                  The Simulation Rules
                </h4>
                <ol className="list-decimal list-inside space-y-3 font-medium">
                  <li>
                    <span className="text-[#39352f]">Cell States:</span> Cell
                    can be Alive: can perform actions, Dead - contains energy
                    that can be consumed, or Empty - empty space.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Reproduction:</span> Cells
                    when a cell reaches a certain threshold of energy it is
                    containing, it reproduces into some of the neighboring cells
                    and shares its energy with the offspring(s).
                  </li>
                  <li>
                    <span className="text-[#39352f]">Functions:</span> An Alive
                    cell can view its own energy, attack other cells, rotate,
                    move to an empty cell, reproduce, and analyze neighboring
                    cells.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Mutation:</span> During
                    copying, a cell has a chance to mutate which can modify one
                    or multiple genes the offspring holds.
                  </li>
                  <li>
                    <span className="text-[#39352f]">
                      Outside World Conditions:
                    </span>{" "}
                    The world has light from the top of the map and cells cast
                    shadows; some conditional cells have water energy which is
                    another source of energy the cells can evolve to consume.
                  </li>
                </ol>
              </div>
              <p>
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
              <p className="leading-relaxed mb-6">
                This isn't just Conway's Game of Life. I implemented a genetic
                learning model where cells attempt to reconstruct a target image
                through evolution.
              </p>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#d67d7d]">
                <h4 className="font-bold text-sm uppercase mb-4 text-gray-500">
                  The "Learning" Cycle
                </h4>
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
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Game of Life but RGB
              </h2>
              <p className="leading-relaxed mb-6">
                The Neil deGrasse Tyson interview about string theory, where
                many dimensions affect each other to some extent, has motivated
                me to implement something where we have a multidimensional
                simulation but where one dimension effects the other similarly.
                In other words: A &rarr; B, B &rarr; C, C &rarr; A. I wanted to
                try with a simple Conway's Game of Life where three worlds
                interact with each other. In each world, the rules are applied
                the same; however, the other dimensions add a semi neighbor
                value (0.5). Thus, while calculating neighbors, an empty cell
                surrounded by no cells in the same dimension can become alive
                due to the high density of cells in the other dimension. The
                interesting aftereffect is that this creates another type of
                cellular automaton. Where all cells are full ABC, during
                simulation they are white (full values of RGB), and if there is
                no single dimension value, the simulation would keep being of
                this simulation. But if at least one cell is placed to be one
                colored, it starts a chain reaction making the whole world
                colored and broken (unsynced) from each other.
              </p>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#d67d7d]">
                <h4 className="font-bold text-sm uppercase mb-4 text-gray-500">
                  Simulation Rules
                </h4>
                <ol className="list-decimal list-inside space-y-3 font-medium">
                  <li>
                    <span className="text-[#39352f]">General Rules</span>{" "}
                    <ol>
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
                  <li>
                    <span className="text-[#39352f]">
                      Calculating Neighbors
                    </span>
                    Here we play 3 cellular Automata named R, G, and B.
                    <ol>
                      <li>R &larr; R </li>
                      <li>G &larr; G </li>
                      <li>B &larr; B </li>
                      <li>R &larr; B * 0.5</li>
                      <li>G &larr; R * 0.5</li>
                      <li>B &larr; G * 0.5</li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>

            {/* Other Modules */}
          </section>

          {/* RIGHT: Visuals / Sidebar */}
          <aside className="md:w-1/3 bg-[#39352f] text-[#d1d1d1] p-10 flex flex-col gap-8">
            {/* Video Placeholder */}
            <div>
              <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block">
                Simulation Demo
              </label>
              <div className="aspect-video w-full bg-black rounded border border-gray-700 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                {/* If you have a video file, replace this div with the video tag */}
                <div className="absolute inset-0 bg-[#d67d7d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="font-mono text-xs text-center px-4">
                  [ VIDEO PREVIEW ]<br />
                  Click to load C++ Engine Demo
                </span>
              </div>
            </div>

            {/* Gallery Placeholders */}
            <div className="space-y-4">
              <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block">
                Snapshots
              </label>
              <div className="h-32 bg-gray-800 rounded flex items-center justify-center border border-gray-700">
                <span className="text-xs font-mono">
                  Genetic Learning Iteration #400
                </span>
              </div>
              <div className="h-32 bg-gray-800 rounded flex items-center justify-center border border-gray-700">
                <span className="text-xs font-mono">
                  Energy Distribution Map
                </span>
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
