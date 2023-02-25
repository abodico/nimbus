import React from 'react'
import { images } from '../../constants'
import { counterData } from '../../pages/home/data'
import Counter from '../counter/Counter'
const Counters = ({scrolledToCounter}) => {
    return (
        <div className='w-full xs:px-4'>
            <div className='portfolio__home-counter container mx-auto w-full bg-dark relative mt-24 rounded-lg overflow-hidden mb-16'  >
                <img src={images.counters01} className='absolute inset-0 -top-52 -left-72' alt="counters" />
                <img src={images.counters02} className='absolute -bottom-36 -right-20 ' alt="counters" />
                <ul className='flex relative flex-col max-w-full gap-7 md:gap-0 md:flex-row mx-auto py-20 px-10 flex-1 text-center text-white font-bold items-center justify-between text-5xl xs:text-7xl leading-10 ' >
                    {
                        counterData.map((item, index) => {
                            return (
                                <li key={index} className='block flex-1'>
                                    <Counter goal={scrolledToCounter ? item.goal : 0} time={item.time} />
                                    <span className='text-base xs:text-lg block mt-6 text-61'>{item.text}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Counters