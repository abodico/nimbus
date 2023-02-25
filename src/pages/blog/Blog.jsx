import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import BlogLg from '../../components/blog/BlogLg'
import BlogLgButton from '../../components/blog/BlogLgButton'
import Header from '../../components/header/Header'
import Landing from '../../components/landing/Landing'
import Navbar from '../../components/navbar/Navbar'
import Talk from '../../components/talk/Talk'
import {blogData} from '../blog/data'
const Blog = () => {
    const [arrowScroll, setArrowScroll] = useState(false);
    const [buttonData, setButtonData] = useState([]);
    const [buttonContent, setButtonContent] = useState('Load More');
    onscroll = () => {
        setArrowScroll(() => window.scrollY > 600 ? true : false);
    };
    return (
        <div className='portfolio__blog'>
            <AnimatePresence>
                {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 50 }} className='fixed right-4 bottom-8 flex items-center justify-center h-12 w-12 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' >
                    <i className="fa-solid fa-chevron-up"></i>
                </motion.div>}
            </AnimatePresence>
            <div className='xl:block hidden '>
                <Navbar />
            </div>
            <div className='xl:hidden block' >
                <Header />
            </div>
            <Landing title='Blog Grid' />
            <div className="portfolio__blog-cards container lg:px-12 px-8 py-16 max-w-full ">
                <div className='flex-wrap md:justify-evenly flex mx-auto gap-6 max-w-full '>
                    <BlogLg blogData={blogData} classes='md:max-w-40 lg:max-w-3.7/12' />
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 0.5 }} className='flex-wrap md:justify-evenly flex mx-auto gap-6 max-w-full mt-6 '>
                    <BlogLgButton blogData={buttonData} classes='md:max-w-40 lg:max-w-3.7/12' />
                </motion.div>
                <button onClick={() => {
                    setButtonContent(<i className="fa-solid fa-arrows-rotate animate-spin "></i>)
                    return (
                        setTimeout(() => setButtonData((prev) => {
                            setButtonContent('Load More');
                            return ([...prev, blogData[0], blogData[1], blogData[2]])
                        }), 2500))
                }} className="btn bg-darkYellow outline-none hover:bg-e69 w-40 transition-all duration-300 py-4 px-8 rounded text-white mx-auto block font-semibold mt-16" ><span className={` `}>{buttonContent}</span></button>
            </div>
            <Talk />
        </div>
    )
}

export default Blog