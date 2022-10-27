import React from 'react'
import Filters from '@components/Filters'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import ComicList from '@containers/ComicList'
import Head from 'next/head'
import MarvelAPI from '@utilities/buildLink'


const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title> Character Page </title>
      </Head>
      <main>
        <Header></Header>
        <Navbar></Navbar>
        <Filters></Filters>
        <ComicList comics={data}></ComicList>
        <Footer></Footer>
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { charName } = context.query;
    const API = MarvelAPI.getComics({ nameStartsWith: charName })
    const res = await fetch(API)
    const data = await res.json()
    const comics = data.data.results;
    return {
      props: {
        data: comics,
      },
    }
  } catch (error) {
    console.log('error message', error.message);
  }
}

export default Home