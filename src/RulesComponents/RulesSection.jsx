import React from 'react'
import './RulesSection.css'
import { Clock3, Download, FileText, ShieldCheck } from 'lucide-react'
import { Accordion, Button } from '@mantine/core'

const RulesSection = () => {
    return (
        <div className='all-rules'>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h2 className='h2-rules'>School Rules and Documents</h2>
                <p className='p-rules'>Our school maintains clear rules and policies to ensure a safe, respectful, and productive learning environment for all students.</p>
            </div>
            <div className="top-rules">
                <div className="left-t-rule">
                    <div style={{ display: "flex", gap: "10px" }}>
                        <ShieldCheck color="#0A192F" />
                        <h3 className='first-h3-rules'>School Rules</h3>
                    </div>
                    <div className="accordion">
                        <Accordion multiple={false}>
                            <Accordion.Item value="attendance">
                                <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>Attendance and Punctuality</Accordion.Control>
                                <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px", }}>It’s a set of guidelines to manage employee attendance and timeliness. This policy defines the expectations for when employees should arrive and depart from work, how to report absences or lateness and the procedures for handling non-compliance.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="behavior">
                                <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>Behavior and Discipline</Accordion.Control>
                                <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Thus, a student in special education may be involved in two processes simultaneously:

                                    General education discipline process, following the rules and procedures to address whether the student actually engaged in the misconduct, including any decisions about the length and type of removal; and
                                    Special education discipline rules and procedures to make decisions about whether a student will be removed from their current special education placement, and if so, the services that will be provided to the student.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="uniform">
                                <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>Uniform and Appearance</Accordion.Control>
                                <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Teachers have a specified uniform. The uniform for female teachers consists of:1.

                                    1. grey trousers or skirt,
                                    2. white shirt,
                                    3. red jacket and
                                    4. red scarf.
                                    The uniform for male teachers consists of:

                                    1. grey trousers,
                                    2. white shirt,
                                    3. red tie and
                                    4. blue jumper.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="integrity">
                                <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>Academic Integrity</Accordion.Control>
                                <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>The revised edition features the original five values: honesty, trust, fairness, respect and responsibility, and adds an additional element: the quality of courage.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="facilities">
                                <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>School Facilities and Property</Accordion.Control>
                                <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>School facilities management involves the comprehensive oversight of all school-owned facilities and assets. This includes managing the physical infrastructure—such as classrooms, libraries, and sports facilities—as well as ensuring that these spaces meet safety standards and are equipped for educational activities. Schools increasingly rely on an education facilities management system to streamline these processes and improve efficiency.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item value="devices">
                                <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>Electronic Devices</Accordion.Control>
                                <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>The school accepts no responsibility for the loss or damage of any electronic equipment brought onto the school premises. If students choose to bring electronic devices with them to school, then they accept total responsibility for any loss or damage. We recommend that any valuable items are locked in the student locker when not in use in class.</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="right-t-rule">
                    <div style={{ display: "flex", gap: "10px" }}>
                    <Clock3 color="#0A192F" />
                    <h3 className='second-h3-rules'>School Hours</h3>
                    </div>
                    <div style={{display:"flex", flexDirection:"column",marginTop:"24px", gap:"16px"}}>
                    <div>
                        <h5 style={{fontWeight:"700", fontSize:"16px", color:"#0A192F"}}>Regular School Days</h5>
                        <p style={{color:"#64748B", fontWeight:"400", fontSize:"16px"}}>Monday - Friday: 8:00 AM - 3:30 PM</p>
                    </div>
                    <div>
                        <h5 style={{fontWeight:"700", fontSize:"16px", color:"#0A192F"}}>Administration Office</h5>
                        <p style={{color:"#64748B", fontWeight:"400", fontSize:"16px"}}>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                        <h5 style={{fontWeight:"700", fontSize:"16px", color:"#0A192F"}}>Library</h5>
                        <p style={{color:"#64748B", fontWeight:"400", fontSize:"16px"}}>Monday - Friday: 8:00 AM - 4:30 PM</p>
                    </div>
                    <div>
                        <h5 style={{fontWeight:"700", fontSize:"16px", color:"#0A192F"}}>Monday - Friday: 8:00 AM - 4:30 PM</h5>
                        <p style={{color:"#64748B", fontWeight:"400", fontSize:"16px"}}>Monday - Friday: 8:00 AM - 4:30 PM</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bottom-rules">
                <h3 className='third-h3-rules'>School Documents</h3>
                <div className="school-documents">
                    <div className="charter">
                        <div style={{width:"56px", height:"56px", background:"#DCF3E9", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"16px"}}>
                        <FileText color="#153E36" width="36px" height="36px" />
                        </div>
                        <div >
                            <h5 style={{color:"#0A192F", fontWeight:"700", fontSize:"18px"}}>School Charter</h5>
                            <p style={{color:"#64748B", fontWeight:"400", fontSize:"14px"}}>Official school charter document</p>
                            <div style={{display:"flex", gap:"60px"}}>
                            <h6 style={{color:"#64748B", fontWeight:"400", fontSize:"12px", marginTop:"22px"}}>1.2 MB • PDF</h6>
                            <Button leftSection={<Download color="#0A192F" width="16px" height="16px" />} style={{ marginTop:"12px",border:"2px solid #E2E8F0", borderRadius:"50px", width:"125px", height:"36px",color:"#0A192F", background:"white"}}>Download</Button>
                            </div>
                        </div>
                    </div>
                    <div className="handbook">
                        <div style={{width:"56px", height:"56px", background:"#DCF3E9", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"16px"}}>
                        <FileText color="#153E36" width="36px" height="36px" />
                        </div>
                        <div >
                            <h5 style={{color:"#0A192F", fontWeight:"700", fontSize:"18px"}}>Student Handbook</h5>
                            <p style={{color:"#64748B", fontWeight:"400", fontSize:"14px"}}>Complete guide for students</p>
                            <div style={{display:"flex", gap:"60px"}}>
                            <h6 style={{color:"#64748B", fontWeight:"400", fontSize:"12px", marginTop:"22px"}}>3.5 MB • PDF</h6>
                            <Button leftSection={<Download color="#0A192F" width="16px" height="16px" />} style={{ marginTop:"12px",border:"2px solid #E2E8F0", borderRadius:"50px", width:"125px", height:"36px",color:"#0A192F", background:"white"}}>Download</Button>
                            </div>
                        </div>
                    </div>
                    <div className="guide">
                        <div style={{width:"56px", height:"56px", background:"#DCF3E9", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"16px"}}>
                        <FileText color="#153E36" width="36px" height="36px" />
                        </div>
                        <div >
                            <h5 style={{color:"#0A192F", fontWeight:"700", fontSize:"18px"}}>Parent Guide</h5>
                            <p style={{color:"#64748B", fontWeight:"400", fontSize:"14px"}}>Information for parents</p>
                            <div style={{display:"flex", gap:"60px"}}>
                            <h6 style={{color:"#64748B", fontWeight:"400", fontSize:"12px", marginTop:"22px"}}>2.8 MB • PDF</h6>
                            <Button leftSection={<Download color="#0A192F" width="16px" height="16px" />} style={{ marginTop:"12px",border:"2px solid #E2E8F0", borderRadius:"50px", width:"125px", height:"36px",color:"#0A192F", background:"white"}}>Download</Button>
                            </div>
                        </div>
                    </div>
                    <div className="calendar">
                        <div style={{width:"56px", height:"56px", background:"#DCF3E9", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"16px"}}>
                        <FileText color="#153E36" width="36px" height="36px" />
                        </div>
                        <div >
                            <h5 style={{color:"#0A192F", fontWeight:"700", fontSize:"18px"}}>Academic Calendar</h5>
                            <p style={{color:"#64748B", fontWeight:"400", fontSize:"14px"}}>School year calendar with important dates</p>
                            <div style={{display:"flex", gap:"60px"}}>
                            <h6 style={{color:"#64748B", fontWeight:"400", fontSize:"12px", marginTop:"16px"}}>0.8 MB • PDF</h6>
                            <Button leftSection={<Download color="#0A192F" width="16px" height="16px" />} style={{ marginTop:"4px",border:"2px solid #E2E8F0", borderRadius:"50px", width:"125px", height:"36px",color:"#0A192F", background:"white"}}>Download</Button>
                            </div>
                        </div>
                    </div>
                    <div className="forms">
                        <div style={{width:"56px", height:"56px", background:"#DCF3E9", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"16px"}}>
                        <FileText color="#153E36" width="36px" height="36px" />
                        </div>
                        <div >
                            <h5 style={{color:"#0A192F", fontWeight:"700", fontSize:"18px"}}>Enrollment Forms</h5>
                            <p style={{color:"#64748B", fontWeight:"400", fontSize:"14px"}}>Forms required for new student enrollment</p>
                            <div style={{display:"flex", gap:"60px"}}>
                            <h6 style={{color:"#64748B", fontWeight:"400", fontSize:"12px", marginTop:"16px"}}>1.5 MB • ZIP</h6>
                            <Button leftSection={<Download color="#0A192F" width="16px" height="16px" />} style={{ marginTop:"4px",border:"2px solid #E2E8F0", borderRadius:"50px", width:"125px", height:"36px",color:"#0A192F", background:"white"}}>Download</Button>
                            </div>
                        </div>
                    </div>
                    <div className="conduct">
                        <div style={{width:"56px", height:"56px", background:"#DCF3E9", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"16px"}}>
                        <FileText color="#153E36" width="36px" height="36px" />
                        </div>
                        <div >
                            <h5 style={{color:"#0A192F", fontWeight:"700", fontSize:"18px"}}>Code of Conduct</h5>
                            <p style={{color:"#64748B", fontWeight:"400", fontSize:"14px"}}>Detailed code of conduct for students</p>
                            <div style={{display:"flex", gap:"60px"}}>
                            <h6 style={{color:"#64748B", fontWeight:"400", fontSize:"12px", marginTop:"22px"}}>1.1 MB • PDF</h6>
                            <Button leftSection={<Download color="#0A192F" width="16px" height="16px" />} style={{ marginTop:"12px",border:"2px solid #E2E8F0", borderRadius:"50px", width:"125px", height:"36px",color:"#0A192F", background:"white"}}>Download</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RulesSection
