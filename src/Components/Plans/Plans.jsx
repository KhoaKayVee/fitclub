import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import rightArrow from '../../assets/rightArrow.png'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className='plans-header'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* plans card */}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    <span className='plan-name'>{plan.name}</span>
                    <span className='plan-price'>$ {plan.price}</span>

                    <div className='features'>
                        {plan.features.map((feature , i) => (
                            <div className='feature' key={i}>
                                <img src={whiteTick} alt="" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <span className='benefit'>
                        See more benefits
                        <img src={rightArrow} alt="" />
                    </span>

                    <button className='btn'>
                        Join Now
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans