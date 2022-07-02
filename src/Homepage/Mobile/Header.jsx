import './Header.css'
import logo from '../../img/logo_blue.svg'
import topToggle from '../../img/MenuAlt4Outline.svg'
import filterToggle from '../../img/MenuAlt4Outline (1).svg'
import frame from '../../img/Framephone.png'
import { Offcanvas } from 'react-bootstrap'
import { useState } from 'react'
import shield from '../../img/Shield-Fail.svg'
import foto from '../../img/fontisto_atlassian.svg'
import samsung from '../../img/simple-icons_samsung.svg'
import tesla from '../../img/cib_tesla.svg'
import figma from '../../img/file-icons_figma.svg'
import disney from '../../img/arcticons_disney.svg'
import apple from '../../img/ant-design_apple-filled.svg'
import amazon from '../../img/ant-design_amazon-circle-filled.svg'
import ibm from '../../img/cib_ibm.svg'
import fedex from '../../img/cib_fedex.svg'
import airbnb from '../../img/cib_airbnb.svg'
import closeIcon from '../../img/Call-Missed.svg'
import down from '../../img/Icon.svg'
import { Slider } from '@mui/material'
import NaijaStates from 'naija-state-local-government';


function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Header = () => {
    const [showTop, setShowTop] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [search, setSearch] = useState("")
    const [value2, setValue2] = useState([5, 37]);

    const handleTopClose = () => {
        setShowTop(false)
    }

    const handleTopShow = () => {
        setShowTop(true)
    }

    const handleRightShow = () => {
        setShowRight(true)
    }

    const handleRightClose = () => {
        setShowRight(false)
    }

    const getSearch = (e) => {
        setSearch(e.target.value)
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
        <div>
            <div className="myMobileHero">
                <div className='fixedTop'>
                    <p className='fixedTopPara'><img src={logo} alt="" />Haven</p>
                    <img onClick={handleTopShow} src={topToggle} alt="" />
                </div>

                <div className='mobileHeading'>
                    <p>Find Your Home Your Safe <span>Haven</span></p>
                </div>
                <p className='headDesc'>Haven is Nigeria's leading online real estate platform which eases the stress of finding properties online </p>
                <div className='rentSelect'>
                    <p className='activeSelect'>Buy</p>
                    <p>Sell</p>
                    <p>Rent</p>
                </div>
                <div className='filterToggle'>
                    <img onClick={handleRightShow} src={filterToggle} alt="" />
                    <p>Search</p>
                </div>
                <img className='headImage' src={frame} alt="" />
                <div className='myBrands' id='myBrands'>
                    <img src={foto} alt="" />
                    <img src={disney} alt="" />
                    <img src={samsung} alt="" />
                    <img src={amazon} alt="" />
                    <img src={apple} alt="" />
                    <img src={airbnb} alt="" />
                    <img src={fedex} alt="" />
                    <img src={ibm} alt="" />
                    <img src={tesla} alt="" />
                    <img src={figma} alt="" />
                </div>
            </div>
            <Offcanvas className="topCanvas" show={showTop} onHide={handleTopClose} placement="top">
                <Offcanvas.Header style={{ height: '12%', margin: '0', paddingBottom: '0' }} closeButton>
                    <Offcanvas.Title><p className='fixedTopPara'><img src={logo} alt="" />Haven</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ padding: '0' }}>
                    <div className='searchBox'>
                        <input value={search} onChange={getSearch} placeholder="Search for properties e.g 'Duplex' " type="text" />
                        <img onClick={() => setSearch("")} src={shield} alt="" />
                    </div>
                    <ul className='listSelect'>
                        <li>For sale</li>
                        <li>For Rent</li>
                        <li>Short let</li>
                    </ul>
                    <ul className='myAuth'>
                        <li>Sign up</li>
                        <li>Sign in</li>
                    </ul>
                    <p className='postProps'>Post a property</p>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas className="rightCanvas" show={showRight} placement="end">
                <Offcanvas.Header>
                    <Offcanvas.Title><img style={{ marginRight: '2rem' }} onClick={handleRightClose} src={closeIcon} alt="" /> Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className='needHelp'>What do you need help with?</p>
                    <div className='myProperty'>
                        <p>Property</p>
                        <span>clear</span>
                    </div>
                    <div className="housing">
                        <span>Duplex</span>
                        <img src={down} alt="" />
                    </div>
                    <ul className='propertyList2'>
                        <li><input type="checkbox" />Apartments</li>
                        <li><input type="checkbox" />Detached Bungalow</li>
                        <li><input type="checkbox" />Office Space</li>
                        <li><input type="checkbox" />Penthouse</li>
                        <li><input type="checkbox" />Shop</li>
                    </ul>
                    <div className='myProperty'>
                        <p>Type</p>
                        <span>clear</span>
                    </div>
                    <div className="housing">
                        <span>Rent</span>
                        <img src={down} alt="" />
                    </div>
                    <div className='myProperty'>
                        <p>Price Range</p>
                        <span>clear</span>
                    </div>
                    <div className="housing">
                        <span>Nigerian Naira (₦)</span>
                        <img src={down} alt="" />
                    </div>
                    <div className="priceRange">
                        <p>{value2[0] === 0 ? "₦100K" : `₦${value2[0]}M`}</p>
                        <p>₦{value2[1]}M</p>
                    </div>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        sx={{
                            width: '85%',
                            coloe: "#2E7DD7;",
                            marginLeft: '1rem'
                        }}
                    />
                    <div className='myProperty'>
                        <p>Location</p>
                        <span>clear</span>
                    </div>
                    <div className="housing">
                        <span>Lagos</span>
                        <img src={down} alt="" />
                    </div>
                    <ul className='propertyList'>
                        {
                            NaijaStates.states().map((state) => (
                                <li>{state}</li>
                            ))
                        }
                    </ul>
                    <p className='seeResult'>See 45 Results</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header