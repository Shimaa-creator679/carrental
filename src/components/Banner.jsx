import React from 'react'

const Banner = () => {
  return (
    <div className='py-20 dark:bg-black min-h-[600px]'>
        <div className="container">
        <div className="bg-banner py-10 flex  flex-col md:flex-row items-center gap-20 px-10">
            <div className="info">
                <h1 className='text-white text-2xl md:text-4xl font-bold'>Let's collaborate on your upcoming car rental venture  

                </h1>
                <p  className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis atque repudiandae accusantium voluptas.

                </p>
            </div>
            <div className="button">
                <button className='text-white bg-primary rounded-xl px-4 py-3'>contact</button>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Banner