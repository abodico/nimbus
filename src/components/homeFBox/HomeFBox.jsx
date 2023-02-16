import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaGreaterThan} from "react-icons/fa"
import './homeFBox.scss'
const HomeFBox = (props) => {
    return (
        <div className="portfolio__home-container__elementor-boxes__Home-f-box flex cursor-pointer justify-between shadow-lg max-w-full md:w-auto w-full hover:shadow-2xl bg-white px-4 py-6 gap-16 rounded-lg items-center">
            <div className='flex gap-6 items-center' >
                <span className={`p-2 font-bold text-2xl text-white rounded-full ${props.class}`} >
                <AiOutlineCheck  />
                </span>
                <div className="text ">
                    <h4 className='text-xl font-semibold' style={{wordSpacing:4,color:'#232323'}} >{props.title }</h4>
                    <p className="">{props.text}</p>
                </div>
            </div>
            <FaGreaterThan className='arrow back-color' />
        </div>
    );
}

export default HomeFBox