import './Hero.css'
import heroImage from "../../img/heroImage.svg"
import mobileHero from "../../img/mobileHero.png"
import search from "../../img/Search.svg"
import down from "../../img/Icon.svg"
import { useState } from 'react'
import { Slider } from '@mui/material'
import { propList } from '../../utils/propertyList'
import locations from '../../utils/locations'
import Header from "./Header"
import { clearChecked, filterLocations, handleSlide, showDropDown, valueText } from '../../utils/functions'
import { sliderHomeStyle } from '../../constants/sliderStyle'


const Hero = () => {
    const [value2, setValue2] = useState([25, 75]);

    const handleChange2 = (event, newValue, activeThumb) => {
        handleSlide(event, newValue, activeThumb, setValue2)
    }

    return (
        <div className='theMainHero'>
            <div className='mainHero'>
                <Header />
                <div className='heroSecond'>
                    <h1>Find Your Home, Your Safe <span>Haven.</span></h1>
                    <p>Haven is Nigeria's leading online real estate platform which eases the stress of finding properties online</p>
                </div>
                <div className='heroSearch'>
                    <div className='heroInput'>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className='heroSearchButton'>
                        <div className='homeLocationSearch'>
                            <p onClick={() => showDropDown("homeLocationSearch")}>Location <img src={down} alt="" /></p>
                            <div id='homeLocationSearch'>
                                <div>
                                    <h5>Location <span onClick={() => clearChecked("locationList")}>clear</span></h5>
                                    <div><img src={search} alt="" /> <input placeholder='Search...' onChange={filterLocations} type="text" /></div>
                                </div>
                                <ul id='locationList'>
                                    {
                                        locations.map((locate, i) => (
                                            <li key={i} className={`${locate.toLowerCase()}`}>
                                                <input id={locate} type="checkbox" />
                                                <label htmlFor={locate}>{locate}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='homePropertySearch'>
                            <p onClick={() => showDropDown("homePropertySearch")}>Property type <img src={down} alt="" /></p>
                            <div id='homePropertySearch'>
                                <div>
                                    <h5>Property type <span onClick={() => clearChecked("propertyList")}>clear</span></h5>
                                </div>
                                <ul id='propertyList'>
                                    {
                                        propList.map((property, i) => (
                                            <li key={i}>
                                                <input id={property} type="checkbox" />
                                                <label htmlFor={property}>{property}</label>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className='homePriceRange'>
                            <p onClick={() => showDropDown("homePriceRange")}>Price range <img src={down} alt="" /></p>
                            <div id='homePriceRange'>
                                <div>
                                    <h5>Price range <span>clear</span></h5>
                                </div>
                                <h2 className='priceValue'>
                                    <h6>₦{new Intl.NumberFormat("en-US").format(value2[0] * 10000)}</h6>
                                    <h6>₦{new Intl.NumberFormat("en-US").format(value2[1] * 10000)}</h6>
                                </h2>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance shift'}
                                    value={value2}
                                    onChange={handleChange2}
                                    valueLabelDisplay="off"
                                    getAriaValueText={valueText}
                                    disableSwap
                                    sx={sliderHomeStyle}
                                    min={1}
                                />
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                </div>
                <img className='heroImage' src={heroImage} alt="" />
                <img className='mobileHero' src={mobileHero} alt="" />
            </div>
            <div className='mobileHeroSearch'>
                <div className='heroInputMobile'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search...' />
                </div>
                <div className='mobileLocationSearchDiv'>
                    <p onClick={() => showDropDown("mobileLocationSearch")}>Location <img src={down} alt="" /></p>
                    <div className='mobileLocationSearch' id='mobileLocationSearch'>
                        <div>
                            <h5>Location <span onClick={() => clearChecked("locationList")}>clear</span></h5>
                            <div><img src={search} alt="" /> <input placeholder='Search...' onChange={filterLocations} type="text" /></div>
                        </div>
                        <ul id='locationList'>
                            {
                                locations.map((locate, i) => (
                                    <li key={i} className={`${locate.toLowerCase()}`}>
                                        <input id={locate} type="checkbox" />
                                        <label htmlFor={locate}>{locate}</label>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Property type <img src={down} alt="" /></p>
                </div>
                <div>
                    <p>Price range <img src={down} alt="" /></p>
                </div>
                <button>Search</button>
            </div>
        </div>
    )
}

export default Hero