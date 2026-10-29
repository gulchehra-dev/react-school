import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'

const MoreInfo = () => {
  return (
    <>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--contact-bg)'
    }}>
        <Header/>
        MoreInfo
    </div>
    <Footer/>
</>
  )
}

export default MoreInfo