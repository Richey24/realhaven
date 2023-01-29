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
import { clearChecked, filterLocations, showDropDown } from '../../utils/functions'

const minDistance = 10;

const Hero = () => {

    const [value2, setValue2] = useState([25, 75]);

    const valuetext = (value) => {
        return `${value}% `;
    }

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };

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
                        <div onClick={() => showDropDown("homePriceRange")} className='homePriceRange'>
                            <p>Price range <img src={down} alt="" /></p>
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
                                    getAriaValueText={valuetext}
                                    disableSwap
                                    sx={{
                                        width: '87%',
                                        color: "#2E7DD7;",
                                        height: "4px",
                                        margin: "-15px 16px 44px 12px",
                                        '& .MuiSlider-thumb': {
                                            color: "white",
                                            width: "24px",
                                            height: "24px",
                                            boxShadow: "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)"
                                        },
                                        '& .MuiSlider-rail': {
                                            color: "#E5E7EB"
                                        },
                                        '& .css-17djbj3-MuiSlider-valueLabel': {
                                            backgroundColor: "white",
                                            color: "black",
                                            borderRadius: "8px",
                                            width: "49px",
                                            height: "34px",
                                            boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.1), 0px 4px 6px -2px rgba(16, 24, 40, 0.05)"
                                        }
                                    }}
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
                <p>Location <img src={down} alt="" /></p>
                <p>Property type <img src={down} alt="" /></p>
                <p>Price range <img src={down} alt="" /></p>
                <button>Search</button>
            </div>
        </div>

    )
}

export default Hero