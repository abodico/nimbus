import React from 'react'
import { track } from '../../pages/aboutMe/data'
const Track = () => {
    return (
        <div className="portfolio__track py-8 relative">
            <div className="bg bg-track_bg w-full h-40 absolute top-0 left-0 translate-y-24 -z-10 "></div>
            <div className=' flex justify-between p-12'>
                    {track.map((item, index) => {
                        return (
                            <div key={index} className={`${item.classes} mx-auto  hover:bg-lightYellow py-16 sm:mx-px sm:w-64 w-full text-center transition-all duration-300 ease-linear rounded-lg`}>
                                <img src={item.image} alt="partnerXw" className='mx-auto' />
                            </div>
                        )
                    })}
            </div>
        </div>
    );
}

export default Track