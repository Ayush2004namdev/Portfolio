import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-[#121212] '>
      <Navbar/>
      <div className="container px-12 mt-24 pt-4 mx-auto">
      <Hero/>
      <AboutSection/>
      <Projects/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  )
}
