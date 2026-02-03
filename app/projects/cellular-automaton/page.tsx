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
              A High-Performance Computing (HPC) engine that simulates artificial life and evolutionary image generation. 
              <br className="hidden md:block" />
              Optimized from a single-threaded CPU task to a massively parallel GPU architecture.
            </p>

            {/* "The Metric" - Front and Center */}
            <div className="inline-flex items-center gap-4 bg-[#2d2a26] p-4 rounded border border-[#555]">
              <div className="text-right">
                <span className="block text-xs uppercase tracking-widest text-gray-400">Optimization Goal</span>
                <span className="block font-bold text-white">Simulation Speed</span>
              </div>
              <div className="text-4xl font-black text-[#d67d7d]">100x</div>
              <div className="text-left text-sm opacity-80 leading-tight">
                Speedup achieved via<br/>CUDA & C++ Implementation
              </div>
            </div>
          </div>
        </section>

        {/* 2. TECH STACK GRID */}
        <section className="grid grid-cols-1 md:grid-cols-4 border-b border-[#b8b8b8]">
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">Core Engine</h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>C++ / C</li>
              <li>NVIDIA CUDA</li>
              <li>OpenGL</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">Security & Reverse Eng</h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Ghidra</li>
              <li>Cheat Engine</li>
              <li>Memory Analysis</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">Systems</h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Custom Data Protocols</li>
              <li>Multi-threading</li>
              <li>Windows API</li>
            </ul>
          </div>
          <div className="p-8 bg-[#39352f] text-white flex items-center justify-center">
             <a href="https://github.com/YOUR_USERNAME/REPO" target="_blank" className="group flex flex-col items-center gap-2 hover:text-[#d67d7d] transition-colors cursor-pointer">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="font-bold text-sm tracking-widest border-b border-transparent group-hover:border-[#d67d7d]">VIEW SOURCE</span>
             </a>
          </div>
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
                Inspired by digital biology simulations, I initially built this engine in <b>C#</b>. While functional, the CPU-bound architecture limited the scale of the simulation.
              </p>
              <p className="leading-relaxed">
                To break this ceiling, I migrated the entire logic pipeline to the GPU. First using <b>Unity3D & OpenGL</b> shaders, and finally refactoring into raw <b>C++ & CUDA</b>. This transition allowed for massively parallel processing of cell states, unlocking the "100x Speedup" and enabling real-time evolution of complex organisms.
              </p>
            </div>

            {/* The AI Logic */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                AI & Genetic Algorithms
              </h2>
              <p className="leading-relaxed mb-6">
                This isn't just Conway's Game of Life. I implemented a genetic learning model where cells attempt to reconstruct a target image through evolution.
              </p>
              
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#d67d7d]">
                <h4 className="font-bold text-sm uppercase mb-4 text-gray-500">The "Learning" Cycle</h4>
                <ol className="list-decimal list-inside space-y-3 font-medium">
                   <li>
                     <span className="text-[#39352f]">Error Calculation:</span> Each cell compares its current RGB value to the target pixel.
                   </li>
                   <li>
                     <span className="text-[#39352f]">Selection:</span> Cells scan their [Moore/Von Neumann] neighborhood.
                   </li>
                   <li>
                     <span className="text-[#39352f]">Overwriting:</span> If a neighbor has a lower error rate, the cell copies that neighbor's state.
                   </li>
                   <li>
                     <span className="text-[#39352f]">Mutation:</span> During copy, random weights are applied to introduce genetic variance.
                   </li>
                </ol>
              </div>
            </div>

            {/* Other Modules */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
                Advanced Modules
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-[#d1d1d1] p-4 rounded">
                  <h4 className="font-bold mb-1">RGB Game of Life</h4>
                  <p className="text-sm opacity-80">Extended ruleset allowing for multi-state, colored structural formations beyond binary ON/OFF.</p>
                </li>
                <li className="bg-[#d1d1d1] p-4 rounded">
                  <h4 className="font-bold mb-1">Energy Analytics</h4>
                  <p className="text-sm opacity-80">Visualizing how "energy" (data/value) flows through the grid and identifying retention hotspots.</p>
                </li>
              </ul>
            </div>

          </section>

          {/* RIGHT: Visuals / Sidebar */}
          <aside className="md:w-1/3 bg-[#39352f] text-[#d1d1d1] p-10 flex flex-col gap-8">
            
            {/* Video Placeholder */}
            <div>
               <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block">Simulation Demo</label>
               <div className="aspect-video w-full bg-black rounded border border-gray-700 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {/* If you have a video file, replace this div with the video tag */}
                  <div className="absolute inset-0 bg-[#d67d7d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <span className="font-mono text-xs text-center px-4">
                    [ VIDEO PREVIEW ]<br/>
                    Click to load C++ Engine Demo
                  </span>
               </div>
            </div>

            {/* Gallery Placeholders */}
            <div className="space-y-4">
               <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block">Snapshots</label>
               <div className="h-32 bg-gray-800 rounded flex items-center justify-center border border-gray-700">
                 <span className="text-xs font-mono">Genetic Learning Iteration #400</span>
               </div>
               <div className="h-32 bg-gray-800 rounded flex items-center justify-center border border-gray-700">
                 <span className="text-xs font-mono">Energy Distribution Map</span>
               </div>
            </div>

            {/* Call to Action */}
            <div className="mt-auto pt-8 border-t border-gray-600">
              <p className="text-sm italic opacity-70 mb-4">
                "Cellular Automata is the perfect puzzle for multi-threaded implementation."
              </p>
              <a href="/contact" className="block w-full text-center bg-[#d67d7d] text-white font-bold py-3 rounded hover:bg-white hover:text-[#39352f] transition-colors">
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