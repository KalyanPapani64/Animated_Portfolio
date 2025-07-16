import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
import {Link} from 'react-scroll';
import resumePDF from '../assets/KalyanPapani_Resume.pdf';


const Navbar = () => {
    const variants = {
        open: { clipPath: 'circle(1200px at 43px 43px)'},
        transition: {type: 'spring',},
        closed: { clipPath: 'circle(30px at 43px 37px)'},
        transition: {type: 'spring', duration: 0.5,},
    };
    const [menu, setMenu] = useState(false);
    const items= [
        { id:1, text:"About", to: "about" },
        { id:2, text:"Projects", to: "projects" },
        { id:3, text:"Skills", to: "skills" },
        { id:4, text:"Work", to: "work" },
        { id:5, text:"Contact", to: "contact" },
    ]
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Kalyan_Papani_Resume.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
    <div>
      <motion.div
        initial={{opacity:0, y:-100}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className='container mx-auto hidden md:flex justify-between items-center px-4 py-5'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-2'>
            <span className='text-white'>Kalyan</span>
            <span className='text-green-500'>Papani</span>
        </div>
        <div>
            <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white'>
                {items.map(({id, text,to}) => (
                    <li key={id} className='hover:text-green-500 duration-200 cursor-pointer'>
                        <Link
                            to={to}
                            smooth={true}
                            duration={500}
                            offset={-70}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
      </div>
    <a onClick={handleDownloadCV} className='md:text-base lg:text-lg bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full cursor-pointer'>DownloadCV{" "}</a>
    </motion.div>



    <div className='flex md:hidden justify-between'>
        <motion.div animate={menu ? "open" : "closed"}>
            <motion.div 
                variants={variants}
                onClick={() => setMenu(prev => !prev)} 
                className='bg-white w-2/3 h-screen text-black fixed z-10'>
                <div className='px-7 py-6'>
                    {menu ? (<IoCloseSharp size={30}/>) : 
                    (<AiOutlineMenu size={30}/>)}
                </div>
                {menu && (
                    <div className='flex flex-col justify-center items-center'>
                        <ul className='space-y-6 text-black text-lg'>
                           {items.map(({id, text, to}) => (
                            <li 
                                key={id}
                                className='hover:text-green-500 duration-200 cursor-pointer'>
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}>
                                    {text}
                                </Link> 
                            </li>
                        ))} 
                        </ul>
                        <a 
                            onClick={() => {
                                handleDownloadCV();
                                setMenu(false);
                            }}
                            className='text-lg bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-6 rounded-full cursor-pointer'>
                            DownloadCV
                        </a>
                    </div>
                        )}
            </motion.div>
        </motion.div>
        <motion.div 
            initial= {{opacity:0, x:100, y:-100}}
            animate={{opacity:1, x:0, y:0}}
            transition={{duration:0.5}}
            className='text-xl font-bold flex items-center gap-2 px-4 py-6'>
            <span className='text-white'>KALYAN</span>
            <span className='text-green-500'>PAPANI</span>
        </motion.div>
    </div>
    </div>
  )
}

export default Navbar
