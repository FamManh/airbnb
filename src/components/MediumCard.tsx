import React from 'react'
import Image from 'next/image'

interface IProps {
  data: {
    img: string
    title: string
  }
}

const MediumCard: React.FC<IProps> = ({ data }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={data.img} layout="fill" className="rounded-lg" />
      </div>
      <h3 className="text-xl mt-3 font-semibold">{data.title}</h3>
    </div>
  )
}

export default MediumCard
