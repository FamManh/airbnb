import React from 'react'
import Image from 'next/image'

interface ICartData {
  img: string
  location: string
  distance: string
}

interface IProps {
  data: ICartData
}

const SmallCard: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex items-center m-2  mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out ">
      <div className="relative h-16 w-16 ">
        <Image src={data.img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="font-semibold">{data.location}</h2>
        <h3 className="text-gray-500">{data.distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
