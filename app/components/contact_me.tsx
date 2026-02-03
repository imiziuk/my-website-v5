import React from 'react';

interface ContactButtonProps {
  href?: string;
  label?: string;
  inverted?: boolean; // New prop
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  href = "/contact", 
  label = "Contact Me",
  inverted = false
}) => {
  // Logic to switch styles
  const themeClasses = inverted 
    ? "bg-[#d1d1d1] text-[#39352F] hover:bg-gray-100 border-[#39352F]/10" 
    : "bg-[#d67d7d] text-white hover:bg-[#2d2a26] border-white/10";

  return (
    <div className="flex justify-center">
      <a
        href={href}
        className={`px-8 py-3 font-bold rounded-full shadow-lg 
                   transition-all duration-300 hover:scale-105 active:scale-95 
                   border ${themeClasses}`}
      >
        {label}
      </a>
    </div>
  );
};

export default ContactButton;