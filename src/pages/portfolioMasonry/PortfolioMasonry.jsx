import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Landing from '../../components/landing/Landing'
import Navbar from '../../components/navbar/Navbar'
import Talk from '../../components/talk/Talk'
import { masonry } from './data'
import PMasonry from '../../components/pMasonry/PMasonry'
const PortfolioMasonry = () => {
    let array = masonry.slice(0,8);
    const [data, setData] = useState(array)
    const [arrowScroll, setArrowScroll] = useState(false);
    onscroll = () => {
        setArrowScroll(() => window.scrollY > 600 ? true : false);
    };
        const [buttonContent, setButtonContent] = useState('Load More');
        const [height, setHeight] = useState('150vh')
    return (
        <div className='portfolio__portfolio-masonry'>
            <AnimatePresence>
                {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 50 }} className='fixed right-4 bottom-8 flex items-center justify-center h-12 w-12 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' >
                    <i className="fa-solid fa-chevron-up"></i>
                </motion.div>}
            </AnimatePresence>
            <div className='xl:block hidden '>
                <Navbar page='Portfolio' />
            </div>
            <div className='xl:hidden block' >
                <Header />
            </div>
            <Landing title='Portfolio Masonry' />
            <div className="lg:pb-32">
                <PMasonry projects={data} height={height} />
                <button
                    onClick={() => {
                        setButtonContent(<i className="fa-solid fa-arrows-rotate animate-spin"></i>)
                        setTimeout(() => {
                            setButtonContent(' ');
                            setData(masonry);
                            setHeight('210vh');
                        }, 2500);
                    }}
                    className={`btn bg-darkYellow outline-none hover:bg-e69 w-40 transition-all duration-300 py-4 px-8 rounded text-white mx-auto ${buttonContent === ' ' ? 'hidden' : 'block'} font-semibold `} ><span>{buttonContent}</span></button>
            </div>
            <Talk />
        </div>
    )
}

export default PortfolioMasonry