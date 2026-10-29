import React from 'react'
import { Text, Stack } from '@mantine/core'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import './TeachersSection.css'

const teachersData = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    image: 'https://t4.ftcdn.net/jpg/07/03/57/63/360_F_703576357_1pMnW1Fmb79ABEqJ31TcEABIxUqtavxE.jpg'
  },
  {
    id: 2,
    name: 'Prof. Michael Chen',
    role: 'Mathematics',
    image: 'https://t4.ftcdn.net/jpg/07/03/57/63/360_F_703576357_1pMnW1Fmb79ABEqJ31TcEABIxUqtavxE.jpg'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Science',
    image: 'https://t4.ftcdn.net/jpg/07/03/57/63/360_F_703576357_1pMnW1Fmb79ABEqJ31TcEABIxUqtavxE.jpg'
  },
  {
    id: 4,
    name: 'Mr. James Wilson',
    role: 'History',
    image: 'https://t4.ftcdn.net/jpg/07/03/57/63/360_F_703576357_1pMnW1Fmb79ABEqJ31TcEABIxUqtavxE.jpg'
  },
  {
    id: 5,
    name: 'Ms. Anna Davis',
    role: 'English Literature',
    image: 'https://t4.ftcdn.net/jpg/07/03/57/63/360_F_703576357_1pMnW1Fmb79ABEqJ31TcEABIxUqtavxE.jpg'
  }
]

const TeachersSection = () => {
  return (
    <Stack className='teachers-container' align="center">
      <h2 className='h2-teacher'>Our Teachers</h2>
      <p className='p-teacher'>
        Meet our dedicated team of educators committed to providing the highest quality
        education and support for our students.
      </p>

      <div className='swiper-outer-wrapper'>
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} /* Показываем строго 3 карточки: центр и по одной по бокам */
          watchSlidesProgress={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="teachers-swiper"
        >
          {teachersData.map((teacher) => (
            <SwiperSlide key={teacher.id} className='teacher-slide'>
              <div className='teacher-card'>
                <div 
                  className='bg-image-teacher' 
                  style={{ backgroundImage: `url(${teacher.image})` }}
                >
                  <div className='teacher-overlay'>
                    <Text className='teacher-name-overlay'>{teacher.name}</Text>
                    <Link to="#" className='teacher-role-overlay'>{teacher.role}</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Stack>
  )
}

export default TeachersSection