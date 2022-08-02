import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-teal-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <Link
            className="text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            to="/"
          >
            Example
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>
        </div>
        {toggleMenu && (
          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/addProduct"
                >
                  <span className="ml-2">Add Product</span>
                </Link>
              </li>
            </ul>
            <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
              <div className="flex">
                <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid  border-teal-600 rounded-full text-sm bg-sky-100 items-center rounded-r-none pl-2 py-1 text-teal-800 border-r-0 placeholder-teal-300">
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                autoFocus
                type="text"
                className="px-2 py-1 h-8 border border-solid border-teal-600 rounded-full text-md leading-snug text-black bg-teal-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-black"
                placeholder="Search product"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
