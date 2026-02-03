// app/Header.tsx
import Link from "next/link";

interface HeaderProps {
  title: string;
  image: string;
}

export default function Header({ title, image }: HeaderProps) {
  return (
    <header className="relative w-full h-[250px] overflow-hidden">
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Centered Title Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
        <h1 className="w-full text-center text-white text-4xl font-bold bg-black/20 py-2">
          {title}
        </h1>
      </div>

      {/* Optional Navigation Overlay */}
      <nav className="absolute top-4 right-4 flex gap-4 text-white font-medium drop-shadow-md">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </nav>
    </header>
  );
}