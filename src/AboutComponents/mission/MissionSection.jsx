import React, { useState } from 'react'
import './MissionSection.css'

const MissionSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <div className='all-mission'>
      <div style={{ display: "flex", padding:"10px",alignItems: "center", gap: "8px", backgroundColor: "#CFE9DE ", width: "347px", height: "40px", borderRadius: "12px" }}>
        <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "130px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "mission" ? "white" : "#CFE9DE", color: activeTab === "mission" ? '#0A192F' : '#64748B' }} onClick={() => setActiveTab("mission")}>
          Mission & Vision
        </button>

        <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "100px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "history" ? "white" : "#CFE9DE", color: activeTab === "history" ? '#0A192F' : '#64748B' }} onClick={() => setActiveTab("history")}>
          Our History
        </button>

        <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "100px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "values" ? "white" : "#CFE9DE ", color: activeTab === "values" ? '#0A192F' : '#64748B' }} onClick={() => setActiveTab("values")}>
          Core Values
        </button>
      </div>

      <div className='control-mission'>
        {activeTab === "mission" && (
          <div>
            <h3 style={{ fontWeight: "700", fontSize: "24px", color: "#0A192F" }}>Our Mission & Vision</h3>
            <div style={{ marginTop: "18px", display: "flex", flexDirection: "column", flexWrap: "wrap", gap: "20px" }} className='both-p-mission'>
              <p className='one-p-mission'><span style={{ fontWeight: "700", fontSize: "16px" }}>Mission:</span>To provide a nurturing and inclusive learning
                environment that empowers students to become lifelong learners, critical
                thinkers, and responsible global citizens.</p>
              <p className='two-p-mission'><span style={{ fontWeight: "700", fontSize: "16px" }}>Vision:</span>To be recognized as a center of educational
                excellence that prepares students to thrive in a rapidly changing world and
                make positive contributions to society.</p>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h3 style={{ fontWeight: "700", fontSize: "24px", color: "#0A192F" }}>Our History</h3>
            <div className='two-both-p-mission'>
              <p style={{ fontWeight: "400", fontSize: "16px", color: "#4B5563" }}><span style={{ fontWeight: "700", fontSize: "16px" }}>Mission:</span>To provide a nurturing and inclusive learning
                environment that empowers students to become lifelong learners, critical
                thinkers, and responsible global citizens.</p>
              <p style={{ fontWeight: "400", fontSize: "16px", color: "#4B5563" }}><span style={{ fontWeight: "700", fontSize: "16px" }}>Vision:</span>To be recognized as a center of educational
                excellence that prepares students to thrive in a rapidly changing world and
                make positive contributions to society.</p>
            </div>
          </div>
        )}
        {activeTab === "values" && (
          <div>
            <h3 style={{ fontWeight: "700", fontSize: "24px", color: "#0A192F" }}>Core Values</h3>
            <div className='three-both-p-mission'>
              <p style={{ fontWeight: "400", fontSize: "16px", color: "#4B5563" }}><span style={{ fontWeight: "700", fontSize: "16px" }}>Mission:</span>To provide a nurturing and inclusive learning
                environment that empowers students to become lifelong learners, critical
                thinkers, and responsible global citizens.</p>
              <p style={{ fontWeight: "400", fontSize: "16px", color: "#4B5563" }}><span style={{ fontWeight: "700", fontSize: "16px" }}>Vision:</span>To be recognized as a center of educational
                excellence that prepares students to thrive in a rapidly changing world and
                make positive contributions to society.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MissionSection