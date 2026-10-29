import React, { useState } from 'react';
import { Button, Divider, Menu, Text } from '@mantine/core';
import { ChevronDown, Download, FileSearch } from 'lucide-react';
import './ScheduleSection.css';
import { Link } from 'react-router-dom';

const ScheduleSection = () => {
    const [selectedClass, setSelectedClass] = useState(null);

    const classesList = ['1A', '2B', '3C', '4D', '5A', '6B', '7C', '8D', '9A', '10E', '11B'];

    return (
        <div className='all-schedule'>
            <h2 className='h2-schedule'>Расписание занятий</h2>
            <p className='first-p-schedule'>
                Скачайте расписание занятий для нужного класса в удобном формате (PDF, Excel, CSV или JSON).
            </p>
                <div className='controller-schedule'>
                <div className='top-control'>
                    <div className='h3-icon-schedule'>
                        <FileSearch color="#153E36" className='icon-schedule' />
                        <h3 className='h3-schedule'>Скачать расписание занятий</h3>
                    </div>
                    <p className='second-p-schedule'>Выберите класс и формат для скачивания расписания</p>

                    <div className='trio-schedule'>    
                        <div style={{display:'flex', gap:'10px'}} >
                        <h4 className='h4-schedule'>Выберите класс:</h4>
                        <Menu shadow="md" width={200}>
                            <Menu.Target>
                                <Button
                                    variant="filled"
                                    radius="14px"
                                    color="white"
                                    bd="2px solid #E2E8F0"
                                    w='120px'
                                    h='40px'
                                    bg='#FBFFFD'
                                    rightSection={<ChevronDown color="#0A192F" />}
                                    styles={{ root: { backgroundColor: "white","&:hover": { backgroundColor: "white" }}}}>
                                    {selectedClass ? (
                                        <Text c="#0A192F"> {selectedClass}</Text>
                                    ) : (
                                        <Text c="#0A192F"></Text> 
                                    )}
                                </Button>
                            </Menu.Target>

                            <Menu.Dropdown>
                                {classesList.map((className) => (
                                    <Menu.Item key={className} onClick={() => setSelectedClass(className)}>
                                        {className}
                                    </Menu.Item>
                                ))}
                            </Menu.Dropdown>
                        </Menu>
                        </div>
                        {selectedClass && (<Text style={{color:"#64748B", fontWeight:"400", fontSize:"14px", textAlign:"center"}}>Выбран класс: {selectedClass}</Text>)}
                        <Button variant="filled" leftSection={<Download color="white" width='16px' height='16px' />} className='download-button'>Скачать расписание</Button>
                    </div>
                    <Divider style={{marginTop:"24px"}}/>
                    <p className='third-p-schedule'>Последнее обновление расписаний: 15 сентября 2025
                    При обнаружении ошибок обращайтесь в учебную часть</p>
                </div>
                <div className="bottom-control">
                    <h3 className='second-h3-schedule'>Доступные расписания</h3>
                    <p className='p-schedule'>Список всех доступных для скачивания расписаний</p>
                    <div className="wrap-class-schedule">
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5Б</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 6A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                        <Link>
                        <div className="first-class">
                            <div  style={{display:"flex", gap:"10px"}}>
                            <FileSearch color="#153E36" />
                                <h5 className='h5-schedule'>Класс 5A</h5>
                            </div>
                            <p className='forth-p-schedule'>Нажмите для выбора</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleSection;
