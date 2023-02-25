import React, { useState } from 'react'
import { images } from '../../constants'
import { TalkData } from '../../pages/home/data'
const Talk = () => {
    const [hover, setHover] = useState(-1)
    return (
        <div className='portfolio__talk w-full text-center bg-lightDark lg:p-32 md:px-16 md:py-24 p-12 relative overflow-hidden ' >
            <img src={images.footer} alt="footer" className="max-w-full absolute -z-0 md:-top-20 top-1/2 -right-80" />
            <img src={images.counters01} alt="footer" className="max-w-full absolute -z-0 -top-20 -left-80" />
            <h2 style={{wordspacing:5}} className='xs:text-7xl text-4xl tracking-wider font-semibold relative  mb-16 text-white' >Let`s Talk!</h2>
            <div className="portfolio__talk-container relative md:left-5 md:w-auto w-fit mx-auto flex md:flex-row flex-col lg:justify-center md:justify-around lg:gap-24 gap-6 ">
                {
                    TalkData.map((item, index) => {
                        return (
                            <a href={index===1?'mailto:yourmail.com':index===0?'tel:+1800123456789':'www.behance.com'} onMouseEnter={() => { setHover(index) }} onMouseLeave={() => { setHover(-1) }} key={index} className='cursor-pointer mx-auto md:mx-0 inline-block w-fit h-fit'  >
                                <div className="part flex flex-col gap-1 w-fit " key={index} >
                                    <i className={`${item.icon} transition-all duration-300 ${index===hover?'text-white':'text-e69'}  text-4xl `}></i>
                                    <p style={{ wordSpacing: 5 }} className={`font-semibold ${index===hover? 'text-e69':' text-white'}  transition-all duration-300 tracking-wide text-xl `}>{item.firstP}</p>
                                    <p className={` ${index===hover?'text-white':"text-bbb"} transition-all duration-300 text-lg`} >{item.secondP}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <button className="bg-darkYellow hover:bg-e69 transition-all ease-linear mx-auto block mt-12 h-fit py-4 text-lg px-11 text-white relative tracking-wide font-bold rounded" >Hire Me  </button>
        </div>
    )
}

export default Talk