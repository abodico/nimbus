import  { Component } from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { data } from '../../pages/home/data';
export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: true
        }
        return (
            <div style={{width:540}} className='container mx-auto xs:pl-14 xs:block sm:hidden hidden'>
                <Slider {...settings}>
                    {
                        data.map((ele,index) => {
                            return (
                                <div key={index} className='overflow-hidden mx-auto w-fit rounded-lg shadow-lg ml-16' >
                                    <a href="#">
                                        <motion.div whileHover={{ y: -200 }} transition={{duration:.2}} className='  relative '>
                                            <img src={ele.first} alt="partners1" />
                                            <img src={ele.hover} alt="partners1" className='absolute inset-0 top-full ' />
                                        </motion.div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
}