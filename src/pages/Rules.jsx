import React from 'react'
import { Header } from '../header/Header'
import Footer from '../footer/Footer'
import RulesSection from '../RulesComponents/RulesSection'

const Rules = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--rules-bg)'
            }}>
                <Header />
                <RulesSection/>
            </div>
            <Footer />
        </>
    )
}

export default Rules