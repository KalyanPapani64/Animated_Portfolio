import React from 'react'
import {MdWeb} from 'react-icons/md'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { FaGithub } from 'react-icons/fa'
import Skills from './Skills'

const Service = () => {
    const serviceData=[
        {
            title: "DBMS - Napa Valley Winery",
            description: "Designed and implemented a comprehensive relational database system for winery operations, featuring ERD design, multi-platform deployment, and business intelligence dashboards.",
            technologies: "Microsoft Visio, MySQL, Microsoft Access, Power BI",
            githubLink: "https://github.com/KalyanPapani64/Napa-valley",
        },
        {
            title: "ExpenseViz",
            description: "ExpenseViz is described as a dynamic web application that allows users to track and visualize monthly expenses. It provides an intuitive interface for adding expenses and renders an interactive pie chart that updates in real-time",
            technologies: "HTML, JavaScript, D3.js, Firebase",
            githubLink: "https://github.com/KalyanPapani64/ExpenseViz",
        },
        {
            title: "Employee Management System",
            description: "Built a full-stack web application to streamline employee data management, reducing manual work and improving operational efficiency for 25+ sample data entries.",
            technologies: " HTML, CSS, Bootstrap, JDBC, Java Servlets, JSP, Oracle SQL",
            githubLink: "https://github.com/KalyanPapani64/Employee-Management-System",
        },
        {
            title: "Online Portfolio",
            description: "Developed a responsive portfolio website showcasing technical skills and projects using modern web technologies for enhanced user experience.",
            technologies: "Bootstrap, React, HTTPS, MySQL, Python Flask",
            githubLink: "https://github.com/KalyanPapani64/portifolio_kalyan",
        },
        {
            title: "School Web Application",
            description: "Created a front-end web application for educational institutions, focusing on user experience and cross-device accessibility.",
            technologies: "HTML, CSS, JavaScript",
            githubLink: "https://github.com/KalyanPapani64/KibbleRaise_Scool_website",
        },
    ]
    const handleLinkClick = (url, type) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }else {
            alert(`${type} link will be available soon!`);
        }
    };
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    return (
    <div id='projects' className='text-white'>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{duration: 0.5 }} 
            className='container mx-auto px-4 text-center py-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8  text-center underline underline-offset-8 decoration-green-500'>My Projects</h2>
            <p className='mb-12 text-gray-400 md:max-w-4xl text-center mx-auto'>Explore a selection of my key projects that demonstrate hands-on experience with full-stack development, database systems, and responsive design. Each project showcases a unique solution built with modern technologies and practical implementations.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {serviceData.map((service, index) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }} 
                        key={index} 
                        className='bg-[#1c1a2b] p-6 rounded-lg text-center hover:shadow-lg hover:shadow-green-500 transition-shadow duration-300 flex flex-col justify-between h-full'>
                        <MdWeb className='text-green-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
                        <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2 text-green-500'>{service.title}</h3>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.description}</p>
                        <p className='text-sm sm:text-base lg:text-lg text-grey-900'>{service.technologies}</p>
                        <div className='mt-6'>
                            <button
                                onClick={() => handleLinkClick(service.githubLink, 'GitHub')}
                                className='flex items-center gap-2 mx-auto border-2 border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition duration-200'>
                                <FaGithub />
                                <span>GitHub</span>
                            </button>
                        </div>
                         
                    </motion.div>
                ))}
            </div>
        </motion.div>

        <div>
            <Skills/>
        </div>
    </div>
  )
}

export default Service
