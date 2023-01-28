import './Hero.css'
import heroImage from "../../img/heroImage.svg"
import mobileHero from "../../img/mobileHero.png"
import search from "../../img/Search.svg"
import down from "../../img/Icon.svg"
import { useState } from 'react'
import { Slider } from '@mui/material'
import { propList } from '../../utils/propertyList'
import loc from '../../utils/locations'
import Header from "./Header"

const minDistance = 10;


const Hero = () => {

    const [value2, setValue2] = useState([25, 75]);
    const [locations, setLocations] = useState(loc)

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

    const filterLocations = (e) => {
        const arr = loc.filter((lo) => lo.toLowerCase().includes(e.target.value.toLowerCase()))
        setLocations(arr)
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
                            <p>Location <img src={down} alt="" /></p>
                            <div>
                                <div>
                                    <h5>Location <span>clear</span></h5>
                                    <div><img src={search} alt="" /> <input placeholder='Search...' onChange={filterLocations} type="text" /></div>
                                </div>
                                <ul>
                                    {
                                        locations.map((locate) => (
                                            <li>
                                                <input id={locate} type="checkbox" />
                                                <label htmlFor={locate}>{locate}</label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='homePropertySearch'>
                            <p>Property type <img src={down} alt="" /></p>
                            <div>
                                <div>
                                    <h5>Property type <span>clear</span></h5>
                                </div>
                                <ul>
                                    {
                                        propList.map((property) => (
                                            <li>
                                                <input id={property} type="checkbox" />
                                                <label htmlFor={property}>{property}</label>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className='homePriceRange'>
                            <p>Price range <img src={down} alt="" /></p>
                            <div>
                                <div>
                                    <h5>Price range <span>clear</span></h5>
                                </div>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance shift'}
                                    value={value2}
                                    onChange={handleChange2}
                                    valueLabelDisplay="on"
                                    getAriaValueText={valuetext}
                                    disableSwap
                                    sx={{
                                        width: '73%',
                                        color: "#2E7DD7;",
                                        height: "4px",
                                        margin: "86px 16px 44px 12px",
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