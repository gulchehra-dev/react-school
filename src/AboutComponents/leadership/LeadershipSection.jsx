import { Award, BookOpen, Users } from 'lucide-react'
import React from 'react'
import './LeadershipSection.css'

const LeadershipSection = () => {
  return (
    <div style={{ marginTop: "64px" }}>
      <h2 className='h2-leadership'>School Leadership</h2>
      <div className='all-leadership'>
        <div className='box-leadership'>
          <div style={{ marginTop: "24px", backgroundColor: "#DCF3E9", width: "96px", height: "96px", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users color="#153E36" style={{ width: "48px", height: "48px", }} />
          </div>
          <h4 style={{ marginTop: "16px", fontWeight: "600", fontSize: "24px" , color:'#0A192F'}}>John Smith</h4>
          <h6 style={{ fontWeight: "400", fontSize: "14px", color: "#64748B" }}>Principal</h6>
          <p className='p-mission'>With over 20 years of experience in
            education, Mr. Smith leads our school with
            vision and dedication.</p>
        </div>
        <div className='box-leadership'>
          <div style={{ marginTop: "24px", backgroundColor: "#DCF3E9", width: "96px", height: "96px", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <BookOpen color="#153E36" style={{ width: "48px", height: "48px", }} />
          </div>
          <h4 style={{ marginTop: "16px", fontWeight: "600", fontSize: "24px", color:"#0A192F" }}>Maria Johnson</h4>
          <h6 style={{ fontWeight: "400", fontSize: "14px", color: "#64748B" }}>Academic Director</h6>
          <p className='p-mission'>Dr. Johnson oversees our academic
            programs, ensuring high standards and
            innovative teaching methods.</p>
        </div>
        <div className='box-leadership'>
          <div style={{ marginTop: "24px", backgroundColor: "#DCF3E9", width: "96px", height: "96px", borderRadius: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Award color="#153E36" style={{ width: "48px", height: "48px", }} />
          </div>
          <h4 style={{ marginTop: "16px", fontWeight: "600", fontSize: "24px" , color:"#0A192F"}}>Robert Davis</h4>
          <h6 style={{ fontWeight: "400", fontSize: "14px", color: "#64748B" }}>Student Affairs</h6>
          <p className='p-mission'>Mr. Davis coordinates student activities and
            ensures a supportive environment for all
            students.</p>
        </div>
      </div>
    </div>
  )
}

export default LeadershipSection