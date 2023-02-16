import React from 'react'
import { honours } from '../../pages/aboutMe/data'

const Honours = () => {
    return (
        <div className='portfolio__honours relative py-16 container max-w-full mx-auto'>
            <h2 style={{wordSpacing:4}} className='text-light-dark mb-12 xs:leading-snug xs:text-4xl text-3xl tracking-wider font-semibold lg:w-1/3 md:w-2/3 mx-auto text-center'>Honours & Awards What I Have & Proud</h2>
            {
                honours.map((item, index) => {
                    return (
                        <div key={index} className={`portfolio__honours-line flex md:flex-row flex-col md:items-center md:justify-between xs:items-end  ${index===0 && 'border-t'} sm:w-11/12 mx-4 md:mx-auto border-c6 md:py-12 pt-8 pb-4 border-b `}>
                            <div className='flex md:flex-row  flex-col md:items-center md:justify-between md:gap-8 gap-2 md:w-3/4 '>
                                <h4 style={{ wordSpacing: 2 }} className='text-light-dark text-2xl tracking-wider font-semibold'>{item.title}</h4>
                                <p className=" relative md:w-2/3 text-61 leading-8 xs:text-lg text-base tracking-wide text-left">{item.text}</p>
                            </div>
                            <button className="background-dark-yellow hover:bg-e69 transition-all ease-linear w-fit md:inline-block py-3.5 px-11 text-white tracking-wide font-bold rounded">Hire Me</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Honours