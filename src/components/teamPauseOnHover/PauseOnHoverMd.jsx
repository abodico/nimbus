import  { Component } from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { data } from '../../pages/home/data';
export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: true
        }
        return (
            <div className='container mx-auto md:block lg:hidden hidden'>
                <Slider {...settings}>
                    {
                        data.map((ele,index) => {
                            return (
                                <div key={index} className='overflow-y-hidden rounded-lg shadow-lg  w-11/12 mx-4' >
                                    <a href="#">
                                        <motion.div whileHover={{ y: -173 }} transition={{duration:.2}} className='relative '>
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