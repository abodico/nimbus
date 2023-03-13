import React, { useState } from 'react'
const Revolution = () => {
    const [revSeeMore, setRevSeeMore] = useState(-1)
    return (
        <div className='portfolio__revolution py-20 bg-section sm:px-12 md:px-24 px-6 container mx-auto'>
            <div className="portfolio__faq-text text-center lg:w-1/2 px-4 mx-auto mb-8">
                <h2 style={{ wordSpacing: 8 }} className='text-lightDark font-bold text-4xl leading-snug tracking-wider mb-6'>Gearing Up for<br />the Digital Revolution </h2>
                <p className='text-61 text-lg leading-8 tracking-wide' >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            </div>
            <div className="portfolio__revolution-content container max-w-full mx-auto mt-8 shadow-xl rounded-lg overflow-hidden flex xl:flex-row flex-col">
                <div className="leftside sm:px-16 px-8 bg-white h-fit xl:w-1/2">
                    <h3 className="text-lightDark mb-4 text-3xl font-semibold hover:text-darkYellow transition-all duration-300">Unique Concept</h3>
                    <p className="text-61 leading-7 text-lg mb-6">We met years ago at an advertising agency where we learned a ton of dos and some don'ts. There were project deadlines, happy hours, client proposals and a few sparks.</p>
                    <h3 className="text-lightDark mb-4 text-3xl font-semibold hover:text-darkYellow transition-all duration-300">Creative Thinking</h3>
                    <p className="text-61 leading-7 text-lg mb-6">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction.</p>
                    <a href="#a" rel='noreferrer' className=' flex items-center mt-4 cursor-pointer text-white relative' >
                        <span onMouseEnter={() => setRevSeeMore(1)} onMouseLeave={() => setRevSeeMore(0)} className={`inline-block px-3 p-2 font-light bg-darkYellow transition-all text-xl ${revSeeMore === 1 ? 'rounded-l-md' : ' delay-200 rounded-md'} `} >
                            <i className="fa-solid fa-greater-than"></i>
                        </span>
                        <span className='p-3 relative block text-sm'>
                            <span className=' w-fit transition-all block z-10 relative h-full' >Read More</span>
                            <span style={{ width: `${+revSeeMore === +1 ? 100 : 0}%` }} className={` ${+revSeeMore===1?'  ':' '} transition-all z-0 duration-300 bg-e69 rounded-r-md h-full inset-0  absolute`} ></span>
                        </span>
                    </a>
                </div>
                <div className="rightside xl:w-1/2 xl:h-auto h-96 bg-revolution_rightside bg-cover bg-center md:bg-top bg-no-repeat"></div>
            </div>
        </div>
    );
}

export default Revolution