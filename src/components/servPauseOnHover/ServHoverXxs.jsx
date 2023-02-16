import React, { Component } from "react";
import Slider from "react-slick";
import { images } from "../../constants";
import { servPauseOnHover } from "../../pages/services/data";
export default class PauseOnHover extends Component {
render() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    }
    let ar =[images.testimonials_01,images.testimonials_02,images.testimonials_03,images.testimonials_04,images.testimonials_05,images.testimonials_06]
    return (
        <div className="portfolio__services-hover mx-auto md:hidden block container bg-white max-w-full px-4">
            <Slider {...settings} >
                {servPauseOnHover.map((item, index) => {
                    return (
                        <div className="card my-16  hover:-translate-y-6 relative transition-all duration-300" key={index}>
                            <div className="text px-12 py-8 text-lg rounded-lg shadow-xl before:w-10 before:shadow-lg, before:rounded-lg before:bg-white before:absolute relative before:-bottom-4 before:rotate-45 before:h-10">
                                <p className="text-c6 ">{item.date}</p>
                                <p className="text-lg text-dark font-light">{item.text}</p>
                            </div>
                            <div className="flex items-center gap-4 py-12">
                                <img src={ar[index]} alt="h " className="w-20 h-20 rounded-full" />
                                <div>
                                    <p className="text-lightDark font-bold text-xl" style={{wordSpacing:4}}>{item.name}</p>
                                    <p className="text-999 font-semibold text-lg tracking-wide">{item.job}</p>
                                </div>
                            </div>
                        </div>
                    )})}
            </Slider>
        </div>
    )
    }
}