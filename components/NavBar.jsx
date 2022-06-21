import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import { HiMenu } from "react-icons/hi";
import MobileNav from "./MobileNav";
import Link from 'next/link'

const NavBar = ({ children }) => {
  const [isActivate, setIsActivate] = useState(false); // mobile burger on click

  const onChangeActivate = () => {
    setIsActivate(!isActivate)
  }

  return (
    <>
      <div className="w-full sticky inline-flex justify-between items-center py-10 px-5 lg:px-32 bg-white">
        <div className="lg:inline-flex justify-center items-center lg:space-x-10">
          <Link href="/" passHref>
            <Image src={logo} alt="Logo" className="cursor-pointer"/>
          </Link>

          <div className="hidden lg:inline-flex justify-between items-center font-poppins font-bold text-grayish-violet space-x-5 text-md">
            <button className="transition duration-100 ease-in hover:text-very-dark-violet">
              Features
            </button>
            <button className="transition duration-100 ease-in hover:text-very-dark-violet">
              Pricing
            </button>
            <button className="transition duration-100 ease-in hover:text-very-dark-violet">
              Resources
            </button>
          </div>
        </div>


        {/* DESKTOP AUTHENTICATION BUTTONS */}
        <div
          id="authentication_buttons"
          className="hidden lg:inline-flex justify-center items-center space-x-7"
        >
          <button
            id="login_btn"
            className="font-poppins font-bold text-grayish-violet text-md transition duration-100 ease-in hover:text-very-dark-violet"
          >
            Login
          </button>

          <button
            id="signup_btn"
            className="font-poppins font-bold text-white text-md bg-cyan px-5 py-2 rounded-full transition duration-100 ease-in hover:opacity-50"
          >
            Sign up
          </button>
        </div>

                {/* MOBILE HAMBURGER BUTTON */}
        <button className="block lg:hidden">
          <HiMenu
            onClick={() => setIsActivate(!isActivate)}
            className="h-8 w-8 text-grayish-violet"
          />
        </button>
      </div>

      {/* MOBILE NAV COMPONENTS ON CLICK */}
      <MobileNav activate={isActivate} onClickActivate={onChangeActivate}></MobileNav>
      
      {children}
    </>
  );
};

export default NavBar;
