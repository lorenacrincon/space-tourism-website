import React, { useState } from "react";
import hamburguerIcon from "../shared/icon-hamburger.svg";
import closeIcon from "../shared/icon-close.svg";
import logo from "../shared/logo.svg";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:mt-10 absolute w-full z-30 my-navbar">
      <nav className="">
        <div className="max-w-full mx-auto px-5 py-4 sm:px-12 sm:py-6 lg:px-12 z-50">
          <div className="flex items-center justify-between">
            <div className="">
              <img className="h-12 w-12" src={logo} alt="Logo" />
            </div>
            <div className="hidden xl:flex nav-deco absolute z-50"></div>
            <div className="hidden md:flex md:justify-center md:items-center text-white nav-text gap-10 navbar-bg ">
              <NavLink to="/" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">00</span>
                HOME
              </NavLink>

              <NavLink to="/destination" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">01</span>
                DESTINATION
              </NavLink>

              <NavLink to="/crew" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">03</span>
                CREW
              </NavLink>

              <a href="#">
                <span className="hidden lg:inline me-4 font-bold">03</span>
                TECHNOLOGY
              </a>
            </div>

            <div className="flex md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-8"
                    src={hamburguerIcon}
                    viewBox="0 0 24 24"
                    stroke="var(--lightBlueGray"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="squared"
                      strokeLinejoin="squared"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-8"
                    xmlns={closeIcon}
                    viewBox="0 0 24 24"
                    stroke="var(--lightBlueGray"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="squared"
                      strokeLinejoin="squared"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden flex justify-end nav-text text-white font-normal"
              id="mobile-menu"
            >
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 navbar-bg z-40"
              >
                <a href="#" className="block px-6 pb-3 pt-24 rounded-md ">
                  <span className="pe-4 font-bold">00</span>HOME
                </a>

                <a href="#" className="block px-6 py-3 rounded-md">
                  <span className="pe-4 font-bold">01</span>
                  DESTINATION
                </a>

                <a href="#" className="block px-6 py-3 rounded-md ">
                  <span className="pe-4 font-bold">02</span>
                  CREW
                </a>

                <a href="#" className="block px-6 py-3 rounded-md ">
                  <span className="pe-4 font-bold">03</span>
                  TECHNOLOGY
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
