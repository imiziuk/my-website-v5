import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import ContactButton from "./contact_me";

const socials = [
  { icon: <Github />, href: "https://github.com/imiziuk", label: "GitHub" },
  { icon: <Linkedin />, href: "https://www.linkedin.com/in/ivan-miziuk/", label: "LinkedIn" },
  { icon: <Youtube />, href: "https://www.youtube.com/@aione_aione", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#d67d7d] p-8 flex flex-col mt-26 items-center gap-6">
      <div className="p-2"><ContactButton inverted /></div>

      <div className="flex gap-4">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#d1d1d1] hover:bg-white transition-colors rounded-full shadow-sm flex items-center justify-center text-[#d67d7d]"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}