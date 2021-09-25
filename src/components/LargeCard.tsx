import React from 'react'
import Image from 'next/image'

interface IProps {
  data: {
    img: string
    title: string
    description: string
    buttonText: string
  }
}

const LargeCard: React.FC<IProps> = ({ data }) => {
  return (
    <section className="relative my-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={data.img} layout="fill" objectFit="cover" objectPosition="center" className="rounded-2xl" />
      </div>
      <div className="absolute top-24 left-10">
        <h3 className="text-4xl w-64 font-semibold text-white">{data.title}</h3>
        <p className="text-white w-80 mt-3">{data.description}</p>
        <button
          className="text-sm mt-3 bg-white text-gray-600 rounded-md px-4 py-2 shadow-md hover:scale-105 hover:shadow-xl transform transition duration-200"
          type="button"
        >
          {data.buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
