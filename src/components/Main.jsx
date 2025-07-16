import React from 'react'
import avatar from '../assets/kalyan1.png'
import { motion } from 'motion/react'
import { Link } from 'react-scroll'

const Main = () => {
  return (
    <div className='text-white py-4'>
      <motion.img
        initial={{ opacity: 0, scale:0 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{ delay: 0.5, duration: 0.5}}   
        src={avatar}
        className='mx-auto w-2/3 md:w-1/3 lg:w-1/4'>
      </motion.img>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5}}  
        className='container mx-auto text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }} 
          className='text-3xl md:text-4xl flex flex-col gap-3 font-bold mb-3 mt-5'>
          Hi, I'm Kalyan Papani
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className='text-green-500'>
            Full Stack Developer & Data Analyst
          </motion.span>
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          className='text-gray-400 text-base mb-3 md:max-w-4xl text-center mx-auto'>
          Recent MS Information Systems graduate with expertise in web development, database systems, and data visualization, ready to create impactful digital solutions
        </motion.p>
        <div className='flex justify-center space-x-4 mb-10'>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className='bg-green-500 text-white px-6 py-3 rounded-full'>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              offset={-70}
              className='cursor-pointer'>
              Hire Me
            </Link>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }} 
            className='text-white px-6 py-3 rounded-full border'>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              offset={-70}
              className='cursor-pointer'>
              My Projects
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Main
