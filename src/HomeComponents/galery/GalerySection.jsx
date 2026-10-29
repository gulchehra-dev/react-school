import { Button, Image } from '@mantine/core'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import './GalerySection.css'
import { Link } from 'react-router-dom'

const GalerySection = () => (
  <section className="galery-section"> 
    <div className="galery-inner">    
      <div className="second-galery">
        <h2 className='h2-galery'>Photo Gallery</h2>
        <Link to="/photos">
        <Button
          rightSection={<ArrowRight size={18} />}
          style={{
            alignItems: "center",
            width: "162px",
            color: '#0A192F',
            background: "white",
            borderRadius: "40px",
            border: "1px solid #d1d5db"
          }}
        >
          View All Photos
        </Button>
        </Link>
      </div>

      <div className="galery-grid">
        <Image src="https://t3.ftcdn.net/jpg/12/43/98/70/360_F_1243987007_wZJpt0GiU10Qa50NtdUrFz45xP9QTR7z.jpg" className='photo-galery' />
        <Image src="https://thumbs.dreamstime.com/b/jungle-green-morning-vietnam-32007583.jpg" className='photo-galery' />
        <Image src="https://thumbs.dreamstime.com/b/neon-lit-plants-green-jungle-background-high-quality-resolution-illustration-generated-use-ai-362836974.jpg" className='photo-galery' />
        <Image src="https://img.pikbest.com/backgrounds/20250412/neon-green-framed-empty-space-amidst-lush-tropical-foliage_11660784.jpg!w700wp" className='photo-galery' />
        <Image src="https://t4.ftcdn.net/jpg/14/42/96/85/360_F_1442968535_oVS4iy0ZL1Qo4QTCVVcD3siwHBu1x2LJ.jpg" className='photo-galery' />
        <Image src="https://img.freepik.com/premium-photo/neon-sign-jungle-with-green-leaves_147933-1610.jpg" className='photo-galery' />
      </div>
    </div>
  </section>
)

export default GalerySection
