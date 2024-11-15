import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className="space-y-8">
                <h2 className='text-5xl' data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>

                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                <FaMailBulk size={30}/> foqia.sd99@gmail.com
                </div>

                <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                <MdContactPhone size={30}/> +92-0809070605
                </div>


            </div>

            <div className="space-y-8">
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    className='h-[40px] bg-transparent border border-blue-600' 
                    id='name'
                    />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="text"
                    className='h-[40px] bg-transparent border border-blue-600' 
                    id='email'
                    />
                </div>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="msg">Message</label>
                    <textarea
                    className='bg-transparent border border-blue-600' 
                    id='msg'
                    rows={6}
                    ></textarea>
                </div>

                <button className="bg-blue-700 p-2 px-6 rounded-lg" data-aos="zoom-in-up">
                    Send
                </button>

            </div>
        </div>
    </div>
  )
}

export default Contact