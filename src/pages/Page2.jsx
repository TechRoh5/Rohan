import React from "react";
import { GraduationCap, MapPin , Medal,CodeXml} from "lucide-react";
const Page2 = () => {
  return (
    <div id='about' className="overflow-x-hidden w-full   bg-[#0A1122] px-15 py-15">
      <div className="w-full  pb-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl whitespace-nowrap inline-block border-b-3 rounded-sm border-[#8776E3] pb-1  font-medium text-[#8776E3]">
          About me
        </h1>
      </div>
      <div className="flex justify-between flex-col min-[940px]:flex-row  items-center min-[900px]:items-start">
        <div className="w-[500px] max-[700px]:w-[335px] px-5 transition-[0.2s]  py-4 h-fit rounded-3xl bg-[#1F2B3D]">
          <h2 className="text-2xl text-[#6565E7] inline-block border-b-1 border-[#6565E7] pb-1">
            Mr. Rohan – The Journey
          </h2>
          <h3 className="text-gray-400 mt-5 ">
            Mr. Rohan ek normal student se shuru hua, lekin sapne normal nahi
            the. Subah jaldi uthna, discipline follow karna, aur har din khud ko
            thoda better banana—yeh uski aadat ban chuki thi. School, padhai,
            aur baaki zimmedariyon ke beech bhi usne coding ko apna passion bana
            liya.
          </h3>
          <h3 className="text-gray-400 mt-5 ">
            Jab baaki log time waste kar rahe the, Rohan JavaScript, React aur
            backend seekh raha tha. Errors aaye, bugs aaye, demotivation bhi
            aayi—but give up kabhi option nahi tha. Har problem ke saath ek naya
            lesson mila.
          </h3>
          <h3 className="text-gray-400 mt-5 ">
            Aaj bhi journey complete nahi hui hai. Lekin ek baat clear hai— Mr.
            Rohan sirf sapne nahi dekhta, unke liye daily kaam karta hai. Aur
            yahi uski asli pehchaan hai. 🔥
          </h3>
        </div>

        <div id='edu' className="flex gap-5  items-center px-1  flex-col w-[500px] h-fit  max-[700px]:px-3">
          <div className=" h-fit w-5/7 min-[940px]:w-7/7 mt-4 p-4 px-5 py-4 w-3/7 rounded-2xl bg-[#1F2B3D]">
            <h1 className="text-3xl text-[#fff] flex gap-3 font-medium">
              {" "}
              <GraduationCap size={35} className="text-[#6565E7]" />
              Education
            </h1>

            <h2 className="text-2xl mt-5 text-[#6565E7]">Academic Journey</h2>
            <p className="text-sm mt-5 text-gray-400">
             I have been a hardworking and consistent student in my school. I secured the top position in Classes 6, 7, and 9. Although I could not become the topper in Class 8, I did not give up and focused even more on my studies. Today, I have once again achieved the top position in Class 9, which reflects my dedication, perseverance, and strong work ethic.
            </p>
            <h3 className="flex items-center  gap-2 text-gray-200 mt-5">
              <MapPin size={25} className="text-gray-300" /> Chandauli, Uttar
              Pradesh
            </h3>
          </div>
          <div className="w-5/7  min-[940px]:w-7/7  p-4  h-fit  px-5 py-4 w-3/7 rounded-2xl bg-[#1F2B3D]">
            <h1 className="text-3xl text-[#fff] flex gap-3 font-medium">
              {" "}
              <Medal size={35} className="text-[#6565E7]" />
              Achievements
            </h1>

            <h2 className="text-2xl mt-5 text-[#6565E7]">Academic Journey</h2>
            <p className="text-sm mt-5 text-gray-400">
Along with my studies, I have a strong interest in essay writing. I participated in the TATA Building Essay Writing Competition, where I won a Gold Medal along with a certificate. This achievement has further strengthened my writing skills and boosted my confidence..
            </p>
            <h3 className="flex items-center  gap-2 text-gray-200 mt-5">
              <MapPin size={25} className="text-gray-300" /> Chandauli, Uttar
              Pradesh
            </h3>
          </div>
          <div className="min-[940px]:w-7/7 w-5/7  h-fit  px-5 py-4 w-3/7 rounded-2xl bg-[#1F2B3D]">
            <h1 className="text-3xl text-[#fff] flex gap-3 font-medium">
              {" "}
              <CodeXml size={35} className="text-[#6565E7]" />
              Coding 
            </h1>

            <h2 className="text-2xl mt-5 text-[#6565E7]">Coding Journey</h2>
            <p className="text-sm hover:scale-[1.01] transition-[0.2s] mt-5 text-gray-400">
              Meri coding journey curiosity se shuru hui, jahan se mujhe yeh
              jaanne ki chahat hui ki websites aur apps kaise kaam karte hain.
              Maine dheere-dheere HTML, CSS aur JavaScript seekha aur chhote
              projects bana kar apni skills improve ki. Errors aur bugs aaye,
              lekin maine unse seekhna nahi chhoda. Coding mere liye sirf ek
              skill nahi, balki apne ideas ko reality mein badalne ka tareeqa
              hai, aur main roz practice karke ek better developer banne ki
              taraf aage badh raha hoon. 🚀
            </p>
            <h3 className="flex items-center  gap-2 text-gray-200 mt-5">
              <MapPin size={25} className="text-gray-300" /> Chandauli, Uttar
              Pradesh
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
