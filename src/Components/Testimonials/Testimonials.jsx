import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'

const Testimonials = () => {
    const transition = {type : 'spring', duration: "3"};
    const [selected , setSeclected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className='testimonials'>
        <div className="left-t">
            <span>TESTIMONIALS</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span className='left-t-about'>SAY ABOUT US</span>
            <span className='left-t-review'>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color : "var(--orange)"}}>
                    {testimonialsData[selected].name}  
                </span> {" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img 
                    onClick={ () => { 
                        selected === 0 ? setSeclected(tLength - 1 ) : setSeclected(((prev) => prev - 1));
                    } }
                    src={leftArrow} 
                    alt="" 
                />
                <img 
                    onClick={ () => {
                        selected === tLength - 1 ? setSeclected(0) : setSeclected((prev) => prev + 1);
                    }}
                    src={rightArrow} 
                    alt="" 
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials