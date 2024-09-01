import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center text-[13px] p-2 h-[10vh] bg-[#D21034]'>
        <p className="text-white mb-1">
            email 
        </p>
        <div className="flex gap-4 text-white">
                  <Image src="/assets/icons/facebook.svg" alt='facebook' width={20} height={20}/>
                  <Image src="/assets/icons/whatsaap.svg" alt='facebook' width={20} height={20}/>
                  <Image src="/assets/icons/linkedin.svg" alt='facebook' width={20} height={20}/>
                  <Image src="/assets/icons/instagram.svg" alt='facebook' width={20} height={20}/>
            
        </div>
    </div>

     <div className="flex justify-between items-center bg-orange-100 p-0 ">
         <div> 
         <Image alt='logo' src='/assets/logo.png' width={200} height={300} />    
         </div>
         <div className='mr-4'>
            <Image alt='logo' src='/assets/icons/menubar.svg' width={30} height={30} />
         </div>
     </div>

    </div>
  )
}

export default NavBar


// 