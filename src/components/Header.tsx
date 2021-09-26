import React, { useState } from 'react'
// import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker, OnDateRangeChangeProps } from 'react-date-range'
import Logo from './Logo'

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  const [endDate, setEndDate] = useState<Date | undefined>(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (range: OnDateRangeChangeProps) => {
    setStartDate(range.selection.startDate)
    setEndDate(range.selection.endDate)
  }

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-2">
            <h2 className="text-xl font-semibold flex-grow">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 outline-none text-red-400"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(Number(e.target.value))}
              min={1}
            />
          </div>
          <div className="flex">
            <button
              type="button"
              className="flex-grow text-gray-500 hover:bg-gray-100 py-2 rounded-full"
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
            <button type="button" className="flex-grow text-red-400 hover:bg-red-100 py-2 rounded-full">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
