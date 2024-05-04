import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import { motion } from "framer-motion"

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
  return (
    <div className='hero'>

        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
                <motion.div
                initial={{left: '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your </span>
                </div>
                <div>
                    <span>IDEAL BODY</span>
                </div>
            </div>
                <div className='hero-desc'>
                    <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>     
                </div>
            

            <div className="figures">
                <div className='figures-container'>
                    <div className='figures-item'>
                        <span>+ </span>
                        <span>140</span>
                        <p>EXPERT COACHES</p>
                    </div>
                    <div className='figures-item'>
                        <span>+ </span>
                        <span>978</span>
                        <p>MEMBERS JOINED</p>
                    </div>
                    <div className='figures-item'>
                        <span>+ </span>
                        <span>50</span>
                        <p>FITNESS PROGRAMS</p>
                    </div>
                </div>
            </div>

            <div className="figures-btns">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>

        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div 
            initial={{right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className="hero-image" />
            <motion.img 
            initial={{right: "11rem"}}
            whileInView={{right: "20rem"}}
            transition={transition}
            src={hero_image_back} 
            alt="" 
            className="hero-image-back" />

            <motion.div 
            initial={{right: "37rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                  <span>Calories burned</span> <br />
                  <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero