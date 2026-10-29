import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'

const Contact = () => {
  return (
    <>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'var(--contact-bg)'
    }}>
        <Header/>
        Contact
    </div>
    <Footer/>
</>
  )
}

export default Contact