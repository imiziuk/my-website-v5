// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#d67d7d] p-8 flex flex-col mt-26 items-center gap-6">
      {/* Contact Button */}
      <button className="bg-[#d1d1d1] px-8 py-2 font-medium shadow-md hover:bg-white transition-colors">
        Contact Me
      </button>

      {/* Social Icons Placeholder */}
      <div className="flex gap-4">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="w-12 h-12 bg-[#d1d1d1] rounded-full shadow-sm"
          />
        ))}
      </div>
    </footer>
  );
}