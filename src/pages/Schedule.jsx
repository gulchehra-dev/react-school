import React from 'react'
import { Header } from '../header/Header'
import ScheduleSection from '../ScheduleComponents/ScheduleSection'
import Footer from '../footer/Footer'

const Schedule = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--schedule-bg)'
            }}>
                <Header />
                <ScheduleSection />
            </div>
            <Footer />
        </>
    )
}

export default Schedule