import { FooterLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white px-8 py-4 mt-20'>
        
        <div className='flex flex-col md:flex-row-reverse justify-between items-center'>
        <div className="flex max-md:flex-col md:justify-center md:gap-20">
       <div className="mt-8">
            <h2 className='text-lg uppercase'>Useful links</h2>
            <ul className='mt-4 flex flex-col gap-y-2'>
                <li>
                    <Link href='#'>About us</Link>
                </li>
                <li>
                    <Link href='#'>News and events</Link>
                </li>
                <li>
                    <Link href='#'>Contact us</Link>
                </li>
                <li>
                    <Link href='#'>Blog</Link>
                </li>
            </ul>
        </div>
        <div className="mt-8">
            <h2 className='text-lg'>Get in touch with us via</h2>
            <div className="mt-2 flex gap-4 -ml-1">
                {
                   FooterLinks.map( link => (
                       <Link key={link.name} href={link.path}>
                          <Image src={link.icon} alt={link.name} width={35} height={35} />
                       </Link>
                   ))
                }
            </div>
        </div>
       </div>

       <div className='flex justify-center'>
        <Image src='/assets/logo.png' alt='logo' width={300} height={300} />
       </div>
        </div>

       
    <h3 className='text-center mb-4'>All Right Reserved © 2024</h3>
    </div>
  )
}

export default Footer