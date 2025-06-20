import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-white">
          <div className="py-8 px-4 space-y-4">
            <div className="text-2xl flex justify-center items-center gap-2 font-bold uppercase">
              <FaDumbbell />
              <p>Coders</p>
              <p className="text-secondary">Gym</p>
            </div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              incidunt perspiciatis vitae soluta modi, non et. Magni ad
              veritatis repudiandae?
            </p>
            <div className="flex items-center justify-start gap-3 text-3xl">
                <a href="#">
                <HiLocationMarker />
                </a>
                <a href="#">
                < FaInstagramSquare />
                </a>
                <a href="#">
                < FaFacebookSquare />
                </a>
                <a href="#">
                <FaTwitter />
                </a>
            </div>
          </div>

                {/* Footer links */}
                <div className="grid grid-cols-3 md:grid-cols-3 md:ml-14 md:gap-60">
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>

                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Important Links</h1>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                           
                        </ul>
                    </div>

                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-5">Resoures</h1>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Service</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
    
        </div>
      </div>
    </div>
  );
};

export default Footer;
