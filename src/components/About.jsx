import React from 'react'
import aboutcar from "../assets/aboutcar.png"

const About = () => {
  return (
    <div  id="about"className='bg-gray py-20 min-h-[800px] dark:bg-aboutdark dark:text-white flex items-center'>
        <div className="container flex items-center gap-20 flex-col md:flex-row ">
            <div className="img">
                <img src={aboutcar} data-aos="fade-right" data-aos-duration="1000"></img>
            </div>

            <div className="info space-y-5 sm:p-16 pb-6"  data-aos="fade-up" data-aos-duration="1000" >
                <h2 className='text-black font-bold text-4xl mb-[15px] dark:text-white'> About us</h2>
                    
                <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore atque ut doloremque est.


                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ratione.

                </p>
                <button data-aos="fade-up" data-aos-delay="1000"  className="text-primary border border-primary border-2xl hover:bg-primary hover:text-black text-xl bg-black py-2 px-6 rounded-md capitalize dark:bg-transparent dark:hover:bg-primary bg-gray ">get started</button>

            </div>
        </div>
    </div>
  )
}

export default About