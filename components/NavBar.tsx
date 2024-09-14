'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Fade, Slide } from "react-awesome-reveal";


const NavBar = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();


  const LinkItem = ({
    route,
    label,
    isActive,
    index,
  }: {
    route: string;
    label: string;
    isActive: boolean;
    index: number
  }) => {
    return (
      <Fade cascade damping={index} >
        <Link
          href={route}
          onClick={() => setOpened(false)}
          className={`${
            isActive && "bg-red-600"
          } transition-all duration-100 hover:bg-primary-500 flex p-2 gap-4 rounded-md cursor-pointer text-dark-1`}
        >
          <p className='text-white text-lg'> {label} </p>
        </Link>
      </Fade>
    );
  };

  return (
    <>
    <div className='sticky top-0 left-0 z-10 flex justify-between items-center text-[13px] p-2 h-[75px] bg-[#D21034]'>
        <div className='ml-4 flex flex-col items-center'>
        <p className="text-white mb-1 no-underline">
            info@nhptz.org
        </p>
        <div className="flex gap-4 text-white">
                  <Image src="/assets/icons/facebook.svg" alt='facebook' width={20} height={20}/>
                  <Image src="/assets/icons/whatsaap.svg" alt='facebook' width={20} height={20}/>
                  <Image src="/assets/icons/linkedin.svg" alt='facebook' width={20} height={20}/>
                  <Image src="/assets/icons/instagram.svg" alt='facebook' width={20} height={20}/>
            
        </div>
        </div>

        <div className='mr-4'>
        <div className="md:hidden">
          <Image
            src={opened ? '/assets/icons/cancel.svg' : 'assets/icons/menubar.svg' }
            alt="menu"
            width={28}
            height={28}
            onClick={() => setOpened(!opened)}
            className="cursor-pointer"
          />
        </div>

        <div
        className={`fixed ${
          !opened ? "-left-[80vw]" : "left-0"
        } transition-all duration-800 z-10 bg-menu-light dark:bg-menu-dark md:hidden top-[75px] w-[80vw] sm:w-[65vw] h-[90vh] flex justify-start`}
      >
        <div className="flex flex-col gap-8 bg-[#D21034] p-8 pt-12">
          {navLinks.map((link, index) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return <LinkItem key={link.label} index={index} isActive={isActive} {...link} />;
          })}
        </div>
      </div>


      <div
        className='max-md:hidden'
      >
        <div className="flex gap-4">
          {navLinks.map((link, index) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return <LinkItem key={link.label} index={index} isActive={isActive} {...link} />;
          })}
        </div>
      </div>


         </div>

    </div>

     <div className="flex items-center w-full max-h-[150px] p-0 ">
         <Slide> 
         <Image alt='logo' src='/assets/logo.png' width={200} height={200} />    
         </Slide>
         <div className='w-full h-[150px] bg-[#D21034]'></div>
         
     </div>

    </>
  )
}

export default NavBar

