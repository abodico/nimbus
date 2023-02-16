import React, {  useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { images } from '../../constants'
import { AnimatePresence, motion } from 'framer-motion'
import HomeFBox from '../../components/homeFBox/HomeFBox'
import './home.scss'
import { aboutMeIcons, cvAwards, cvInPress } from './data'
import ProgressOne from '../../components/progress/ProgressOne'
import { BiChevronsUp } from 'react-icons/bi' 
import PauseOnHover from '../../components/pauseOnHover/PauseOnHover'
import Talk from '../../components/talk/Talk'
import BlogLg from '../../components/blog/BlogLg'
import Header from '../../components/header/Header'
import Awards from '../../components/awards/Awards'
import Counters from '../../components/counters/Counters'
import Projects from '../../components/homeProjects/Projects'
import { blogData } from './data'
const Home = () => {
  const [arrowScroll, setArrowScroll] = useState(false);
  const [scrolledToSkills, setScrolledToSkills] = useState(false);
  const [scrolledToCounter, setScrolledToCounter] = useState(false);
  setTimeout(() => {
    const skills = document.getElementById("skills").offsetTop;
    const counters = document.getElementById("counters").offsetTop;
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
    <div className='portfolio__home relative' >
      <AnimatePresence>
        {arrowScroll && <motion.div onClick={() => window.scrollTo({ left:0 , top:0, behavior:'smooth' })} initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: 40 }} className='fixed right-4 bottom-8 p-3 bg-e69 text-2xl z-50 cursor-pointer text-white rounded-full' ><BiChevronsUp /></motion.div>}
      </AnimatePresence>
      <Header/>
      <div className="portfolio__home-container relative overflow-hidden ">
        <motion.img initial={{ opacity: 0,x:200 }} whileInView={{ opacity:1,x:0 }} transition={{ duration:0.7,ease:'easeInOut'}}  src={images.home1slider} className='absolute xs:left-2/4 left-10 -z-10 max-w-full ' alt="person" />
        <motion.img initial={{ opacity: 0,x:200 }} whileInView={{ opacity:1,x:0 }} transition={{ duration:0.7,ease:'easeInOut'}} src={images.home1slider04} className='absolute xs:left-2/4 left-10 -z-20 max-w-50 ' alt="dots" />
        <img src={images.ameli} className=' relative xs:top-24 top-44 -rotate-12 xs:max-w-full w-24 xs:-left-28 -left-0 -z-10 ' alt="ameli" />
        <div className="portfolio__home-container__content  relative md:mt-28 xs:mt-16 xxs:mt-64  gap-5 lg:px-8 xs:px-4 xxs:px-2 max-w-full z-10 flex flex-col container mx-auto ">
          <motion.h2 initial={{ opacity: 0,y:-100 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.7,ease:'easeInOut'}} style={{wordSpacing:14}} className="xl:text-7xl lg:text-6xl sm:text-5xl xs:text-3xl  xxs:text-2xl tracking-wide font-bold flex flex-col xxs:w-full gap-4 max-w-full xs:max-w-3xl ">
            <span className='text-dark block '>Hi! I'm Amelia Nimbus</span>
            <span className='text-light-yellow block '>UI/UX Designer</span>
          </motion.h2>
          <p style={{wordSpacing:1}} className="back-color lg:text-lg xs:text-md  lg:max-w-1/2 xxs:max-w-full xxs:text-sm xs:max-w-2/3">Product Designer and Digital Creative Director working in desing field for 13 years so far, specialized in UI/UX, Branding and digital designs.</p>
          <div className="portfolio__home-container__content-contact flex xs:gap-8 xxs:gap-4">
            <div className="portfolio__home-container__content-contact__email">
              <h4 className="block xs:text-xl text-lg text-dark font-semibold ">Email :</h4>
              <p className="back-color xs:text-base xxs:text-xs mt-2">nimbus2000@mail.com</p>
            </div>
            <div className="portfolio__home-container__content-contact__behance">
              <h4 className="block xs:text-xl text-lg text-dark font-semibold ">Behance :</h4>
              <p className="back-color xs:text-base xxs:text-xs mt-2">bahance.net/nimbus2000</p>
            </div>
          </div>
          <div className="portfolio__home-container__content-buttons font-semibold text-white xs:text-lg xs:flex-row xxs:flex-col text-md flex xs:gap-8 gap-4 max-w-full ">
            <button className="btn background-light-yellow hover:bg-darkYellow transition-all py-4 px-8 rounded" >Download CV</button>
            <button className="bg-lightDark py-4 px-8 hover:bg-dark transition-all rounded" >Hire Me Now</button>
          </div>
        </div>
        <div className='portfolio__home-container__elementor container mx-auto relative  ' >
          <img src={images.home022} className='absolute inset-0 max-w-full -top-14 left-2/4 -z-20' alt="block" />
          <div className="portfolio__home-container__elementor-boxes flex-wrap gap-6 px-4 md:mt-96 mt-52 flex justify-evenly">
            <HomeFBox title='UI/UX Designer' class='light-dark-background' text='Creative websites for you.' />
            <HomeFBox title='Photographer' class='background-light-yellow' text='Awesome photo & video.' />
            <HomeFBox title='Freelancer' class='background-back' text='You can hire me now.' />
          </div>
        </div>
        <div  className='portfolio__home-container__about_me container mx-auto relative flex lg:flex-row flex-col items-center justify-between ' >
          <div className='img-holder lg:max-w-2xl max-w-full relative p-3' >
            <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5,ease:'easeInOut'}} src={images.home011} alt="person" className="max-w-full" />
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5,duration:0.4,ease:'easeInOut'}} src={images.home012} alt="text" className="max-w-full absolute inset-0" />
          </div>
          <img src={images.home1slider2} className='absolute -z-40 -top-3/4 -right-3/4 ' alt="home-slider" />
          <div className="portfolio__home-container__about_me-content relative mt-16 xs:px-4 xxs:px-2 lg:max-w-40 max-w-full " >
            <div className="portfolio__home-container__about_me-content__pseudo lg:-rotate-90 absolute mr-4 lg:top-16 lg:-left-20 left-4 -top-6 text-xl flex items-center gap-3">
              <span className='block w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
              <span style={{ color: '#adadad' }} >about me</span>
            </div>
            <h3 className="text-light-dark leading-normal md:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Need Creative Design? I can Help You!</h3>
            <p className="back-color mt-6 leading-8 text-lg">Product Designer and Digital Creative Director working in design field for 13 years so far, specialized in UI/UX, Branding and digital designs. These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful. beautifully, too.</p>
            <h4 className='text-light-dark xs:text-2xl text-xl font-semibold my-7'>You Can Follow Me also Here:</h4>
            <div className="portfolio__home-container__about_me-content__icons flex flex-wrap gap-12">
              {
                aboutMeIcons.map((item,index) => {
                  return (
                    <a href="https://www.google.com" key={index} target='_blank' rel='noreferrer' className={`flex gap-3 items-center text-white hover:text-${item.color}`}>
                      <i className={` ${item.icon} ${item.color==='behance'?'bg-behance hover:text-behance':item.color==='dribbble'?'bg-dribbble hover:text-dribbble':'bg-darkYellow hover:text-darkYellow '}  xs:py-2 xs:px-3 xs:text-xl py-1 transition-all duration-300 ease-linear px-2 text-lg rounded-lg`} ></i>
                      <span className={`${item.color==='behance'?'text-behance':item.color==='dribbble'?'text-dribbble':'text-darkYellow'}  hover:text-black font-semibold transition-all duration-300 ease-linear`}>{item.text}</span>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div id='skills' className='portfolio__home-container__my_skills container mt-16 mx-auto flex lg:flex-row flex-col lg:gap-0 gap-8 xxs:px-0 xs:px-10' >
          <div className="portfolio__home-container__my_skills-content flex-1 lg:max-w-1/2 max-w-full lg:px-8 relative ">
            <div className="portfolio__home-container__my_skills-content__pseudo md:-rotate-90  absolute md:-left-24 mr-4 md:top-20 -top-4 left-0 text-xl  flex items-center gap-3">
              <span className='block w-16 background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
              <span style={{ color: '#adadad' }} >about me</span>
            </div>
            <h3 className="text-light-dark leading-normal xs:text-5xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >What My Design Skills Included</h3>
            <p className="back-color mt-6 leading-8 text-lg">These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful.</p>
            <div className="portfolio__home-container__my_skills-content__progress mt-6">
              <ProgressOne bgcolor="orange" progress={scrolledToSkills? 80 : 0}  time={1} item='PHOTOSHOP'  height={4} />
            </div>
            <div className="portfolio__home-container__my_skills-content__progress mt-6">
              <ProgressOne bgcolor="orange" progress={ scrolledToSkills? 90 :0 } time={1} item='ILLUSTRATOR' height={4} />
            </div>
            <div className="portfolio__home-container__my_skills-content__progress mt-6">
              <ProgressOne bgcolor="orange" progress={scrolledToSkills?70 :0} time={1} item='SKETCH' height={4} />
            </div>
          </div>
          <div className="portfolio__home-container__my_skills-cards md:mt-4 mt-10 lg:max-w-1/2 max-w-full flex md:flex-row flex-col md:gap-2 gap-8">
            <div className="portfolio__home-container__my_skills-cards__half_one md:w-1/2 w-full relative md:-top-8  flex flex-col gap-8 ">
              <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl overflow-hidden rounded-xl ">
                <div className='w-full h-full rounded-xl px-4 py-8'>
                  <span className=' p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl  '>
                    <i className="fa-solid fa-display "></i>
                  </span>
                  <h4 className='text-4xl font-bold text-23 my-6' >UI/UX Design</h4>
                  <p className='back-color text-xl'>We believe direct collaboration with our clients is essential to bringing unique</p>
                </div >
              </div>
              <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl  overflow-hidden  rounded-xl ">
                <div className='w-full h-full rounded-xl px-4 py-8'>
                  <span className='p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl' >
                    <i className="fa-solid fa-person-walking"></i>
                  </span>
                  <h4 className='text-4xl font-bold text-23 my-6' >Motion Design</h4>
                  <p className='back-color text-xl'>We believe direct collaboration with our clients is essential to bringing unique</p>
                </div >
              </div>
            </div>
            <div className="portfolio__home-container__my_skills-cards__half_two md:w-1/2 flex flex-col gap-8 ">
              <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl  overflow-hidden  rounded-xl ">
                <div className='w-full h-full rounded-xl px-4 py-8'>
                  <span className='p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl' >
                    <i className="fa-regular fa-image"></i>
                  </span>
                  <h4 className='text-4xl font-bold text-23 my-6'>Graphic Design</h4>
                  <p className='back-color text-xl '>We believe direct collaboration with our clients is essential to bringing unique</p>
                </div >
              </div>
              <div className="portfolio__home-container__my_skills-cards__half_one-box md:w-11/12 mx-auto text-center h-auto shadow-2xl  overflow-hidden  rounded-xl ">
                <div className='w-full h-full rounded-xl px-4 py-8'>
                  <span className='p-5 text-center mx-auto w-20  block h-20 rounded-full bg-lightDark text-white text-4xl' >
                    <i className="fa-solid fa-paintbrush"></i>
                  </span>
                  <h4 className='text-4xl font-bold text-23 my-6' >Photo Retouch</h4>
                  <p className='back-color text-xl' >We believe direct collaboration with our clients is essential to bringing unique</p>
                </div >
              </div>
            </div>
          </div>
        </div>
          <Counters scrolledToCounter={scrolledToCounter}/>
          <Projects/>
        <div className="portfolio__home-container__cv mx-auto max-w-full my-20 ">
          <div className="portfolio__home-container__cv-content flex lg:flex-row max-w-full flex-col container mx-auto xxs:p-2 md:p-6 sm:p-12 lg:p-0">
            <div className="portfolio__home-container__cv-content__text lg:w-5/12 w-full lg:mb-0 mb-20 relative lg:ml-16 lg:p-0 ">
              <div className="portfolio__home-container__about_me-content__pseudo lg:-rotate-90 absolute lg:-left-32 lg:top-24 -top-6 md:left-6 text-xl  flex items-center gap-3">
                <span className='block w-28  background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                <span style={{ color: '#adadad' }} >my skills</span>
              </div>
              <h3 className="text-light-dark leading-normal md:text-4xl text-3xl tracking-wide font-semibold" style={{ wordSpacing: '8px' }} >Honours & Awards<br className='hidden lg:block' /> What I Have</h3>
              <p className="back-color mt-6 leading-8 text-lg  mb-8 ">Since 2015 I have been a visionary and a reliable software engineering partner for world-class brands.</p>
              <div className="lists flex md:flex-row flex-col justify-between">
                <ul className=' flex flex-col gap-3 back-color mb-8 md:mb-0 list-inside pl-3 ' >
                  <h3 className='font-bold text-2xl text-light-dark mb-4 ' style={{ wordSpacing: '8px' }}>In Press</h3>
                  {
                    cvInPress.map((item, index) => {
                      return (
                        <li key={index} className='before:bg-lightYellow before:block before:w-1 before:inset-0 before:top-1/3 before:absolute before:-left-3 relative before:h-1 before:rounded-full'>{item}</li>
                      );
                    })
                  }
                </ul>
                <ul className=' flex flex-col gap-3 back-color  list-inside pl-3 ' >
                  <h3 className='font-bold text-2xl text-light-dark mb-4 ' style={{ wordSpacing: '8px' }}>Awards</h3>
                  {
                    cvAwards.map((item, index) => {
                      return (
                        <li key={index} className='before:bg-lightYellow before:block before:w-1 before:inset-0 before:top-1/3 before:absolute before:-left-3 relative before:h-1 before:rounded-full '>{item}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="portfolio__home-container__cv-content__image relative ">
              <img src={images.person} alt="person" className="max-w-full relative lg:left-36" />
              <img src={images.my} alt="my" className="max-w-full absolute top-0 lg:left-36" />
              <img src={images.cv} alt="cv" className="max-w-full absolute top-0 lg:-right-36 " />
              <img src={images.dots} alt="dots" className="max-w-full absolute bottom-0 left-36 -z-10 " />
            </div>
          </div>
        </div>
        <div className="portfolio__home-container__brands my-16">
          <h3 className='text-light-dark leading-normal text-4xl tracking-wide font-semibold text-center my-8' >Brands What I've Worked With</h3>
          <PauseOnHover />
          <button className="background-dark-yellow hover:bg-e69 transition-all ease-linear mx-auto block mt-8 py-4 px-12 text-white tracking-wide font-bold rounded" >Hire Me</button>
        </div>
        <Awards/>
        <div className="portfolio__home-container__blog my-16">
          <div className="portfolio__home-container__blog-upside w-full xxs:max-w-full container md:px-16 px-8 mx-auto relative flex justify-between sm:flex-row flex-col ">
            <img src={images.blogging} alt="blogging" className="max-w-full absolute  -z-10 top-28 w-5/12 -right-24" />
            <div className="portfolio__home-container__blog-upside__text  md:max-w-2/3 sm:max-w-3/4 relative ">
              <div className="portfolio__home-container__about_me-content__pseudo md:-rotate-90 absolute  md:-left-28 md:top-20 -top-4 left-0 text-xl flex items-center gap-3">
                <span className='block w-24  background-back h-px' style={{ backgroundColor: '#adadad' }}></span>
                <span style={{ color: '#adadad' }} >my blog</span>
              </div>
              <h3 style={{ wordSpacing: 7 }} className='text-light-dark leading-normal text-4xl tracking-wide mb-4 font-semibold' >Read My Own<br />Blog. Be Trendy</h3>
              <p className='back-color leading-9 text-lg mb-8 w-full ' >We met years ago at an advertising agency where we learned a ton of dos and some don'ts. There were project deadlines, happy hours, client proposals and a few sparks flying.</p>
            </div>
            <button className="background-dark-yellow sm:mb-0 mb-4 xxs:w-2/3 lg:w-auto block mt-8 h-fit py-4 md:px-12 px-3 text-white tracking-wide font-bold rounded" >View All</button>
          </div>
          <div className="portfolio__home-container__blog-cards container mx-auto flex-wrap md:justify-evenly lg:flex-nowrap flex gap-16 lg:px-16 px-8 max-w-full ">
            <BlogLg blogData={blogData} classes='md:max-w-40 lg:max-w-1/3'/>
          </div>
        </div>
        <div className='portfolio__home-talk container mx-auto mt-8 lg:p-16 xs:p-4 max-w-full rounded-lg overflow-hidden' >
          <Talk/>
        </div>
      </div>
    </div>
  )
};
export default Home