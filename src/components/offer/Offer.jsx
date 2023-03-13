import React, { useState } from 'react'
import { servCards } from '../../pages/services/data'
import './offer.css'
const Offer = () => {
    const [cardHovered, setCardHovered] = useState(-1)
    return (
        <div className=' bg-white py-16 container mx-auto md:px-6 px-3 وmax-w-full'>
            <div className="relative mb-6 px-3 ">
                <div className="lg:-rotate-90 absolute mr-4 lg:top-16 lg:-left-16 left-4 -top-6 text-xl flex items-center gap-3">
                    <span className='block w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                    <span style={{ color: '#adadad' }} >offer</span>
                </div>
                <h3 className="text-lightDark leading-normal md:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '10px' }} >I Prowide Awesome Services</h3>
                <p className="text-61 mt-6 leading-8 text-lg xl:w-1/2">We met years ago at an advertising agency where we learned a ton of dos and some don'ts. There were project deadlines, happy hours, client proposals and a few sparks flying.</p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {servCards.map((item, index) => {
                    return (
                        <div key={index} onMouseEnter={() => setCardHovered(index)} onMouseLeave={() => setCardHovered(-1)} className={`portfolio__offer-cards__card bg-cover bg-offer_card lg:max-w-32%  ${cardHovered === index && ' before:opacity-0'} before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-white before:transition-all before:duration-300 before:z-0 rounded-lg text-center relative overflow-hidden px-8 py-10 shadow-xl `} >
                            <i className={`${item.icon} ${index === 2 ? 'text-3xl p-5 px-6' : 'text-3xl p-5'} relative mb-6 text-white hover:text-c6 transition-all duration-300 rounded-full  bg-darkYellow leading-none `} ></i>
                            <h4 style={{ wordSpacing: 5 }} className={` font-semibold text-2xl mb-3 relative transition-all duration-300  ${cardHovered === index ? 'text-white' : 'text-lightDark'}`}>{item.title}</h4>
                            <p className={`xl:w-4/5 mx-auto leading-relaxed transition-all duration-300 relative  ${cardHovered === index ? 'text-c6' : 'text-61'} `} >{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Offer