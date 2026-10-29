import React from 'react'
import { BackgroundImage } from '@mantine/core'
import { AlarmClock } from 'lucide-react'
import './StudySection.css'

const StudySection = () => {
  return (
    <div className='all-study'>
      <h2 className='h2-study'>Образование</h2>
      <p className='p-study'>Наша школа предлагает комплексную образовательную программу, разработанную для развития всесторонне развитых учеников с прочной академической основой и практическими навыками.</p>
      <div className='box-study'>
        <h3 className='h3-study'>Внеклассные активности</h3>
        <div className='card-study'>
          <div className='first-box-study'>
            <BackgroundImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbj8FrG41jiw43h2gEHHS5lmKlXFgL6mnqA&s' className='bg-study' />
            <div className='study-text'>
              <h4 className='h4-study'>Chess Club</h4>
              <p className='second-p-study'>Develop strategic thinking and problem-solving skills</p>
              <div className='h6-icon-study'>
                <AlarmClock color="#1E5D50" width="12px" height="12px" />
                <h6 className='h6-study'>Mondays and Wednesdays, 15:00 - 16:30</h6>
              </div>
            </div>
          </div>
          <div className='first-box-study'>
            <BackgroundImage src='https://keyirobot.com/cdn/shop/articles/5_1b53bae1-05a7-4638-92f1-5e5cd064bdde_600x600.jpg?v=1751273000' className='bg-study' />
            <div className='study-text'>
              <h4 className='h4-study'>Robotics Team</h4>
              <p className='second-p-study'>Learn programming and
                engineering through robotics</p>
              <div className='h6-icon-study'>
                <AlarmClock color="#1E5D50" width="12px" height="12px" />
                <h6 className='h6-study'>Tuesdays and Thursdays, 15:00 -
                  17:00</h6>
              </div>
            </div>
          </div>
          <div className='first-box-study'>
            <BackgroundImage src='https://www.shutterstock.com/image-vector/debate-before-vote-male-woman-600nw-2184567945.jpg' className='bg-study' />
            <div className='study-text'>
              <h4 className='h4-study'>Debate Club</h4>
              <p className='second-p-study'>Improve public speaking and
                critical thinking skills</p>
              <div className='h6-icon-study'>
                <AlarmClock color="#1E5D50" width="12px" height="12px" />
                <h6 className='h6-study'>Fridays, 14:30 - 16:00</h6>
              </div>
            </div>
          </div>
          <div className='first-box-study'>
            <BackgroundImage src='https://static.vecteezy.com/system/resources/thumbnails/007/343/251/small_2x/school-building-in-flat-style-modern-school-college-building-illustration-vector.jpg' className='bg-study' />
            <div className='study-text'>
              <h4 className='h4-study'>School Choir</h4>
              <p className='second-p-study'>Develop musical talents and
                perform at school events</p>
              <div className='h6-icon-study'>
                <AlarmClock color="#1E5D50" width="12px" height="12px" />
                <h6 className='h6-study'>Tuesdays and Thursdays, 15:00 -
                  16:30</h6>
              </div>
            </div>
          </div>
          <div className='first-box-study'>
            <BackgroundImage src='https://utusanonline.com.my/wp-content/uploads/2022/10/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg' className='bg-study' />
            <div className='study-text'>
              <h4 className='h4-study'>Science Olympiad</h4>
              <p className='second-p-study'>Prepare for science competitions
                and olympiads</p>
              <div className='h6-icon-study'>
                <AlarmClock color="#1E5D50" width="12px" height="12px" />
                <h6 className='h6-study'>Wednesdays, 15:00 - 17:00</h6>
              </div>
            </div>
          </div>
          <div className='first-box-study'>
            <BackgroundImage src='https://rockytopsportsworld.com/wp-content/uploads/2019/07/sports-balls.jpg' className='bg-study' />
            <div className='study-text'>
              <h4 className='h4-study'>Sports Teams</h4>
              <p className='second-p-study'>Soccer, basketball, volleyball,
                and athletics</p>
              <div className='h6-icon-study'>
                <AlarmClock color="#1E5D50" width="12px" height="12px" />
                <h6 className='h6-study'>Various times, see coach for details</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudySection