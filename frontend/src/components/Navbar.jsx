import { NavLink } from "react-router-dom";
import logo from "/public/images/logo.png";
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import { Transition } from "@headlessui/react";

function NavbarElement({ children, to }) {
  return (
    <NavLink className=" py-1 px-3 text-gray-500" to={to}>
      {children}
    </NavLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className=" relative navbar flex justify-between items-center px-10 py-5 bg-white">
        <NavLink exact to="/">
          <div className="flex justify-around items-center space-x-3">
            <img className="size-7" src={logo} alt="" />
            <h1 className="text-3xl tracking-[0.3rem] font-semibold">
              USE<span className="text-blue-700">RIO</span>
            </h1>
          </div>
        </NavLink>
        <div className="custom:hidden">
          {state ? (
            <>
              <NavbarElement to="/">Home</NavbarElement>
              <NavbarElement to="/aboutme">About</NavbarElement>
              <NavbarElement to="/contact">Contact</NavbarElement>
              <NavbarElement to="/logout">Logout</NavbarElement>
            </>
          ) : (
            <>
              <NavbarElement to="/">Home</NavbarElement>
              <NavbarElement to="/aboutme">About</NavbarElement>
              <NavbarElement to="/contact">Contact</NavbarElement>
              <NavbarElement to="/signin">Login</NavbarElement>
              <NavbarElement to="/signup">Register</NavbarElement>
            </>
          )}
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          {!isOpen && (
            <button
              onClick={toggleMenu}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in-out duration-500"
          enterFrom="right-72 opacity-0"
          enterTo="right-0 opacity-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="right-0 opacity-100"
          leaveTo="right-72 opacity-0"
        >
          {(ref) => (
            <div
              ref={ref}
              className="fixed inset-y-0 right-0 max-w-xs w-full h-full bg-white transition transform duration-200 ease-in-out sm:pl-16 border-l-[1px] border-gray-200"
            >
              <div className="h-full flex flex-col space-y-8 py-6 pr-6 pl-8 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-gray-900">Menu</h2>
                  <button
                    onClick={toggleMenu}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Close icon */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col space-y-5">
                  {state ? (
                    <>
                      <NavbarElement to="/">Home</NavbarElement>
                      <NavbarElement to="/aboutme">About</NavbarElement>
                      <NavbarElement to="/contact">Contact</NavbarElement>
                      <NavbarElement to="/logout">Logout</NavbarElement>
                    </>
                  ) : (
                    <>
                      <NavbarElement to="/">Home</NavbarElement>
                      <NavbarElement to="/aboutme">About</NavbarElement>
                      <NavbarElement to="/contact">Contact</NavbarElement>
                      <NavbarElement to="/signin">Login</NavbarElement>
                      <NavbarElement to="/signup">Register</NavbarElement>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}
export default Navbar;
