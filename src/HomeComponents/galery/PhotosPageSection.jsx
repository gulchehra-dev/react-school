import React from 'react'

import './PhotosPageSection.css'
import { Image } from '@mantine/core'

const PhotosPageSection = () => {
  return (
    <div className='photos-section'>
        <h2 className='h2-photos-page'>Фотогалерея</h2>
        <p className='p-photos-section'>Исследуйте нашу школьную жизнь через фотографии мероприятий, помещений и студенческих активностей.</p>
        <div className="all-photos">
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
            <Image src="https://thumbs.dreamstime.com/b/illustration-abstract-light-green-background-abstract-light-green-background-338484392.jpg" className='pictures'/>
        </div>
    </div>
  )
}

export default PhotosPageSection