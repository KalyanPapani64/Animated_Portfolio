import React, { useEffect, useState } from 'react';
import aboutImg from '../assets/kalyan3.png'; 
import { IoBulb } from "react-icons/io5";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ from, to, delay = 0, duration = 2.5, label }) => {
    const [count, setCount] = useState(from);
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.7, triggerOnce: true });
    useEffect(() => {
        if (inView) {
            controls.start({
                value: to,
                transition: { duration: duration, delay: delay, ease: "easeOut" }
            });
            let start = from;
            const end = to;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(duration * 1000 / range));

            const timer = setInterval(() => {
                current += increment;
                setCount(current);
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    setCount(to);
                    clearInterval(timer);
                }
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, 
    [inView, controls, from, to, duration, delay]);
    return (
        <div ref={ref} className='text-center mb-4'>
            <motion.h3
                className='text-6xl md:text-8xl font-bold text-green-500'
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: delay + 0.5, duration: 0.5 }}>
                {count}+
            </motion.h3>
            <motion.p
                className='text-lg text-gray-400'
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: delay + 0.7, duration: 0.5 }}>
                {label}
            </motion.p>
        </div>
    );
};

const About = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    const baseDelay = 0;
    return (
        <div id='about' className='text-white py-16 bg-gray-900'>
            <div className='container mx-auto px-6 max-w-6xl'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView? { opacity: 1, y: 0 }: {}}
                    transition={{ delay: baseDelay, duration: 0.5 }}
                    className='text-3xl md:text-4xl font-bold text-center mb-16 underline underline-offset-8 decoration-green-500'>
                    About Me
                </motion.h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {/* Card 1: Introduction */}
                    <motion.div
                        initial={{ opacity: 0, scale:0 }}
                        animate={inView ? { opacity: 1, scale:1 } : {opacity: 0, scale: 0}}
                        transition={{ delay: baseDelay+0.3, duration: 0.5}} 
                        className='bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center'>
                        <img
                            src={aboutImg}
                            alt="Kalyan Profile"
                            className='w-35 h-35 rounded-full mb-6 object-cover border-2 border-green-500' />
                        <h3 className='text-2xl font-semibold mb-4 text-green-400'>My Journey</h3>
                        <p className='text-gray-300 leading-relaxed'>
                            I'm a recent MS Information Systems graduate from Pace University (May 2025) with a strong foundation in full-stack development and data analytics. With experience spanning from sensor network deployment to database design, I bridge the gap between technical innovation and practical business solutions.
                        </p>
                    </motion.div>

                    {/* Card 2: Skills & Perspective */}
                    <motion.div
                        initial={{ opacity: 0, scale:0 }}
                        animate={inView ? { opacity: 1, scale:1 } : {opacity: 0, scale: 0}}
                        transition={{ delay: baseDelay+0.6, duration: 0.5}}
                        className='bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-center'>
                        <IoBulb className='text-green-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
                        <h3 className='text-2xl font-semibold mb-4 text-green-400'>What I Bring</h3>
                        <p className='text-gray-300 leading-relaxed'>
                            Having completed my Master's with a 3.63 GPA, I bring hands-on experience in web development, database management, and data visualization. My journey from electronics engineering to information systems has equipped me with a unique perspective on solving complex technical challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale:0 }}
                        animate={inView ? { opacity: 1, scale:1 } : {opacity: 0, scale: 0}}
                        transition={{ delay: baseDelay+0.9, duration: 0.5}}
                        className='bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col justify-around text-center lg:col-span-1 md:col-span-2'>
                        <h3 className='text-2xl font-semibold mb-6 text-green-400'>My Impact</h3>
                        <div>
                            <AnimatedCounter from={0} to={4} label="Years of Experience (including internship and academic projects)" delay={0.2} />
                            <AnimatedCounter from={0} to={6} label="Projects I Have Made" delay={0.4} />
                            <AnimatedCounter from={0} to={100} label="People Mentored & Led" delay={0.6} />
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};


export default About
