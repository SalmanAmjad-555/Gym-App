import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";

const Equipment = () => {
  const EquipmentData = [
    {
      id: 1,
      title: "Yoga Equipment",
      desc: "It is a long established fact that the reader will read the content when are the best product",
      icon: <GrYoga />,
  
    },
    {
      id: 2,
      title: "Muscles Equipment",
      desc: "It is a long established fact that the reader will read the content when are the best product",
      icon: <FaDumbbell />,

    },
    {
      id: 1,
      title: "Fitness Equipment",
      desc: "It is a long established fact that the reader will read the content when are the best product",
     icon:<GiGymBag />
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-playfair">
        <div className="space-y-6 p-6">
          <h1 className="font-bold text-3xl">What we offer for you</h1>
          <p className="text-gray-500">
            It is a long fact established that a reader readable
          </p>
        </div>
        {EquipmentData.map((item) => {
          return (
            <div className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white hover:shadow-[0_0px_22px_0px_rgba(0,0,0,0.15)] rounded-xl">
              <div className="text-4xl">{item.icon}</div>
              <p className="font-bold">{item.title}</p>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Equipment;
