import React from 'react';

interface ContactButtonProps {
  href?: string;
  label?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  href = "/contact", 
  label = "Contact Me" 
}) => {
  return (
    <div className="flex justify-center">
      <a
        href={href}
        className="px-8 py-3 bg-[#39352F] text-white font-bold rounded-full 
                   shadow-lg transition-all duration-300 
                   hover:bg-[#2d2a26] hover:scale-105 active:scale-95 
                   border border-white/10"
      >
        {label}
      </a>
    </div>
  );
};

export default ContactButton;