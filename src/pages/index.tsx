import React from 'react'
import { NextPage } from 'next'
import Header from '@src/components/Header'
import Banner from '@src/components/Banner'
import SmallCard from '@src/components/SmallCard'
import uuidv4 from 'utils/uuid'
import exploreData from 'data/exploreData.json'
import liveAnywhereData from 'data/liveAnywhereData.json'
import MediumCard from '@src/components/MediumCard'
import LargeCard from '@src/components/LargeCard'
import Footer from '@src/components/Footer'

const largeCardData = {
  img: '/images/banner1.webp',
  title: 'Try hoisting',
  description: 'Earn extra income and unlock new opportunities by sharing your space.',
  buttonText: 'Learn more',
}

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard key={uuidv4()} data={item} />
            ))}
          </div>
        </section>
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold">Live anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3">
            {liveAnywhereData.map((item) => (
              <MediumCard key={uuidv4()} data={item} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard data={largeCardData} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
