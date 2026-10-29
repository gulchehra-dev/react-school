import { BackgroundImage, Button, Flex, Group, Stack, Text } from '@mantine/core'
import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-react'
import React from 'react'
import "./SchoolSection.css"

const SchoolSection = () => {
    return (
        <Flex className='both-school'>
            <div className='first-school'>
                <BackgroundImage src="https://t4.ftcdn.net/jpg/05/33/81/53/360_F_533815391_1xMcUjsWULAxXVIwAcUFepZ5xnoQWQJb.jpg"
                    style={{ height: "192px", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }} />
                <div className='all-first-school'>
                    <h2 style={{ fontWeight: "700", fontSize: "24px" , color:"#0A192F"}}>О нашей школе</h2>
                    <p className='p-school'>Наша школа предоставляет качественное образование с 1998
                        года. Мы фокусируемся на развитии не только академических
                        знаний, но и критического мышления, творчества и
                        социальных навыков у наших учеников.</p>
                    <div className='four-numbers'>
                        <Stack className='numbers-school' style={{justifyContent:"center", alignItems:"center"}}>
                            <h3 style={{ fontWeight: "700", fontSize: "30px", color: "#153E36" }}>500+</h3>
                            <p className='p-numbers'>Учеников</p>
                        </Stack>
                        <Stack className='numbers-school' style={{justifyContent:"center", alignItems:"center"}}>
                            <h3 style={{ fontWeight: "700", fontSize: "30px", color: "#153E36" }}>50+</h3>
                            <p className='p-numbers'>Учителей</p>
                        </Stack>
                        <Stack className='numbers-school' style={{justifyContent:"center", alignItems:"center"}}>
                            <h3 style={{ fontWeight: "700", fontSize: "30px", color: "#153E36" }}>20+</h3>
                            <p className='p-numbers'>Классов</p>
                        </Stack>
                        <Stack className='numbers-school' style={{justifyContent:"center", alignItems:"center"}}>
                            <h3 style={{ fontWeight: "700", fontSize: "30px", color: "#153E36" }}>25+</h3>
                            <p className='p-numbers'>Лет опыта</p>
                        </Stack>
                    </div>
                    <Button rightSection={<ArrowRight size={18} />} className='first-button-school'>Узнать больше о нас</Button>
                </div>
            </div>
            <div className='second-school'>
                <div style={{ background: "#CFE9DE", height: "68px" ,borderTopLeftRadius: "16px",borderTopRightRadius: "16px"}}>
                    <Text style={{ fontWeight: "600", fontSize: "20px", padding: "24px" , color:"#0A192F"}}>Upcoming Events</Text>
                </div>
                <div>
                    <Group style={{ padding: "24px", display:"flex", flexDirection:"column", borderBottom:"1px solid #F3F4F6" }}>
                        <h2 className='one-text-school' >Parent-Teacher Conference</h2>
                        <div className='three-all-school'>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                                <CalendarDays color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>May 15, 2025</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                            <Clock color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>4:00 PM - 7:00 PM</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                            <MapPin color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>Main Building, Floor 2</p>
                            </div>
                        </div>
                    </Group>
                    <Group style={{ padding: "24px", display:"flex", flexDirection:"column", borderBottom:"1px solid #F3F4F6" }}>
                        <h2 className='two-text-school'>Science Fair</h2>
                        <div className='three-school'>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                                <CalendarDays color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>May 20, 2025</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                            <Clock color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>10:00 AM - 3:00 PM</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                            <MapPin color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>School Gymnasium</p>
                            </div>
                        </div>
                    </Group>
                    <Group style={{ padding: "24px", display:"flex", flexDirection:"column"}}>
                        <h2 className='three-text-school'>End of Year Concert</h2>
                        <div className='three-school'>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                                <CalendarDays color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>June 5, 2025</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                            <Clock color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>6:00 PM - 8:00 PM</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", gap:"6px"}}>
                            <MapPin color="#153E36" size={16} style={{marginTop:"2px"}}/>
                                <p style={{ fontWeight: "400", fontSize: "14px", color: "#4B5563" }}>School Auditorium</p>
                            </div>
                        </div>
                    </Group>
                    <Button rightSection={<ArrowRight size={18} />} className='button-school' style={{ color: '#0A192F', background: "white", borderRadius: "40px", border:"1px solid #d1d5db" }}>View All Events</Button>
                </div>
            </div>
        </Flex>
    )
}

export default SchoolSection