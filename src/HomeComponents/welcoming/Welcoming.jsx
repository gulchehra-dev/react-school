import { BackgroundImage, Button, Group } from '@mantine/core'
import { ArrowRight, GraduationCap, Users } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Welcoming.css";

const Welcoming = () => {
    return (
        <div className='first-welcome'>
            <div className='second-welcome'>
                <div className='third-welcome'>
                    <h2 className='welcome-title'>
                        Добро пожаловать в нашу школу
                    </h2>
                    <p className='welcome-p'>
                        Место, где знания встречаются с инновациями, а
                        ученики готовятся к вызовам завтрашнего дня.
                    </p>
                </div>
                <div className='two-buttons'>
                    <NavLink to='/contact'>
                        <Button rightSection={<ArrowRight size={18} />} className='first-button'>Связаться с нами</Button>
                    </NavLink>
                    <NavLink to='/moreinfo'>
                        <Button className='second-button'>Узнать больше</Button>
                    </NavLink>
                </div>
            </div>
            
            <div className='school-image'>
                <BackgroundImage
                    src="https://t3.ftcdn.net/jpg/05/24/38/20/360_F_524382014_xaPaZ7U9xys3VjU7P0LZxekbhNathsQF.jpg"
                    alt="School illustration"
                    className='bg-image-box'
                />
                
                <Group className='badge-card badge-top-pos'>
                    <div className='badge-icon-box'>
                        <GraduationCap color="#153E36" size={20} />
                    </div>
                    <div className='badge-text-box'>
                        <h6>Excellence in Education</h6>
                        <p>Since 1998</p>
                    </div>
                </Group>

                <Group className='badge-card badge-bottom-pos'>
                    <div className='badge-icon-box'>
                        <Users color="#153E36" size={20} />
                    </div>
                    <div className='badge-text-box'>
                        <h6>500+ Students</h6>
                        <p>Join our community</p>
                    </div>
                </Group>
            </div>
        </div>
    )
}

export default Welcoming;