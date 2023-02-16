import React, { useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { images } from '../../constants'
import { stages } from '../../pages/aboutMe/data'
import './stages.scss'
const Stages = () => {
    const [seeMore, setSeeMore] = useState(-1)
    const [stageHovered, setStageHovered] = useState(-1)
    return (
        <div className='portfolio__stages w-full relative py-32  max-w-full' >
            <div className="portfolio__stages-text text-center sm:w-1/2 px-4 mx-auto mb-8">
                <h2 className='text-lightDark font-bold text-4xl leading-snug tracking-wider mb-6'>I Complete<br /> Every Step Carefull</h2>
                <p className='back-color text-lg leading-8 tracking-wide' >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            </div>
            <div className=" portfolio__stages-cards container mx-auto max-w-full lg:flex-nowrap flex-wrap gap-4 flex justify-evenly my-8 relative">
                {stages.map((item, index) => {
                    return (
                        <div key={index} onMouseEnter={() => setStageHovered({ indx: index })} onMouseLeave={() => setStageHovered({ indx: -1, animate: 'paused' })} className={`portfolio__stages-cards__card  lg:w-72 md:w-2/5 w-full sm:w-4/5 mx-4 md:mx-0 bg-white transition-all duration-300 rounded-lg relative overflow-hidden px-6 pt-24 pb-12 shadow-lg `} >
                            <div className={`egg  ${stageHovered.indx === index ? ' start bg-e69' : 'bg-f7'} transition-all z-10 duration-300 absolute -top-5 -left-6 w-28 h-28 `}></div>
                            <div className="number z-10 text-3xl absolute top-4 left-4 text-dark ">0{index+1}</div>
                            <div className={`background bg-stages_background ${stageHovered.indx === index ? ' opacity-100 ' : ' opacity-0'} transition-all duration-300 left-0 absolute w-full h-full top-0 block `}></div>
                            <div className="content mt-1.5 mb-4 relative">
                                <h4 className={`font-bold text-2xl mb-4  tracking-wide duration-300 ${stageHovered.indx === index ? 'text-white ' : 'text-lightDark '}`} >{item.title}</h4>
                                <p className={`text-base ${stageHovered.indx === index ? 'text-999' : 'text-c6'} `} >{item.text}</p>
                            </div>
                            <a href="ww" rel='noreferrer' className=' flex items-center mt-4 cursor-pointer text-white relative' >
                                <span onMouseEnter={() => setSeeMore(index)} onMouseLeave={() => setSeeMore(-1)} className={`inline-block p-3 font-light bg-darkYellow transition-all text-xl ${seeMore === index ? 'rounded-l-md' : ' delay-200 rounded-md'} `} >
                                    <FaGreaterThan />
                                </span>
                                <span className='p-3 relative block text-sm'>
                                    <span className={` w-fit transition-all block h-full z-10 relative ${index === seeMore ? ' opacity-100 ' : 'opacity-0 '}  transition-all  `} >Read More</span>
                                    <span style={{ width: `${index === seeMore ? 100 : 0}%` }} className=' transition-all duration-150 bg-e69 rounded-r-md h-full inset-0 block absolute' ></span>
                                </span>
                            </a>
                        </div>
                    )
                })}
            </div>
            <img src={images.dashed} alt="dashed" className="absolute top-1/2 -z-20" />
        </div>
    )
}
export default Stages