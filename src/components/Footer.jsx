import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='bg-gray py-20 px-20 flex items-center justify-between dark:bg-aboutdark dark:text-white'>
        <div>
<h1 className='text-black text-2xl font-bold mb-10 dark:text-white'>Car Rental</h1>
<p className='w-[80%] mb-5'>Lorem ipsum dolor sit amet consectetur.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.

</p>
<p>Noida, Uttar Pradesh</p>
<p className='flex gap-3 items-center mt-5'> <IoIosPhonePortrait /> +91 123456789</p>

<div className="social flex items-center gap-3 mt-5">
    <a href='#' className='text-4xl'><FaInstagram /></a>


    <a href='#' className='text-4xl' ><FaFacebook /></a>
    <a href='#'className='text-4xl' ><IoLogoWhatsapp /></a>
</div>               
        </div>
        <div className="links flex flex-col ">
<h1 className='text-cente font-bold mb-10  '>Important Links</h1>
<ul className='flex flex-col items-center justify-center'>

    <li className='py-3'> <a href='#' className='flex items-center gap-3  hover:text-primary'><BsFillSendFill  /> Home</a></li>
    <li  className='py-3'> <a href='#'className='flex items-center  gap-3 hover:text-primary' ><BsFillSendFill /> About</a></li>
    <li  className='py-3'> <a href='#'className='flex items-center gap-3  hover:text-primary' ><BsFillSendFill /> Contact</a></li>
    <li className='py-3' > <a href='#'className='flex items-center gap-3  hover:text-primary' ><BsFillSendFill /> Blog</a></li>
</ul>
        </div>
    </div>
  )
}

export default Footer