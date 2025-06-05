import React from 'react'
import { FaPlay } from "react-icons/fa";
import HeroImage from "../../assets/hero_image.jpg"

const Hero = () => {
  return (
    <>
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[400px] relative'>
{/* {bramd info} */}

<div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>

   <div className='text-center md:text-left space-y-2'>
    <h1 className='text-5xl lg:6xl font-bold leading-relaxed xl:leading-normal'>
        Gym gives you the perfect {" "}
        <span className='text-primary'> Health</span>{" "}
    </h1>
    <p className='text-gray-600 xl:max-w-[550px]'>
        It is a long established fact that the reader will read the content when are the best product
    </p>

    <div className='flex gap-8 justify-center items-center md:justify-start'>
        <button className='bg-primary text-white font-semibold rounded-md p-1 items-center gap-2 hover:scale-110 duration-200'>Order Now</button>
        <button className='flex justify-center items-center gap-1 hover:scale-110 duration-200'>
        <FaPlay />  Watch Now</button>
    </div>
   </div>

</div>


     {/* {Hero image} */}

    <div className='flex justify-center items-center'>
      <img src={HeroImage} alt=""  className='w-[350px] rounded-full'/>
    </div>

        </div>
    </section>
    </>
  )
}

export default Hero