"use client";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Nav() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isInitialFix, setIsInitialFix] = useState(false);
  const [metrics, setMetrics] = useState({ top: 0, height: 0 });
  
  const navRef = useRef<HTMLDivElement>(null);

  // Measure position and height
  useEffect(() => {
    const updateMetrics = () => {
      if (navRef.current) {
        setMetrics({
          top: navRef.current.offsetTop,
          height: navRef.current.offsetHeight,
        });
      }
    };
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const stickAt = metrics.top + metrics.height; // Threshold 1: Entirely off-screen
      const unstickAt = metrics.top;                // Threshold 2: Back at original spot

      // Logic for sticking
      if (!isFixed && currentScrollY > stickAt) {
        setIsFixed(true);
        setIsVisible(false);    // Hide immediately
        setIsInitialFix(true);  // Disable animation for this frame
      } 
      // Logic for unsticking
      else if (isFixed && currentScrollY <= unstickAt) {
        setIsFixed(false);
        setIsVisible(true);
        setIsInitialFix(false);
      }

      // Handle visibility while fixed
      if (isFixed) {
        if (currentScrollY < lastScrollY) {
          // Scrolling UP: Show nav and re-enable transitions
          setIsInitialFix(false);
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && !isInitialFix) {
          // Scrolling DOWN: Hide nav normally
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, metrics, isFixed, isInitialFix]);

  return (
    <div ref={navRef} className="h-16 w-full relative bg-[#d1d1d1] border-b border-[#d67d7d]">
      <nav
        className={`
          w-full h-16 flex justify-center items-center bg-[#d1d1d1] border-b border-[#d67d7d] z-50
          
          ${isFixed ? "fixed top-0 left-0 shadow-md" : "absolute top-0 left-0"} 
          
          /* Instant snap when first sticking, transition otherwise */
          ${isInitialFix ? "transition-none" : "transition-transform duration-300 ease-in-out"}
          
          ${isFixed && !isVisible ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div className="max-w-4xl mx-auto flex justify-center items-stretch h-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex items-center px-8 text-sm font-bold text-[#39352F] uppercase tracking-wide hover:bg-[#c4c4c4] hover:text-[#d67d7d] transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}