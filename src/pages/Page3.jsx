import React from "react";

const Page3 = () => {
  return (
    <div id='skill' className="items-center flex flex-col w-full h-fit  px-15 py-14 gap-8  bg-[#020817]">
      <h1 className=" whitespace-nowrap  text-[35px] min-[650px]:text-[55px] text-[#997FE1] font-medium">
        Skills & Technologies
      </h1>
      <h2 className="  whitespace-nowrap text-[15px] min-[650px]:text-xl  text-[rgb(148,163,184)] text-xl ">
        Technologies I work with to build amazing applications
      </h2>
      <div className="w-full h-fit px-20 py-5  bg-[#202C40] rounded-xl py-5 mt-5 flex flex-col gap-6 items-center">
        <div className=" ">
          <h1 className=" whitespace-nowrap text-[20px] min-[650px]:text-[25px] text-center whitespace-nowrap text-[#6565E7]  font-medium">
            Technologies I Work With
          </h1>
        </div>
        <div
          className=" flex items-center  
  min-[550px]:flex-row
  min-[550px]:justify-between flex-col items-center gap-2 shrink-0 flex-wrap  w-full"
        >
          <h1  className="bg-[#A385E0] cursor-pointer  items-center flex gap-2 text-[#020817] font-semibold text-sm px-3 py-1  min-[670px]:text-[17px] hover:bg-[#6565E7] hover:scale-[1.1] transition-[0.1s] rounded-full">
            <i class="ri-html5-fill"></i> HTML
          </h1>
          <h1 className="bg-[#A385E0] cursor-pointer   items-center flex gap-2 text-[#020817] font-semibold text-sm px-3 py-1  min-[670px]:text-[17px] hover:bg-[#6565E7] hover:scale-[1.1] transition-[0.1s] rounded-full">
            <i class="ri-css3-fill"></i>CSS
          </h1>
          <h1 className="bg-[#A385E0] cursor-pointer  items-center  flex gap-2 text-[#020817] font-semibold  text-sm  px-3 py-1 min-[670px]:text-[17px] hover:bg-[#6565E7] hover:scale-[1.1] transition-[0.1s] rounded-full">
            <i class="ri-javascript-line"></i>JavaScript
          </h1>
          <h1 className="bg-[#A385E0]  items-center cursor-pointer  flex gap-2 text-[#020817] font-semibold text-sm  px-3 py-1  min-[670px]:text-[17px] hover:bg-[#6565E7] hover:scale-[1.1] transition-[0.1s] rounded-full">
            <i class="ri-nodejs-fill"></i>Node js
          </h1>
          <h1 className="bg-[#A385E0] cursor-pointer  items-center flex gap-2 text-[#020817] font-semibold text-sm  px-3 py-1 min-[670px]:text-[17px] hover:bg-[#6565E7] hover:scale-[1.1] transition-[0.1s] rounded-full">
            <i class="ri-braces-fill"></i>MongoDB
          </h1>
          <h1 className="bg-[#A385E0] cursor-pointer  items-center  flex gap-2 text-[#020817] font-semibold text-sm  px-3 py-1 min-[670px]:text-[17px] hover:bg-[#6565E7] hover:scale-[1.1] transition-[0.1s] rounded-full">
            <i class="ri-service-line"></i>GSAP
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page3;
