import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'
import CaruselNewsSection from '../NewsComponents/CaruselNewsSection'

const News = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--news-bg)'
      }}>
        <Header />
        <CaruselNewsSection />
      </div>
      <Footer />
    </>
  )
}

export default News