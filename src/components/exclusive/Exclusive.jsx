import React from 'react'
import { useState } from 'react'
import { images } from '../../constants'
import { skillsCard } from '../../pages/home/data';
const Exclusive = () => {
    const [activeButton, setActiveButton] = useState('0');
    const [hovered, setHovered] = useState({skills:-1})
    return (
        <div className='container py-32 relative flex md:flex-row flex-col justify-around gap-6 px-12 overflow-hidden'>
            <img src={images.skills_02} alt="skills_02" className=" absolute top-0" />
            <div className="left-side md:max-w-40 relative">
                <div className="portfolio__home-container__my_skills-content__pseudo md:-rotate-90  absolute md:-left-24 mr-4 md:top-20 -top-4 left-0 text-xl  flex items-center gap-3">
                    <span className='block w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                    <span style={{ color: '#adadad' }} >about me</span>
                </div>
                <h3 className="text-lightDark leading-normal xs:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Ready to Give<br />Exclusive Services</h3>
                <div className="buttons flex gap-2">
                    <button onClick={() => setActiveButton((prev) => (prev !== '0' ? '0' : prev))} className={`outline-none px-5 py-2 transition-all duration-300 rounded-lg ${+activeButton === 0 ? 'bg-darkYellow text-white' : 'bg-section text-bbb hover:text-dark '} `} >Design</button>
                    <button onClick={() => setActiveButton((prev) => (prev !== '1' ? '1' : prev))} className={`outline-none px-5 py-2 transition-all duration-300 rounded-lg ${+activeButton === 1 ? 'bg-darkYellow text-white' : 'bg-section text-bbb hover:text-dark '} `} >Develop</button>
                </div>
                <div className="text relative h-fit overflow-y-hidden">
                    <div className={`${activeButton === '0' ? 'mt-6' : 'mt-2'} duration-700 `}>
                        <p className={`text-61  transition-all duration-300 leading-8 md:text-lg`}>Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every.</p>
                        <p className="text-61 mt-3 leading-8 md:text-lg ">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful and beautifully, too.</p>
                    </div>
                    <div className={`absolute z-10 transition-all duration-700 bg-section ${activeButton === '1' ? ' top-0' : ' top-full'}`} >
                        <p className={`text-61 ${activeButton === '0' ? 'mt-6' : 'mt-2'} transition-all duration-300 leading-8 md:text-lg`}>Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every.</p>
                        <p className="text-61 mt-3 leading-8 md:text-lg " >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful and beautifully, too.</p>
                    </div>
                </div>
            </div>
            <div className="right-side md:mt-4 mt-10 lg:max-w-1/2 max-w-full flex flex-wrap gap-6 relative">
                {skillsCard.map((item, index) =>
                    <div
                        key={index}
                        onMouseEnter={() => setHovered((prev) => { return ({ prev, skills: index }) })}
                        onMouseLeave={() => setHovered((prev) => { return ({ prev, skills: -1 }) })}
                        className={` ${(index === 0 || index === 2) && 'lg:-mt-6'} ${hovered.skills === index && 'bg-stages_background'} max-h-64 transition-all duration-500 ease-in-out md:w-5/12 mx-auto text-center shadow-2xl overflow-hidden rounded-xl`}>
                        <div className={`transition-all duration-500 ease-in-out w-full h-full rounded-xl px-1 py-8 ${hovered.skills === index ? '-translate-y-20 bg-transparent ' : 'bg-white'} `}>
                            <span className={`p-5 text-center mx-auto w-20 transition-all duration-300 ease-in-out block h-20 rounded-full bg-lightDark text-white text-4xl ${hovered.skills === index && 'opacity-0'}`}>
                                <i className={item.icon}></i>
                            </span>
                            <h4 className={`transition-all duration-500 ease-in-out text-2xl tracking-wider font-bold my-6 ${hovered.skills === index ? 'text-white' : 'text-23'}`} >{item.title}</h4>
                            <p className={`transition-all duration-500 ease-in-out tracking-wide text-c6 ${hovered.skills === index ? 'opacity-100' : 'opacity-0'} `}>{item.text}</p>
                        </div >
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Exclusive