import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import {  Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";
import About from "./components/About";
import Whychoose from "./components/whychoose";
import Carsdetails from "./components/Cars";
import Views from "./components/Views";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Cardetail from "./components/Cardetail";
import Blogs from "./components/Blogs";
import Blogdetails from "./components/Blogdetails";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,  
      offset:100,
      delay:100,
      easing:"ease-in-sine"
  
    });
    Aos.refresh()
  }, []);

  const[theme,settheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")

  const element= document.documentElement;

 useEffect(()=>{
  
    if(theme==="dark")
     {element.classList.add("dark")
      localStorage.setItem("theme","dark")
     } 

    else{
      element.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
 },[theme])

  return (


<div className="app ">
   <Navbar  theme={theme} settheme={settheme}/>
<Routes>
  <Route path="/cardetail/:id" element={<Cardetail/> } ></Route>
  <Route path="/blogdetails/:id" element={<Blogdetails/> } ></Route>

  <Route path="/blogs" element={<Blogs/> } ></Route>
  <Route path="/contact" element={<Contact/> } ></Route>
 
 <Route path="/" element={<>

<Hero theme={theme}/>
<About/>
<Whychoose/>
<Carsdetails/>
<Views/>
<Banner/>
<Footer/>
</>
}>
 
 
 
</Route>



</Routes>

</div>


  )
}

export default App
