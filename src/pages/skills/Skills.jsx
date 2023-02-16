import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { BiChevronsUp } from 'react-icons/bi';
import Header from '../../components/header/Header';
import Landing from '../../components/landing/Landing';
import Navbar from '../../components/navbar/Navbar';
import SkillsSec from '../../components/skills/SkillsSec';
import Exclusive from '../../components/exclusive/Exclusive';
import Counters from '../../components/counters/Counters';
import Projects from '../../components/skillsProjects/Projects';
import Talk from '../../components/talk/Talk'
import { projects } from './data';
const Skills = () => {
    const [arrowScroll, setArrowScroll] = useState(false);
    const [scrolledToCounter, setScrolledToCounter] = useState(false);
    const [scrolledToSkills, setScrolledToSkills] = useState(false);
    setTimeout(() => {
        const skillsSe = document.getElementById("skillsSec").offsetTop;
        const counters = document.getElementById("counters").offsetTop;
        onscroll = () => {
            setArrowScroll(() => window.scrollY > 600 ? true : false);
            if (window.scrollY >= counters-500 ) {
                setScrolledToCounter(true);
            }
            if (window.scrollY >= skillsSe - 300) {
                setScrolledToSkills(true);
            }
        }
    }, 20);
    return (
        <div className='portfolio__skills relative'>
            <AnimatePresence>
                {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 50 }} className='fixed right-4 bottom-8 p-3 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' ><BiChevronsUp /></motion.div>}
            </AnimatePresence>
            <div className='xl:block hidden '>
                <Navbar page='Pages' />
            </div>
            <div className='xl:hidden block' >
                <Header />
            </div>
            <Landing title='Skills' />
            <SkillsSec scrolledToSkills={scrolledToSkills} />
            <Exclusive />
            <Counters scrolledToCounter={scrolledToCounter} />
            <Projects projects={projects} />
            <Talk />
        </div>
    )
}

export default Skills