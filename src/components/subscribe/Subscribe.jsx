import React from 'react'
const Subscribe = () => {
    return (
        <div className='my-20 w-full sm:px-0 px-4'>
            <h3 style={{ wordSpacing: 5 }} className='text-lightDark font-semibold text-5xl tracking-wider text-center'>Subscribe to Our Newsletter</h3>
            <p className="text-61 md:w-1/2 my-6  leading-loose tracking-wide mx-auto text-center">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must look beautiful from any angle.</p>
            <div className='flex justify-center items-center md:w-fit mx-auto relative px-1.5 bg-f7'>
                <input type="text" placeholder='Email...' className="w-8/12, px-4 py-3 focus:outline-none  bg-f7" />
                <i style={{fontSize:"20px"}} className="fa-solid fa-envelope p-2.5 bg-darkYellow rounded cursor-pointer hover:bg-dark transition-all duration-300 text-white"></i>
            </div>
            <p className="text-61 md:w-1/2 mt-4 leading-loose tracking-wide mx-auto text-center"><span className='text-darkYellow'>*</span> Your subscribe us to get noticed when our website is ready</p>
        </div>
    )
}

export default Subscribe