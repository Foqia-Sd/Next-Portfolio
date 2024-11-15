import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Figma from "@/assets/images/figma2.png"
import Resume from "@/assets/images/cv.png"
import Card from "@/assets/images/card.png"


const projects = () => {
  return (
    <div className='container pt-32'>
        <Heading title="My Projects" />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3'>

        <div data-aos="zoom-in-up">
        <Image 
        src={Figma} 
        alt='Figma to Design' 
        width={350}
        height={350}
        className='w-[300px] sm:w-[350px] h-auto'/>
        <p className='text-gray-500 mt-4 text-xl'>Convert figma design to code pixel perfect UI/UX.</p>
      </div>
      
        <div data-aos="zoom-in-up">
        <Image 
        src={Resume} 
        alt='Build Resume' 
        width={350}
        height={350}
        className='w-[300px] sm:w-[350px] h-auto'/>
      </div>
      
        <div data-aos="zoom-in-up">
        <Image 
        src={Card} 
        alt='Generate ID Card' 
        width={350}
        height={350}
        className='w-[300px] sm:w-[350px] h-auto'/>
      </div>
    
        </div>
    </div>
    
  )
}

export default projects