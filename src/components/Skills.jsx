import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";

const Skills = () => {
    const skillset = [
        {
            icon: FaCode,
            category: 'Programming Languages',
            items: [
                { name: 'C Language' },
                { name: 'Python' },
                { name: 'Java' },
                { name: 'JavaScript' }
            ]
        },
        {
            icon: FaLaptopCode,
            category: 'Web Development',
            items: [
                { name: 'HTML' },
                { name: 'CSS' },
                { name: 'Bootstrap' },
                { name: 'React' },
                { name: 'Python Flask' },
                { name: 'JDBC' },
                { name: 'Java Servlets' },
                { name: 'JSP' },
                { name: 'D3.js' },
                { name: 'Apache' },
                { name: 'Waitress servers' }
            ]
        },
        {
            icon: FaDatabase,
            category: 'Database & Analytics',
            items: [
                { name: 'MySQL' },
                { name: 'Microsoft Access' },
                { name: 'Power BI' },
                { name: 'Database Design & Management' }
            ]
        },
        {
            icon: FaTools,
            category: 'Tools & Software',
            items: [
                { name: 'VS Code' },
                { name: 'Microsoft Visio' },
                { name: 'Power BI' },
                { name: 'Weka (Data Mining)' },
                { name: 'Git' },
                { name: 'GitHub' }
            ]
        }
    ];

    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });
    return (
        <div id='skills' className='text-white py-16 bg-gray-900'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay:0.3, duration: 0.5 }}
                className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center underline underline-offset-8 decoration-green-500'>My Skills</h2>
    
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                    {skillset.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + index * 0.2, duration:0.5}}
                                className='p-6 rounded-lg text-center hover:border-1 hover:border-green-400'>
                                <IconComponent className='text-green-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto' />
                                <h3 className='text-lg font-semibold text-green-400 mb-4'>{category.category}</h3>
                                <ul className='list-none p-0 space-y-1'>
                                    {category.items.map((skill, skillIndex) => (
                                        <li key={skillIndex} className='text-gray-300 text-sm flex items-center'>
                                            <MdKeyboardArrowRight className='text-green-400 mr-1' />
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;