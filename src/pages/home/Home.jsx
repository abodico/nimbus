import React, {  useRef, useState } from 'react'
import { images } from '../../constants'
import { AnimatePresence, motion } from 'framer-motion'
import HomeFBox from '../../components/homeFBox/HomeFBox'
import './home.css'
import { aboutMeIcons, cvAwards, cvInPress,blogData,skillsCard } from './data'
import ProgressOne from '../../components/progress/ProgressOne'
import PauseOnHover from '../../components/pauseOnHover/PauseOnHover'
import Footer from '../../components/footer/Footer'
import BlogLg from '../../components/blog/BlogLg'
import Header from '../../components/header/Header'
import Awards from '../../components/awards/Awards'
import Counters from '../../components/counters/Counters'
import Projects from '../../components/homeProjects/Projects'
const Home = () => {
  const [arrowScroll, setArrowScroll] = useState(false);
  const [hovered, setHovered] = useState({icon:-1,skills:-1})
  //
  const [scrolledToSkills, setScrolledToSkills] = useState(false);
  const [scrolledToCounter, setScrolledToCounter] = useState(false);
  //
  const skillsRef = useRef();
  const countersRef = useRef();
  setTimeout(() => {
    const skills = skillsRef.current.offsetTop;
    const counters = countersRef.current.offsetTop;
    onscroll = () => {
      if (window.scrollY >= skills-300) {
        setScrolledToSkills(true);
      }
      if (window.scrollY >= counters - 500) {
        setScrolledToCounter(true);
      }
      setArrowScroll(()=>window.scrollY > 600 ? true : false );
    }
  }, 20);
  return (
    <div className='relative mx-auto overflow-hidden' >
      {/* side-arrow */}
      <AnimatePresence>
        {arrowScroll && <motion.div onClick={() => window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })} initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 40 }} className='fixed right-4 bottom-8 flex items-center justify-center h-12 w-12 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' >
          <i className="fa-solid fa-chevron-up "></i>
        </motion.div>}
      </AnimatePresence>
      {/* header */}
      <Header />
      {/* landing */}
      <div className="relative mx-auto container ">
        <motion.img initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} src={images.home1slider} className='absolute xs:left-2/4 left-10 -z-10 max-w-full ' loading='lazy' alt="person" />
        <motion.img initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} src={images.home1slider04} className='absolute xs:left-2/4 left-10 -z-20 max-w-50 ' loading='lazy' alt="dots" />
        <img src={images.ameli} className=' relative xs:top-24 top-44 -rotate-12 w-24 xs:-left-28 -left-0 -z-10 ' alt="ameli" />
        <div className="relative md:mt-28 xs:mt-16 xxs:mt-64  gap-5 lg:px-8 xs:px-4 xxs:px-2 z-10 flex flex-col  ">
          <motion.h2 initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeInOut' }} style={{ wordSpacing: 14 }} className="xl:text-7xl lg:text-6xl sm:text-5xl xs:text-3xl  xxs:text-2xl tracking-wide font-bold flex flex-col xxs:w-full gap-4 max-w-full xs:max-w-3xl ">
            <span className='text-dark block '>Hi! I'm Amelia Nimbus</span>
            <span className='text-lightYellow block '>UI/UX Designer</span>
          </motion.h2>
          <p style={{ wordSpacing: 1 }} className="text-61 lg:text-lg xs:text-md lg:max-w-1/2 xxs:max-w-full xxs:text-sm xs:max-w-2/3">Product Designer and Digital Creative Director working in desing field for 13 years so far, specialized in UI/UX, Branding and digital designs.</p>
          <div className=" flex xs:gap-8 xxs:gap-4">
            <div>
              <h4 className="block xs:text-xl text-lg text-dark font-semibold ">Email :</h4>
              <p className="text-61 xs:text-base xxs:text-xs mt-2">nimbus2000@mail.com</p>
            </div>
            <div>
              <h4 className="block xs:text-xl text-lg text-dark font-semibold ">Behance :</h4>
              <p className="text-61 xs:text-base xxs:text-xs mt-2">bahance.net/nimbus2000</p>
            </div>
          </div>
          <div className="font-semibold text-white xs:text-lg xs:flex-row xxs:flex-col text-md flex xs:gap-8 gap-4 max-w-full ">
            <button className="btn bg-lightYellow  hover:bg-darkYellow transition-all py-4 px-8 rounded" >Download CV</button>
            <button className="bg-lightDark py-4 px-8 hover:bg-dark transition-all rounded" >Hire Me Now</button>
          </div>
        </div>
        {/* elementor */}
        <div className='container relative  ' >
          <img src={images.home022} className='absolute inset-0 max-w-full -top-14 left-2/4 -z-20' alt="block" />
          <div className="flex-wrap gap-6 px-4 md:mt-96 mt-52 flex justify-evenly">
            <HomeFBox title='UI/UX Designer' class='bg-lightDark' text='Creative websites for you.' />
            <HomeFBox title='Photographer' class='bg-lightYellow ' text='Awesome photo & video.' />
            <HomeFBox title='Freelancer' class='bg-61 ' text='You can hire me now.' />
          </div>
        </div>
        {/* about-me */}
        <div className='container relative flex lg:flex-row flex-col items-center justify-between ' >
          <div className='img-holder lg:max-w-2xl max-w-full relative p-3' >
            <motion.img initial={{ scale: 0.3 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }} src={images.home011} alt="person" className="max-w-full" />
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }} src={images.home012} alt="text" className="max-w-full absolute inset-0" />
          </div>
          <img src={images.home1slider2} className='absolute -z-40 -top-3/4 -right-3/4 ' alt="home-slider" />
          <div className="relative mt-16 xs:px-4 xxs:px-2 lg:max-w-40 max-w-full " >
            <div className="lg:-rotate-90 absolute mr-4 lg:top-16 lg:-left-24 left-4 -top-6 text-xl flex items-center gap-3">
              <span className='block w-20 h-px' style={{ backgroundColor: '#adadad' }}></span>
              <span style={{ color: '#adadad' }} >about me</span>
            </div>
            <h3 className="text-lightDark leading-normal md:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Need Creative Design? I can Help You!</h3>
            <p className="text-61 mt-6 leading-8 text-lg">Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful. beautifully, too.</p>
            <h4 className='text-lightDark xs:text-2xl text-xl font-semibold my-7'>You Can Follow Me also Here:</h4>
            <div className="flex flex-wrap gap-12">
              {
                aboutMeIcons.map((item, index) => {
                  return (
                    <a
                      onMouseEnter={() => setHovered((prev) => { return ({ prev, icon: index }) })}
                      onMouseLeave={() => setHovered((prev) => { return ({ prev, icon: -1 }) })}
                      href="https://www.google.com"
                      key={index} target='_blank'
                      rel='noreferrer'
                      className={`flex gap-3 items-center text-white hover:text-${item.color}`}>
                      <i className={` ${item.icon}  ${hovered.icon === index ? `${item.color} bg-borders ` : ` text-borders ${item.bg}`} xs:py-2 xs:px-3 xs:text-xl py-1 transition-all duration-300 ease-linear px-2 text-lg rounded-lg`} ></i>
                      <span className={`${hovered.icon === index ? 'text-black' : `${item.color}`} hover:text-black font-semibold transition-all duration-300 ease-linear`}>{item.text}</span>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/* my-skills */}
        <div ref={skillsRef} className='mt-16 container flex lg:flex-row flex-col lg:gap-0 gap-8 ,xxs:px-0 px-4 xs:px-10' >
          <div className="flex-1 lg:max-w-1/2 max-w-full lg:px-8 relative ">
            <div className="md:-rotate-90  absolute md:-left-24 mr-4 md:top-20 -top-4 left-0 text-xl  flex items-center gap-3">
              <span className='block w-20 h-px' style={{ backgroundColor: '#adadad' }}></span>
              <span style={{ color: '#adadad' }} >my skills</span>
            </div>
            <h3 className="text-lightDark leading-normal xs:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >What My Design Skills Included</h3>
            <p className="text-61 mt-6 leading-8 text-lg">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            <div className=" mt-6">
              <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 80 : 0} time={1} item='PHOTOSHOP' height={4} />
            </div>
            <div className=" mt-6">
              <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 90 : 0} time={1} item='ILLUSTRATOR' height={4} />
            </div>
            <div className=" mt-6">
              <ProgressOne bgcolor="orange" progress={scrolledToSkills ? 70 : 0} time={1} item='SKETCH' height={4} />
            </div>
          </div>
          <div className="md:mt-4 mt-10 lg:max-w-1/2 max-w-full flex flex-wrap gap-6">
            {skillsCard.map((item, index) =>
              <div
                key={index}
                onMouseEnter={() => setHovered((prev) => { return ({ prev, skills: index }) })}
                onMouseLeave={() => setHovered((prev) => { return ({ prev, skills: -1 }) })}
                className={` ${(index === 0 || index === 2) && 'lg:-mt-6'} ${hovered.skills === index && 'bg-stages_background'} max-h-64 transition-all duration-500 ease-in-out md:w-5/12 mx-auto text-center shadow-2xl overflow-hidden rounded-xl`}>
                <div className={`transition-all duration-500 ease-in-out w-full h-full rounded-xl px-1 py-8 ${hovered.skills === index ? '-translate-y-20 bg-transparent ' : 'bg-white'} `}>
                  <span className={`p-5 text-center mx-auto w-20 transition-all duration-300 ease-in-out block h-20 rounded-full bg-lightDark text-white text-4xl ${hovered.skills === index && 'opacity-0'}`}>
                    <i className={item.icon}></i>
                  </span>
                  <h4 className={`transition-all duration-500 ease-in-out text-2xl tracking-wider font-bold my-6 ${hovered.skills === index ? 'text-white' : 'text-23'}`} >{item.title}</h4>
                  <p className={`transition-all duration-500 ease-in-out tracking-wide text-c6 ${hovered.skills === index ? 'opacity-100' : 'opacity-0'} `}>{item.text}</p>
                </div >
              </div>
            )
            }
          </div>
        </div>
        {/* counters */}
        <div ref={countersRef} className="container" >
          <Counters scrolledToCounter={scrolledToCounter} />
        </div>
        {/* projects */}
        <Projects />
        {/* my-cv */}
        <div className=" my-20 ">
          <div className=" flex lg:flex-row max-w-full flex-col xxs:p-2 md:p-6 sm:p-12 lg:p-0">
            <div className="lg:w-5/12 w-full lg:mb-0 mb-20 relative lg:ml-16 lg:p-0 ">
              <div className="lg:-rotate-90 absolute lg:-left-28 lg:top-20 -top-6 md:left-6 text-xl  flex items-center gap-3">
                <span className='block w-20 h-px' style={{ backgroundColor: '#adadad' }}></span>
                <span style={{ color: '#adadad' }} >my skills</span>
              </div>
              <h3 className="text-lightDark leading-normal md:text-4xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Honours & Awards<br className='hidden lg:block' /> What I Have</h3>
              <p className="text-61 mt-6 leading-8 text-lg  mb-8 ">Since 2015 I have been a visionary and a reliable software engineering partner for world-class brands.</p>
              <div className="lists flex md:flex-row flex-col justify-between">
                <ul className=' flex flex-col gap-3 mb-8 md:mb-0 list-inside pl-3 ' >
                  <h3 className='font-bold text-2xl text-lightDark mb-4 ' style={{ wordSpacing: '8px' }}>In Press</h3>
                  {
                    cvInPress.map((item, index) => {
                      return (
                        <li key={index} className='text-61 before:bg-lightYellow before:block before:w-1 before:inset-0 before:top-1/3 before:absolute before:-left-3 relative before:h-1 before:rounded-full'>{item}</li>
                      );
                    })
                  }
                </ul>
                <ul className=' flex flex-col gap-3 list-inside pl-3' >
                  <h3 className='font-bold text-2xl text-lightDark mb-4 ' style={{ wordSpacing: '8px' }}>Awards</h3>
                  {
                    cvAwards.map((item, index) => {
                      return (
                        <li key={index} className=' text-61 before:bg-lightYellow before:block before:w-1 before:inset-0 before:top-1/3 before:absolute before:-left-3 relative before:h-1 before:rounded-full '>{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="relative">
              <img src={images.person} alt="person" className="max-w-full relative lg:left-36" />
              <img src={images.my} alt="my" className="max-w-full absolute top-0 lg:left-36" />
              <img src={images.cv} alt="cv" className="max-w-full absolute top-0 lg:-right-36 " />
              <img src={images.dots} alt="dots" className="max-w-full absolute bottom-0 left-36 -z-10 " />
            </div>
          </div>
        </div>
        {/* brands */}
        <div className=" my-16">
          <h3 className='text-lightDark leading-normal text-4xl tracking-wide font-semibold text-center my-8' >Brands What I've Worked With</h3>
          <PauseOnHover />
          <button className="bg-darkYellow  hover:bg-e69 transition-all ease-linear mx-auto block mt-8 py-4 px-12 text-white tracking-wide font-bold rounded" >Hire Me</button>
        </div>
        {/* Awards */}
        <Awards />
        {/* blog */}
        <div className="my-16">
          <div className="w-full xxs:max-w-full container md:px-16 px-8 relative flex justify-between sm:flex-row flex-col ">
            <img src={images.blogging} alt="blogging" className="max-w-full absolute  -z-10 top-28 w-5/12 -right-24" />
            <div className="md:max-w-2/3 sm:max-w-3/4 relative ">
              <div className="md:-rotate-90 absolute  md:-left-28 md:top-20 -top-4 left-0 text-xl flex items-center gap-3">
                <span className='block w-24  bg-61 h-px' style={{ backgroundColor: '#adadad' }}></span>
                <span style={{ color: '#adadad' }} >my blog</span>
              </div>
              <h3 style={{ wordSpacing: 7 }} className='text-lightDark leading-normal text-4xl tracking-wide mb-4 font-semibold' >Read My Own<br />Blog. Be Trendy</h3>
              <p className='text-61 leading-9 text-lg mb-8 w-full ' >We met years ago at an advertising agency where we learned a ton of dos and some don'ts. There were project deadlines, happy hours, client proposals and a few sparks flying.</p>
            </div>
            <button className="bg-darkYellow  sm:mb-0 mb-4 xxs:w-2/3 lg:w-auto block mt-8 h-fit py-4 md:px-12 px-3 text-white tracking-wide font-bold rounded" >View All</button>
          </div>
          <div className="container flex-wrap md:justify-evenly lg:flex-nowrap flex gap-16 lg:px-16 px-8 max-w-full ">
            <BlogLg blogData={blogData} classes='md:max-w-40 lg:max-w-1/3' />
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
};
export default Home