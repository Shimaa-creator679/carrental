import React, { useEffect, useState } from 'react'
import  Navmenue from "../mockdata/data/data"
import { IoSunnySharp } from "react-icons/io5";


import { IoIosMenu } from "react-icons/io";
import Responsivemenue from './Responsivemenue';
import { IoMoon } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({theme,settheme}) => {

  const[navstate,setnavstate]=useState(false)
 const location=useLocation();
 

  useEffect(() => {
    if (location.pathname === "/contact") {
      setnavstate(true);
    } else {
      setnavstate(false); // مهم جدًا لو رجعت لصفحة تانية
    }
  }, [location.pathname]);


  const[open,setopen]=useState(false);
  return (
    <nav className={` ${navstate?"bg-primary/80":"bg-white"} shadow-md relative  dark:bg-dark dark:text-white duration-[800ms]`}>
        <div className="container flex items-center justify-between py-8 gap-5 lg:gap-0">
            <div className="logo text-lg md:text-2xl flex items-center gap-2 font-bold uppercase">

Car Rental

            </div>

            <div className="menue hidden md:block">
                <ul className='flex items-center gap-4'>
{Navmenue.map((item,index)=>{

  if(index===Navmenue.length-1 || index===Navmenue.length-2)
    {return<Link to={item.link} className='hover:text-primary hover:border-b-2 hover:border-b-primary px-1 py-1 font-semibold py-3 '>{item.title}</Link> }

    return  <li><HashLink smooth to={item.link} className='px-1 py-1 font-semibold py-3 hover:text-primary hover:border-b-2 hover:border-b-primary'>{item.title}</HashLink></li>
})}

                </ul>



            </div>

{theme==="dark"?(<button className='text-2xl' onClick={()=>{settheme("light")}}><IoSunnySharp /></button>):(<button className='text-2xl' onClick={()=>{settheme("dark")}}><IoMoon /></button>)}


           
            <div className="humburger md:hidden"   onClick={()=>{setopen(!open)}}>
<IoIosMenu className='text-4xl'/>
            </div>



        </div>
       <Responsivemenue open={open}/> 
    </nav>
  )
}

export default Navbar