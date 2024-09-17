import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo section */}
          <div className="flex text-2xl items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-secondary">Gym</p>
          </div>

          {/* Menu section */}
          <div className="hidden md:block">
            {" "}
            {/** hidden in mobile screens. in medium screens display(opposite of hidden = block) */}
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    {/**display: inline-block will wrap the element to prevent the text inside from extending beyond its parent. */}
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>

            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>

            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>

          {/* Mobile hamburger menu section */}
          <div className="md:hidden">
            <MdMenu className="text-4xl" onClick={() => setOpen(!open)} />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar menu section */}
      <ResponsiveMenu open={open}/>
    </>
  );
};

export default Navbar;
