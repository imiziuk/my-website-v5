// app/Header.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./nav";
interface HeaderProps {
  title: string;
  image: string;
}

export default function Header({ title, image }: HeaderProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4); // Adjust 0.4 for speed
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full h-[250px] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-[150%]" // Extra height for movement
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center', 
          backgroundSize: 'cover',
          transform: `translateY(${offset}px)`, // The parallax movement
          top: '-25%' // Centers the oversized image initially
        }}
      />
      
      <div className="relative z-10 flex h-full items-center justify-center bg-black/30">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>

      

    </header>
  );
}