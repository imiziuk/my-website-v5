import Link from "next/link";
import Header from "@/app/components/header";
import Footing from "@/app/components/footing";
import Nav from "@/app/components/nav";

export default function NotFound() {
  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      <Header title="System Error" image="/bg.jpg" />
      <Nav />

      <div className="max-w-6xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-[70vh] flex flex-col items-center justify-center p-10 text-center">
        
        {/* Error Code Graphic */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-[#39352f] opacity-10 select-none">
            404
          </h1>
          <p className="absolute inset-0 flex items-center justify-center text-4xl font-black uppercase tracking-tighter text-[#d67d7d]">
            Route Missing
          </p>
        </div>

        {/* Message */}
        <div className="max-w-md space-y-6">
          <h2 className="text-2xl font-bold border-b-4 border-[#39352f] pb-2 inline-block">
            Segmentation Fault
          </h2>
          <p className="text-lg leading-relaxed opacity-80">
            The requested deployment path does not exist in the current production environment. It may have been deprecated or moved to a private repository.
          </p>
          
          <div className="pt-6">
            <Link 
              href="/" 
              className="inline-block bg-[#39352f] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#d67d7d] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              RETURN TO BASE_STATION
            </Link>
          </div>
        </div>

        {/* Decorative Terminal Line */}
        <div className="mt-12 w-full max-w-lg bg-[#2d2a26] p-4 rounded-md shadow-inner">
          <p className="font-mono text-xs text-[#d67d7d] text-left">
            <span className="text-green-500">ivan@portfolio:~$</span> locate page_requested <br />
            <span className="text-gray-400">error: path not found. exiting with code 1...</span>
          </p>
        </div>
      </div>

      <Footing />
    </main>
  );
}