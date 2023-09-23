'use client'

import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import security from '../public/sec-2.jpg'
import backend from '../public/backend.jpg'
import cloud from '../public/cloud.jpg'
import send from '../public/send.png'
import consulting from '../public/consulting.png'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { text } from 'node:stream/consumers'
import Typewriter from 'typewriter-effect'
import logo from './api'
import Navbar from './components/Navbar'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className='bg-white pt-24 px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className="min-h-screen">
          <div className='text-center p-5'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hi, I'm Pradhyuman Arora</h2>
            {/* <h3 className='text-2xl py-2 md:text-3xl'>Software Engineer and Developer</h3> */}
            <h3 className='text-2xl py-2 md:text-3xl dark:text-teal-50'>I am a<Typewriter
              options={{
                strings: ['Software Engineer', 'Web Developer', 'Cyber Security Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
                pauseFor: 1000,
                changeDeleteSpeed: 50,
                changeDelay: 50,
                deletePause: 1000,
              }
              }
            /></h3>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 mt-10 overflow-hidden'>
              <Image src={deved} alt='abc' layout='fill' objectFit='cover' />
            </div>
            <div className='text-4xl flex justify-center gap-20'>
              <div className="relative w-14 h-14 ">
                <div className="cursor-pointer absolute w-14 h-14 bg-white border border-gray-300 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out transform translate-y-2 hover:translate-y-0 hover:shadow-md dark:bg-amber-50">
                  <AiFillGithub />
                </div>
              </div>
              <div className='relative w-14 h-14 my-10'>
                <div className='cursor-pointer absolute w-14 h-14 bg-white border border-gray-300 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out transform translate-y-2 hover:translate-y-0 hover:shadow-md text-blue-500 dark:bg-amber-50'>
                  <AiFillTwitterCircle />
                </div>
              </div>
              <div className='relative w-14 h-14'>
                <div className='cursor-pointer absolute w-14 h-14 bg-white border border-gray-300 rounded-full flex justify-center items-center transition-transform duration-300 ease-in-out transform translate-y-2 hover:translate-y-0 hover:shadow-md text-blue-700 dark:bg-amber-50'>
                  <AiFillLinkedin />
                </div>
              </div>
            </div>
            <h2 className='text-5xl py-2 pt-20 font-medium' id='about-me'>
              <span className='text-teal-600'>About</span> <span className='dark:text-gray-100'>Me</span>
            </h2>
            <div className='text-md py-5 leading-8 text-gray-800 md:text-6xl lg:text-xl dark:text-amber-50'>
              <p>
                I'm Pradhyuman Arora, a B. Tech student at Vellore Institute of Technology, Chennai, specializing in Computer Science & Engineering. My passion lies in backend development and cloud technologies, with hands-on experience in GCP and Azure.</p>
              <p>
                As a software developer, I'm dedicated to crafting robust solutions and staying at the forefront of technology. I believe in continuous self-development, always seeking new knowledge and skills to make a meaningful impact in the tech world.
              </p>
            </div>
            <h2 className='text-5xl py-2 pt-20 font-medium lg:p-2'>
              <span className='dark:text-gray-100'>What I</span> <span className='text-teal-600'>Love To Do?</span>
            </h2>
            <div className='py-5 leading-8 flex flex-wrap items-center justify-center text-justify lg:flex flex-row'>
              <div className='my-8 mx-auto lg:w-48 dark:text-white'>
                <div className='relative mx-auto w-80 h-80 mt-10 overflow-hidden rounded-lg'>
                  <Image src={backend} alt='Backend Development'
                    fill={true}
                    style={{
                      borderRadius: '15px',
                    }} />
                </div>
                <div>
                  <h1 className='text-xl font-bold my-2'>Backend Developer</h1>
                  <p className='text-sm text-gray-700 dark:text-white opacity-60'>I can create REST APIs using NodeJS. I write good, readable and easy-to-understand code.</p>
                </div>
              </div>
              <div className='my-8 mx-auto lg:w-48'>
                <div className='relative mx-auto w-80 h-80 mt-10 overflow-hidden rounded-lg'>
                  <Image src={cloud} alt='Cloud Computing'
                    fill={true}
                    style={{
                      borderRadius: '15px'
                    }} /></div>
                <div>
                  <h1 className='text-xl font-bold my-2'>Cloud Developer</h1>
                  <p className='text-xs text-gray-700 '>I can create REST APIs using NodeJS. I write good, readable and easy-to-understand code.</p>
                </div>
              </div>
              <div className='my-8 mx-auto rounded-md lg:w-48'>
                <div className='relative mx-auto w-80 h-80 mt-10 overflow-hidden rounded-lg'>
                  <Image src={security} alt='Cyber Security'
                    fill={true}
                    style={{
                      borderRadius: '15px'
                    }} /></div>
                <div>
                  <h1 className='text-xl font-bold my-2'>Cyber Security Enthusiast</h1>
                  <p className='text-xs text-gray-700'>I can create REST APIs using NodeJS. I write good, readable and easy-to-understand code.</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section>
          <div className='text-center py-5'>
            <h2 className='text-5xl py-2 pt-10 font-medium lg:pt-16' id='skills'>
              <span className='dark:text-gray-100'>My</span> <span className='text-teal-600'>Skills</span>
            </h2>
            <div className='text-center my-7 p-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:text-gray-100'>
              <h3 className='font-medium py-3'>What I Do?</h3>
              <p>I'm a passionate software developer with expertise in web development, database management, and data science. I create dynamic web applications using ReactJS, NodeJS, and Django, while proficiently managing MySQL and MongoDB databases. My commitment to cybersecurity ensures robust system integrity, and I leverage cloud platforms like GCP and Azure for scalable solutions. With Git, Docker, and Postman, I streamline development workflows for efficient coding practices. My dedication to continuous learning fuels my drive to excel in the ever-evolving tech landscape.</p>
            </div>
            <div className='grid grid-cols-4 gap-6 dark:text-gray-100'>

              {
                logo.map((item, index) => (
                  <div key={index} className='flex items-center justify-center flex-col '>
                    <div className='cursor-pointer w-14 h-14 bg-white border-gray-300 rounded-full flex justify-center items-center shadow-xl m-3'>
                      <Image src={item.src} alt={item.alt} width={40} height={40} />
                    </div>
                    <div className="w-4/5 flex items-center text-center">
                    <p className='text-sm'>{item.name}</p>
                    </div>
                  </div>
                ))}

            </div>
          </div>
        </section>
        <section>
          <div className='text-center py-5'>
            <h2 className='text-5xl py-2 pt-10 font-medium lg:pt-16' id='skills'>
              <span className='dark:text-gray-100'>My</span> <span className='text-teal-600'>Projects</span>
            </h2>
          </div>
        </section>
        <section>
          <div className='text-center py-5'>
            <h2 className='text-5xl py-2 pt-10 font-medium lg:pt-16' id='skills'>
              <span className='text-teal-600'>Contact</span> <span className='dark:text-gray-100'>Me</span>
            </h2>
            <div className='my-5'>
              <div className='flex flex-col text-left shadow-[0_3px_3px_rgb(0,0,0,0.2)] p-2 my-4 rounded-md'>
                <h2 className='font-bold'>Name</h2>
                <h3>Pradhyuman Arora</h3>
              </div>
              <div className='flex flex-col text-left shadow-[0_3px_3px_rgb(0,0,0,0.2)] p-2 my-4 rounded-md'>
                <h2 className='font-bold'>Email</h2>
                <h3>pradhyumanarora@gmail.com</h3>
              </div>
              <div className='flex flex-col text-left shadow-[0_3px_3px_rgb(0,0,0,0.2)] p-2 my-4 rounded-md'>
                <h2 className='font-bold'>Contact</h2>
                <h3>8439803020</h3>
              </div>
            </div>
            <div>
              <form className='flex flex-col items-center justify-center gap-4'>
                <input className='border border-gray-300 rounded-md p-2 w-full' type="text" placeholder='Name' />
                <input className='border border-gray-300 rounded-md p-2 w-full' type="text" placeholder='Email' />
                <input className='border border-gray-300 rounded-md p-2 w-full' type="text" placeholder='Subject' />
                <textarea className='border border-gray-300 rounded-md p-2 w-full' placeholder='Message' />
                <button className='bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 flex items-center' type='submit'>
                  <span>Send Message</span><span className='ml-2'><Image src={send} width={20} /></span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
