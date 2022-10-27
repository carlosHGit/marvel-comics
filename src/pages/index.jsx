import React from 'react'
import Head from 'next/head'
import Filters from '@components/Filters'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import ComicList from '@containers/ComicList'


const Home = () => {
  return (
    <>
      <Head>
        <title>Marvel Comic</title>
      </Head>

      <main>
        <Header></Header>
        <Navbar></Navbar>
        <Filters></Filters>
        <ComicList></ComicList>
        <Footer></Footer>
      </main>
    </>
  )
}

export default Home