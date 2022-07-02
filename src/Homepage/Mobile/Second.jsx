import './Second.css'
import first from '../../img/Frame 36641.png'
import second from '../../img/Frame 36641 (1).png'
import third from '../../img/Frame 36641 (2).png'
import blueArrow from '../../img/arrowblue.svg'
import redArrow from '../../img/arrowpink.svg'

import React from 'react'

const Second = () => {
    return (
        <div>
            <div className='secondMain'>
                <h4 className='whatWeDo'>What we do</h4>
                <div className='buyProps'>
                    <img src={first} alt="" />
                    <h4>Buy Properties</h4>
                    <p>Find real estate properties for sale with Haven. Browse the website’s database to choose a property that best fit your taste</p>
                    <span>Discover properties <img src={blueArrow} alt="" /></span>
                </div>
                <div className='buyProps'>
                    <img src={second} alt="" />
                    <h4>Sell Properties</h4>
                    <p>Place your real estate properties for sale here and we will connect with thousands of customers looking for properties</p>
                    <span>Sell properties now<img src={blueArrow} alt="" /></span>
                </div>
                <div style={{ borderColor: "#BF5E65" }} className='buyProps'>
                    <img src={third} alt="" />
                    <h4>Become an agent</h4>
                    <p>Place your real estate properties for sale here and we will connect with thousands of customers looking for properties</p>
                    <span style={{ color: '#BF5E65' }}>Join us now<img src={redArrow} alt="" /></span>
                </div>
            </div>
        </div>
    )
}

export default Second