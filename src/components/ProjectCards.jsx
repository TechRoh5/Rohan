import React from 'react'

const ProjectCards = (props) => {
    console.log(props);
    
  return (
    <div className='h-fit  rounded-2xl px-5 py-5 flex-col flex items-center bg-[#1D293B] '>
        <div className='h-fit rounded-2xl overflow-hidden w-full'>
            <img src={props.ImgSrc} className='h-full w-full object-cover'  alt="" />
        </div>
        <div><h1 className=' mt-4 text-2xl text-[#A385E0]'>{props.ProjectName}</h1></div>
        <div>
            <p className='text-[#707E92] mt-2'>{props.ProjectDescription}</p>
        </div>
        <div className='flex mt-3 gap-1 w-full justify-between max-[700px]:gap-2'>
            <h1 className='px-5 flex gap-2 text-[8px] rounded-full py-1 bg-[#A385E0] max-[700px]:px-2 text-[10px] py-1 whitespace-nowrap'><i class="ri-html5-line"></i>HTML</h1>
            <h1 className='px-5 flex gap-2 text-[8px] rounded-full py-1 bg-[#A385E0] max-[700px]:px-2 text-[10px] py-1 whitespace-nowrap'><i class="ri-css3-line"></i>TailWind CSS</h1>
            <h1 className='px-5 flex gap-2 text-[8px] rounded-full py-1 bg-[#A385E0] max-[700px]:px-2 text-[10px] py-1 whitespace-nowrap'><i class="ri-javascript-line"></i>JavaScript</h1>
        </div>
        <div className='flex w-full  justify-between  mt-4'>
           <a href={props.preview}><button className='px-3 py-2 rounded-xl bg-[#6565E7]'><i class="ri-arrow-right-up-box-line"></i> Live Preview</button></a> 
           <a href={props.code} ><button className='px-4 py-2 rounded-xl text-[#fff] bg-[#020817]'><i class="ri-github-fill"></i> Code</button></a> 
        </div>
    </div>
  )
}

export default ProjectCards