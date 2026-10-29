import React, { useState } from 'react'

import './SupportSection.css'
import { BadgeQuestionMark, FileText, Link2, Mail, Mails, MapPin, Phone, } from 'lucide-react'
import { Accordion, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const SupportSection = () => {
    const [activeTab, setActiveTab] = useState("faq");
    return (
        // <div className="all-support">
        //     <div className='h2-with-p'>
        //         <h2 style={{ color: "#153E36", fontWeight: "700", fontSize: "36px" }}>Поддержка и FAQ</h2>
        //         <p className='p-support'>Найдите ответы на часто задаваемые вопросы и получите необходимую информацию о нашей школе.</p>
        //     </div>
        //     <div className="questions">
        //         <div style={{ display: "flex", gap: "10px" }}>
        //             <BadgeQuestionMark color="#153E36" width="20px" height="20px" style={{ marginTop: "10px" }} />
        //             <h3 className='first-h3-support'>Часто задаваемые вопросы</h3>
        //         </div>
        //         <div className="second-accordion">
        //             <Accordion multiple={false}>
        //                 <Accordion.Item value='hours'>
        //                     <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What are the school hours?</Accordion.Control>
        //                     <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
        //                         AM - 3:30 PM</Accordion.Panel>
        //                 </Accordion.Item>
        //                 <Accordion.Item value='enroll'>
        //                     <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How do I enroll my child in the school?</Accordion.Control>
        //                     <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
        //                         AM - 3:30 PM</Accordion.Panel>
        //                 </Accordion.Item>
        //             </Accordion>
        //         </div>
        //     </div>
        //     <div className="information">
        //         <h3 style={{ color: "#153E36", fontWeight: "700", fontSize: "24px" }}>Контактная информация</h3>
        //         <div className="trio-info">
        //             <div className="adres">
        //                 <MapPin color="#153E36" width="40px" height="40px" />
        //                 <h5 style={{ color: "#0A192F", fontWeight: "700", fontSize: "18px" }}>Адрес</h5>
        //                 <p style={{ color: "#64748B", fontWeight: "400", fontSize: "16px" }}>123 School Street, City, Country</p>
        //             </div>
        //             <div className="phone">
        //                 <Phone color="#153E36" />
        //                 <h5 style={{ color: "#0A192F", fontWeight: "700", fontSize: "18px" }}>Телефон</h5>
        //                 <p style={{ width: "120px", color: "#64748B", fontWeight: "400", fontSize: "16px" }}>+1 234 567 890
        //                     +1 234 567 891</p>
        //             </div>
        //             <div className="email">
        //                 <Mail color="#153E36" style={{ width: "40px", height: "40px" }} />
        //                 <h5 style={{ color: "#0A192F", fontWeight: "700", fontSize: "18px" }}>Email</h5>
        //                 <p style={{ width: "199px", color: "#64748B", fontWeight: "400", fontSize: "16px" }}>info@schoolname.edu
        //                     support@schoolname.edu</p>
        //             </div>
        //         </div>
        //         <div className="work-hours">
        //             <h5 style={{ color: "#0A192F", fontWeight: "700", fontSize: "18px" }}>Часы работы</h5>
        //             <div className="both">
        //                 <div className="administration">
        //                     <h6 style={{ fontWeight: "500", fontSize: "16px", color: "#0A192F" }}>Администрация</h6>
        //                     <p style={{ color: "#64748B", fontWeight: "400", fontSize: "16px", width: "287px" }}>Понедельник - Пятница: 8:00 - 17:00
        //                         Суббота - Воскресенье: Закрыто</p>
        //                 </div>
        //                 <div className="school">
        //                     <h6 style={{ fontWeight: "500", fontSize: "16px", color: "#0A192F" }}>Учебные часы</h6>
        //                     <p style={{ color: "#64748B", fontWeight: "400", fontSize: "16px", width: "289px" }}>Понедельник - Пятница: 8:00 - 15:30
        //                         Суббота - Воскресенье: Закрыто</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="support-resource">
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <h2 className='h2-resource'>Support & Resources</h2>
                <p className='p-resource'>Find answers to common questions, access helpful resources, and get in touch with our team.</p>
            </div>
            <div>
                <div className='head-control'>
                    <button style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "453px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "faq" ? "white" : "#CFE9DE", color: activeTab === "faq" ? '#0A192F' : '#64748B' }} onClick={() => setActiveTab("faq")}>
                        <BadgeQuestionMark size={16} color="#0A192F" />
                        FAQ
                    </button>

                    <button style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", padding: "8px", outline: "none", border: "none", fontWeight: "553", fontSize: "14px", width: "453px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "contact" ? "white" : "#CFE9DE", color: activeTab === "contact" ? '#0A192F' : '#64748B' }} onClick={() => setActiveTab("contact")}>
                        <Mails size={16} color="#0A192F" />
                        Contact Us
                    </button>

                    <button style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", padding: "8px", outline: "none", border: "none", fontWeight: "500", fontSize: "14px", width: "453px", height: "32px", borderRadius: "16px", cursor: "pointer", transition: "background-color 0.3s", background: "white", backgroundColor: activeTab === "resources" ? "white" : "#CFE9DE ", color: activeTab === "resources" ? '#0A192F' : '#64748B' }} onClick={() => setActiveTab("resources")}>
                        <FileText size={16} color="#0A192F" />
                        Resources
                    </button>
                </div>

                <div className='control-support'>
                    {activeTab === "faq" && (
                        <div className='first-control'>
                            <h4 className='h4-resource'>Frequently Asked Questions</h4>
                            <div className="third-accordion">
                                <Accordion multiple={false}>
                                    <Accordion.Item value='hours'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What are the school hours?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='enroll'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How do I enroll my child in the school?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='policy'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What is the school's attendance policy?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='involve'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How can parents get involved in the school?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='activities'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What extracurricular activities are available?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='handle'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How does the school handle bullying?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Educate your children about bullying. ...
                                            Talk openly and frequently to your children. ...
                                            Help your child be a positive role model. ...
                                            Help build your child's self confidence. ...
                                            Be a role model. ...
                                            Be part of their online experience.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='technology'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What technology resources are available to students?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>In the digital age, teachers have an impressive selection of technological resources to help facilitate classes, engage students, and streamline processes. The problem, however, is that because there’s such an abundance of tools, it can be difficult to know which to use, and how to understand the value they bring to education.</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='grade'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How are students assessed and graded?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>In grading, faculty evaluate a student's overall performance on an assignment or exam holistically. And the feedback is intended for the student. In assessment, faculty evaluate cohorts of students' achievement of a particular learning goal, which may be a subsection of exam questions, or parts of an essay or paper.</Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    )}

                    {activeTab === "contact" && (
                        <div className='second-control'>
                            <h4 className='h4-resource'>Contact us</h4>
                            <div className="third-accordion">
                                <Accordion multiple={false}>
                                    <Accordion.Item value='hours'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What are the school hours?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='enroll'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How do I enroll my child in the school?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='policy'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What is the school's attendance policy?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='involve'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How can parents get involved in the school?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='activities'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What extracurricular activities are available?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='handle'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How does the school handle bullying?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Educate your children about bullying. ...
                                            Talk openly and frequently to your children. ...
                                            Help your child be a positive role model. ...
                                            Help build your child's self confidence. ...
                                            Be a role model. ...
                                            Be part of their online experience.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='technology'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What technology resources are available to students?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>In the digital age, teachers have an impressive selection of technological resources to help facilitate classes, engage students, and streamline processes. The problem, however, is that because there’s such an abundance of tools, it can be difficult to know which to use, and how to understand the value they bring to education.</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='grade'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How are students assessed and graded?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>In grading, faculty evaluate a student's overall performance on an assignment or exam holistically. And the feedback is intended for the student. In assessment, faculty evaluate cohorts of students' achievement of a particular learning goal, which may be a subsection of exam questions, or parts of an essay or paper.</Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    )}
                    {activeTab === "resources" && (
                        <div className='third-control'>
                            <h4 className='h4-resource'>Resources</h4>
                            <div className="third-accordion">
                                <Accordion multiple={false}>
                                    <Accordion.Item value='hours'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What are the school hours?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='enroll'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How do I enroll my child in the school?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='policy'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What is the school's attendance policy?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='involve'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How can parents get involved in the school?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='activities'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What extracurricular activities are available?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Monday - Friday: 8:00
                                            AM - 3:30 PM</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='handle'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How does the school handle bullying?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>Educate your children about bullying. ...
                                            Talk openly and frequently to your children. ...
                                            Help your child be a positive role model. ...
                                            Help build your child's self confidence. ...
                                            Be a role model. ...
                                            Be part of their online experience.
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='technology'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>What technology resources are available to students?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>In the digital age, teachers have an impressive selection of technological resources to help facilitate classes, engage students, and streamline processes. The problem, however, is that because there’s such an abundance of tools, it can be difficult to know which to use, and how to understand the value they bring to education.</Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='grade'>
                                        <Accordion.Control style={{ color: "#0A192F", fontWeight: "500", fontSize: "18px" }}>How are students assessed and graded?</Accordion.Control>
                                        <Accordion.Panel style={{ color: "#153E36", fontWeight: "400", fontSize: "15px" }}>In grading, faculty evaluate a student's overall performance on an assignment or exam holistically. And the feedback is intended for the student. In assessment, faculty evaluate cohorts of students' achievement of a particular learning goal, which may be a subsection of exam questions, or parts of an essay or paper.</Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="help">
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 className="h3-help">Need More Help?</h3>
                    <p className='p-help'>Our support team is here to help you with any questions or concerns you may have.</p>
                </div>
                <div className="both-help">
                    <div className="meeting">
                        <h5 style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>Schedule a Meeting</h5>
                        <p className="meeting-p">Book a meeting with our counselors or administrators to discuss your concerns in
                            person.</p>
                        <Button style={{ marginTop: "18px", color: "#153E36", background: "white", width: "160px", height: "40px", borderRadius: "14px" }}>Book Appointment</Button>
                    </div>
                    <div className="chat">
                        <h5 style={{ color: "white", fontWeight: "700", fontSize: "20px" }}>Live Chat Support</h5>
                        <p className="chat-p">Chat with our support team during school hours for immediate assistance with your
                            questions.</p>
                        <Button style={{ marginTop: "18px", color: "#153E36", background: "white", width: "110px", height: "40px", borderRadius: "14px" }}>Start Chat</Button>
                    </div>
                </div>
            </div>
            <div className="external">
                <h2 className='h2-external'>External Resources</h2>
                <div className="both-external">
                <div className="educational">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <h5 className='h5-education'>Educational Resources</h5>
                    <p className='two-p'>Helpful links for students and parents</p>
                    </div>
                    <div className="link">
                    <Link style={{display:"flex", gap:"10px",color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        National Education Portal
                    </Link>
                    <Link style={{display:"flex", gap:"10px", color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Online Learning Resources
                    </Link>
                    <Link style={{display:"flex", gap:"10px",color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Educational Games and Activities
                    </Link>
                    <Link style={{display:"flex", gap:"10px", color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Study Skills and Tips
                    </Link>
                    </div>
                </div>
                <div className="resources">
                    <div>
                    <h5 className="h5-resources">Parent Resources</h5>
                    <p className='two-p'>Resources specifically for parents</p>
                    </div>
                    <div className="link">
                    <Link style={{display:"flex", gap:"10px", color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Parenting Tips and Advice
                    </Link>
                    <Link style={{display:"flex", gap:"10px", color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Supporting Your Child's Education
                    </Link>
                    <Link style={{display:"flex", gap:"10px", color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Parent-Teacher Communication Guide
                    </Link>
                    <Link style={{display:"flex", gap:"10px", color:"#153E36"}}>
                        <Link2 size={16} color="#0A192F" />
                        Educational Activities at Home
                    </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection