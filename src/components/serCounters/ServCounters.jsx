import React, { useRef, useState } from 'react'
import Counter from '../counter/Counter'
import {  ServCounterData } from '../../pages/services/data'
const ServCounters = () => {
    const [scrolledToCounter, setScrolledToCounter] = useState(false);
    const counterRef = useRef();
    setTimeout(() => {
        const counter = counterRef.current.offsetTop;
        onscroll = () => {
            if (window.scrollY >= counter - 400) {
                setScrolledToCounter(true);
            }
        }
    }, 20);
    return (
        <div ref={counterRef} className='portfolio__serCounters flex justify-between bg-none'>
            <ul className='flex relative flex-col max-w-full gap-7 md:gap-0 md:flex-row mx-auto py-20 px-10 flex-1 text-center text-white font-bold items-center justify-between text-5xl xs:text-7xl leading-10 ' >
                {
                    ServCounterData.map((item, index) => {
                        return (
                            <li key={index} className='block flex-1'>
                                <Counter goal={scrolledToCounter ? item.goal : 0} classes='text-darkYellow' time={item.time} />
                                <span className='text-base xs:text-lg block '>{item.text}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ServCounters