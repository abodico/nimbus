import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react'
import Header from '../../components/header/Header';
import Landing from '../../components/landing/Landing';
import Navbar from '../../components/navbar/Navbar';
import Products from '../../components/products/Products';
import Talk from '../../components/talk/Talk';

const Shop = () => {
    const [arrowScroll, setArrowScroll] = useState(false);
        window.onscroll = () => {
        setArrowScroll(() => window.scrollY > 600 ? true : false);
    };
    return (
        <div className='portfolio__shop'>
            <AnimatePresence>
                {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 50 }} className='fixed right-4 bottom-8 flex items-center justify-center h-12 w-12 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full'>
                    <i className="fa-solid fa-chevron-up"></i>
                </motion.div>}
            </AnimatePresence>
            <div className='xl:block hidden '>
                <Navbar />
            </div>
            <div className='xl:hidden block' >
                <Header />
            </div>
            <Landing title='Shop' />
            <Products />
            <Talk />
            </div>
    )
}
export default Shop