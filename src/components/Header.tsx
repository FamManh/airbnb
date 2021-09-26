import React from 'react'
// import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* Logo  */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto text-red-400">
        <Logo />
        {/* <Image src="/images/Airbnb_Logo.png" layout="fill" objectFit="contain" objectPosition="left" /> */}
      </div>
      {/* Search  */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 p-2 rounded-full cursor-pointer md:mx-2" />
      </div>
      {/* Right side  */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden lg:inline-flex py-3 px-5 rounded-full hover:bg-gray-100 cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-12 p-3 text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 cursor-pointer hover:shadow-lg border-2 rounded-full">
          <MenuIcon className="h-5 text-gray-600 " />
          <UserCircleIcon className="h-7  text-gray-600 " />
        </div>
      </div>
    </header>
  )
}

export default Header
