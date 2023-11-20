'use client'
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'
import AboutImage from '../../public/Images/hero-img.png'


const TAB_DATA = [
    {
        title:'skills',
        id:'skills',
        content: (
            <ul className='list-disc flex flex-col gap-2'>
                <li>Nodejs</li>
                <li>Expressjs</li>
                <li>JavaScript</li>
                <li>MongoDb</li>
                <li>Nextjs</li>
                <li>Tailwind</li>
            </ul>
        )
    },
    {
        title:'education',
        id:'education',
        content:(
            <ul className='list-disc flex flex-col gap-2'>
                <li>B.Tech 2025 Graduate</li>
                <li>Full Stack Web Developer</li>
            </ul>
        )
    },
    {
        title:'experience',
        id:'experience',
        content:(
            <ul className='list-disc flex flex-col gap-2'>
                <li>Intern at XOVEX IT</li>
            </ul>
        )
    }
]



const AboutSection = () => {
    const [tab,setTab] = useState('skills')
    const [isPending,startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

  return (
    <section id='about' className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image
            priority
            unoptimized
            alt='Image'
            src={AboutImage.src}
            width={500}
            height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h1 className="text-4xl mb-4 font-bold text-white">About Me</h1>
                <p className='text-base lg:text-lg '>A Software Developer with entry-level experience specializing in Full stack Web Development. I have worked with Nextjs, Tailwind CSS, JavaScript, Nodejs, MongoDb and am aiming for continuous improvement. A mindset to be team Player.</p>
                <div className="flex gap-4 py-3">
                    <TabButton selectTab={() => {handleTabChange('skills')}} active={tab === 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => {handleTabChange('education')}} active={tab === 'education'}>Education</TabButton>
                    <TabButton selectTab={() => {handleTabChange('experience')}} active={tab === 'experience'}>Experience</TabButton>   
                </div>
                <div className="">
                    {TAB_DATA.find((t) => tab === t.id).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection