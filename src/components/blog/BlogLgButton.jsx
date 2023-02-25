import React, { useState } from 'react'
import {motion } from 'framer-motion'
const BlogLg = ({blogData, classes}) => {
    const [blogHover, setBlogHover] = useState(-1)
    const [blogSeeMore, setBlogSeeMore] = useState(-1)
    return (
        <>
            {blogData.map((item, index) => {
                return (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}transition={{ duration: 0.5 }} key={index} className={`card ${classes} w-full `}>
                        <div className="image-container rounded-lg relative ">
                            <a href="#a" className='cursor-pointer'>
                                <img src={item.image} alt="blog01" className="max-w-full rounded-lg" />
                            </a>
                            <a href="#a" className='cursor-pointer' >
                                <span className='absolute font-semibold inset-0 top-8 tracking-wide text-sm block w-fit h-fit -left-6 text-white bg-lightDark rounded-lg py-2 px-3 hover:bg-white hover:text-999 transition-all duration-300 ease-in-out ' >{item.tag}</span>
                            </a>
                        </div>
                        <span style={{ wordSpacing: 4 }} className="flex gap-4 text-lg my-4 text-light-dark tracking-wide ">
                            <span className="text-darkYellow text-2xl inline-block">
                                <i className="fa-solid fa-calendar-days"></i>
                            </span>
                            {item.date}
                        </span>
                        <span onMouseEnter={() => { setBlogHover( index ) }} onMouseLeave={() => setBlogHover(-1)} className="paragraphs leading-10 text-light-dark xs:text-3xl xxs:text-xl md:text-2xl text-lg font-bold">
                            <p style={{ wordSpacing: 8 }} className=' relative w-fit'>{item.firstText} <div style={{ width: `${blogHover===index? 100 : 0}%` }} className={`duration-500 bottom-1 block -z-10 absolute ${blogHover === index ? ' ' : 'delay-300'} bg-darkYellow h-1.5 ease-in-out transition-all`}></div></p>
                            <p className="relative w-fit  ">{item.secondText}<div style={{ width: `${blogHover===index? 100 : 0}%` }} className={`duration-500 ${blogHover===index? 'delay-300' : ' '} bottom-1 block -z-10 absolute bg-darkYellow h-1.5 transition-all`} ></div></p>
                        </span>
                        <a href="a" rel='noreferrer' className=' flex items-center mt-4 cursor-pointer text-white relative' >
                            <span onMouseEnter={() => setBlogSeeMore( index)} onMouseLeave={() => setBlogSeeMore(-1)} className={`inline-block px-3 py-2 font-light bg-darkYellow transition-all text-xl ${blogSeeMore === index ? 'rounded-l-md' : ' delay-200 rounded-md'} `} >
                                <i className="fa-solid fa-chevron-up"></i>
                            </span>
                            <span className={`p-3 relative text-sm ${blogSeeMore===index?'cursor-pointer':'cursor-default'}`}>
                                <span className=' w-fit transition-all block h-full' >Read More</span>
                                <span style={{ width: `${index ===blogSeeMore? 100 : 0 }%` }} className=' transition-all duration-300 bg-e69 rounded-r-md h-full inset-0 -z-10 absolute' ></span>
                            </span>
                        </a>
                    </motion.div>
                )
            })}
        </>
    )
}

export default BlogLg