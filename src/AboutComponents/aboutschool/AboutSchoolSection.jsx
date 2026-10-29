import { Image } from '@mantine/core'
import './AboutSchoolSection.css'

const AboutSchoolSection = () => {
    return (
        <div className='both-about-school'>
            <div>            
                <h2 className='h2-about-school'>About Our School</h2>
                <h6 className='h6-about-school'>Our school has been providing quality education since 1998. We
                    focus on developing not only academic knowledge but also critical
                    thinking, creativity, and social skills in our students.</h6>
                <p className='p-about-school'>We believe that every student has unique talents and abilities, and our
                    mission is to help them discover and develop these talents to their fullest
                    potential.</p>
            </div>
            <Image src="https://t4.ftcdn.net/jpg/05/33/81/53/360_F_533815391_1xMcUjsWULAxXVIwAcUFepZ5xnoQWQJb.jpg"
            style={{ borderRadius:"16px"}} className='img-school'/>
        </div>
    )
}

export default AboutSchoolSection