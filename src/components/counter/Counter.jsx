import React from 'react'
import CountUp from 'react-countup';
let Counter = ({ goal, time, classes }) => {
    //npm i react-countup
    return (
        <div className={classes}>
            <CountUp end={goal} duration={time} />
        </div>
    )
}

export default Counter