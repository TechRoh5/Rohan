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
      y: 20,
      repeat: -1,
      duration: 1,
      yoyo: true,
      ease: "power2.out",
    });
  }, []);

  function simple() {
    gsap.to(boxRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: "elastic",
    });
  }

  function move(e) {
    // disable 3D tilt on small screens
    if (window.innerWidth < 768) return;

    const dim = boxRef.current.getBoundingClientRect();
    const x = e.clientX - dim.x - dim.width / 2;
    const y = e.clientY - dim.y - dim.height / 2;

    gsap.to(boxRef.current, {
      rotateX: -(y / 40),
      rotateY: x / 40,
    });
  }

  return (
    <div
      id="bod"
      className="min-h-screen px-4 sm:px-10
                 flex flex-col md:flex-row
                 items-center justify-center
                 bg-[#11142C]"
    >
      {/* ================= TEXT SECTION ================= */}
      <div
        id="ctf"
        onMouseMove={move}
        onMouseLeave={simple}
        className="w-full md:w-1/2
                   mt-14 md:mt-20
                   text-center md:text-left"
      >
        <h1
          id="maintext"
          className="text-4xl sm:text-6xl md:text-7xl
                     text-white font-mono font-bold"
        >
          Hi, I'm <span className="text-[#A685E1]">Rohan</span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl
                       mt-4 md:mt-8 text-gray-400">
          Frontend Developer & Database Manager
        </h2>

        <p className="text-gray-400 text-sm sm:text-base md:text-xl
                      mt-4 md:mt-6 max-w-xl mx-auto md:mx-0">
          Main Rohan hoon, mujhe coding karna bahut pasand hai. Main Chandauli
          district se hoon aur MDS me padhai karta hoon. Mujhe naye-naye tech
          skills seekhna aur projects banana achha lagta hai.
        </p>

        {/* ================= BUTTONS ================= */}
        <div
          id="cts"
          className="w-full mt-7

                     flex flex-col sm:flex-row
                     gap-4 justify-center md:justify-start"
        >
          <button
            id="download"
            className="w-full sm:w-auto
                       px-8 py-3 rounded-2xl
                       bg-[#997FE1]
                       flex justify-center items-center gap-2
                       hover:scale-[1.02] transition"
          >
            <ArrowDownToLine size={18} />
            Download Resume
          </button>

          <a href="#contact" className="w-full sm:w-auto">
            <button
              id="contact-btn"
              className="w-full sm:w-auto
              text-xl
                        max-[700px] : text-sm
                         px-4 py-3 rounded-2xl
                         border border-[#997FE1]
                         text-white
                         flex justify-center items-center gap-2
                         hover:bg-[#997FE1] transition"
            >
              <Mail size={18} />
              Contact me
            </button>
          </a>
        </div>

        {/* ================= SOCIALS ================= */}
        <div
          id="icons"
          className="flex justify-center md:justify-start
                     mt-6 gap-6 text-gray-300 relative"
        >
          <a
            href="https://www.instagram.com/rohans_k__"
            className="hover:bg-[#11172cb0] p-3 rounded-full"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/share/1ARV6HsuZz/"
            className="hover:bg-[#11172cb0] p-3 rounded-full"
          >
            <Facebook />
          </a>

          <div
            ref={next}
            className="absolute left-1/2 -translate-x-1/2 top-14"
          >
            <a href="#about">
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div
        id="imag"
        className="w-full md:w-1/3
                   mt-12 md:mt-0
                   flex justify-center items-center"
      >
        <div
          ref={boxRef}
          id="penatgon"
          className="h-[260px] sm:h-[360px] md:h-[500px]
                     w-[220px] sm:w-[280px] md:w-full
                     bg-white rounded-b-[160px]
                     overflow-hidden"
        >
          <img
            src={profileImg}
            className="w-full h-full object-cover"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
