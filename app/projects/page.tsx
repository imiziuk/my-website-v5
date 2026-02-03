import Link from "next/link";
import Header from "@/app/components/header";
import Footing from "@/app/components/footing";
import Nav from "@/app/components/nav";

export default function ProjectsMenuPage() {
  
  // DATA: Update the 'href' values to match your actual file folder structure
  const projects = [
    {
      title: "Project Evolution",
      category: "High-Performance Computing",
      description: "A massively parallel artificial life simulation. Optimized from single-threaded C# to a C++ & CUDA architecture.",
      highlight: "100x Speedup",
      tech: ["C++", "CUDA", "OpenGL"],
      href: "/projects/cellular-automaton", 
      icon: (
        <svg className="w-10 h-10 text-[#d67d7d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
      )
    },
    {
      title: "Hobbit Multiplayer",
      category: "Reverse Engineering",
      description: "Injecting modern multiplayer networking into a 2003 single-player engine via memory analysis and DLL injection.",
      highlight: "Memory Hooking",
      tech: ["Ghidra", "Assembly", "C++"],
      href: "/projects/hobbit-mod",
      icon: (
        <svg className="w-10 h-10 text-[#d67d7d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      )
    },
    {
      title: "Competitive Game Dev",
      category: "Architecture & Leadership",
      description: "Competition-winning project transforming a prototype into a scalable multiplayer platform with complex asset management.",
      highlight: "Award Winner",
      tech: ["Unity 3D", "C#", ".NET"],
      href: "/projects/game-dev",
      icon: (
        <svg className="w-10 h-10 text-[#d67d7d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
      )
    }
  ];

  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      <Nav />

      <div className="max-w-6xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-screen flex flex-col">
        
        {/* HERO SECTION */}
        <section className="p-10 md:p-16 border-b border-[#b8b8b8] bg-[#39352f] text-[#d1d1d1]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight text-white">
              Selected <span className="text-[#d67d7d]">Works</span>
            </h1>
            <p className="text-xl leading-relaxed opacity-90 border-l-4 border-[#d67d7d] pl-6">
              A collection of technical deep dives. From reverse engineering legacy engines to optimizing high-performance genetic algorithms.
            </p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <div className="p-10 md:p-16 flex-1 bg-[#e5e5e5]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {projects.map((project, index) => (
              <Link key={index} href={project.href} className="group block h-full">
                <article className="h-full flex flex-col bg-[#39352f] text-[#d1d1d1] shadow-lg border-2 border-transparent transition-all duration-300 hover:border-[#d67d7d] hover:-translate-y-2">
                  
                  {/* Card Header */}
                  <div className="p-6 border-b border-[#555] flex justify-between items-start">
                    <div className="bg-[#2d2a26] p-3 rounded group-hover:bg-[#d67d7d] group-hover:text-white transition-colors duration-300">
                      {project.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d67d7d] group-hover:text-white transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {project.category}
                    </h3>
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d67d7d] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm opacity-80 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-mono bg-[#2d2a26] px-2 py-1 rounded text-gray-300 border border-[#444]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer / Highlight */}
                  <div className="p-4 bg-[#2d2a26] border-t border-[#555] flex items-center justify-between">
                     <span className="font-bold text-[#d67d7d] text-sm">
                       {project.highlight}
                     </span>
                     <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>

                </article>
              </Link>
            ))}

          </div>
        </div>

        {/* CALL TO ACTION */}
        <section className="bg-[#d1d1d1] p-10 md:p-16 border-t border-[#b8b8b8] text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#39352f]">Want to see the code?</h2>
            <p className="text-[#39352f] opacity-80 mb-8 max-w-2xl mx-auto">
              Most of these projects are open-source and available for review. I am currently available for new engineering challenges.
            </p>
            <Link href="/contact" className="inline-block bg-[#39352f] text-white font-bold py-3 px-8 rounded hover:bg-[#d67d7d] transition-colors">
              Contact Me
            </Link>
        </section>

      </div>
      <Footing />
    </main>
  );
}