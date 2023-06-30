import React, { useState } from 'react'
import Logo from "pages/component/layout/UserInterface/Logo"

import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "pages/component/layout/UserInterface/Title";
import Search from "pages/component/layout/UserInterface/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
   const [IsSearchModal, setIsSearchModal]= useState(false);
   const [isMenuModal, setIsMenuModal] = useState(false);
   const cart = useSelector((state) => state.cart);
   const router = useRouter();

   console.log(router.asPath);
  return (
    <div
    className={`h-[5.5rem] z-50 relative ${
      router.asPath === "/" ? "bg-secondary" : "bg-secondary"
    }`}
  >
    <div className="container mx-auto text-fourth flex justify-between items-center h-full">
      <Logo />
      <nav
         className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
          <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
          <Link href="/">Home</Link>
          </li>
          <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
          <Link href="/menu">Menu</Link>
          </li>
          <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
          <Link href="/about">About</Link>
          </li>
        
        </ul>
        {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
      </nav>
      <div className="flex gap-x-4  items-center">
      <Link href="/auth/login">
      <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href="/cart">
          <span className="relative">
              <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
        </Link>
        <a href="#">
        <button onClick={() => setIsSearchModal(true)}>
        <FaSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
        </a>
        <a href="#" className="md:inline-block hidden sm">
          <button className="btn-primary text-black">Order Now!</button>
        </a>
        <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
      </div>
    </div>
    {IsSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
  </div>
  )
}

export default Header