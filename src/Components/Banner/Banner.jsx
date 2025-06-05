import React from "react";
import Image1 from "../../assets/img1.jpg";
const Banner = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ">
        <div className="rounded-xl ">
          {/* Banner image section */}
          <img src={Image1} alt="" className="rounded-xl" />
        </div>

        <div>
          {/* Banner Text section */}
          <h1 className="text-2xl lg:text-4xl font-bold capitalize font-playfair">
            The important to take care of your self
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi
            dicta quo accusantium laborum quos, repellat unde dolorem harum hic?
            ipsum dolor sit amet consectetur adipisicing elit. Ab eligendi dicta
            quo accusantium
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-primary text-white  p-2 mt-2 rounded-md transition ease-in-out hover:scale-125 delay-150 translate-y-1">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
