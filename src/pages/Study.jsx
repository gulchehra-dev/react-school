import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'
import StudySection from '../StudyComponents/StudySection'

const Study = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--study-bg)'
            }}>
                <Header />
                <StudySection/>
            </div>
            <Footer />
        </>
    )
}

export default Study