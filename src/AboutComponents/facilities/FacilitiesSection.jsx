import { Book, Building, Command, Monitor } from 'lucide-react'
import React from 'react'
import './FacilitiesSection.css'

const FacilitiesSection = () => {
    return (
        <div className='first-facility'>
            <h2 className='h2-facility'>Our Facilities</h2>
            <div className='second-facility'>
                <div className='box-facility'>
                    <Building color="#153E36" style={{width:"32px", height:"32px"}} />
                    <h3 className='h3-facilities'>Modern Classrooms</h3>
                    <p className='p-facility'>Equipped with the latest
                        technology to enhance the
                        learning experience.</p>
                </div>
                <div className='box-facility'>
                    <Book color="#153E36" style={{width:"32px", height:"32px"}} />
                    <h3 className='h3-facilities'>Library</h3>
                    <p className='p-facility'>A vast collection of books,
                        digital resources, and quiet
                        study spaces.</p>
                </div>
                <div className='box-facility'>
                    <Monitor color="#153E36" style={{width:"32px", height:"32px"}} />
                    <h3 className='h3-facilities'>Computer Labs</h3>
                    <p className='p-facility'>State-of-the-art computer labs
                        with the latest software and
                        hardware.</p>
                </div>
                <div className='box-facility'>
                    <Command color="#153E36" style={{width:"32px", height:"32px"}} />
                    <h3 className='h3-facilities'>Sports Facilities</h3>
                    <p className='p-facility'>Indoor and outdoor sports
                        facilities for various activities
                        and physical education.</p>
                </div>
            </div>
        </div>
    )
}

export default FacilitiesSection