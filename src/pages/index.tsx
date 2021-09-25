import React from 'react'
import { NextPage } from 'next'
import Header from '@src/components/Header'
import Banner from '@src/components/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
    </div>
  )
}

export default Home
