import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'
import PhotosPageSection from '../HomeComponents/galery/PhotosPageSection'

const PhotosPage = () => {
  return (
    <>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--photos-page-bg)'
      }}>
        <Header/>
        <PhotosPageSection/>
    </div>
    <Footer/>
    </>
  )
}

export default PhotosPage