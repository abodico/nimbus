import React, { useState } from 'react'
import { images } from '../../constants'
import { pricingCard, pricingPlan } from '../../pages/services/data'
const Pricing = () => {
    const [hover, setHover] = useState(-1);
    return (
        <div className='portfolio__pricing flex lg:flex-row flex-col bg-white py-16 px-4 gap-24, items-center overflow-hidden'>
            <div className="portfolio__pricing-leftside relative mb-16 lg:mb-0 md:px-12 sm:px-32 xs:px-8 px-4 flex md:flex-row flex-col md:gap-6 gap-10 xl:max-w-1/2 max-w-full w-full lg:flex-1">
                <div className="starter-card shadow-xl w-full rounded-md mt-8 ">
                    <div className="price bg-pricing_price text-center xl:px-24 relative rounded-t-md bg-cover text-white">
                        <span className='mx-auto leading-none relative top-1.5 bg-lightDark text-xl font-semibold tracking-wider px-2.5 rounded-b py-1' >Starter</span>
                        <span className="before:absolute text-5xl mt-12 font-semibold mx-auto relative before:text-4xl before:-top-4 before:-left-6 w-fit block before:content-['$']">179</span>
                        <span className='block w-fit mx-auto pb-12'>per month</span>
                    </div>
                    <ul className='pt-5 pb-3'>
                        {pricingCard.map((item, index) => {
                            return (
                                <li className={`${index < 3 ? 'text-lightDark' : 'text-999'} text-xl text-center my-3`} key={index} ><span className='font-semibold'>{item.semi}</span> <span >{item.norm}</span></li>
                            )
                        })}
                    </ul>
                    <button className="btn bg-lightYellow hover:bg-darkYellow transition-all mx-auto block text-white font-semibold text-lg relative top-6 py-4 px-8 rounded" >Buy Now</button>
                </div>
                <div className="basic-card  shadow-xl h-fit w-full rounded-md ">
                    <div className="price bg-pricing_price2 text-center xl:px-24 relative rounded-t-md bg-cover text-white">
                        <span className='mx-auto leading-none relative top-1.5 bg-darkYellow text-xl font-semibold tracking-wider px-2.5 rounded-b py-1' >Basic</span>
                        <span className="before:absolute mt-12 text-5xl font-semibold mx-auto relative before:text-4xl before:-top-4 before:-left-6 w-fit block before:content-['$']">229</span>
                        <span className='block w-fit mx-auto pb-12'>per month</span>
                    </div>
                    <ul className='pt-5 pb-3'>
                        {pricingCard.map((item, index) => {
                            return (
                                <li className={`${index < 4 ? 'text-lightDark' : 'text-999'} text-xl text-center my-3`} key={index} ><span className='font-semibold'>{item.semi}</span> <span >{item.norm}</span></li>
                            )
                        })}
                    </ul>
                    <button className="btn bg-lightDark hover:bg-dark transition-all mx-auto block text-white font-semibold text-lg relative top-6 py-4 px-8 rounded" >Buy Now</button>
                </div>
            </div>
            <div className="portfolio__pricing-rightside xl:max-w-1/2 lg:max-w-40 lg:pl-16 w-fit inline-block relative ">
                <img src={images.pricing} alt="pricing" className="absolute md:-top-10 left-1/2 " />
                <div className="portfolio__offer-content__pseudo lg:-rotate-90 absolute mr-4 lg:top-20 lg:-left-20 left-4 -top-6 text-xl flex items-center gap-3">
                    <span className='block xs:w-20 w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                    <span style={{ color: '#adadad' }} className='tracking-wider'>pricing tables</span>
                </div>
                <h3 className="text-light-dark z-10 relative md:text-5xl text-3xl leading-relaxed tracking-wide font-semibold" style={{ wordSpacing: '10px' }} >Choose Your<br/>Enterteiment Plan</h3>
                <p className="back-color mt-6 leading-8 text-lg xl:w-3/4">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
                <ul className="mt-4">
                    {pricingPlan.map((item, index) => {
                        return (
                            <li key={index} onMouseEnter={()=>setHover(index)} onMouseLeave={()=>{setHover(-1)}} className='flex gap-4 items-center mb-5'>
                                <i className="fa-solid fa-check p-1.5 text-white bg-darkYellow hover:text-61 rounded-full font-bold text-xl leading-none transition-all duration-300"></i>
                                <p className={`${hover===index?'text-darkYellow':'text-lightDark'} transition-all duration-300 text-xl font-semibold tracking-wide `} style={{wordSpacing:5}}>{item}</p>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    )
}

export default Pricing