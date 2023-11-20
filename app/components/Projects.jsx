'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectSelection from './ProjectSelection'
import Image1 from '../../public/Images/project1.png'
import Image2 from '../../public/Images/project2.png'
import Image3 from '../../public/Images/project3.png'
import Image4 from '../../public/Images/project4.png'
import Image5 from '../../public/Images/project5.png'

const projectData = [
    {
        id:3,
        title:'Netflix Clone',
        description:'A functional clone of netflix with passwordless authentication and with using google apis for data.',
        imgUrl:Image4.src,
        gitUrl:'https://github.com/Ayush2004namdev/netflix-clone.git',
        previewUrl:'https://netflix-clone-six-fawn.vercel.app/',
        tags:['All','Web']
    },
    {
        id:1,
        title:'Coffee Connosoure ',
        description:'A easy to use web application in finding Coffee stores near you with the help of geolocations.',
        imgUrl:Image1.src,
        gitUrl:'https://github.com/Ayush2004namdev/find-coffee-store.git',
        previewUrl:'https://find-stores-coffee.vercel.app/',
        tags:['All','Web']
    },
    {
        id:2,
        title:'Yelp Camp',
        description:'A fully functional crud app for creating and validating users and posts with reviews and many more options.',
        imgUrl:Image2.src,
        gitUrl:'https://github.com/Ayush2004namdev/yelp-camp.git',
        previewUrl:'https://enthusiastic-slug-miniskirt.cyclic.app/',
        tags:['All','Web']
    },
    {
        id:4,
        title:'Raw Fitness',
        description:'A website for a Gym to showcase its features and courses to enroll for a better public approach and more attention.',
        imgUrl:Image5.src,
        gitUrl:'https://github.com/Ayush2004namdev/fitness.git',
        previewUrl:'https://raw-fitness-iimq095r1-ayush2004namdev.vercel.app/',
        tags:['All','Web']
    },
    {
        id:5,
        title:'Organic store',
        description:'A basic website template for a ecommerce website written in pure html and css.',
        imgUrl:Image3.src,
        gitUrl:'https://github.com/Ayush2004namdev/ecom.git',
        previewUrl:'https://ayush2004namdev.github.io/ecom/',
        tags:['All','Web']
    },
]



const Projects = () => {
    const [tag,setTag] = useState('All')
    const handleTagChange = (name) => {
        setTag(name)
    }
    
    const filteredProjects = projectData.filter((project) => project.tags.includes(tag))


  return (
    <div id='projects'>
    <h1 className='text-center text-3xl md:text-5xl text-white font-semibold mb-8'>My Projects</h1>
    <div className="flex gap-4 justify-center text-white md:text-2xl text-lg w-full">
        <ProjectSelection name={'All'} onClick={handleTagChange} active={tag === 'All'}/>
        <ProjectSelection name={'Web'} onClick={handleTagChange} active={tag === 'Web'}/>
        <ProjectSelection name={'mobile'} onClick={handleTagChange} active={tag === 'mobile'}/>
    </div>
    <div className="md:grid-cols-3 md:grid">
        {filteredProjects.length>0 && (
            filteredProjects.map(project => {
                return(
                <ProjectCard key={project.id} {...project}/>
                )
            })
        )}
    </div>
    {filteredProjects.length < 1  && (
            <h1 className='text-white h-28 text-xl md:text-2xl text-center mt-8'>Comming Soon...</h1>
        )}
        </div>
  )
}

export default Projects