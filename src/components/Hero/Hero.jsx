

import car from "../../assets/car.png"
import darkcar from "../../assets/darkcar.png"

const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white relative -z-20 pt-20  '>
        <div className="container min-h-[620px] ">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
<div className="img order-1 sm:order-2">
    <img  data-aos="zoom-in"     src={theme==="dark"? darkcar:car}className="relative -z-10  max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,.5)] " ></img>
</div>
<div className="info  order-2 sm:order-1 space-y-5">
    <p data-aos="fade-up" className="  text-xl capitalize text-primary font-serif text-primary">Effortless</p>
    <h1 data-aos="fade-up"  className="text-5xl font-bold lg:text-7xl">Car Rental</h1>
    <p data-aos="fade-up" data-aos-delay="1000"  className="mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab

    </p>
    <button data-aos="fade-up" data-aos-delay="1000"  className="text-white bg-black py-2 px-6 rounded-md capitalize dark:bg-primary hover:bg-primary/80 ">get started</button>
</div>
</div>
        </div>
    </div>
  )
}
export default Hero;
