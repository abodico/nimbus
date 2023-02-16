import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { images } from '../../constants'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FaBars, FaGreaterThan } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { sidebarData } from '../../pages/home/data'
import { AnimatePresence, motion } from 'framer-motion'
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (prev) => { setToggle(!prev) };
    return (
        <>
            <div className="back">
                <div className='portfolio__header h-fit back max-w-full flex sm:px-8 p-2 text-white container py-4 text-xl mx-auto items-center justify-between' >
                <FaBars onClick={(prev) => handleClick(!prev)} className='cursor-pointer text-4xl p-2' />
                <NavLink to='/'>
                    <img src={images.lightlogo} alt="logo" className="m-w-full h-16 " />
                </NavLink>
                <HiMagnifyingGlass className='rounded-md cursor-pointer text-3xl' />
                </div>
            </div>
            <AnimatePresence>
                {toggle && (
                    <>
                        <motion.div onClick={(prev) => handleClick(prev)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className='overlay absolute inset-0 w-full h-full  z-20' ></motion.div>
                        <motion.div className=" portfolio__home-sidebar z-30 absolute inset-0 p-7 md:max-w-1/4 max-w-3/4 h-screen " initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }} transition={{ duration: 0.75 }}>
                            <div className="portfolio__home-sidebar__img-container ">
                                <NavLink to="/">
                                    <img src={images.lightlogo} alt="logo" className=" w-48 " />
                                </NavLink>
                            </div>
                            <ul className='w-full text-white font-bold text-lg my-7 ' >
                                {
                                    sidebarData.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={item.goal} className='btn py-3 flex justify-between ' >
                                                    <span>{item.title}</span>
                                                    <span>
                                                        <FaGreaterThan />
                                                    </span>
                                                </NavLink>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div className='portfolio__home-sidebar__search max-w-full relative rounded-md p-2 flex justify-between bg-white' >
                                <input type="text" placeholder='Search ...' className='pl-2 shrink max-w-full grow' />
                                <span className='p-2 back rounded-md cursor-pointer' >
                                    <HiMagnifyingGlass className='text-white' />
                                </span>
                                <span className='bg-white' ></span>
                            </div>
                            <span className='absolute text-3xl text-white cursor-pointer top-16 left-96' onClick={(prev) => handleClick(prev)}>X</span>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header