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
        <p className='py-2 text-gray-600'>I am a Software Developer with over a year of professional
          experience, passionate about solving complex problems through innovative technology solutions. 
          My journey in software development has been marked by hands-on experience in building full-stack 
          applications and implementing real-time systems that create meaningful impact.</p>
        <p className='py-2 text-gray-600'>Currently working as a Software Developer at Rangi Lalls, I have contributed to projects that serve high-traffic environments and have experience mentoring others through my role as a Teaching Assistant at Coding Ninjas. I am passionate about writing clean, efficient code and continuously learning new technologies to stay at the forefront of software development.</p>
       {/* <Link href='/#projects'className='py-2 cursor-pointer  text-[#5651e5] underline hover:ease-in duration-300'>checkout out my latest projects
       </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-4 items-center justify-center flex hover:scale-105 ease-in duration-300'>
          <Image className='rounded-lg' src="/assets/projects/about.jpg" width="390" height="170" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
