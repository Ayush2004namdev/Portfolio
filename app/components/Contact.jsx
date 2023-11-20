'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

const Contact = () => {
    const [to,setTo] = useState('')
    const [subject,setSubject] = useState('')
    const [text,setText] = useState('')
    const [sent,setIsSent] = useState(false)
    const [load,setLoad] = useState(false)

    const handleMailBtnClick = async(e) => {
        e.preventDefault()
        setIsSent(false)
        setLoad(true)
        const res = await axios.post('/api/send',{to,subject,text})
        console.log(res)
        setLoad(false)
        setIsSent(true)
        setTo('')
        setSubject('')
        setText('')
    }

  return (
    <div id='contact' className='grid md:grid-cols-2 mt-12 mb-4  md:my-16 pt-24 pb-12 gap-4 relative'>
        <div className="text-white">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="flex gap-4 items-center w-full">
        <Link href='https://github.com/Ayush2004namdev' target='_blank'>
        <FaGithub className='h-12 w-12'/>
        </Link>
        <Link href='https://www.linkedin.com/in/ayush-namdev-959872244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
        <FaLinkedinIn className='h-12 w-12'/>
        </Link>
        </div>
        </div>
        <div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input 
                onChange={(e) => setTo(e.target.value)}
              type="email"
              value={to}
              id="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
            onChange={(e) => setSubject(e.target.value)}
              type="text"
              value={subject}
              id="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
              id="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div className="mb-6">
            <button
            onClick={handleMailBtnClick}
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
                {load ? 'Sending...' :'Send message'}
            </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Contact