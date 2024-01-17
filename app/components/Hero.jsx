'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import HeroImage from '../../public/Images/hero-img.png'


const Hero = () => {
  return (
    <section className='mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className="col-span-8 text-center sm:text-left place-self-auto">
      <h1 className='text-white mb-4 sm:text-5xl text-4xl lg:text-7xl font-extrabold'>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I am {" "}</span>
        <br /> 
        <TypeAnimation
        sequence={[
          'Ayush',
          1000,
          'Front End Developer',
          1500,
          'Full Stack Developer',
          1500,
          'Tech Enthusiastic',
          1500
        ]}
        wrapper='span'
        speed={10}
        repeat={Infinity}
        />
        </h1>
      <p className='text-[#ADB7BE] text-lg lg:text-xl md:mr-24 mx-auto'>Hii I am Ayush, A Aspiring Web developer trying to make my place in this tech era with full of inspirations.</p>
      <div className="pt-4">
        <Link href={'#contact'}>
        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-600 to-pink-400 text-white hover:bg-slate-200 font-semibold'>Hire Me</button>
        </Link>
        <Link href={'https://drive.google.com/file/d/1Ls9kKZzcG_3nJbdG1f8o72QasMsW8I-9/view?usp=sharing'}  target='_blank'>
        <button className='px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-blue-400 via-purple-400 to-pink-600 bg-transparent rounded-full mt-2 border hover:text-slate-800 text-white'>
          <span className="block px-5 py-2 rounded-full bg-[#121212]">Download CV</span>
        </button>
        </Link>
      </div>
      </div>
      <div className="col-span-4 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] relative">
        <Image
        priority
        unoptimized
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          src={HeroImage.src}
          alt='hero image'
          width={300}
          height={300}  
        />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero