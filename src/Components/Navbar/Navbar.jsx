import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { NavbarMenu } from "./MockData/data";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="shadow-md">
        <div className="container flex justify-between items-center py-4 px-4">
          {/* Logo Section */}
          <div className="flex text-xl font-bold items-center gap-2 uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold transition ease-in-out delay-150 hover:scale-110"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side icons and login */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <button className="text-xl font-semibold hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            {/* Cart Icon */}
            <button className="text-xl font-bold hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>

            {/* Login Button - adjusted for small screens */}
            <button className="text-sm md:text-base hover:bg-primary text-primary font-semibold hover:text-white transition duration-700 ease-in-out rounded-md border-2 border-primary px-3 py-1.5 md:px-4 md:py-2">
              Login
            </button>

            {/* Hamburger menu */}
            <div
              className="md:hidden flex items-center"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MdMenu className="text-3xl" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-md z-50 p-6 transition-all duration-300">
          {/* Close button */}
          <div className="flex justify-end" onClick={() => setOpen(false)}>
            <MdClose size={24} className="text-black cursor-pointer" />
          </div>

          {/* Sidebar menu items */}
          <ul className="flex flex-col mt-10 gap-6 text-black">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block py-2 px-2 font-semibold hover:text-primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
