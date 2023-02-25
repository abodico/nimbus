import React from 'react'
import { agency } from '../../pages/our team/data'
import './agency.css'
const Agency = () => {
return (
    <div className='container mx-auto max-w-full py-16 px-8'>
        <div className="text-center py-6 sm:w-2/3 px-4 mx-auto mb-8">
            <h2 className='text-lightDark font-bold text-4xl leading-snug tracking-wider mb-6'>We are a Super<br/>Awesome Creative Agency</h2>
            <p className='text-61 text-lg leading-8 tracking-wide' >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
        </div>
        <div className="flex">
            {agency.map((item, index) => {
                return (
                    <div key={index} className="box">
                        <div
                            className="box__inner px-3 relative ">
                            <div className="box__inner-face front relative content ">
                            <img src={item.img} alt="bg" className='w-full h-full rounded-lg' />
                                <div className="absolute z-10 px-4 bottom-4 left-0">
                                    <span className="text-white text-2xl z-10 pl-8  block before:w-10 before:h-px before:bg-white before:block before:top-4 before:relative before:-left-12">{item.title}</span>
                                </div>
                            </div>
                            <div className="box__inner-face w-full overflow-hidden bg-agency_background back absolute top-0 left-0 px-10 py-10 h-full bg-cover bg-darkYellow rounded-lg ">
                                <h3 className="text-white text-3xl tracking-wide mb-4">{item.title}</h3>
                                <p className="text-white text-lg leading-loose">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
                            </div>
                        </div>
                    </div>
                );})}
        </div>
    </div>
)
}

export default Agency