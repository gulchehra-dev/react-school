import React, { useState } from 'react'
import './CaruselNewsSection.css'
import { ArrowRight, Calendar, Search } from 'lucide-react'
import { BackgroundImage, Button, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const CaruselNewsSection = () => {
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <div className='all-carusel-news'>
      <h2 className='h2-carusel-news'>School News</h2>
      <p className='p-carusel-news'>Stay updated with the latest news, events, and announcements from our school community.</p>
      <div className="both-carusel">
        <div className='input-with-icon'>
          <Search size={20} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
          <input type="text" placeholder="Search news..." className='input-carusel-news' />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", backgroundColor: "#EFF6FF", width: "347px", height: "40px", borderRadius: "12px" }}>
            <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "150px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "aii" ? "white" : "#EFF6FF", color: activeTab === "aii" ? 'black' : '#64748B' }} onClick={() => setActiveTab("aii")}>
              AII
            </button>

            <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "100px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "announcements" ? "white" : "#EFF6FF", color: activeTab === "announcements" ? 'black' : '#64748B' }} onClick={() => setActiveTab("announcements")}>
              Announcements
            </button>

            <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "100px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "events" ? "white" : "#EFF6FF", color: activeTab === "events" ? 'black' : '#64748B' }} onClick={() => setActiveTab("events")}>
              Events
            </button>
            <button style={{ display: "flex", alignItems: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "100px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "achievements" ? "white" : "#EFF6FF", color: activeTab === "achievements" ? 'black' : '#64748B' }} onClick={() => setActiveTab("achievements")}>
              Achievements
            </button>
          </div>
          <div style={{width:"100%"}}>
          <div className='carousel'>
            {activeTab === "aii" && (
                <div className='each-carusel'>
                  <Stack>
                    <div className='olympics'>
                      <BackgroundImage src="https://resizer.mail.ru/p/4ed12663-70b9-5c88-a561-1dc10ac4f40e/AQAG3TOGPd9jWGcvSjnz2564bTkssQJJvOfjrEnWHX2ryw9QUtmH8x5AeZEdAJPKAeEAW_BySx3hkGidg2D6U14pTK8.jpg"
                        style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} className='carusel-image' />
                      <div style={{ marginLeft: "24px", }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "25px", gap: "4px" }}>
                          <Calendar color="#6b7280" size={12} style={{ marginTop: "5PX" }} />
                          <Text style={{ color: "#6b7280", fontWeight: "400", fontSize: "14px" }}>May 5, 2025</Text>
                        </div>
                        <h2 className='h2-news'>School Olympics Winners Announced</h2>
                        <p style={{ marginTop: "8px", width: "417px", color: "#6b7280" }}>Congratulations to all participants and winners of our
                          annual School Olympics competition. This year's event
                          saw record participation with over 300 students…</p>
                        <Button rightSection={<ArrowRight color="#2563eb" size={16} />} style={{ width: "168px", height: "40px", background: "transparent" }} className='one-but-carusel'><Link style={{ color: "#2563eb" }}>Read more</Link></Button>
                      </div>
                    </div>
                  </Stack>
                  <Stack>
                    <div className='computer'>
                      <BackgroundImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9xLkYMkr1bJzSK-iU1PtIL7k_MG2dQHV888Cm_8JVDCEsK3VRX_dSWg7LCrzS2vnLDo&usqp=CAU"
                        style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} className='carusel-image' />
                      <div style={{ marginLeft: "24px" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "25px", gap: "4px" }}>
                          <Calendar color="#6b7280" size={12} style={{ marginTop: "5PX" }} />
                          <Text style={{ color: "#6b7280", fontWeight: "400", fontSize: "14px" }}>April 28, 2025</Text>
                        </div>
                        <h2 className='six-h2-news'>New Computer Lab Opening</h2>
                        <p style={{ marginTop: "8px", width: "417px", color: "#6b7280" }}>We're excited to announce the opening of our new state-
                          of-the-art computer laboratory. The lab features 30 new
                          computers with the latest software for programming,…</p>
                        <Button rightSection={<ArrowRight color="#2563eb" size={16} />} style={{ width: "168px", height: "40px", background: "transparent" }} className='two-but-carusel'><Link style={{ color: "#2563eb" }}>Read more</Link></Button>
                      </div>
                    </div>
                  </Stack>
                  <Stack>
                    <div className='parent'>
                      <BackgroundImage src="https://techrocks.ru/wp-content/uploads/2023/05/tipichnyje-oshibki-novichka-v-programmirovanii.jpg"
                        style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} className='carusel-image' />
                      <div style={{ marginLeft: "24px" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "25px", gap: "4px" }}>
                          <Calendar color="#6b7280" size={12} style={{ marginTop: "5PX" }} />
                          <Text style={{ color: "#6b7280", fontWeight: "400", fontSize: "14px" }}>April 15, 2025</Text>
                        </div>
                        <h2 className='six-h2-news'>Parent-Teacher Conference Schedule</h2>
                        <p style={{ marginTop: "8px", width: "417px", color: "#6b7280" }}>The schedule for the upcoming parent-teacher
                          conferences has been published. Parents can book their
                          preferred time slots through the online portal or by…</p>
                        <Button rightSection={<ArrowRight color="#2563eb" size={16} />} style={{ width: "168px", height: "40px", background: "transparent" }} className='three-but-carusel' ><Link style={{ color: "#2563eb" }}>Read more</Link></Button>
                      </div>
                    </div>
                  </Stack>
                  <Stack>
                    <div className='students'>
                      <BackgroundImage src="https://s4.stc.all.kpcdn.net/woman/wp-content/uploads/2024/01/national-cancer-institute-k-chemu-snitsya-shkola-560x420.jpg"
                        style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} className='carusel-image' />
                      <div style={{ marginLeft: "24px" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "25px", gap: "4px" }}>
                          <Calendar color="#6b7280" size={12} style={{ marginTop: "5PX" }} />
                          <Text style={{ color: "#6b7280", fontWeight: "400", fontSize: "14px" }}>April 10, 2025</Text>
                        </div>
                        <h2 className='six-h2-news'>Students Win Regional Science Fair</h2>
                        <p style={{ marginTop: "8px", width: "417px", color: "#6b7280" }}>Our science team has won first place at the Regional
                          Science Fair with their innovative project on renewable
                          energy. They will now advance to the national competitio…</p>
                        <Button rightSection={<ArrowRight color="#2563eb" size={16} />} style={{ width: "168px", height: "40px", background: "transparent" }} className='three-but-carusel' ><Link style={{ color: "#2563eb" }}>Read more</Link></Button>
                      </div>
                    </div>
                  </Stack>
                  <Stack>
                    <div className='festival'>
                      <BackgroundImage src="https://resizer.mail.ru/p/de03813e-a996-56d9-b755-371a6b9f297b/AQAG5v_CZm6CavM8_rNa8vhxYxXhfZOsmMsiePELJFmpFUcE2aM48vuyYlFhwbu5bjlOYrSNfozF-9p3cGMpLchwGgQ.jpg"
                        style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} className='carusel-image' />
                      <div style={{ marginLeft: "24px" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "25px", gap: "4px" }}>
                          <Calendar color="#6b7280" size={12} style={{ marginTop: "5PX" }} />
                          <Text style={{ color: "#6b7280", fontWeight: "400", fontSize: "14px" }}>April 5, 2025</Text>
                        </div>
                        <h2 className='six-h2-news'>Annual Arts Festival Next Week</h2>
                        <p style={{ marginTop: "8px", width: "417px", color: "#6b7280" }}>Our annual Arts Festival will take place next week,
                          featuring student artwork, musical performances, and
                          theatrical productions. Join us to celebrate the creative…</p>
                        <Button rightSection={<ArrowRight color="#2563eb" size={16} />} style={{ width: "168px", height: "40px", background: "transparent" }} className='three-but-carusel' ><Link style={{ color: "#2563eb" }}>Read more</Link></Button>
                      </div>
                    </div>
                  </Stack>
                  <Stack>
                    <div className='language'>
                      <BackgroundImage src="https://static.tildacdn.com/tild6138-3537-4637-b530-326465306233/57D78AD2-572B-4F27-8.jpeg"
                        style={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} className='carusel-image' />
                      <div style={{ marginLeft: "24px" }}>
                        <div style={{ display: "flex", flexDirection: "row", marginTop: "25px", gap: "4px" }}>
                          <Calendar color="#6b7280" size={12} style={{ marginTop: "5PX" }} />
                          <Text style={{ color: "#6b7280", fontWeight: "400", fontSize: "14px" }}>March 25, 2025</Text>
                        </div>
                        <h2 className='six-h2-news'>New Language Program Launching</h2>
                        <p style={{ marginTop: "8px", width: "417px", color: "#6b7280" }}>Starting next semester, we will be offering an expanded
                          language program including Spanish and Chinese in
                          addition to our current language offerings. Registration is…</p>
                        <Button rightSection={<ArrowRight color="#2563eb" size={16} />} style={{ width: "168px", height: "40px", background: "transparent" }} className='three-but-carusel' ><Link style={{ color: "#2563eb" }}>Read more</Link></Button>
                      </div>
                    </div>
                  </Stack>
                </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaruselNewsSection