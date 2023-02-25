import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import './sidebar.css'
const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {setToggle(false)};
    return (
        <>
            {toggle && (
                <motion.div className="portfolio__home-sidebar p-7 w-96 h-screen relative bg-2d " whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                    <div className="portfolio__home-sidebar__img-container ">
                        <img src={images.lightlogo} alt="logo" className=" w-48 " />
                    </div>
                    <ul className='w-full text-white font-bold text-lg my-7 ' >
                        <li className='btn py-3 flex justify-between '><NavLink to={'/'}>Home </NavLink><span> <i className="fa-solid fa-greater-than"></i> </span></li>
                        <li className='btn py-3 flex justify-between '><NavLink to={'Pages'}> <span> Pages</span> <span> <i className="fa-solid fa-greater-than"></i> </span></NavLink></li>
                        <li className='btn py-3 flex justify-between '><NavLink to={'Blog'} > <span> Blog</span> <span> <i className="fa-solid fa-greater-than"></i> </span></NavLink></li>
                        <li className='btn py-3 flex justify-between '><NavLink to={'Portfolio'} > <span> Portfolio</span> <span> <i className="fa-solid fa-greater-than"></i> </span></NavLink></li>
                        <li className='btn py-3 flex justify-between '><NavLink to={'Shop'} > <span> Shop</span> <span> <i className="fa-solid fa-greater-than"></i> </span></NavLink></li>
                        <li className='btn py-3 flex justify-between '><NavLink to={'Contacts'} > <span> Contacts</span> <span> <i className="fa-solid fa-greater-than"></i> </span></NavLink></li>
                    </ul>
                    <div className='portfolio__home-sidebar__search w-full  rounded-md p-2 flex justify-between bg-white' >
                        <input type="text" placeholder='Search ...' className='pl-2 shrink grow' />
                        <i className="fa-solid fa-magnifying-glass bg-2d text-white rounded-md p-4 btn cursor-pointer"></i>
                        <span className=' bg-white' >
                        </span>
                    </div>
                    <span className='absolute ml-4 text-3xl top-16 left-96' onClick={handleClick}>
                        <i className="fa-solid fa-x"></i>
                    </span>
                </motion.div>
            )}
        </>
    )
}

export default Sidebar