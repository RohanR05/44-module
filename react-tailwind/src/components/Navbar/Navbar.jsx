import React, { useState } from "react";
import Link from "./Link";
import { MdMenu } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const navigation = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {

  const [open, setOpen] = useState();

  const links = navigation.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className=" py-2 flex justify-between mx-10 text-black">
      <div className="flex items-center" onClick={() => setOpen(!open)}>
        {
            open ? 
            (<IoMdCloseCircle className="lg:hidden" size={30} />) : 
                (<MdMenu size={27} className="lg:hidden"/>)
        }
        <ul className={`lg:hidden absolute duration-1000
            ${open ? "top-10" : "-top-55"}`}>
            {links}
        </ul>

        <h3 className="text-2xl">My Navbar</h3>
      </div>

      <ul className="hidden lg:flex lg:gap-6">
        {
            links
        }</ul>

      {/* <ul className="flex justify-evenly">
                {
                    navigation.map(route => <li className=" "><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
      <button className="btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
