import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
const Navbar = () => {
  return (
    <div
      className={`fixed bg-gray-200 border-r-2 border-[#7e0a46] left-0 top-0  w-[45%] z-50 md:w-[20%] h-full py-5 px-2 flex flex-col items-center`}
    >
      <img
        src="https://i.imgur.com/YL5WaGf_d.webp?maxwidth=760&fidelity=grand"
        alt="sii_media"
        className={`w-20`}
      />
      <div>
        <h2 className={`text-xl mt-4 mb-4 font-semibold text-[#7e0a46]`}>
          Create A New Template
        </h2>
        <p className={`flex items-center justify-center underline`}>
          <Link to="create_new">Enter Required Data</Link>
          <MdOutlineCreate />
        </p>
      </div>
      <h2 className={`text-xl mt-4 mb-4 font-semibold text-[#7e0a46]`}>
        Available Websites
      </h2>
      <ul className={`py-2 border-y-4 border-[#7e0a46] w-full`}>
        <NavLink to="bblend">
          <li className={`py-2 border-b-2 border-white`}>BBlend</li>
        </NavLink>
        <NavLink to="rallyGroup">
          <li className={`py-2 border-b-2 border-white`}>Rally Group</li>
        </NavLink>
      </ul>
      <div></div>
    </div>
  );
};

export default Navbar;
