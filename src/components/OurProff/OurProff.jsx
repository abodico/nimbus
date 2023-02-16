import React from 'react'
import { useState } from 'react'
import { ourTeam } from '../../pages/our team/data'
import './ourProff.scss'
const OurProff = () => {
    const [radiusRotate, setRadiusRotate] = useState(-1);
    return (
        <div className='portfolio__proff container mx-auto py-24 '>
            <div className="portfolio__proff-text text-center sm:w-2/3 px-4 mx-auto mb-8">
                <h2 className='text-lightDark font-bold text-4xl leading-snug tracking-wider mb-6'>Our Professionals<br/>Never Make Mistakes</h2>
                <p className='back-color text-lg leading-8 tracking-wide' >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            </div>
            <div className="portfolio__proff-grid px-8 gap-6 grid grid-rows-2 grid-cols-3">
                {ourTeam.map((item, index) => {
                    return (
                        <div onMouseEnter={()=>setRadiusRotate(index)} onMouseLeave={()=>setRadiusRotate(-1)} className="px-4 pt-8 pb-14 text-center shadow-xl rounded-lg relative overflow-hidden" key={index}>
                            <div className="img-holder w-fit h-fit rounded-full relative">
                                {/* <span className='text-xl p-2 leading-none rounded-full shadow-md absolute top-0 right-0'>+</span> */}
                                <img src={item.img} alt="person" className="max-w-2/3 mx-auto w-fit rounded-full " />
                                <span className={`absolute bottom-0 right-0 ${radiusRotate===index ? 'bg-darkYellow':'bg-999 ' }`}  ></span>
                            </div>
                            <h3 style={{wordSpacing:5}} className='mt-8 mb-2 text-3xl font-bold hover:text-darkYellow transition-all duration-300 text-lightDark'>{item.name}</h3>
                            <p className='text-61 text-lg '>{item.job}</p>
                            <span className={`radius-rotate block absolute  ${radiusRotate===index?'bg-darkYellow start': 'bg-f7'}`}></span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default OurProff