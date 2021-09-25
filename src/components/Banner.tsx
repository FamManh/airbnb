import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/images/banner.webp" layout="fill" objectFit="cover" objectPosition="bottom" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-md sm:text-lg font-semibold">Not sure where to go? Perfect</p>
        <button
          className="text-purple-500 bg-white px-8 py-3 rounded-full shadow-md font-bold my-3 outline-none hover:shadow-xl active:scale-90 transition duration-150"
          type="button"
        >
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
