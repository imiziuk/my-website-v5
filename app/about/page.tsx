import Header from "../components/header";
import Footing from "../components/footing";
import ContactButton from "../components/contact_me";
import Nav from "../components/nav";

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
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      <Nav />

      {/* Main Content Card */}
      <div className="max-w-5xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-screen">
        {/* 1. HERO SECTION: Who I Am */}
        <section className="p-10 md:p-16 border-b border-[#b8b8b8]">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative">
              <img
                src="me.jpg"
                alt="Ivan Miziuk"
                className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover border-4 border-[#39352F] shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#d67d7d] text-white px-4 py-1 font-bold text-sm shadow-sm rotate-2">
                CSU Chico '26
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tight">
                Developer. <span className="text-[#d67d7d]">Creator.</span>{" "}
                Mentor.
              </h1>
              <p className="text-lg leading-relaxed opacity-80 mb-6">
                I am an aspiring Computer Scientist fascinated by{" "}
                <b>Network Communication</b>, <b>Game Development</b>, and{" "}
                <b>Agentic AI</b>. My journey started with a simple goal: to
                build a game for my brother. Today, I'm building scalable
                software and simulating complex life systems.
              </p>
              <ContactButton />
            </div>
          </div>
        </section>

        {/* 2. THE ORIGIN STORY: Game Dev */}
        <section className="p-10 md:p-16 bg-[#d1d1d1]">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
            The Origin Story
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">It started with a Prototype</h3>
              <p className="leading-relaxed">
                The first time I touched code, it was to create a video game to
                play with my little brother. Using <b>GameStudio</b>, I built a
                prototype where we could explore a map, collect coins, and solve
                puzzles together.
              </p>
              <p className="leading-relaxed">
                That joy of creation pushed me toward more sophisticated tools.
                I dove into <b>Unity3D</b> and <b>C#</b>, learning not just how
                to make things move, but how to write clean, maintainable code
                conventions.
              </p>
            </div>
            <div className="bg-[#39352f] p-2 rounded-lg shadow-lg rotate-1 hover:rotate-0 transition-all">
              {/* Fixed the double className issue here */}
              <img
                src="gmk.png"
                alt="Game Prototype"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL DEEP DIVE: Cellular Automata */}
        <section className="p-10 md:p-16 bg-[#e5e5e5]">
          <div className="flex flex-col-reverse md:flex-row gap-10">
            <div className="flex-1">
              <div className="aspect-video w-full bg-black rounded-xl shadow-lg overflow-hidden border-4 border-[#39352f]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/pWhpKTOVlno?si=XsQAVSd-nybF8dae"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Engineering Evolution
              </h2>
              <p className="leading-relaxed">
                My passion for CS solidified when I discovered{" "}
                <b>Cellular Automata</b>—simulating the evolution of living
                organisms through code.
              </p>
              <p className="leading-relaxed">
                I implemented my own simulation, but I didn't stop there. I am
                currently optimizing this project using <b>OpenGL</b> and{" "}
                <b>CUDA</b> to handle massive parallel processing loads, pushing
                the boundaries of what my hardware can simulate.
              </p>
            </div>
          </div>
        </section>

        {/* 4. HOBBIES & SOFT SKILLS (Grid Layout) */}
        <section className="p-10 md:p-16 bg-[#d1d1d1]">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Beyond the Code
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tutoring Card */}
            <div className="bg-[#e5e5e5] p-8 rounded-lg border-l-4 border-[#d67d7d] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">The Tutor</h3>
              <p className="text-sm leading-relaxed opacity-90">
                I tutor Math and CS subjects. The challenge of explaining
                complex algorithms to different learning styles has sharpened my{" "}
                <b>communication skills</b>. This translates directly to how I
                document code and collaborate with engineering teams.
              </p>
            </div>

            {/* Music Card */}
            <div className="bg-[#e5e5e5] p-8 rounded-lg border-l-4 border-[#39352f] hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3">The Musician</h3>
              <p className="text-sm leading-relaxed opacity-90">
                I play flute, guitar, piano, and violin. Whether it's Ukrainian
                folk songs or Dark Academia fantasies, music teaches me
                discipline and pattern recognition—skills that are surprisingly
                transferable to software architecture.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FUTURE GOALS */}
        <section className="p-10 md:p-16 text-center bg-[#39352f] text-[#d1d1d1]">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Striving for the Future
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            I am actively seeking opportunities in <b>Network Management</b> and{" "}
            <b>Game Development</b>. My goal is to master the full stack to
            produce efficient, scalable products and eventually mentor the next
            generation of programmers.
          </p>
        </section>

        {/* 6. NAVIGATION LINKS */}
        <div className="bg-[#e5e5e5] py-12 border-t border-[#b8b8b8]">
          <div className="flex justify-center gap-6 md:gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="relative group w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-[#39352F] shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                  <span className="text-white font-bold text-sm md:text-lg tracking-wider uppercase border-b-2 border-transparent group-hover:border-[#d67d7d]">
                    {item.alt}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footing />
    </main>
  );
}
