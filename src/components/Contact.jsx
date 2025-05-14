import React from 'react'
import { FaRegAddressBook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='pt-10 pb-20  flex items-center dark:bg-black bg-[#fafafa] items-center justify-center'>
<div className="flex flex-col md:flex-row md:w-[65%] w-[90%] mx-auto ">
    <div className='bg-white flex-1 py-10  px-10 md:rounded-tl-2xl  md:rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl'>
<h1 className='text-primary/80 font-bold text-xl mb-5 md:text-3xl'>lets go in touch</h1>
<p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ad ut vel exercitationem quidem id dolore omnis ea quas eius.

</p>
<p className='flex itrms-center gap-3 mb-5'><FaRegAddressBook className='text-2xl text-primary/80' /> 92 cherry deive unidolae ,ny,198</p>
<p className='flex itrms-center gap-3 mb-10' ><FaPhone className='text-lg text-primary/80' /> 123-567-980</p>
<p className='text-semibold'>Connect with us:</p>
<ul className='flex items-center gap-5 mt-5'>
    <li><a href='#'><FaFacebookSquare className='text-3xl text-primary/80'/>  </a></li>
    <li><a href='#'><FaFacebookSquare  className='text-3xl text-primary/80' />  </a></li>
    <li><a href='#'><FaFacebookSquare  className='text-3xl text-primary/80' />  </a></li>
    <li><a href='#'><FaFacebookSquare  className='text-3xl text-primary/80' />  </a></li>
 
</ul>


    </div>



<div className='bg-primary/80  flex-1 py-10  px-10 md:rounded-tr-2xl  text-white   md:rounded-br-2xl   rounded-br-2xl '>

<h1 className='font-bold '>Contact us:</h1>

<form>
   <input  placeholder='username' type='text' className=' text-white px-3 placeholder-white outline-none w-full py-2 border-2 border-white rounded-3xl bg-transparent my-3'/>
   <input placeholder='name'  type='email' className=' text-white  px-3  placeholder-white  outline-none w-full py-2 border-2 border-white  rounded-3xl bg-transparent my-3'/>
   <input placeholder='phone'  type='text' className='  text-white  px-3 placeholder-white  outline-none border-2 w-full py-2  border-white  rounded-3xl bg-transparent my-3' />
   <textarea  placeholder='message' rows="4" cols="5"className='w-full  px-3  placeholder-white outline-none border-2 border-white rounded-3xl  bg-transparent'></textarea>

       <button type='submit'className='text-primary/80 bg-white rounded-3xl py-1 px-5 mt-5'>send</button> 
  
</form>
</div>
</div>
    </div>
  )
}

export default Contact