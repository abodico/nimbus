import React from 'react'
import { NavLink } from 'react-router-dom'
const Landing = ({title}) => {
    return (
        <div className='portfolio__landing bg-landing bg-cover bg-center w-full xs:p-32 py-32 xl:pb-32 xl:pt-56'>
            <h2 style={{wordSpacing:10}} className='text-center text-white text-5xl mb-8 tracking-wider font-bold' >{title}</h2>
            <div className='w-full text-bbb flex items-center gap-4 justify-center'>
            <NavLink className='font-semibold hover:text-darkYellow transition-all tracking-wide duration-300' to='/'>
                Home
            </NavLink>
            <div className='w-8 h-px bg-bbb '></div>
            <div className='font-semibold text-darkYellow tracking-wide'>{title}</div>
            </div>
        </div>
    )
}

export default Landing