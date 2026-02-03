import Header from "./components/header";
import Footing from "./components/footing";
import ContactButton from "./components/contact_me"
import Nav from "./components/nav"; 
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
    <main className="bg-[#2d2a26] min-h-screen text-[#39352f]">
      {/* 1. Full Width Header */}
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      
      {/* 2. Navigation bar stays fixed or top */}
      <Nav />

      {/* 3. Main Body - This is where the magic happens */}
      <div className="max-w-6xl mx-auto bg-[#d1d1d1] shadow-2xl min-h-[70vh] flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: Identity (The "Who") */}
        <section className="w-full md:w-1/3 p-8 border-r border-[#b8b8b8] flex flex-col items-center text-center md:text-left">
          <img 
            src="me.jpg" 
            alt="Ivan Miziuk" 
            className="w-48 h-48 rounded-full object-cover border-4 border-[#39352F] shadow-md mb-6"
          />
          <h1 className="text-3xl font-black uppercase tracking-tight mb-2">Ivan Miziuk</h1>
          <p className="text-sm font-bold text-[#d67d7d] mb-4">CSU CHICO • CLASS OF 2026</p>
          
          <div className="space-y-2 text-sm mb-6">
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>Focus:</strong> Systems & Web Dev</p>
            <p><strong>Location:</strong> Chico, CA</p>
          </div>

          <div className="w-full pt-4 border-t border-[#b8b8b8]">
            <ContactButton />
          </div>
        </section>

        {/* RIGHT COLUMN: The "Goods" (The "What") */}
        <section className="flex-1 p-8 bg-[#e0e0e0]">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
            Technical Arsenal
          </h2>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#d1d1d1] p-4 rounded border-l-4 border-[#39352f]">
              <span className="text-xs uppercase text-gray-500 block">Languages</span>
              <p className="font-mono font-bold">Java, Python, C++, TS</p>
            </div>
            <div className="bg-[#d1d1d1] p-4 rounded border-l-4 border-[#39352f]">
              <span className="text-xs uppercase text-gray-500 block">Tools</span>
              <p className="font-mono font-bold">React, Next.js, Git, AWS</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
            Active Deployments
          </h2>
          
          {/* Project Preview Snippets */}
          <div className="space-y-4">
            <div className="group p-4 hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer rounded border border-transparent hover:border-[#39352f]">
              <h3 className="font-bold">Project ChronoMent</h3>
              <p className="text-sm opacity-80">Full-stack scheduling engine built for student productivity.</p>
            </div>
            <div className="group p-4 hover:bg-[#d67d7d] hover:text-white transition-all cursor-pointer rounded border border-transparent hover:border-[#39352f]">
              <h3 className="font-bold">Wildcat Logic Sim</h3>
              <p className="text-sm opacity-80">Visualizing binary gate logic for CSCI 221 coursework.</p>
            </div>
          </div>
        </section>
      </div>

      <Footing />
    </main>
  );
}