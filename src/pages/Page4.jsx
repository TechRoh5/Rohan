import React from 'react'
import ProjectCards from '../components/ProjectCards'
import ironfit from "../assets/images/ironfit.png"
import Wisdom from "../assets/images/wisdom.png"
const Page4 = () => {
  let projects = [
    {
      ProjectName : "Wisdom Ecucare",
      ProjectDescription : "Wisdom Educare is a responsive educational website designed to showcase courses, institute information, and student-focused content with a clean UI and smooth user experience.",
      ImgSrc : Wisdom,
      preview : "https://techroh5.github.io/wisdom/",
      code : "https://github.com/TechRoh5/wisdom"
    },
     {
      ProjectName : "IronFit",
      ProjectDescription : "IronFit Gym ek modern aur fully responsive fitness website hai jo gym ke services, training programs aur brand identity ko strong visual presentation ke saath showcase karti hai.",
      ImgSrc : ironfit,
      preview : "https://techroh5.github.io/ironfit-gym/",
      code : "https://github.com/TechRoh5/ironfit-gym"
    }
    
  ]
  return (
    <div id='project' className='h-fit px-15 pb-10 gap-6 flex flex-col items-center w-full  bg-[#0A1122] max-[700px]:px-6'>
        <div className='w-[80%] flex-col mb-2 flex items-center text-[#7E72E4] font-medium underline  pt-15 pb-5 '>
          <h1 className='text-5xl whitespace-nowrap'>My Projects</h1>
        </div>
        <div className='w-fit max-[810px]:w-full mt-3 flex flex-col items-center h-fit '>
             <p className=' text-[#94A3B8] whitespace-nowrap text-[xl] max-[810px]:text-[10px]   min-[810px]:text-xl'>A showcase of my recent work and personal projects. Each project</p>
             <p className=' text-[#94A3B8] whitespace-nowrap text-[xl] max-[810px]:text-[10px]  min-[810px]:text-xl'>demonstrates different aspects of my development skills and problem-solving </p>
             <p className=' text-[#94A3B8] whitespace-nowrap text-[xl] max-[810px]:text-[10px]  min-[810px]:text-xl'>abilities</p>
        </div>
        <div className='w-full h-fit flex gap-5 justify-between max-[800px]:flex-col items-center    '>
          {
            projects.map((elem)=>{
              return <ProjectCards ProjectName={elem.ProjectName} ProjectDescription={elem.ProjectDescription} ImgSrc={elem.ImgSrc} code={elem.code} preview={elem.preview}
              />
            })
          }
        </div>
    </div>
  )
}

export default Page4