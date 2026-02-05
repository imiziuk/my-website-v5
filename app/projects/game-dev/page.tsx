import Header from "@/app/components/header";
import Footing from "@/app/components/footing";
import ContactButton from "@/app/components/contact_me";
import Nav from "@/app/components/nav";

export default function GameDevPage() {
  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      <Nav />

      <div className="max-w-6xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-screen flex flex-col">
        {/* 1. HERO SECTION: The Competition Win */}
        <section className="p-10 md:p-16 border-b border-[#b8b8b8] bg-[#39352f] text-[#d1d1d1]">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight text-white">
              Game <span className="text-[#d67d7d]">Development</span>
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-[#d67d7d] text-white px-3 py-1 text-sm font-bold uppercase tracking-wider">
                Competition Winner
              </span>
              <span className="bg-[#555] text-white px-3 py-1 text-sm font-bold uppercase tracking-wider">
                Team Lead
              </span>
            </div>

            <p className="text-xl leading-relaxed opacity-90 mb-8 border-l-4 border-[#d67d7d] pl-6">
              Transforming a legacy codebase into a modern multiplayer
              experience.
              <br className="hidden md:block" />A project that started as a
              prototype and evolved into a competitive product with a dedicated
              team.
            </p>

            <div className="flex items-center justify-between w-full">
              {" "}
              {/* AWARD BADGE */}
              <div className="inline-flex items-center gap-4 bg-[#fff] text-[#39352f] p-4 rounded shadow-lg">
                <div className="text-4xl">🏆</div>
                <div>
                  <span className="block text-xs uppercase tracking-widest font-bold text-[#d67d7d]">
                    Achievement
                  </span>
                  <span className="block font-black text-lg">
                    Won Game Dev Competition
                  </span>
                </div>
              </div>
              <ContactButton />
            </div>
          </div>
        </section>

        {/* 2. SKILLS MATRIX (From PDF Source 6-9) */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b border-[#b8b8b8]">
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Core Development
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Unity 3D</li>
              <li>C# & .NET</li>
              <li>Visual Studio</li>
            </ul>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-[#b8b8b8] bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Design & Audio
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Audio Design</li>
              <li>Level Loading Logic</li>
              <li>Animation Sync</li>
            </ul>
          </div>
          <div className="p-8 bg-[#d1d1d1]">
            <h3 className="font-bold uppercase text-xs mb-4 text-[#d67d7d]">
              Professional Skills
            </h3>
            <ul className="space-y-2 font-mono text-sm font-bold">
              <li>Team Leadership</li>
              <li>Scalable Architecture</li>
              <li>Communication</li>
            </ul>
          </div>
        </section>

        {/* 3. NARRATIVE CONTENT */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* LEFT: The Story */}
          <section className="md:w-2/3 p-10 md:p-16 space-y-12">
            {/* The Vision */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
                The Concept
              </h2>

              <p className="leading-relaxed mb-4 text-sm md:text-base">
                The prompt was simple:{" "}
                <i>
                  "A video game where players can fight enemies, collect coins
                  and complete quests seems like a perfect platform for a
                  multiplayer."
                </i>
              </p>

              <div className="flex justify-center items-center">
                <img
                  src="/win.jpeg"
                  alt="Cellular Artist"
                  className="w-auto h-auto border-4 border-[#39352F] shadow-md mb-6"
                />
              </div>
            </div>

            {/* Team & Unity Work */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#d67d7d] w-8 h-1 mr-3"></span>
                Development Pipeline
              </h2>
              <p className="leading-relaxed mb-6 text-sm md:text-base">
                As the project grew, so did the team. My role expanded from
                engineer to <b>Technical Lead</b>.
              </p>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-[#39352f]">
                <h4 className="font-bold text-sm uppercase mb-4 text-gray-500">
                  Key Contributions
                </h4>
                <ul className="list-disc list-inside space-y-3 font-medium text-sm">
                  <li>
                    <span className="text-[#39352f]">Prototyping:</span>{" "}
                    leveraged <b>Unity 3D</b> and C# to visualize network
                    interpolation before applying it to the legacy engine.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Asset Management:</span>{" "}
                    Handled complex logic for <b>Level Loading</b> and animation
                    states to ensure all clients saw the same world.
                  </li>
                  <li>
                    <span className="text-[#39352f]">Audio Design:</span>{" "}
                    Implemented spatial sound cues for multiplayer interactions.
                  </li>
                </ul>
              </div>
            </div>

            {/* Personal Company */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-[#39352f] w-8 h-1 mr-3"></span>
                Professional Growth
              </h2>
              <p className="leading-relaxed text-sm md:text-base mb-4">
                This project wasn't just code; it was the foundation of my{" "}
                <b>Personal Company</b>.
              </p>
              <p className="leading-relaxed text-sm md:text-base">
                It taught me how to manage "Request for Information" (RFI) from
                other team members and maintain a clean, scalable codebase using
                modern OOP standards even within a restrictive environment.
              </p>
            </div>
          </section>

          {/* RIGHT: Visuals / Sidebar */}
          <aside className="md:w-1/3 bg-[#39352f] text-[#d1d1d1] p-10 flex flex-col gap-8">
            {/* Project Status */}
            <div>
              <iframe
                className="border-none" // If using Tailwind
                style={{ border: 0 }} // If using inline styles
                src="https://itch.io/embed/2890107?bg_color=291C12&amp;fg_color=E8D3C1&amp;link_color=E8D3C1&amp;border_color=E8D3C1"
                height="167"
              >
                <a href="https://cupofgames.itch.io/sand-of-time">
                  Chronoment by Cup of games, Periwinkle_M
                </a>
              </iframe>
            </div>

            {/* Call to Action */}
            <div className="mt-auto pt-8 border-t border-gray-600">
              <p className="text-sm italic opacity-70 mb-4">
                "Applying best practices of coding convention and scalability."
              </p>
              <a
                href="/contact"
                className="block w-full text-center bg-[#d67d7d] text-white font-bold py-3 rounded hover:bg-white hover:text-[#39352f] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </aside>
        </div>
      </div>
      <Footing />
    </main>
  );
}
