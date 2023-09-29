import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex py-16 items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
        <p className='uppercase tracking-widest text-xl text-[#5651e5]'>About</p>
        <h2 className='py-4'>Who I Am</h2>
        <p className='py-2 text-gray-600'>I am a final year student with a passion for solving complex problems in the field of Data Structures and Algorithms (DSA). My journey in the world of technology has been marked by a deep-rooted interest in coding and a strong desire to create impactful projects. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have dedicated myself to developing high-quality applications that leverage this stack.</p>
        <p className='py-2 text-gray-600'>Currently, I am actively seeking opportunities to translate my passion and skills into a professional context. I am eager to contribute to innovative projects, collaborate with like-minded individuals, and continue my journey of growth and learning in the tech industry.

Thank you for taking the time to learn more about me, and I look forward to the exciting challenges and opportunities that lie ahead in my career.</p>
       <Link href='/#projects'className='py-2 cursor-pointer  text-[#5651e5] underline hover:ease-in duration-300'>checkout out my latest projects
       </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-4 items-center justify-center flex hover:scale-105 ease-in duration-300'>
          <Image className='rounded-lg' src="/assets/projects/about.jpg" width="390" height="170" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
