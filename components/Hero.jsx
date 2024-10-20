'use client'
import React from 'react'
import { Fade } from 'react-awesome-reveal'


const Hero = () => {
  return (
    <div>
        <section className="relative h-[80vh] ">
      <div className="bg-[url('/assets/images/featured-image.jpg')] w-full h-full bg-cover bg-no-repeat bg-center">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-[#111] to-black opacity-[.6]"></div>
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col p-4 text-center mx-auto max-sm:w-[80vw]">
        
            <Fade>
              <p className="mt-4 text-white font-[900] text-[40px]">
              NETWORKING FOR <br/> HEALTHCARE PROMOTION
              </p>
            </Fade>
          </div>

            
        </div>


      </div>
    </section>
    </div>
  )
}

export default Hero

/*

        <div className="cursor-pointer absolute -bottom-6 left-[50%] -translate-x-1/2 rounded-3xl w-[32px] h-[60px] border-4 bg-indigo-700 border-orange-200 p-2 flex items-center">
          <motion.div
            className="w-3 h-3 rounded-full bg-slate-50 mb-6"
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          ></motion.div>
        </div>
*/