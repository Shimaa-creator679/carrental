import React from 'react'

import { FaCameraRetro } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { GiNotebook } from "react-icons/gi";

const data=
[
    
    {
    id:1,
    icon:<FaCameraRetro />,
    title:"Best Price",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
link:"learn more"
},
    {
    id:2,
    icon:<LuNotebookPen />,
    title:"Fast and Safe",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
link:"learn more"
},
    {
    id:3,
    icon:<GiNotebook />,
    title:"Experience Drivers",
    des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
link:"learn more"
},


]

const Whychoose = () => {



  return (
    <div className='bg-white pt-32 min-h-[1000px] dark:bg-black '>
        <div className="container ">
            <h1 className='text-center text-5xl mb-10 font-serif font-semibold text-black dark:text-white'>Why Choose Us</h1>

            <div data-aos="fade-up" data-aos-duration="1000" className="grid items-center gap-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {data.map((item)=>{
                    return <div className=' py-5 group  dark:bg-aboutdark bg-black rounded-3xl px-10 hover:bg-primary text-center'>
                      <p className='grid place-items-center mb-20 text-5xl text-primary group-hover:text-black '>{item.icon}</p>  
                        <h2 className='text-white mb-20 hover:text-black  '>{item.title}</h2>
                        <p className='text-white hover:text-black '>{item.des}</p>
                        <a href='#' className='text-white hover:text-black'>{item.link}</a>
                    </div>


                })}
            </div>

        </div>
    </div>
  )
}

export default Whychoose