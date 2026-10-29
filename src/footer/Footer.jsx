import { Button, Divider, Flex, Stack } from '@mantine/core'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='first-footer'>
            <div className='second-footer'>
                <div className='third-footer'>
                    <Link to='/'>
                    <Flex gap={8} align="center">
                        <div className='logo-footer'>
                            <span>S </span>
                        </div>
                        <span className='footer-text-logo'>SchoolName</span>
                    </Flex>
                    </Link>
                    <p className='p-text'>
                        Providing quality education since 1998. Developing knowledge, creativity, and character.
                    </p>
                    <Flex style={{ marginTop: "26px", gap: "16px" }}>
                        <Link to='https://www.facebook.com/?locale=ru_RU'>
                            <div style={{ background: "#DCF3E9 ", borderRadius: "50px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Facebook color="#153E36" size={20} />
                            </div>
                        </Link>
                        <Link to='https://www.instagram.com/'>
                            <div style={{ background: "#DCF3E9 ", borderRadius: "50px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Instagram color="#153E36" size={20} />
                            </div>
                        </Link>
                        <Link to='https://twitter.com/'>
                            <div style={{ background: "#DCF3E9 ", borderRadius: "50px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Twitter color="#153E36" size={20} />
                            </div>
                        </Link>
                    </Flex>
                </div>
                <Stack className='forth-footer'>
                    <h2 style={{ fontWeight: "700", fontSize: "18px", color: "#0A192F" }}>Quick Links</h2>
                    <Stack style={{ gap: "20px", marginTop: "26px" }}>
                        <Link to='/about'><p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>About Us</p></Link>
                        <Link to='/study'><p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>Education</p></Link>
                        <Link to='/news'><p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>News & Events</p></Link>
                        <Link to='/support'><p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>Support</p></Link>
                        <Link to='/rules'><p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>Rules & Documents</p></Link>
                    </Stack>
                </Stack>
                <Stack className='five-footer'>
                    <h2 style={{ fontWeight: "700", fontSize: "18px", color: "#0A192F" }}>Contact Us</h2>
                    <Stack style={{ gap: "12px", marginTop: "26px" }}>
                            <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
                                <MapPin color="#153E36" size={20} />
                                <p className='p-contact'>ул. Школьная 123, Город, Страна</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
                                <Phone color="#153E36" size={20} />
                                <p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>+1 234 567 890</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", gap: "6px" }}>
                                <Mail color="#153E36" size={20} />
                                <p style={{ fontWeight: "400", color: "#4B5563", fontSize: "16px" }}>info@schoolname.edu</p>
                            </div>
                    </Stack>
                </Stack>
                <Stack className='six-floor'>
                    <h2 style={{ fontWeight: "700", fontSize: "18px", color: "#0A192F" }}>Newsletter</h2>
                    <p className='p-floor'>Subscribe to our newsletter to receive updates and news.</p>
                    <input type="text" placeholder='Your email address' className='input-footer' />
                    <Button className='button-subscribe'>Subscribe</Button>
                </Stack>
            </div>
            <Divider color='#E5E7EB' />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "34px" }}>
                <p className='end-p-footer'>© 2025 SchoolName. Все права защищены.</p>
            </div>
        </div>
    )
}

export default Footer
