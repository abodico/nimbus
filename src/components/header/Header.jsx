import React, { useState } from 'react'
import { images } from '../../constants'
import { NavLink } from 'react-router-dom'
import { sidebarData } from '../../pages/home/data'
import { AnimatePresence, motion } from 'framer-motion'
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = (prev) => { setToggle(!prev) };
    return (
        <>
            <div className="back">
                <div className='portfolio__header h-fit bg-lightDark max-w-full flex sm:px-8 p-2 text-white container py-4 text-xl mx-auto items-center justify-between' >
                <i onClick={(prev) => handleClick(!prev)} className="fa-solid fa-bars cursor-pointer text-2xl p-2"></i>
                    <NavLink to='/'>
                    <img src={images.lightlogo} alt="logo" className="max-w-full h-16 " />
                </NavLink>
                    <i className="fa-solid fa-magnifying-glass rounded-md cursor-pointer text-2xl text-white"></i>
                </div>
            </div>
            <AnimatePresence>
                {toggle && (
                    <>
                        <motion.div onClick={(prev) => handleClick(prev)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75 }} className='bg-black bg-opacity-40 absolute inset-0 w-full h-full  z-20' ></motion.div>
                        <motion.div className="sidebar bg-2d z-30 absolute inset-0 p-7 md:max-w-1/4 max-w-3/4 h-screen " initial={{ x: -350 }} animate={{ x: 0 }} exit={{ x: -350 }} transition={{ duration: 0.75 }}>
                            <div>
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
                                                        <i className="fa-solid fa-greater-than"></i>
                                                    </span>
                                                </NavLink>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div className='max-w-full relative rounded-md p-2 flex justify-between bg-white' >
                                <input type="text" placeholder='Search ...' className='pl-2 shrink max-w-full grow' />
                                <span className='px-3 py-2 bg-lightDark rounded-md cursor-pointer' >
                                    <i className="fa-solid fa-magnifying-glass text-white"></i>
                                </span>
                                <span className='bg-white'></span>
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