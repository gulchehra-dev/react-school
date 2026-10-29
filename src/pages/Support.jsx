import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'
import SupportSection from '../SupportComponents/SupportSection'

const Support = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--support-bg)'
            }}>
                <Header />
                <SupportSection/>
            </div>
            <Footer />
        </>
    )
}

export default Support