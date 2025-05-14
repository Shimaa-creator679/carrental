
import { useParams } from 'react-router-dom'
import carData from '../assets/cardata';

const Cardetail = () => {


    const{id}=useParams();
    console.log(id)

   const car = carData.find((item) => {
  return item.id === parseInt(id);
});
    console.log(car)

  return (
    <div className='pt-20'>
<div className="container">
    <div className="flex items-center justify-between gap-20">
        <div className="img w-full">
            <img src={car?.imgUrl} className=''></img>
        </div>
        <div className="info text-center space-y-3">
            <h2 className='text-3xl font-bold font-serif text-primary '>{car?.carName}</h2>
            <p className='leading-1.5 text-sm '>{car?.description}</p>
            <p  className='text-gray-600'><span className='text-2xl font-bold text-primary mr-2'>Brand:</span> {car?.brand}</p>
            <p className='text-gray-600' ><span  className='text-2xl font-bold text-primary mr-2'>speed:</span> {car?.speed}</p>
            <p  className='text-gray-600'><span className='text-2xl font-bold text-primary mr-2' >speed:</span> ${car?.price}</p>

            
        </div>
    </div>
</div>
    </div>
  )
}

export default Cardetail