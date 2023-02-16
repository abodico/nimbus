import React, { useState } from 'react'
import './navbar.scss'
import { AnimatePresence, motion } from 'framer-motion';
import { images } from '../../constants';
import { sidebarData } from '../../pages/home/data';
import { NavLink } from 'react-router-dom';
import { pages } from '../../pages/aboutMe/data';
const Navbar = ({page}) => {
    const [linkHovered, setLinkHovered] = useState(-1);
    // const [innerHovered, setInnerHovered] = useState(-1)
    window.setTimeout(
        () => {
            let end = 96;
            var navbar = document.getElementsByClassName('portfolio__navbar')[0];
            window.addEventListener('scroll', () => {
                var scrollTop =window.pageXOffset || document.documentElement.scrollTop;
                if (+scrollTop > +end) {
                    navbar.style.top = '-98px';
                }
                else {
                    navbar.style.top = '0px';
                }
                end = scrollTop;
            })
        },10
    )
    return (
        <div className='portfolio__navbar items-center transition-all duration-300 z-40 container justify-between flex h-fit max-w-full py-4 px-8 fixed shadow-lg bg-white' >
            <NavLink to='/'>
                <img src={images.darklogo} alt='logo' className='h-16 max-w-full' />
            </NavLink>
            <ul className='flex gap-8' >
                {
                sidebarData.map((item, index) => {
                    return (
                        <li key={index} onMouseEnter={() => setLinkHovered(index)} onMouseLeave={() => setLinkHovered(-1)} >
                            <NavLink to={item.goal} className={`btn py-3 flex justify-between items-center ${page===item.title&&'active'}`} >
                                <span className='font-bold text-dark text-lg tracking-wider'>{item.title}
                                    <div className={`h-1.5  ${linkHovered === index ? 'w-full' : 'w-0'}  transition-all duration-300  relative -z-10 -top-2.5 bg-darkYellow`}></div>
                                </span>
                            </NavLink>
                            <AnimatePresence>
                                {linkHovered === index && pages[index].length > 1 && <motion.ul initial={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: 'easeInOut' }} whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="portfolio__aboutme-links absolute rounded-lg top-full p-4 bg-white shadow">
                                    {
                                        pages[index].map((itm, ndx) => {
                                            return (
                                                <li key={ndx} className='relative m-4 ' >
                                                    <NavLink to={itm.goal} className='w-fit relative '>
                                                        <span className='inline-block font-bold text-dark px-1 text-xl relative z-10 tracking-wider transition-all duration-300'>{itm.name}</span>
                                                        <div className={`transition-all duration-300 ease-linear h-2 bg-darkYellow absolute bottom-0 `}></div>
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </motion.ul>}
                            </AnimatePresence>
                        </li>
                    )
                })
                }
            </ul>
            <div className="right-side flex items-center">
                <a href="tel:+1800123456789" className='text-darkYellow p-4 text-xl font-bold hover:text-dark transition-all duration-300' >+1 800 123 456 789</a>
                <div className="p-4 border-l border-999">
                    <i className="fa-solid fa-magnifying-glass rounded-md cursor-pointer text-xl"></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar