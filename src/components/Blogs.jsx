
import { Link } from 'react-router-dom'
import blogData from './mockdata/data/blogData'
import { CiClock2 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";


console.log(blogData)

const Blogs = () => {
  return (
    <div >
        <div className="container py-20">
<h1 className='text-center font-semibold text-primary'>Explore our BLogs</h1>
<h2 className='text-center text-xl font-semibold mt-5 '>Latest Blogs</h2>

<div className="grid grid-cols-1 lg:grid-cols-3 mt-20 items-center gap-5">
    {blogData.map((item)=>{
        return <div className='border border-gray pb-10 '>
            <div className="img w-full">
                <img src={item.imgUrl}></img>
            </div>

            <div className="info px-5 pt-5 space-y-5">
                 <p className='text-blue font-bold'>{item.title}</p>
            <p className='text-sm mb-20'>{item.description.slice(0,40)}</p>

         <div className='border-b-[1px]  border-black/80 pb-3'>
            <Link to={`/blogdetails/${item.id}`} className="text-primary font-bold ">Read more</Link>
         </div>
            <div className='flex items-center justify-between '>
                <p className='text-blue font-bold '>{item.author}</p>
                <div className='flex items-center gap-3'>
                    <p className='text-sm flex items-center'> <span className='text-primary'><SlCalender/></span> {item.date}</p>
                    <p className='text-sm flex items-center'> <span className='text-primary'><CiClock2/></span> {item.time}</p>
                </div>


            </div>
            </div>
           

        </div>

    })}
</div>
        </div>
    </div>
  )
}

export default Blogs