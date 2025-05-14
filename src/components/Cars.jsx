

import { Link } from 'react-router-dom';
import carData from '../assets/cardata';




const Carsdetails = () => {









  return (
    <div id="cars" className='py-20  bg-white dark:bg-black min-h-[1000px]'>
        <div className="container">
<h1 className='text-black text-5xl font-bold mb-10  dark:text-white'>Lorem, ipsum dolor.</h1>
<p className='dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum maxime sit odio!

</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 items-center gap-10">
 
    {carData&&carData.length>0?   


     carData.map((item)=>{
        return <div  data-aos="fade-up" className='  bg-white shadow-xl dark:border-.5  group px-5 hover:border-[1px]  hover:border-primary  py-10 border-blue dark:border-white/20'>
            <div className='w-[60%] mx-auto group-hover:translate-x-20 duration-300   translate-x-16 grid place-items-end mb-10 text-center '  >
               <img src={item.imgUrl} ></img>   
            </div>
          
            <p className='text-primary  text-center mb-3 font-bold text-2xl dark:text-white'>{item.carName}</p>
            <p className='text-primary text-center '>${item.price}/Day</p>
            <div className="info flex  items-center mt-10 text-black dark:text-white gap-10 text-1xl">
               <Link to="/" className='bg-dark text-white rounded-2xl py-3 text-center  px-4 flex-1'>Rent</Link>
                <Link to={`cardetail/${item.id}`} className='bg-primary/100 text-white rounded-2xl flex-1 py-3 text-center  px-4'>Details</Link>
            </div>

        </div>
    })

    
   :<h1>null</h1>}



</div>

<div className='grid place-items-center mt-10'>
       <button data-aos="fade-up"  className="text-primary border border-primary border-2xl  text-xl  py-2 px-6 rounded-md capitalize bg-transparent  ">get started</button>

</div>
        </div>
    </div>
  )


}

export default Carsdetails