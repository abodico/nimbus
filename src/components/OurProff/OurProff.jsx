import { useState } from 'react'
import { ourTeam } from '../../pages/our team/data'
import './ourProff.css'
const OurProff = () => {
    const [radiusRotate, setRadiusRotate] = useState(-1);
    return (
        <div className='container mx-auto py-24 '>
            <div className="text-center sm:w-2/3 px-4 mx-auto mb-8">
                <h2 className='text-lightDark font-bold text-4xl leading-snug tracking-wider mb-6'>Our Professionals<br/>Never Make Mistakes</h2>
                <p className='text-61 text-lg leading-8 tracking-wide' >These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            </div>
            <div className="xs:px-8 px-4 gap-6 grid grid-rows-2 lg:grid-cols-3 sm:grid-cols-2">
                {ourTeam.map((item, index) => {
                    return (
                        <div onMouseEnter={()=>setRadiusRotate(index)} onMouseLeave={()=>setRadiusRotate(-1)} className="px-4 cursor-default pt-8 pb-14 text-center col-span-1 shadow-2xl rounded-lg relative overflow-hidden" key={index}>
                            <div className="xl:w-60 lg:w-52 h-fit rounded-full relative mx-auto">
                                <img src={item.img} alt="person" className=" max-w-full w-full rounded-full m-0" />
                                <span className='bg-white rounded-full absolute top-0.5 lg:right-6 xl:right-8 md:right-12 sm:right-8 hidden sm:block flex, items-center, justify-center, z-10 h-10 w-10  shadow-lg'>
                                    <i className={`fa-solid fa-plus ${radiusRotate===index && 'rotate-90 '} transition-all duration-300 p-3`}></i>
                                </span>
                                <span className={`bg-white hover:bg-black hover:text-white rounded-full  hidden absolute w-7 x.5s:flex items-center justify-center p-5 h-7 transition-all shadow-md duration-300 xs:-right-3 xs:top-32 x.5s:top-32 x.5s:-right-3 ${radiusRotate===index ? 'opacity-1 xl:top-10 lg:top-9 md:top-16 sm:top-12 xl:-right-2 lg:-right-2 md:right-2 sm:-right-1  ':' sm:opacity-0 sm:top-0.5 xl:right-8 lg:right-6 md:right-12 sm:right-8 '}`}>
                                    <i className="fa-brands fa-twitter"></i>
                                </span>
                                <span className={`bg-white hover:bg-black hover:text-white rounded-full hidden absolute w-7 x.5s:flex items-center justify-center p-5 h-7 transition-all shadow-md duration-300 xs:-right-4 xs:top-52 x.5s:top-48 x.5s:-right-2.5 ${radiusRotate===index ? 'opacity-1 xl:top-24 lg:top-20 md:top-32 sm:top-24 lg:mt-2 xl:-right-6 lg:-right-5 md:-right-4 sm:mt-2 md:mt-0 sm:-right-4 ':' sm:opacity-0 sm:top-0.5 xl:right-8 lg:right-6 md:right-12 sm:right-8 '}`}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </span>
                                <span className={`bg-white hover:bg-black hover:text-white rounded-full hidden absolute w-7 x.5s:flex items-center justify-center p-5 h-7 transition-all shadow-md duration-300 xs:right-4 xs:top-72 xs:mt-2 sm:mt-0 x.5s:top-60 x.5s:mt-2 x.5s:right-5 ${radiusRotate===index ? 'opacity-1 xl:top-40 lg:top-32 md:top-48 sm:top-40 lg:mt-2 xl:-right-2 lg:-right-2 md:-right-2 sm:-right-1 ':' sm:opacity-0 sm:top-0.5 xl:right-8 lg:right-6 md:right-12 sm:right-8 '}`}>
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                                <span className={`bg-white hover:bg-black hover:text-white rounded-full hidden absolute w-7 x.5s:flex items-center justify-center p-5 h-7 transition-all shadow-md duration-300 xs:right-20 xs:top-80 xs:mt-8 sm:mt-0 x.5s:top-72 x.5s:right-16 ${radiusRotate===index ? 'opacity-1 xl:top-52 lg:top-44 md:top-60 sm:top-52 md:mt-2 lg:mt-0 xl:right-10 lg:right-8 md:right-10 sm:right-10 ':' sm:opacity-0 sm:top-0.5 xl:right-8 lg:right-6 md:right-12 sm:right-8 '}`}>
                                    <i className="fa-brands fa-instagram "></i>
                                </span>
                                <div className="flex justify-between mt-2 x.5s:hidden">
                                    <i className="fa-brands fa-twitter bg-white bottom-4 relative hover:bg-black hover:text-white rounded-full shadow-lg p-3 transition-all duration-300"></i>
                                    <i className="fa-brands fa-facebook-f bg-white hover:bg-black hover:text-white rounded-full shadow-lg p-3 transition-all duration-300"></i>
                                    <i className="fa-brands fa-linkedin-in bg-white hover:bg-black hover:text-white rounded-full shadow-lg p-3 transition-all duration-300"></i>
                                    <i className="fa-brands fa-instagram bg-white bottom-4 relative hover:bg-black hover:text-white rounded-full shadow-lg p-3 transition-all duration-300"></i>
                                </div>
                            </div>
                            <h3 style={{wordSpacing:5}} className='mt-8 mb-2 text-3xl font-bold hover:text-darkYellow transition-all duration-300 text-lightDark'>{item.name}</h3>
                            <p className='text-61 text-lg '>{item.job}</p>
                            <span className={`radius-rotate block absolute  ${radiusRotate===index?'bg-darkYellow start': 'bg-f7'}`}></span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default OurProff