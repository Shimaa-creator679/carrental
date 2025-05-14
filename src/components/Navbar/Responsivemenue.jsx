/* eslint-disable no-unused-vars */

import { AnimatePresence ,motion} from "framer-motion";
import Navmenue from "../mockdata/data/data";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Responsivemenue = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div mode="wait"
          initial={{ opacity: 0,y:-100 }}
          animate={{ opacity: 1,y:0 }}
          exit={{ opacity: 0,y:-100 }}
          transition={{duration:".3"}}
          className="absolute top-30 left-0 w-[80%] mx-auto right-0 rounded-3xl z-20   md:hidden  "
        >
          <div className="text-xl font-semibold h-[100%] text-center uppercase bg-menue text-white py-10  ">
            {/* مثال لمحتوى القائمة */}
            <ul className="flex flex-col items-center gap-10">
     {Navmenue.map((item,index)=>{

  if(index===Navmenue.length-1 || index===Navmenue.length-2)
    {return<Link to={item.link} className='hover:text-primary hover:border-b-2 hover:border-b-primary px-1 py-1 font-semibold py-3 '>{item.title}</Link> }

    return  <li><HashLink smooth to={item.link} className='px-1 py-1 font-semibold py-3 hover:text-primary hover:border-b-2 hover:border-b-primary'>{item.title}</HashLink></li>
})}


            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsivemenue;

