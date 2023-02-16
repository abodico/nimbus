import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { images } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import './sidebar.scss'
const Sidebar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {setToggle(false)};
    return (
        <>
            {toggle && (
                <motion.div className="portfolio__home-sidebar p-7 w-96 h-screen relative  " whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                    <div className="portfolio__home-sidebar__img-container ">
                        <img src={images.lightlogo} alt="logo" className=" w-48 " />
                    </div>
                    <ul className='w-full text-white font-bold text-lg my-7 ' >
                        <li><NavLink to={'/'} className='btn py-3 flex justify-between ' ><span>Home</span> <span> <FontAwesomeIcon icon={faGreaterThan} /> </span></NavLink></li>
                        <li><NavLink to={'Pages'} className='btn py-3 flex justify-between' > <span> Pages</span> <span> <FontAwesomeIcon icon={faGreaterThan} /> </span></NavLink></li>
                        <li><NavLink to={'Blog'} className='btn py-3 flex justify-between' > <span> Blog</span> <span> <FontAwesomeIcon icon={faGreaterThan} /> </span></NavLink></li>
                        <li><NavLink to={'Portfolio'} className='btn py-3 flex justify-between' > <span> Portfolio</span> <span> <FontAwesomeIcon icon={faGreaterThan} /> </span></NavLink></li>
                        <li><NavLink to={'Shop'} className='btn py-3 flex justify-between' > <span> Shop</span> <span> <FontAwesomeIcon icon={faGreaterThan} /> </span></NavLink></li>
                        <li><NavLink to={'Contacts'} className='btn py-3 flex justify-between' > <span> Contacts</span> <span> <FontAwesomeIcon icon={faGreaterThan} /> </span></NavLink></li>
                    </ul>
                    <div className='portfolio__home-sidebar__search w-full  rounded-md p-2 flex justify-between bg-white' >
                        <input type="text" placeholder='Search ...' className='pl-2 shrink grow' />
                        <FontAwesomeIcon icon={faMagnifyingGlass} className=' back text-white rounded-md p-4 btn cursor-pointer ' />
                        <span className=' bg-white' >
                        </span>
                    </div>
                    <span className='absolute ml-4 text-3xl top-16 left-96' onClick={handleClick}>
                        <FontAwesomeIcon icon={faX} />
                    </span>
                </motion.div>
            )}
        </>
    )
}

export default Sidebar