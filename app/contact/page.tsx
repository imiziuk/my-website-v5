"use client";
import { useState } from "react";
import Header from "../components/header";
import Footing from "../components/footing";
import Nav from "../components/nav";
import EmailCopy from "../components/EmailCopy";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  const email = "imiziuk.job@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      // Using the ID you provided: mvzqeevn
      const response = await fetch("https://formspree.io/f/mvzqeevn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("idle");
        alert("Something went wrong. Please try again!");
      }
    } catch (error) {
      setFormStatus("idle");
      alert("Error submitting form.");
    }
  };

  return (
    <main className="bg-[#2d2a26] min-h-screen font-sans text-[#39352f]">
      <Header title="Ivan Miziuk" image="/bg.jpg" />
      <Nav />

      <div className="max-w-5xl mx-auto bg-[#e5e5e5] shadow-2xl min-h-[80vh] flex flex-col md:flex-row">
        {/* LEFT COLUMN: Direct Contact Info */}
        <section className="w-full md:w-5/12 p-10 bg-[#39352f] text-[#d1d1d1] flex flex-col justify-between relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#d67d7d] opacity-10 rounded-bl-full translate-x-10 -translate-y-10"></div>
          <div></div>
          <div>
            <div className="flex item-centered justify-center">
              {" "}
              <img
                src="/mel.png"
                alt="Ivan Miziuk"
                className="w-45 h-45 rounded-full object-cover border-4 border-[#39352F] shadow-md mb-6"
              />
            </div>
            <h1 className="text-4xl font-black uppercase mb-2">Let's Talk.</h1>
            <p className="text-[#d67d7d] font-bold tracking-widest text-sm mb-8">
              OPEN TO WORK • SUMMER 2026
            </p>

            <p className="mb-8 text-sm leading-relaxed opacity-80">
              I am currently looking for internship opportunities in{" "}
              <b>Software Engineering</b>, <b>Game Dev</b>, or{" "}
              <b>Network Systems</b>.
              <br />
              <br />
              Have a question about my Cellular Automata project? Want to team
              up for a Hackathon? Send me a signal.
            </p>

            {/* Email Quick Copy Component */}
            <div className="mb-8">
              <label className="text-xs uppercase font-bold text-gray-500 mb-2 block">
                Direct Email
              </label>
              <EmailCopy email="imiziuk.job@gmail.com" inverted={true} />
            </div>
          </div>

          {/* Social Links */}
          <div>
            <label className="text-xs uppercase font-bold text-gray-500 mb-4 block">
              Connect Elsewhere
            </label>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ivan-miziuk/"
                className="w-12 h-12 bg-[#2d2a26] flex items-center justify-center rounded hover:bg-[#d67d7d] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/imiziuk"
                className="w-12 h-12 bg-[#2d2a26] flex items-center justify-center rounded hover:bg-[#d67d7d] hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: The Form */}
        <section className="flex-1 p-10 flex items-center justify-center">
          {formStatus === "success" ? (
            <div className="text-center animate-pulse">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-600">I'll get back to you shortly.</p>
              <button
                onClick={() => setFormStatus("idle")}
                className="mt-4 text-[#d67d7d] underline text-sm"
              >
                Send another?
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase text-[#d67d7d] mb-1">
                  Name
                </label>
                <input
                  name="name" // ADDED
                  type="text"
                  required
                  placeholder="Recruiter / Collaborator Name"
                  className="w-full bg-[#d1d1d1] border-b-2 border-[#b8b8b8] focus:border-[#39352f] px-0 py-3 outline-none transition-colors placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#d67d7d] mb-1">
                  Email
                </label>
                <input
                  name="email" // ADDED
                  type="email"
                  required
                  placeholder="email@company.com"
                  className="w-full bg-[#d1d1d1] border-b-2 border-[#b8b8b8] focus:border-[#39352f] px-0 py-3 outline-none transition-colors placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#d67d7d] mb-1">
                  Message
                </label>
                <textarea
                  name="message" // ADDED
                  rows={4}
                  required
                  placeholder="Hey Ivan, I saw your cellular automata project..."
                  className="w-full bg-[#d1d1d1] border-b-2 border-[#b8b8b8] focus:border-[#39352f] px-0 py-3 outline-none transition-colors placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-[#39352f] text-white font-bold py-4 hover:bg-[#d67d7d] transition-colors flex justify-center items-center gap-2"
              >
                {formStatus === "submitting"
                  ? "SENDING..."
                  : "TRANSMIT MESSAGE"}
                {!formStatus && <span className="text-lg">→</span>}
              </button>
            </form>
          )}
        </section>
      </div>
      <Footing />
    </main>
  );
}
