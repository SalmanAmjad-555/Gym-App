import React from "react";
import { TestimonialsData } from "../Navbar/MockData/data";
import Slider from "react-slick";


const Testimonail = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Stars Rating
  const StarRating = () => {
    return (
      <div style={{ fontSize: "24px" }}>
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            style={{ color: "yellow" }}  
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  

  return (
    <div className="py-12 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-10 max-w-96 space-y-2 mr-auto">
          <h1 className="text-4xl font-bold">What customer saying about Us</h1>
        </div>

        {/* Testimonial section */}
        <div>
          <Slider {...settings}>
            {TestimonialsData.map((data, key) => {
              return(
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-2 p-8 shadow-lg mx-2 rounded-xl">
                {/* Upper section */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full h-16 w-16"
                    />

                    <div>
                      <p className="text-xl font-bold text-black-80">
                        {data.name}
                      </p>
                    
                    </div>

                 
                  </div>
                   {/* bottom section */}
                   <div className="py-6 space-y-4">
                     <p className="text-sm text-gray-500">{data.Text}</p>
                     <p> <StarRating /> </p>
                     </div>
                </div>
              </div>
              )

            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonail;
