import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { images } from '../../constants'
import Counter from '../counter/Counter'
const About = () => {
    const [scrolled, setScrolled] = useState(false)
    const countRef = useRef();
    setTimeout(() => {
        const counts =countRef.current.offsetTop; 
        onscroll = ()=>{
            if (window.scrollY >= counts - 200) {
                setScrolled(true);
            }
        }
    }, 10);
    return (
        <div ref={countRef} className="bg-section overflow-hidden">
            <div className='portfolio__about py-40 relative flex lg:flex-row max-w-full px-4 flex-col items-center container mx-auto lg:px-12' >
                <img src={images.about02} alt="about02" className='max-w-full max-h-full h-3/4 -left-1/3 absolute' />
                <div className="portfolio__about-content lg:max-w-40 relative">
                    <div className="portfolio__about-content__pseudo lg:-rotate-90 absolute lg:-left-24 mr-4 lg:top-14 -top-8 left-0 text-xl  flex items-center gap-3">
                        <span className='block w-20 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                        <span style={{ color: '#adadad' }} >about</span>
                    </div>
                    <h3 className="text-light-dark xs:leading-snug xs:text-4xl text-xl tracking-wider font-semibold" style={{ wordSpacing: '10px' }} >Digital Web Products for Amazing Clients</h3>
                    <p className="text-61 mt-6 leading-8 xs:text-lg text-base">Since 2015 I have been a visionary and a reliable software engineering partner for world-class brands. These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
                    <div className="counts mt-4 sm:text-left text-center">
                        <div className="clients xs:inline-block text-center">
                            <Counter classes='xs:text-6xl text-5xl font-bold text-darkYellow mb-2' goal={scrolled===true?120:0} time={1} />
                            <span className='text-dark tracking-wider font-semibold w-full' >Happy Clients</span>
                        </div>
                        <div className="projects xs:inline-block text-center lg:ml-16 mx-16">
                            <Counter classes='xs:text-6xl text-5xl font-bold text-darkYellow mb-2' goal={scrolled===true?230:0} time={1} />
                            <span className='text-dark tracking-wider font-semibold w-full'>Incredible Projects</span>
                        </div>
                        <div className="awards lg:block xs:inline-block">
                            <div className='inline-block text-center'>
                                <Counter classes='xs:text-6xl text-5xl font-bold text-darkYellow mb-2' goal={scrolled===true?18:0} time={1} />
                                <span className='text-dark tracking-wider font-semibold w-full'>Awards Winning</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio__about-images relative w-full ">
                    <img src={images.about013} alt="about013" className='absolute top-0 left-0 max-w-full' />
                    <motion.img whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.7, duration: 0.5, ease: 'easeInOut' }} src={images.dots} alt="dots" className='absolute lg:left-3/4 left-2/3 bottom-28' />
                    <motion.img src={images.about011} whileInView={{ x: 0 }} initial={{ x: 200 }} transition={{ duration: 0.6, ease: 'easeInOut' }} alt="person" className='max-w-full relative lg:left-20 w-full' />
                </div>
            </div>
        </div>
    )
}
export default About