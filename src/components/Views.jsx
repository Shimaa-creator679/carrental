import React from 'react'

const testimonials=[
    {
        id:1,
        des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        name:"Dilshad",
        dataduration:"1000"
    },
    {
        id:2,
        des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        name:"Satya",
        dataduration:"500"
    },
    {
        id:1,
        des:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        name:"Sabir",
        dataduration:"200"
    },
]

const Views = () => {
  return (
    <div className='py-20  bg-white dark:bg-black min-h-[1000px]'>
        <div className="container">
<h1 className='text-4xl font-bold text-black text-center mb-10 dark:text-white'>What Our Clients Say About Us</h1>
<p className='text-center dark:text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-20">
    {testimonials.map((item)=>{
        return <div className='py-10 px-10 rounded-3xl bg-gray' data-aos="fade-up" data-aos-duration={item.dataduration}>
            <div className="img grid place-items-center mb-5">
                <img src='https://picsum.photos/200' className=' w-[90px] h-[90px] rounded-full'></img>
            </div>
            <div className='text-center mb-5'>⭐⭐⭐⭐⭐</div>
            <p className='text-center mb-5'>{item.des}</p>
            <p className='text-center text-black text-xl'>{item.name}</p>
        </div>
    })}
</div>
        </div>
    </div>
  )
}

export default Views