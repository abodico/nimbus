import { useState } from 'react'
import {motion }from 'framer-motion'
import Navbar from '../../components/navbar/Navbar'
import { AnimatePresence } from 'framer-motion'
import Header from '../../components/header/Header'
import Landing from '../../components/landing/Landing'
import Card from '../../components/faq card/Card'
import Talk from '../../components/talk/Talk'
import Faq from '../../components/faq/Faq'
import Subscribe from '../../components/subscribe/Subscribe'
const FAQ = () => {
    const [arrowScroll, setArrowScroll] = useState(false);
    onscroll = () => setArrowScroll(() => window.scrollY > 600 ? true : false);
    return (
        <div className='portfolio__faq'>
            <AnimatePresence>
                {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 50 }} className='fixed right-4 bottom-8 flex items-center justify-center h-12 w-12 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' >
                    <i className="fa-solid fa-chevron-up"></i>
                </motion.div>}
            </AnimatePresence>
            <div className='xl:block hidden '>
                <Navbar page='Pages' />
            </div>
            <div className='xl:hidden block' >
                <Header />
            </div>
            <Landing title='FAQ' />
            <Card />
            <Faq />
            <Subscribe/>
            <Talk/>
        </div>
    )
}

export default FAQ