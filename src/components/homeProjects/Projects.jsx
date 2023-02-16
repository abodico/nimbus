import React, { useState } from 'react'
import { arr, workTypes } from '../../pages/home/data';
import {motion} from 'framer-motion'
const Projects = () => {
    const ar = arr;
    const [filterProjects, setFilterProjects] = useState(ar);
    const [activeFilter, setActiveFilter] = useState('All');
    const [hovered, setHovered] = useState({ width: '0%' })
    const handleFilterClick = (item) => {
    setActiveFilter(item);
    if (item === 'All') {
        setFilterProjects(ar);
    }
    else {
        setFilterProjects(ar.filter((project) => project.clss.includes(item)));
    }
    };
    return (
        <div className='portfolio__home-projects container mx-auto relative max-w-full md:p-2 p-8' >
            <div className="portfolio__home-projects__content lg:w-auto w-full lg:p-16">
                <div className="portfolio__home-projects__content-text relative lg:w-4/6 ">
                    <div className="portfolio__home-container__about_me-content__pseudo lg:-rotate-90 absolute lg:-left-32 lg:top-20 text-xl flex -top-6 left-0 items-center gap-3">
                        <span className='block w-28  background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                        <span style={{ color: '#adadad' }} >my works</span>
                    </div>
                    <h3 className="text-light-dark leading-normal text-4xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Meet My Projects</h3>
                    <p className="back-color mt-6 leading-8 text-lg">Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do.</p>
                    <ul className="flex gap-6 mt-2 md:flex-nowrap flex-wrap">
                        {workTypes.map((item, index) => {
                            return (<li key={index} onClick={() => handleFilterClick(item.name)} className={` cursor-pointer hover:text-darkYellow transition relative text-light-dark text-xl font-semibold duration-300 ${item.name === activeFilter ? 'text-darkYellow' : ' '}`} >
                                {item.name}
                                <span className={`before:content-['('] after:content-[')'] absolute text-sm top-0 right-0 text-darkYellow ${item.name === activeFilter ? ' opacity-100 -translate-y-2/3 translate-x-full ' : ' '}`} >{item.num}</span>
                            </li>)
                        })}
                    </ul>
                </div>
                <div id='cards' className="portfolio__home-projects__content-cards grid grid-cols-4 gap-3  max-w-full container xs:my-8 my-4">
                    {filterProjects.map((ele, index) => {
                        return (
                            <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .30, }} key={index} onMouseOver={() => setHovered({ width: '90%' })} onMouseLeave={() => setHovered({ width: '0%' })} className={`portfolio__home-projects__content-cards__card transition-all duration-300 ease-linear relative col-span-full ${ele.clss} ${ele.clss.includes('Photography') ? ' md:col-span-2' : 'md:col-span-1'}`}>
                                <a href="#ffg" className="">
                                    <img src={ele.image} className='w-auto ' alt="project" />
                                </a>
                                <div className="portfolio__home-projects__content-cards__card-overtext transition-all opacity-0 duration-300 -translate-y-8 flex items-center lg:p-0 p-2 text-white absolute bottom-0 rounded-b-md background-dark w-full md:h-2/3 h-28 lg:h-2/5">
                                    <div className='hidden w-14 lg:inline-block' >
                                        <div style={hovered} className=' hidden lg:block  max-w-full transition-all duration-500  bg-white h-px' ></div>
                                    </div>
                                    <div className='' >
                                        <a href="#ffg" className='inline-block mb-2' >
                                            <h3 className='hover:text-darkYellow transition-all  duration-400 text-2xl font-bold tracking-wide ' style={{ wordSpacing: 4 }} >{ele.title}</h3>
                                        </a>
                                        <div className='' >
                                            {ele.text.map((item, index) => {
                                                return (
                                                    <a key={index} href="#ffg" className="inline-block mr-2">
                                                        <p className="hover:text-darkYellow transition-all duration-300 ">{item}{(index !== ele.text.length - 1) && <i className="fa-sharp fa-solid fa-square mx-2 text-white -translate-y-1/3 " style={{ fontSize: 8 }}></i>}</p >
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects