import Header from "./components/header";
import Footing from "./components/footing";
import ContactButton from "./components/contact_me"

interface NavItem {
              id: number;
              img: string;
              path: string;
              alt: string;
            }

          const navItems: NavItem[] = [
  { id: 1, img: "/img1.jpg", path: "/projects", alt: "Projects" },
  { id: 2, img: "/img2.jpg", path: "/skills", alt: "Skills" },
  { id: 3, img: "/img3.jpg", path: "/experience", alt: "Experience" },
  { id: 4, img: "/img4.jpg", path: "/contact", alt: "Contact" },
];


export default function Page() {
  return (
    <main className="bg-[#2d2a26] min-h-screen">
      {/* 1. Header is full width at the top */}
      <Header title="Ivan Miziuk"         image="/bg.jpg"  />

      {/* 2. Centered Body Container */}
      <div className="max-w-4xl mx-auto bg-[#d1d1d1] pt-8 shadow-lg">
      <div className="pl-8 pr-8">
        {/* Intro Section */}
        <section className="">
          
          <div className="flex flex-col md:flex-row gap-6">
            <img 
                src="me.jpg" 
                alt="Profile or Project" 
                className="w-100 h-100 p-6 rounded-full object-cover md:mx-0"
              />
            <p className="prl-6 flex-1">
          <h2 className="text-xl font-bold text-center mb-6">Hello and Welcome</h2>
            I am Aspiring Computer Scientist who is Facinted about the web Computer Networking, Game Development, and Software Development. On this page you will learn more about how I got introduced to computer science field, life changing project I has been working on, and for the final, hobbies I have outside the field.      
            
          <div className="p-2"><ContactButton/></div></p>
            </div>
        </section>
        <div className="bg-[#39352F] p-0.5 "></div><br/>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">My Introduction to Computer Science</h2>
          <div className="flex flex-col md:flex-row gap-6">
            
            <div className="flex-1 space-y-4">
              
              <p className="p-6">
The first time I was introduced to programming happened because I wanted to create a video game and play it with my little brother. Starting with GameStudio I made a simple game prototype where two plaeyrs can walk arround the map, collect coins, and solve puzzles. Me and my little brother had fun. Then I wanted to make more safisticated games, so I started to watch Unity3D tutorials, while learning C# and programing convensions              </p>
              </div>
               <div><div className="bg-[#39352F]"><img 
                src="gmk.png" 
                alt="Profile or Project" 
                className="w-100 h-100 p-6 object-cover"
                              /></div>
          </div></div>
          <p className="p-6">My passion to Computer Science was born when I found a YouTube video on how to create Cellular Automaton that simulates evolution of living organism. And by that time I was already familiar with C# so I implemented my own cellular automaton based on the similar rules with some modification. As time passes by I still comeback to this project, improving it and building it in different environement such as Unity3D + OpenGL and CUDA.</p>
          

        <div className="p-10 mt-8">
          <h3 className="text-lg font-semibold mb-3">Project Showreel</h3>
          <div className="aspect-video w-full">

            <iframe className="w-full h-full rounded-xl shadow-md" src="https://www.youtube.com/embed/pWhpKTOVlno?si=XsQAVSd-nybF8dae" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
          
          <p className="p-6">Game Development and Evolution Simulation has inspiered me to completly dive into the creative work of computer Science field.</p>
            
        </section>

        {/* Game Development Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">A Burst of Ideas</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <p className="p-6">During my Computer Science exploration, I have learned that the filed is much deeper and vast then I have imagined. Thus, focusing on Game Development, Reverse Engineering, Network Communication, and Utilization of Agentic AI for Game Dvelopment. </p>
          </div>


        <div className="bg-[#39352F] p-0.5 "></div>

        <div className="flex justify-center gap-10 py-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="relative group flex-1 aspect-square max-w-[150px] overflow-hidden rounded-xl bg-gray-200 transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
          ))}
          
        </div>
        <div className="bg-[#39352F] p-0.5 "></div><br/>


        </section>

        {/* Hobbies Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center mb-6">Hobbies Outside the Field</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <p className="p-6">
Computer Science is one of my field of interests However, I also enjoy tutoring and playing instruments. 

Over the years I have been tutoring Math and Computer Science subjects. The most interesting to me is the preparation, answering questions, and finding ways to better explain the material so each individual understands the subject. This experience has significantly improved my communication skills and my ability to simplify complex problems, which I apply when documenting code or collaborating with a team 

I have also been practicing playing multiple musical instruments such as flute, guitar, piano, and violin. I play fantasies in Dark Academia Theme, Ukrainian folk songs, and some classical pieces. I mostly play for self amusement .
              </p>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section>
          <h2 className="text-xl font-bold text-center mb-6">Striving for the Future</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <p className="flex-1 p-6">
For the future I am planning to master my understanding in Network Management, Game Development, and being proficient in using various Stacks to produce efficient, scalable products and mentor future programmers to the field.
</p>          </div>
        </section>


        </div>
      <Footing />
      </div>
    </main>
  );
}