import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='px-8 mt-16 flex flex-wrap md:justify-center gap-12'>
    
         <div className='flex gap-10 max-md:flex-col'>

         <div className="min-w-[50vw]">
          <img className='w-full h-auto' src="/assets/images/photo-about.jpg" alt="photo" />
         </div>

           <div>
           <div className="">
        <div className="text-center">
        <h2 className="half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block">About us</h2>
        </div>
        <p className="py-4 mt-4">The establishment of Networking for Healthcare Promotion (NHP) arises from the need to address significant challenges facing the Tanzanian healthcare sector, including disparities in healthcare access, inadequate health infrastructure, and gaps in health promotion and disease prevention.</p>
        

        </div>

        <div className="">
        
          <div className="flex justify-center gap-4">
            <Image width={35} height={35} alt='vision icon' src="/assets/images/vision.png"/>
          <div className="text-center">
        <h2 className="half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block">Our vision</h2>
        </div>
          </div>


        <p className="py-4 mt-4">To be a leading force in fostering innovative, collaborative healthcare solutions that significantly improve health outcomes and equity in Tanzania.</p>
        

        </div>

        <div className="">
        
          <div className="flex justify-center gap-4">
            <Image width={35} height={35} alt='mission icon' src="/assets/images/mission.png"/>
          <div className="text-center">
        <h2 className="half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block">Our mission</h2>
        </div>
          </div>


        <p className="py-4 mt-4">To build a dynamic network of healthcare professionals and stakeholders to advance health promotion, facilitate knowledge exchange, and implement collaborative projects aimed at addressing key health challenges.</p>
        

        </div>


        <div className="">
        
          <div className="flex justify-center gap-4">
            <Image width={35} height={35} alt='mission icon' src="/assets/images/values.png"/>
          <div className="text-center">
        <h2 className="half-underline text-[#0d0d4e] text-[24px] font-[900] inline-block">Our Core Values</h2>
        </div>
          </div>


        <p className="py-4 mt-4">Collaboration, Professionalism, Integrity and Accountability.</p>
        

        </div>
           </div>

         </div>

    </div>
  )
}

export default About