import { useRef,useEffect  } from "react";
import { Mail, ArrowDownToLine, Instagram,Facebook,ChevronDown} from "lucide-react";
import profileImg from "../assets/images/pf.png";
import gsap from "gsap";
const Introduction = () => {
  const boxRef = useRef(null);
  const next = useRef(null);
useEffect(() => {
gsap.to(next.current,{
    y:20,
    repeat : -1,
    duration:1,
    yoyo: true ,
    ease:"power2.out"
})
}, [])
function simple(el){
    gsap.to(boxRef.current,{
       rotateX : 0,
        rotateY :0,
        ease:"elastic"
    })
}
 function move(e){
    let dimenson = (boxRef.current.getBoundingClientRect());
    let x = e.clientX - (dimenson.x/2)
    let y = e.clientY - (dimenson.y/2)
    gsap.to(boxRef.current,{
        rotateX : -(y/40),
        rotateY : (x/40)
    })
 }


  return (
    <div id='bod' className=" h-full px-15  items-center flex justify-between bg-[#11142C]">
      <div id='ctf' onMouseMove={(e)=>{move(e)}} onMouseLeave={(el)=>{
        simple(el)
      }} className="pb-18 mt-10 pt-20 w-[50%] h-full ">
        <h1 id='maintext' className="text-7xl text-white font-mono font-bold">
          Hi, I'm <span className="text-[#A685E1]">Rohan</span>{" "}
        </h1>
        <h2 className="text-4xl mt-8 text-gray-400">
          Frontend Developer & Database Manager
        </h2>
        <p className="text-gray-400 text-xl mt-6">
          Main Rohan hoon, mujhe coding karna bahut pasand hai. Main Chandauli
          district se hoon aur MDS me padhai karta hoon. Mujhe naye-naye tech
          skills seekhna aur projects banana achha lagta hai.
        </p>
        <div id='cts' className="w-[88%] gap-3 flex justify-between mt-9">
          <a href="#contact">
             <button id='download'className=" max-[700px]:w-full px-14 rounded-2xl gap-3  whitespace-nowrap py-3 bg-[#997FE1] flex justify-center hover:scale-[1.02] transition-[0.2s] items-center">
            {" "}
            <Mail size={18} />Contact me
          </button>
          </a>
         
        </div>
        <div id='icons' className="flex items-center mt-7 gap-8 px-2 text-gray-300">
          <a href="https://www.instagram.com/rohans_k__?igsh=MWFha3pkd3RrODVkZQ==" className=" hover:bg-[#11172cb0] px-3 py-3 rounded-full "> <Instagram /></a>
              <a href="#about"> <ChevronDown size={30} /></a> 
          <a  href="https://www.facebook.com/share/1ARV6HsuZz/" className=" hover:bg-[#11172cb0] px-3 py-3 rounded-full "> <Facebook /></a>
          </div>
      </div>
      <div id='imag'className="w-[30%] [perspective:1000px] h-full mt-8 flex justify-end items-center mt-3 max-[700px]:w-[50%] mt-26  ">
        <div
          ref={boxRef}
        id='penatgon'
          className="h-[500px] w-fit bg-white rounded-b-[160px] overflow-hidden max-[700px]:w-[400px]"
        >
          <img src={profileImg} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;