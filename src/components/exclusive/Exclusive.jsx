import React from 'react'
import { useState } from 'react'
import { images } from '../../constants'
const Exclusive = () => {
    const [activeButton, setActiveButton] = useState('0')
    return (
        <div className='portfolio__exclusive py-32 relative flex justify-around gap-6 px-12 bg-section overflow-y-hidden'>
            <img src={images.skills_02} alt="skills_02" className="max-w-full absolute top-0" />
            <div className="portfolio__exclusive-left-side max-w-40 relative">
                <div className="portfolio__home-container__my_skills-content__pseudo md:-rotate-90  absolute md:-left-24 mr-4 md:top-20 -top-4 left-0 text-xl  flex items-center gap-3">
                    <span className='block w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                    <span style={{ color: '#adadad' }} >about me</span>
                </div>
                <h3 className="text-light-dark leading-normal xs:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Ready to Give<br/>Exclusive Services</h3>
                <div className="buttons flex gap-2">
                    <button onClick={()=>setActiveButton((prev)=>(prev!=='0'?'0': prev ))} className={`outline-none px-5 py-2 transition-all duration-300 rounded-lg ${+activeButton===0?'bg-darkYellow text-white':'bg-section text-bbb hover:text-dark '} `} >Design</button>
                    <button onClick={()=>setActiveButton((prev)=>(prev!=='1'?'1':prev))} className={`outline-none px-5 py-2 transition-all duration-300 rounded-lg ${+activeButton===1?'bg-darkYellow text-white':'bg-section text-bbb hover:text-dark '} `} >Develop</button>
                </div>
                <div className="text relative h-fit overflow-y-hidden">
                    <div className={`${activeButton==='0'?'mt-6': 'mt-2'} duration-700 `}>
                        <p className={`back-color  transition-all duration-300 leading-8 text-lg`}>Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every.</p>
                        <p className={`back-color mt-3 leading-8 text-lg ${' '}`}>These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful and beautifully, too.</p>
                    </div>
                    <div className={`absolute z-10 transition-all duration-700 bg-section ${activeButton==='1'?' top-0':' top-full'}`} >
                        <p className={`back-color ${activeButton==='0'?'mt-6': 'mt-2'} transition-all duration-300 leading-8 text-lg`}>Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every.</p>
                        <p className={`back-color mt-3 leading-8 text-lg ${' '}`}>These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful and beautifully, too.</p>
                    </div>
                </div>
            </div>
            <div className="portfolio__exclusive-right-side md:mt-4 mt-10 px-6 lg:max-w-1/2 max-w-full flex md:flex-row flex-col md:gap-2 gap-8 relative">
                <div className="portfolio__home-container__my_skills-cards__half_one md:w-1/2 w-full relative md:-top-8  flex flex-col gap-8 ">
                    <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl overflow-hidden rounded-xl ">
                        <div className='w-full h-full rounded-xl px-4 py-8'>
                            <span className=' p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl  '>
                                <i className="fa-solid fa-display "></i>
                            </span>
                            <h4 className='text-4xl font-bold text-23 my-6' >UI/UX Design</h4>
                            <p className='back-color text-xl'>We believe direct collaboration with our clients is essential to bringing unique</p>
                        </div >
                    </div>
                    <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl  overflow-hidden  rounded-xl ">
                        <div className='w-full h-full rounded-xl px-4 py-8'>
                            <span className='p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl' >
                                <i className="fa-solid fa-person-walking"></i>
                            </span>
                            <h4 className='text-4xl font-bold text-23 my-6' >Motion Design</h4>
                            <p className='back-color text-xl'>We believe direct collaboration with our clients is essential to bringing unique</p>
                        </div >
                    </div>
                </div>
                <div className="portfolio__home-container__my_skills-cards__half_two md:w-1/2 flex flex-col gap-8 ">
                    <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl  overflow-hidden  rounded-xl ">
                        <div className='w-full h-full rounded-xl px-4 py-8'>
                            <span className='p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl' >
                                <i className="fa-regular fa-image"></i>
                            </span>
                            <h4 className='text-4xl font-bold text-23 my-6'>Graphic Design</h4>
                            <p className='back-color text-xl '>We believe direct collaboration with our clients is essential to bringing unique</p>
                        </div >
                    </div>
                    <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl  overflow-hidden  rounded-xl ">
                        <div className='w-full h-full rounded-xl px-4 py-8'>
                            <span className='p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl' >
                                <i className="fa-solid fa-paintbrush"></i>
                            </span>
                            <h4 className='text-4xl font-bold text-23 my-6' >Photo Retouch</h4>
                            <p className='back-color text-xl' >We believe direct collaboration with our clients is essential to bringing unique</p>
                        </div >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exclusive