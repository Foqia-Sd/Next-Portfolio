import React from 'react'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
    return (
        <div className='container pt-8'>
            <div className='flex justify-between items-center'>
                <div className='text-xl font-medium'>Foqia Siddiqui</div>
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menuLink'>Home</li>
                    <li className='menuLink'>Projects</li>
                    <li className='menuLink'>Skills</li>
                    <li className='menuLink'>Testimonals</li>
                    <li className='menuLink'>Contact</li>
                </ul>

                <IoMenu className='md:hidden' size={30} />

            </div>
        </div>
    )
}

export default Navbar