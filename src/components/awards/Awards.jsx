import React, { useState } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { images } from '../../constants'
import { awardsData } from '../../pages/home/data'

const Awards = () => {
    const [awardIndex, setAwardIndex] = useState(0)
    const [animatedCard, setAnimatedCard] = useState({opacity:1})
    const [awards, setAwards] = useState(awardsData[awardIndex])
    const awardClick = (type) => {
        if (type === 1) {
            setAwardIndex(prev => prev + 1);
        }
        else {
            if (awardIndex > 0) {
                setAwardIndex(prev => prev - 1);
            }
            else {
                setAwardIndex(awardsData.length - 1);
            }
        }
        console.log(awardIndex)
        setAnimatedCard({ opacity: 0 });
        setTimeout(() => {
            setAwards(awardsData[awardIndex%+awardsData.length]);
            setAnimatedCard({ opacity: 1 })
        }, 200)
    }
    return (
        <div className="portfolio__home-container__awards my-16">
            <div className="portfolio__home-container__awards-container container relative max-w-full p-4 flex lg:flex-row flex-col md:gap-0 gap-6 mx-auto">
                <div className="image-container rounded-lg lg:max-w-30 xl:max-w-2/3 w-fit mx-auto lg:min-w-30 h-fit relative overflow-hidden ">
                    <img src={images.testimonials01} className='max-w-full' alt="testimonials" />
                    <img src={images.home1slider04} className='max-w-full xxs:w-32 md:w-auto absolute z-20 bottom-0 md:-bottom-1/4 ' alt="testimonials" />
                    <img src={images.testimonials02} className='max-w-full  absolute z-10 inset-0' alt="testimonials" />
                </div>
                <div className="portfolio__home-container__awards-container__content sm:px-28 px-8 pb-16 pt-6 lg:pt-0 z-30 shadow-xl rounded-lg lg:w-auto w-full h-fit lg:-left-20 bg-white lg:top-16 md:-top-10 top-0 mx-auto md:mx-0 xxs:max-w-40r lg:max-w-1/2 relative lg:right-0">
                    <div className="portfolio__home-container__about_me-content__pseudo lg:-rotate-90 absolute lg:-left-4 lg:top-24 sm:left-28 left-8 top-0 text-xl flex items-center gap-3">
                        <span className='block w-24  background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                        <span style={{ color: '#adadad' }} >my works</span>
                    </div>
                    <h3 className='text-light-dark leading-normal xs:text-4xl text-3xl mb-4 font-semibold' >Clients Testimonials</h3>
                    <p style={animatedCard} className='back-color leading-9 xs:text-lg text-sm mb-8 w-full transition-all duration-500' >{awards.text}</p>
                    <div className="portfolio__home-container__awards-container__content-bottom flex justify-between ">
                        <div className=' text-lg' >
                            <h4 style={animatedCard} className='font-semibold tracking-wide transition-all duration-500' >{awards.name}</h4>
                            <p style={animatedCard} className="text-bbb transition-all duration-500">{awards.work}</p>
                        </div>
                        <div className="arrows flex gap-3">
                            <div onClick={() => awardClick(-1)} className='p-3 rounded-lg text-bbb hover:bg-black hover:text-white transition-all duration-200 cursor-pointer h-fit bg-eee' >
                                <FaLessThan />
                            </div>
                            <div onClick={() => awardClick(1)} className="p-3 rounded-lg text-bbb hover:bg-black hover:text-white transition-all duration-200 cursor-pointer h-fit bg-eee">
                                <FaGreaterThan />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards