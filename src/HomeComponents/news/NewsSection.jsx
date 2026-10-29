import { BackgroundImage, Button, Flex, Group, Text } from '@mantine/core'
import { ArrowRight, BookOpen, Calendar, CalendarDays, FileText, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./NewsSection.css"

const NewsSection = () => {
    return (
        <Flex className='first-news'>
            <div className='news-main-column'>
                <div className='two-text-news'>
                    <h2 className='first-text'>Последние новости</h2>
                    <Button rightSection={<ArrowRight color="#000000" size={16} />} className="button-news-text">Смотреть все</Button>
                </div>
                
                <div className='news-list'>
                    <div className='winers'>
                        <BackgroundImage 
                            src="https://media.istockphoto.com/id/1019361978/fr/vectoriel/sc%C3%A8ne-de-la-belle-for%C3%AAt-de-pluie.jpg?s=612x612&w=0&k=20&c=kbhC4ncbw_lluVQ9L1J6N062WIfj4f65QsQJysQtvN8=" 
                            className='bg-image' 
                        />
                        <div className='news-content-box'>
                            <div className='news-date-row'>
                                <Calendar color="#6b7280" size={12} />
                                <Text className='news-date-text'>5 мая 2025</Text>
                            </div>
                            <h2 className='h2-news'>Объявлены победители школьной олимпиады</h2>
                            <p className='news-desc-text'>Поздравляем всех участников и победителей нашей ежегодной школьной олимпиады.</p>
                            <Button rightSection={<ArrowRight color="#153E36" size={16} />} className='one-button-news'>
                                <Link to="#" className='news-link-text'>Читать далее</Link>
                            </Button>
                        </div>
                    </div>

                    <div className='winers'>
                        <BackgroundImage 
                            src="https://media.istockphoto.com/id/1019361978/fr/vectoriel/sc%C3%A8ne-de-la-belle-for%C3%AAt-de-pluie.jpg?s=612x612&w=0&k=20&c=kbhC4ncbw_lluVQ9L1J6N062WIfj4f65QsQJysQtvN8=" 
                            className='bg-image' 
                        />
                        <div className='news-content-box'>
                            <div className='news-date-row'>
                                <Calendar color="#6b7280" size={12} />
                                <Text className='news-date-text'>28 апреля 2025</Text>
                            </div>
                            <h2 className='h2-news'>Открытие нового компьютерного класса</h2>
                            <p className='news-desc-text'>Мы рады сообщить об открытии нашей новой современной компьютерной лаборатории.</p>
                            <Button rightSection={<ArrowRight color="#153E36" size={16} />} className='one-button-news'>
                                <Link to="#" className='news-link-text'>Читать далее</Link>
                            </Button>
                        </div>
                    </div>

                    <div className='winers'>
                        <BackgroundImage 
                            src="https://media.istockphoto.com/id/1019361978/fr/vectoriel/sc%C3%A8ne-de-la-belle-for%C3%AAt-de-pluie.jpg?s=612x612&w=0&k=20&c=kbhC4ncbw_lluVQ9L1J6N062WIfj4f65QsQJysQtvN8=" 
                            className='bg-image' 
                        />
                        <div className='news-content-box'>
                            <div className='news-date-row'>
                                <Calendar color="#6b7280" size={12} />
                                <Text className='news-date-text'>15 апреля 2025</Text>
                            </div>
                            <h2 className='h2-news'>Расписание родительских собраний</h2>
                            <p className='news-desc-text'>Опубликовано расписание предстоящих родительских собраний.</p>
                            <Button rightSection={<ArrowRight color="#153E36" size={16} />} className='one-button-news'>
                                <Link to="#" className='news-link-text'>Читать далее</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fast-news'>
                <div className='fast-news-header'>
                    <Text className='fast-news-title'>Быстрые ссылки</Text>
                </div>
                <div className='fast-news-body'>
                    <div className='fast-news-item'>
                        <div className='icon-wrapper'>
                            <CalendarDays color="#153E36" size={20} />
                        </div>
                        <Text className='fast-news-item-text'>Расписание уроков</Text>
                    </div>
                    <div className='fast-news-item'>
                        <div className='icon-wrapper'>
                            <FileText color="#153E36" size={20} />
                        </div>
                        <Text className='fast-news-item-text'>Школьные документы</Text>
                    </div>
                    <div className='fast-news-item'>
                        <div className='icon-wrapper'>
                            <Users color="#153E36" size={20} />
                        </div>
                        <Text className='fast-news-item-text'>Наши учителя</Text>
                    </div>
                    <div className='fast-news-item'>
                        <div className='icon-wrapper'>
                            <BookOpen color="#153E36" size={20} />
                        </div>
                        <Text className='fast-news-item-text'>Доступные курсы</Text>
                    </div>
                </div>
            </div>
        </Flex>
    )
}

export default NewsSection