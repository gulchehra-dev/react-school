import React from 'react'
import FacilitiesSection from '../AboutComponents/facilities/FacilitiesSection'
import { Header } from '../header/Header'
import AboutSchoolSection from '../AboutComponents/aboutschool/AboutSchoolSection'
import MissionSection from '../AboutComponents/mission/MissionSection'
import LeadershipSection from '../AboutComponents/leadership/LeadershipSection'
import Footer from '../footer/Footer'

const About = () => {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'var(--about-bg)'
            }}>
                <Header />
                <AboutSchoolSection />
                <MissionSection />
                <LeadershipSection />
                <FacilitiesSection />
            </div>
            <Footer />
        </>
    )
}

export default About