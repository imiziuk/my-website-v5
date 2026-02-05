import Header from "./components/header";
import Footing from "./components/footing";
import ContactButton from "./components/contact_me";
import Nav from "./components/nav";
import Link from "next/link";
import EmailCopy from "./components/EmailCopy";
interface NavItem {
  id: number;
  img: string;
  path: string;
  alt: string;
}

const navItems: NavItem[] = [
  { id: 1, img: "/chronoment.jpg", path: "/projects", alt: "Projects" },
  { id: 2, img: "/3.png", path: "/skills", alt: "Skills" },
  { id: 3, img: "/ca.gif", path: "/experience", alt: "Experience" },
];

export default function Page() {
  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      {/* 1. Full Width Header */}
      <Header title="Ivan Miziuk" image="/bg.jpg" />

      {/* 2. Navigation bar stays fixed or top */}
      <Nav />

      {/* 3. Main Body */}
      <div className="max-w-6xl mx-auto bg-[#d1d1d1] shadow-2xl min-h-[70vh] flex flex-col md:flex-row">
        {/* LEFT COLUMN: Identity (The "Who") */}
        <section className="w-full md:w-1/3 p-8 border-r border-[#b8b8b8] flex flex-col items-center text-center md:text-left">
          <img
            src="/me.jpg"
            alt="Ivan Miziuk"
            className="w-48 h-48 rounded-full object-cover border-4 border-[#39352F] shadow-md mb-6"
          />
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
            Ivan Miziuk
          </h1>
          <p className="text-sm font-bold text-[#d67d7d] mb-4">
            CSU CHICO • CLASS OF 2027
          </p>

          <div className="space-y-2 text-sm mb-6">
            <p>
              <strong>Major:</strong> Computer Science
            </p>
            <p>
              <strong>Focus:</strong> Computer Networking, Machine Learning,
              Game Development
            </p>
            <p>
              <strong>Diplomas:</strong> <br />• Liberal Arts-Mathematics <br />{" "}
              • Science A.S, CIS Computer Science A.S
            </p>
          </div>

          <div className="w-full pt-4 border-t border-[#b8b8b8] mb-6">
            <EmailCopy email="imiziuk.job@gmail.com" inverted={true} />
            <ContactButton />
          </div>

          {/* Core Skills Sidebar */}
          <div className="w-full space-y-4">
            <div className="bg-[#e0e0e0] p-4 rounded border-l-4 border-[#39352f]">
              <span className="text-xs uppercase text-gray-500 block mb-1">
                Core Stack
              </span>
              <p className="font-mono font-bold text-sm">
                C++, CUDA, C#, Python, MariaDB, Nginx
              </p>
            </div>
            <div className="bg-[#e0e0e0] p-4 rounded border-l-4 border-[#d67d7d]">
              <span className="text-xs uppercase text-gray-500 block mb-1">
                Specialized Tools
              </span>
              <p className="font-mono font-bold text-sm">
                Ghidra, Cheat Engine, Docker, Git, Unity3D
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: The "Goods" (The "What") */}
        <section className="flex-1 p-8 bg-[#e0e0e0]">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
            Technical Arsenal
          </h2>

          {/* Quick Stats Grid - Now Clickable Links */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* Link 1: GPA -> Education/Resume */}
            <Link
              href="/about"
              className="bg-[#d1d1d1] p-4 rounded text-center block hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer border border-transparent hover:border-[#39352f]"
            >
              <span className="block text-2xl font-black text-[#39352f] group-hover:text-white">
                3.93
              </span>
              <span className="text-xs uppercase opacity-70 font-bold">
                GPA
              </span>
            </Link>

            {/* Link 2: CUDA -> Engineering Page */}
            <Link
              href="/about"
              className="bg-[#d1d1d1] p-4 rounded text-center block hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer border border-transparent hover:border-[#39352f]"
            >
              <span className="block text-2xl font-black text-[#39352f] group-hover:text-white">
                CUDA / C++
              </span>
              <span className="text-xs uppercase opacity-70 font-bold">
                Parallel Computing
              </span>
            </Link>

            {/* Link 3: 1st -> Awards/Competitions */}
            <Link
              href="/projects/game-dev"
              className="bg-[#d1d1d1] p-4 rounded text-center block hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer border border-transparent hover:border-[#39352f]"
            >
              <span className="block text-2xl font-black text-[#39352f] group-hover:text-white">
                1st
              </span>
              <span className="text-xs uppercase opacity-70 font-bold">
                Competition Win
              </span>
            </Link>

            {/* Link 4: 15+ -> Portfolio/Games */}
            <Link
              href="/projects/game-dev"
              className="bg-[#d1d1d1] p-4 rounded text-center block hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer border border-transparent hover:border-[#39352f]"
            >
              <span className="block text-2xl font-black text-[#39352f] group-hover:text-white">
                15+
              </span>
              <span className="text-xs uppercase opacity-70 font-bold">
                Game Prototypes
              </span>
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
            Active Deployments
          </h2>

          {/* Real Project Snippets */}
          <div className="space-y-4">
            {/* Project 1: Cellular Automaton */}
            <div className="group p-4 bg-[#d1d1d1] hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer rounded border-l-4 border-transparent hover:border-[#39352f] shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">
                  Cellular Automaton & Machine Learning
                </h3>
                <span className="text-xs font-mono bg-[#39352f] text-white px-2 py-1 rounded group-hover:bg-white group-hover:text-[#39352f]">
                  C++ / CUDA
                </span>
              </div>
              <p className="text-sm opacity-80 mb-3">
                High-performance evolution simulator. Migrated from C# to
                CUDA/C++ for a 100x speedup, implementing AI to generate images
                via Cellular Automata evolutionary learning.
              </p>
              <div className="flex gap-2 text-xs font-bold opacity-60 uppercase">
                <span>OpenGL</span> • <span>Machine Learning</span> •{" "}
                <span>Optimization</span> • <span>CUDA</span>
              </div>
            </div>

            {/* Project 2: Symchronym */}
            <div className="group p-4 bg-[#d1d1d1] hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer rounded border-l-4 border-transparent hover:border-[#39352f] shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">
                  Symchronym (Multiplayer Mod)
                </h3>
                <span className="text-xs font-mono bg-[#39352f] text-white px-2 py-1 rounded group-hover:bg-white group-hover:text-[#39352f]">
                  Reverse Engineering
                </span>
              </div>
              <p className="text-sm opacity-80 mb-3">
                Reverse-engineered multiplayer mod for{" "}
                <em>The Hobbit (2003)</em>. Utilized Ghidra and Cheat Engine to
                manipulate memory and implemented custom network protocols.
              </p>
              <div className="flex gap-2 text-xs font-bold opacity-60 uppercase">
                <span>Assembly</span> • <span>Networking</span> •{" "}
                <span>C/C++</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footing />
    </main>
  );
}
