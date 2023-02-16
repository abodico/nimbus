import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react'
import { BiChevronsUp } from 'react-icons/bi';
import Header from '../../components/header/Header';
import Projects from '../../components/skillsProjects/Projects';
import Landing from '../../components/landing/Landing';
import Navbar from '../../components/navbar/Navbar';
import { projects } from './data';
import Talk from '../../components/talk/Talk';
const PortfolioGrid = () => {
    const [arrowScroll, setArrowScroll] = useState(false);
    const [count, setCount] = useState(0)
    const [data, setData] = useState(projects.slice(0,9))
    onscroll = () => {
        setArrowScroll(() => window.scrollY > 600 ? true : false);
    };
    const [buttonContent, setButtonContent] = useState('Load More');
    // const [buttonData, setButtonData] = useState(<Projects projects={data} />);
    // useEffect(() => {
    //     // setData(projects);
    //     setButtonData(<Projects projects={projects} />)
    // }, [count])
    
    return (
        <div className='portfolio__portfolio-grid'>
            <AnimatePresence>
                {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 50 }} className='fixed right-4 bottom-8 p-3 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' ><BiChevronsUp /></motion.div>}
            </AnimatePresence>
            <div className='xl:block hidden '>
                <Navbar  />
            </div>
            <div className='xl:hidden block' >
                <Header />
            </div>
            <Landing title='Portfolio Grid' />
            <div className='py-16'>
                <div className={`${count===1&&'hidden'}`}>
                    <Projects projects={data} />
                </div>
                <div className={`${count===0&&'hidden'}`}>
                    <Projects projects={projects} />
                </div>
                <button
                    onClick={() => {
                        setButtonContent(<i className="fa-solid fa-arrows-rotate animate-spin"></i>)
                        setTimeout(() => {
                            setButtonContent(' ');
                            setCount((prev)=>prev+1);
                            setData(projects)
                        }, 2500);
                    }}
                    className={`btn bg-darkYellow outline-none hover:bg-e69 w-40 transition-all duration-300 py-4 px-8 rounded text-white mx-auto ${buttonContent===' '?'hidden':'block'} font-semibold `} ><span>{buttonContent}</span></button>
            </div>
            <Talk />
        </div>
    )
}

export default PortfolioGrid