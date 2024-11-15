import Image from "next/image"
import Profile from "@/assets/images/profile.png"

const Hero = () => {
  return (
    <div className='md:flex p-8 md:mr-44'>
    <Image src={Profile} alt='Prolife Image'/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Foqia</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero