/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
          <img src="./images/logo.svg" alt="" className="w-36 sm:w-48" />
            <img src="./images/icon-hamburger.svg" alt="" className="cursor-pointer mobile-menu-btn md:hidden" />
              <ul className="hidden md:flex space-x-6 font-alata text-white">
                <li className="cursor-pointer hover:underline decoration-2 underline-offset-8">
                  <a href="#about">About</a>
                </li>
                <li className="cursor-pointer hover:underline decoration-2 underline-offset-8">
                  <a href="#">Careers</a>
                </li>
                <li className="cursor-pointer hover:underline decoration-2 underline-offset-8">
                  <a href="#">Events</a>
                </li>
                <li className="cursor-pointer hover:underline decoration-2 underline-offset-8">
                  <a href="#">Product</a>
                </li>
                <li className="cursor-pointer hover:underline decoration-2 underline-offset-8">
                  <a href="#">Support</a>
                </li>
              </ul>
    </nav>
  );
}

export default Navbar