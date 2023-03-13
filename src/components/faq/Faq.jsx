import React, { useState } from 'react'
import { images } from '../../constants'
import {motion }from 'framer-motion'
import { faq } from '../../pages/faq/data'
const Faq = () => {
    const [chevClick, setChevClick] = useState({click:-1,hover:-1})
    return (
        <div className='bg-section mb-40 relative flex lg:flex-row px-4 flex-col items-center container lg:px-12 ' >
            <div className='py-40 lg:pl-24 w-full'>
                <img src={images.faq02} alt="faq02" className='max-w-full max-h-full transition-all duration-300 w-fit left-0 top-0 absolute ' />
                <div className="portfolio__faq-content relative ">
                    <div className="portfolio__faq-content__pseudo lg:-rotate-90 absolute lg:-left-24 mr-4 lg:top-14 -top-8 left-0 text-xl  flex items-center gap-3">
                        <span className='block w-20 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                        <span style={{ color: '#adadad' }} >faq</span>
                    </div>
                    <h3 className="text-lightDark xs:leading-snug xs:text-4xl text-3xl tracking-wider font-semibold" style={{ wordSpacing: '10px' }} >The Answers to<br />All Your Questions</h3>
                    <ul className="flex flex-col gap-4 mt-4">
                        {
                            faq.map((item, index) => {
                                return (
                                    <li className='flex gap-2 item-center cursor-pointer transition-all duration-300' key={index} onClick={() => { chevClick.click !== index ? setChevClick({ ...chevClick, click: index }) : setChevClick({ ...chevClick, click: -1 }) }} onMouseEnter={() => setChevClick({ ...chevClick, hover: index })} onMouseLeave={() => setChevClick({ ...chevClick, hover: -1 })}  >
                                        <i className={`fa-solid fa-chevron-right h-fit mb-px transition-all duration-300 ${chevClick.click === index || chevClick.hover === index ? 'bg-darkYellow text-white' : 'text-darkYellow'}  rounded-full border border-darkYellow py-2 px-2.5 ${chevClick.click === index ? 'rotate-90' : ''} transition-all duration-300 `} ></i>
                                        <div className='transition-all duration-300 relative'>
                                            <h4 className={`text-xl font-semibold transition-all duration-300 ${chevClick.click === index ? 'text-darkYellow' : 'text-lightDark'}`}>{item.title}</h4>
                                            <p className={`md:w-1/2  overflow-hidden text-base text-61 leading-relaxed transition-all duration-1000 mt-3 ${chevClick.click === index ? 'max-h-60' : 'max-h-0'} `}>{item.text}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="portfolio__faq-images lg:absolute lg:-top-14 lg:right-0 relative max-w-full overflow-hidden">
                <img src={images.faq012} alt="faq012" className='absolute z-10 left-24 max-w-full'/>
                <motion.img whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{delay: 0.7, duration: 0.5, ease: 'easeInOut' }} src={images.faq013} alt="faq013" className='absolute -right-12  bottom-10' />
                <motion.img src={images.faq011} whileInView={{ x: 0 }} initial={{ x: 200 }} transition={{ duration: 0.6, ease: 'easeInOut' }} alt="person" className='max-w-full relative lg:left-20 w-full' />
            </div>
        </div>
    )
}

export default Faq