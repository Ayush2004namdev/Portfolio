import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imgUrl,title,description,gitUrl,previewUrl}) => {
  return (
    <div className='my-4 mx-4'>
        <div className='group rounded-t-xl h-52 md:h-72 bg-center w-full relative overflow-hidden' 
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{background:`url(${imgUrl})`, backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>

        
        <div className="overlay items-center gap-4 justify-center absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link target='_blank' href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                <CodeBracketIcon className='h-10 w-10 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[#ADB7BE] cursor-pointer hover:text-white'/>
            </Link>
            <Link target='_blank' href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                <EyeIcon className='h-10 w-10 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[#ADB7BE] cursor-pointer hover:text-white'/>
            </Link>
        </div>
        </div>
        <div className="text-white rounded-b-xl mb-6 pt-2  bg-[#181818] pb-6 px-4">
            <h2 className='text-xl font-semibold mb-2'>{title}</h2>
            <p className='text-[#ADB7BE] '>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard