import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Landing from '../../components/landing/Landing'
import Navbar from '../../components/navbar/Navbar'
import { aboutMeIcons } from '../home/data'
import Talk from '../../components/talk/Talk'
const Contacts = () => {
    const [arrowScroll, setArrowScroll] = useState(false);
    onscroll = () => {
        setArrowScroll(() => window.scrollY > 600 ? true : false);
    }
    const [hover, setHover] = useState(-1)
    const contactData = [
    {
        icon: 'fa-solid fa-mobile-retro ',
        firstP: 'Phone Me 24/7:',
        secondP: '+1-800-123-456-789'
    },
    {
        icon: 'fa-solid fa-envelope ',
        firstP: 'Mail Me 24/7:',
        secondP: 'nimbus2000@mail.com'
    },
    {
        icon: 'fa-solid fa-paper-plane ',
        firstP: 'Follow Me:',
    }
    ]
    
    return (
        <div>
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
            <Landing title='Contacts' />
            <div className="main flex md:flex-row flex-col justify-between container md:max-w-auto max-w-full mx-auto my-20 md:px-12 px-6 md:gap-0 gap-6 ">
                <div className="contacts relative md:max-w-1/3 max-w-full md:px-4 mx-4">
                    <div className="portfolio__home-container__my_skills-content__pseudo md:-rotate-90 absolute md:-left-28 mr-4 md:top-20 -top-6 left-0 text-xl flex items-center gap-3">
                        <span className='block w-24 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                        <span style={{ color: '#adadad' }} className='tracking-wide' >contacts</span>
                    </div>
                    <h3 className="text-lightDark leading-normal xs:text-4xl text-3xl tracking-wider font-semibold" style={{ wordSpacing: '8px' }} >Quick Support</h3>
                    <p className="text-61 mt-6 leading-8 text-lg">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create</p>
                    <div className="flex md:flex-col flex-row flex-wrap md:gap-4 gap-8 mt-8">
                        {
                            contactData.map((item, index) => {
                                return (
                                    <a
                                    href={index === 1 ? 'mailto:yourmail.com' : index === 0 ? 'tel:+1800123456789' : 'www.behance.com'}
                                    onMouseEnter={() => { setHover(index) }}
                                    onMouseLeave={() => { setHover(-1) }}
                                    key={index}
                                    className="cursor-pointer mx-auto break-keep inline-block md:mx-0 md:w-fit md:max-w-full h-fit">
                                        <div className="part flex gap-4 w-fit " key={index} >
                                            <i className={`${item.icon} transition-all duration-300 ${index === hover ? 'text-61' : 'text-e69'}  text-4xl `}></i>
                                            <div className="">
                                                <p style={{ wordSpacing: 5 }} className={`font-semibold ${index === hover ? 'text-e69' : ' text-black'}  transition-all duration-300 tracking-wide text-xl `}>{item.firstP}</p>
                                                <p className={`text-61 transition-all duration-300 text-lg ${index === 2 && ' hidden'}`} >{item.secondP}</p>
                                                <div className={`${index!==2 && 'hidden'} flex gap-4 mt-3`}>
                                                    {
                                                        aboutMeIcons.map((it, ind) => <i key={ind} className={it.icon + ' text-' + it.color +' text-lg hover:text-darkYellow transition-all duration-300'}></i>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="touch bg-f7 rounded-lg md:px-12 px-4 pt-2 pb-8 w-full">
                    <h3 className="text-lightDark leading-normal xs:text-4xl text-3xl tracking-wider font-semibold" style={{ wordSpacing: '8px' }} >Get in Touch</h3>
                    <form action="" className='flex flex-col justify-start gap-6 mt-8'>
                        <input type="text" placeholder='Your Name *' className='px-5 placeholder-61 outline-none focus:shadow-md transition-all duration-300 focus: rounded-md py-4'  />
                        <input type="text" placeholder='Your Email*' className='px-5 placeholder-61 outline-none focus:shadow-md transition-all duration-300 focus: rounded-md py-4' />
                        <textarea type="text" placeholder='Message...' className='px-5 placeholder-61 outline-none focus:shadow-md transition-all duration-300 focus: h-28 rounded-md py-4' />
                        <input type="submit" value="Leave A Comment" className='w-fit bg-darkYellow hover:bg-e69 transition-all duration-300 ease-linear text-white md:text-xl text-lg font-semibold tracking-wide px-5 py-4 rounded-md ' />
                    </form>
                </div>
            </div>
            <Talk/>
        </div>
    )
}

export default Contacts