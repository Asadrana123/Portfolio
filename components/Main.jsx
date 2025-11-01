import React from 'react'
import { FaGithub, FaLinkedin, } from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { AiOutlineMail, } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full flex justify-center p-2 items-center mx-auto'>
        <div className='mt-6' >
          <div className=' flex flex-col justify-center items-center pt-8 pb-4'>
          <Image src='/assets/projects/Asad.jpg' alt='aditya yadav' height="200" width="200" className=' rounded-full object-cover object-top  ' />
          </div>
        <p className='uppercase text-sm tracking-widest text-gray-600 '>Let's build something together</p>
        <h2 className='py-2 text-gray-700 '>Hi, I'm <span className='text-[#5651e5]'>Asad!</span></h2>
        <h2 className='py-2 text-gray-700'> Full-Stack developer</h2>
        <p className='text-gray-600 max-w-[70%] m-auto py-4'>I am a Mern Stack Developer with a passion for solving challenging Data Structures and Algorithms (DSA) problems. I have a strong track record of building impressive projects using Next.js. My expertise lies in creating efficient, scalable, and user-friendly web applications.</p>
        <div className='flex items-center py-4 justify-between max-w-[330px] m-auto'>
         <a
  href="https://www.linkedin.com/in/connectasadrana/"
  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin/>
</a>
<a
  href="https://github.com/Asadrana123"
  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub/>
</a>
  href="mailto:asadlukman246@gmail.com"
  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <AiOutlineMail/>
</a>
         <a href="https://drive.google.com/file/d/1l_WYCouT5Oiy4zcpckNPs7e36pcXToqF/view" target="_blank" rel="noopener noreferrer">
  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    <BsFillPersonLinesFill/>
  </div>
</a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default main
