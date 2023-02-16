import React from 'react'
import { motion } from 'framer-motion';
import { hover } from '../../pages/our team/data';
const PauseOnHoverXl = () => {
    let arr = [];
    for (let i = 0; i < hover.length - 1; i++)arr[i] = hover[i];
    return (
        <div className='container mx-auto xl:flex hidden py-16'>
            {
                arr.map((ele, index) => {
                    return (
                        <div key={index} className='overflow-y-hidden rounded-lg shadow-lg  w-11/12 mx-4' >
                            <a href="#a">
                                <motion.div whileHover={{ y: -135 }} transition={{ duration: .2 }} className='relative '>
                                    <img src={ele.first} alt="partners1" />
                                    <img src={ele.hover} alt="partners1" className='absolute inset-0 top-full' />
                                </motion.div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PauseOnHoverXl