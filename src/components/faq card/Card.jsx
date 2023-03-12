import React, { useState } from 'react'
import { cards } from '../../pages/faq/data'
const Stages = () => {
    const [cardHovered, setCardHovered] = useState(-1)
    return (
        <div className='portfolio__faq w-full relative py-32 max-w-full' >
            <div className="portfolio__faq-text text-center sm:w-1/2 px-4 mx-auto mb-8">
                <h2 className='text-lightDark font-bold text-4xl leading-snug tracking-wider mb-6'>Our Help Center <br /> Can Give You Answer</h2>
                <p className='text-61 text-lg leading-8 tracking-wide' >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            </div>
            <div className=" portfolio__faq-cards container mx-auto max-w-full lg:px-16 px-4 lg:flex-nowrap flex-wrap lg:gap-8 gap-4 flex justify-evenly my-8 relative">
                {cards.map((item, index) => {
                    return (
                        <div key={index} onMouseEnter={() => setCardHovered(index )} onMouseLeave={() => setCardHovered(-1)} className={`portfolio__faq-cards__card bg-faqCard md:w-5/12 w-full sm:w-4/5 ${ cardHovered ===index &&' before:opacity-0'} before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-white before:transition-all before:duration-300 before:z-0 rounded-lg text-center relative overflow-hidden px-8 py-10 shadow-lg `} >
                            <i className={`${item.icon } ${index===1?'text-2xl py-5': 'text-3xl'} relative mb-6 text-white rounded-full p-4 bg-darkYellow leading-none`} ></i>
                            <h4 style={{wordSpacing:5}} className={` font-semibold text-2xl mb-3 relative transition-all duration-300  ${cardHovered===index?'text-white':'text-lightDark'}`}>{item.title}</h4>
                            <p className={`xl:w-4/5 mx-auto leading-relaxed transition-all duration-300 relative  ${cardHovered===index?'text-c6':'text-61'} `} >{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Stages