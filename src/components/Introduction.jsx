import { useRef, useEffect } from "react";
import {
  Mail,
  ArrowDownToLine,
  Instagram,
  Facebook,
  ChevronDown,
} from "lucide-react";
import profileImg from "../assets/images/pf.png";
import gsap from "gsap";

const Introduction = () => {
  const boxRef = useRef(null);
  const next = useRef(null);

  useEffect(() => {
    gsap.to(next.current, {
      y: 18,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "power2.out",
    });
  }, []);

  const resetTilt = () => {
    gsap.to(boxRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(boxRef.current, {
      rotateX: -(y / 35),
      rotateY: x / 35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      id="bod"
      className="min-h-screen bg-[#11142C]
                 flex flex-col md:flex-row
                 items-center justify-center
                 px-5 sm:px-10"
    >
      {/* ================= LEFT TEXT ================= */}
      <div
        id="ctf"
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        className="w-full md:w-1/2
                   text-center md:text-left
                   mt-14 md:mt-0"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white font-mono">
          Hi, I'm <span className="text-[#A685E1]">Rohan</span>
        </h1>

        <h2 className="text-lg sm:text-2xl md:text-4xl text-gray-400 mt-4 md:mt-6">
          Frontend Developer & Database Manager
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-xl mx-auto md:mx-0">
          Main Rohan hoon, mujhe coding karna bahut pasand hai. Main Chandauli
          district se hoon aur MDS me padhai karta hoon. Mujhe naye-naye tech
          skills seekhna aur projects banana achha lagta hai.
        </p>

        {/* ================= BUTTONS ================= */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            id="download"
            className="px-8 py-3 rounded-2xl bg-[#997FE1]
                       flex items-center justify-center gap-2
                       text-sm sm:text-base font-medium
                       hover:scale-105 transition"
          >
            <ArrowDownToLine size={18} />
            Download Resume
          </button>

          <a href="#contact">
            <button
              id="contact-btn"
              className="px-8 py-3 rounded-2xl
                         border border-[#997FE1]
                         text-white
                         flex items-center justify-center gap-2
                         text-sm sm:text-base
                         hover:bg-[#997FE1] transition"
            >
              <Mail size={18} />
              Contact Me
            </button>
          </a>
        </div>

        {/* ================= SOCIALS ================= */}
        <div className="mt-7 flex gap-6 justify-center md:justify-start text-gray-300 relative">
          <a
            href="https://www.instagram.com/rohans_k__"
            className="p-3 rounded-full hover:bg-[#1D283A]"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/share/1ARV6HsuZz/"
            className="p-3 rounded-full hover:bg-[#1D283A]"
          >
            <Facebook />
          </a>

          <div
            ref={next}
            className="absolute left-1/2 -translate-x-1/2 top-14"
          >
            <a href="#about">
              <ChevronDown size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="w-full md:w-1/3 flex justify-center mt-12 md:mt-0">
        <div
          ref={boxRef}
          className="h-[260px] sm:h-[360px] md:h-[500px]
                     w-[220px] sm:w-[280px] md:w-full
                     bg-white rounded-b-[160px]
                     overflow-hidden shadow-xl"
        >
          <img
            src={profileImg}
            alt="Rohan"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
