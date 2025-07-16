import React, { useState } from 'react'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'  
import { IoClose } from 'react-icons/io5'
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaLightbulb, FaTasks, FaAward } from 'react-icons/fa'

const Work = () => {
    const [selectedWork, setSelectedWork] = useState(null)
    
    const companies = [
        {
            id: 1,
            name: "Inventive Core Integrations Private Limited",
            role: "IoT Developer & Data Analyst",
            duration: "February 2020 - February 2021",
            location: "Hyderabad, India",
            description: "From February 2020 to February 2021 in Hyderabad, India, I deployed a network of NodeMCU sensors to collect temperature and humidity data. I integrated the system with ThingSpeak for reliable cloud storage and analysis. I also used web applications and the Weka tool for data visualization and trend prediction, gaining hands-on experience in IoT and data analytics.",
            image: company1,
            detailed: {
                overview: "Led the development and deployment of an IoT-based environmental monitoring system using NodeMCU microcontrollers and cloud analytics.",
                keyResponsibilities: [
                    "Designed and deployed a network of NodeMCU sensors across multiple locations",
                    "Integrated sensor data with ThingSpeak platform for real-time cloud storage",
                    "Developed web applications for data visualization and monitoring",
                    "Implemented predictive analytics using Weka data mining tool",
                    "Created automated reporting systems for environmental data trends"
                ],
                achievements: [
                    "Successfully deployed 15+ sensor nodes with 99.2% uptime",
                    "Reduced manual data collection time by 80%",
                    "Implemented predictive models with 85% accuracy for temperature trends",
                    "Created comprehensive dashboard for real-time monitoring"
                ],
                technologies: [
                    "NodeMCU (ESP8266)", "ThingSpeak API", "Arduino IDE", "Weka",
                    "HTML/CSS/JavaScript", "Python", "REST APIs", "IoT Protocols"
                ],
                impact: "The system provided crucial environmental data that helped optimize operational conditions and reduce energy consumption by 15%."
            }
        },
        {
            id: 2,
            name: "CMR College of Engineering and Technology",
            role: "Technical Head & Mentor - VIGYAN Club",
            duration: "August 2019 - June 2021",
            location: "Hyderabad, India",
            description: "From August 2019 to June 2021, I served as the Technical Head and Mentor at the VIGYAN Club of CMR College of Engineering & Technology. I managed and facilitated over 100 people, handled 250+ project statements and ideas, resolved more than 250 startup ideas and prototypes, and mentored students in technical project development.",
            image: company2,
            detailed: {
                overview: "Led the technical division of VIGYAN Club, fostering innovation and entrepreneurship among engineering students through mentorship and project guidance.",
                keyResponsibilities: [
                    "Managed and mentored a team of 100+ engineering students",
                    "Evaluated and provided feedback on 250+ project proposals",
                    "Organized technical workshops and innovation sessions",
                    "Coordinated with faculty and industry experts for project guidance",
                    "Developed curriculum for technical skill development programs"
                ],
                achievements: [
                    "Successfully mentored 50+ student projects to completion",
                    "Organized 12 technical workshops with 500+ participants",
                    "Helped students secure 15+ internships through networking",
                    "Established partnerships with 5 local tech companies",
                    "Increased club membership by 200% during tenure"
                ],
                technologies: [
                    "Project Management", "Arduino/Raspberry Pi", "Web Development",
                    "Mobile App Development", "Database Management", "Presentation Tools"
                ],
                impact: "Transformed the club into a leading innovation hub, with 30+ student projects receiving recognition at state and national level competitions."
            }
        },
    ]
    
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    
    const openModal = (work) => {
        setSelectedWork(work)
        document.body.style.overflow = 'hidden'
    }
    
    const closeModal = () => {
        setSelectedWork(null)
        document.body.style.overflow = 'unset'
    }
    
    return (
        <div id='work' className='text-white py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold text-center mb-16 underline underline-offset-8 decoration-green-500'>
                    My Work
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='text-gray-400 text-center mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mb-16'>
                    Here are some of the organizations and roles I've contributed to, demonstrating hands-on experience in IoT development, data analytics, and technical leadership.
                </motion.p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {companies.map((company) => (
                        <motion.div 
                            key={company.id}
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: (company.id) / 2, duration: 0.5 }}
                            className='bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300'>
                            <img src={company.image} className='w-full h-75 object-cover'/>
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold text-green-400 mb-2'>{company.name}</h3>
                                <p className='text-green-300 text-sm mb-2'>{company.role}</p>
                                <div className='flex items-center text-gray-400 text-sm mb-4'>
                                    <FaCalendarAlt className='mr-2' />
                                    {company.duration}
                                </div>
                                <div className='flex items-center text-gray-400 text-sm mb-4'>
                                    <FaMapMarkerAlt className='mr-2' />
                                    {company.location}
                                </div>
                                <p className='text-slate-400 mb-4 line-clamp-3'>{company.description}</p>
                                <button 
                                    onClick={() => openModal(company)}
                                    className='border-2 border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition duration-200'>
                                    View Details
                                </button>
                            </div>  
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'
                        onClick={closeModal}>
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            className='bg-gray-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto'
                            onClick={(e) => e.stopPropagation()}>
                            
                            <div className='sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-start'>
                                <div>
                                    <h2 className='text-2xl font-bold text-green-400 mb-2'>{selectedWork.name}</h2>
                                    <p className='text-green-300 text-lg mb-2'>{selectedWork.role}</p>
                                    <div className='flex items-center text-gray-400 text-sm mb-2'>
                                        <FaCalendarAlt className='mr-2' />
                                        {selectedWork.duration}
                                    </div>
                                    <div className='flex items-center text-gray-400 text-sm'>
                                        <FaMapMarkerAlt className='mr-2' />
                                        {selectedWork.location}
                                    </div>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className='text-gray-400 hover:text-white transition-colors'>
                                    <IoClose size={24} />
                                </button>
                            </div>
                            
                            <div className='p-6 space-y-8'>
                                <section>
                                    <h3 className='text-xl font-semibold text-green-400 mb-4 flex items-center'>
                                        <FaLightbulb className='mr-2' />
                                        Overview
                                    </h3>
                                    <p className='text-gray-300 leading-relaxed'>{selectedWork.detailed.overview}</p>
                                </section>
                                
                                <section>
                                    <h3 className='text-xl font-semibold text-green-400 mb-4 flex items-center'>
                                        <FaTasks className='mr-2' />
                                        Key Responsibilities
                                    </h3>
                                    <ul className='space-y-2'>
                                        {selectedWork.detailed.keyResponsibilities.map((responsibility, index) => (
                                            <li key={index} className='text-gray-300 flex items-start'>
                                                <span className='text-green-500 mr-2'>•</span>
                                                {responsibility}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                                
                                <section>
                                    <h3 className='text-xl font-semibold text-green-400 mb-4 flex items-center'>
                                        <FaAward className='mr-2' />
                                        Key Achievements
                                    </h3>
                                    <ul className='space-y-2'>
                                        {selectedWork.detailed.achievements.map((achievement, index) => (
                                            <li key={index} className='text-gray-300 flex items-start'>
                                                <span className='text-green-500 mr-2'>•</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                                
                                <section>
                                    <h3 className='text-xl font-semibold text-green-400 mb-4'>Technologies Used</h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {selectedWork.detailed.technologies.map((tech, index) => (
                                            <span key={index} className='bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                                
                                <section>
                                    <h3 className='text-xl font-semibold text-green-400 mb-4'>Impact</h3>
                                    <p className='text-gray-300 leading-relaxed bg-gray-800 p-4 rounded-lg border-l-4 border-green-500'>
                                        {selectedWork.detailed.impact}
                                    </p>
                                </section>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Work