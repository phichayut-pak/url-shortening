import React from 'react'
import { Transition } from "@headlessui/react";

const MobileNav = ({ activate, onClickActivate }) => {

  return (
    <div className='absolute z-10'>

    <Transition
        show={activate}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        >
        <div
          className={`absolute z-[100] flex justify-center items-center px-5 w-screen`}
          >
          <div className="flex flex-col justify-center items-center bg-dark-violet w-full rounded-xl py-12">
            <div className="font-poppins font-bold text-white text-center space-y-5 text-lg w-[80%]">
              <div onClick={() => onClickActivate()} className="cursor-pointer">Features</div>
              <div onClick={() => onClickActivate()} className="cursor-pointer">Pricing</div>
              <div onClick={() => onClickActivate()} className="cursor-pointer">Resources</div>
            </div>

            <br />
            <div className="border border-[#544A6D] w-[80%]" />
            <br />

            <div className="font-poppins font-bold text-white text-center space-y-5 text-lg w-[80%]">
              <div onClick={() => onClickActivate()} className="cursor-pointer">Login</div>
              <div onClick={() => onClickActivate()} className="cursor-pointer bg-cyan py-3 w-full rounded-full">Sign Up</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default MobileNav