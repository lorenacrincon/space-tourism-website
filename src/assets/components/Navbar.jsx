import React, { useState } from "react";
import logo from "../shared/logo.svg";

import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleClose = () => {
    setMobileNav(false);
  };

  return (
    <header className="lg:mt-10 absolute w-full z-30">
      <nav className="">
        <div className="max-w-full mx-auto px-5 py-4 sm:px-12 sm:py-6 lg:px-12 3xl:px-28 relative">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img className="h-12 w-12" src={logo} alt="Logo" />
            </NavLink>
            <div className="hidden xl:flex nav-deco absolute z-50"></div>
            <div className="hidden md:flex md:justify-center md:items-center text-white nav-text gap-10 navbar-bg  my-navbar ">
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

              <NavLink to="/technology" activeClassName="active">
                <span className="hidden lg:inline me-4 font-bold">03</span>
                TECHNOLOGY
              </NavLink>
            </div>
            <motion.button
              initial="hide"
              animate={mobileNav ? "show" : "hide"}
              onClick={toggleMobileNav}
              className="flex flex-col space-y-2 relative z-10 md:hidden"
            >
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: 45,
                    y: 11,
                  },
                }}
                className="w-8 bg-white h-[3px] block rounded"
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    opacity: 1,
                  },
                  show: {
                    opacity: 0,
                  },
                }}
                className="w-8 bg-white h-[3px] block rounded"
              ></motion.span>
              <motion.span
                variants={{
                  hide: {
                    rotate: 0,
                  },
                  show: {
                    rotate: -45,
                    y: -11,
                  },
                }}
                className="w-8 bg-white h-[3px] block rounded"
              ></motion.span>
            </motion.button>
          </div>
        </div>

        <nav
          className="md:hidden flex justify-end nav-text text-white font-normal my-navbar"
          id="mobile-nav"
        >
          <AnimatePresence>
            {mobileNav && (
              <MotionConfig
                transition={{
                  type: "spring",
                  bounce: 0.1,
                }}
              >
                <motion.div
                  key="mobile-nav"
                  variants={{
                    hide: {
                      y: "-100%",
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        staggerChildren: 0.1,
                      },
                    },
                    show: {
                      y: "0%",
                      transition: {
                        type: "spring",
                        bounce: 0.1,
                        when: "beforeChildren",
                        staggerChildren: 0.1,
                        duration: 0.1,
                      },
                    },
                  }}
                  initial="hide"
                  animate="show"
                  exit="hide"
                  className="pt-24 navbar-bg h-screen"
                >
                  <motion.ul
                    variants={{
                      hide: {
                        y: "10%",
                        opacity: 0,
                      },
                      show: {
                        y: "0%",
                        opacity: 1,
                      },
                    }}
                    className="list-none "
                  >
                    <li>
                      <NavLink
                        to="/"
                        className="mx-6 pb-3 rounded-md"
                        onClick={handleClose}
                      >
                        <span className="pe-4 font-bold">00</span>HOME
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/destination"
                        className="mx-6 py-3 rounded-md"
                        onClick={handleClose}
                      >
                        <span className="pe-4 font-bold">01</span>DESTINATION
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/crew"
                        className="mx-6 py-3 rounded-md"
                        onClick={handleClose}
                      >
                        <span className="pe-4 font-bold">02</span>
                        CREW
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/technology"
                        className=" mx-6 py-3 rounded-md"
                        onClick={handleClose}
                      >
                        <span className="pe-4 font-bold">03</span>
                        TECHNOLOGY
                      </NavLink>
                    </li>
                  </motion.ul>
                </motion.div>
              </MotionConfig>
            )}
          </AnimatePresence>
        </nav>
      </nav>
    </header>
  );
}

export default Navbar;
