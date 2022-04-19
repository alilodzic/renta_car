import React from 'react'
import Navbar from '../../components/navBar/Navbar'
import Timeline from '../howork/Timeline'
import Popular from '../popular/Popular'
import Review from '../review/Review'
import Header from './Header'
import './home.css'

const index = ( ) => {
  return (
    <>
      <Header />
      <Popular />
      <Timeline />
      <Review />
    </>
  )
}

export default index