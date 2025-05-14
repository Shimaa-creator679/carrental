import React from 'react'
import blogData from './mockdata/data/blogData'
import { useParams } from 'react-router-dom'

const Blogdetails = () => {

    const{id}=useParams();

    const blog =blogData.find((item)=>{
        return item.id===parseInt(id);
    })

    console.log(blog)
  return (
    <div className='pt-10 bg-gray-800 pb-20'>
        <div className="container">
            <p className='text-center mb-10 text-3xl font-bold text-blue'>{blog.title}</p>
<div className="img w-[60%] mx-auto grid rounded-3xl overflow-hidden place-items-center ">
   <img src={blog.imgUrl} className='h-full'></img>
</div>
<div className="info">
    <p className='mb-10 mt-10 leading-relaxed'>{blog.description}</p>
    <p className=''>{blog.quote}</p>
</div>

        </div>
    </div>
  )
}

export default Blogdetails