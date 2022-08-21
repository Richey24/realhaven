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
import { useNavigate } from 'react-router-dom'


function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Header = ({ setResult }) => {
    const [showTop, setShowTop] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [search, setSearch] = useState("")
    const [value2, setValue2] = useState([5, 37]);
    const [property, setProperty] = useState([])
    const [mode, setMode] = useState("Rent")
    const [curr, setCurr] = useState("Nigerian Naira (₦)")
    const [loc, setLoc] = useState("Lagos")
    const navigate = useNavigate()

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

    const showMode = (id) => {
        document.getElementById(id).classList.toggle("showDrop")
    }

    const getProperty = (value) => {
        if (property.includes(value)) {
            let newProp = property.filter((val) => val !== value)
            setProperty(newProp)
        }
        else {
            setProperty([...property, value])
        }
    }

    const getCurr = (value) => {
        setCurr(value)
        showMode('currency')
    }

    const getLoc = (value) => {
        setLoc(value)
        showMode("location")
    }

    const getMode = (value) => {
        setMode(value)
        showMode("mode")
    }

    const getMode1 = (value) => {
        setMode(value)
    }

    const makeSearch = () => {
        setResult(true)
        setTimeout(() => {
            document.getElementById("resultMob").scrollIntoView()
        }, 10)
    }

    let id = ""
    for (let i = 0; i < document.cookie?.split(" ").length; i++) {
        if (document.cookie?.split(" ")[i].split("=")[0] === "id") {
            id = document.cookie?.split(" ")[i].split("=")[1]
        }
    }

    return (
        <div>
            <div className="myMobileHero">
                <div id="fixedNav" className='fixedTop'>
                    <p className='fixedTopPara'><img src={logo} alt="" />Haven</p>
                    <img onClick={handleTopShow} src={topToggle} alt="" />
                </div>

                <div className='mobileHeading'>
                    <p>Find Your Home Your Safe <span>Haven</span></p>
                </div>
                <p className='headDesc'>Haven is Nigeria's leading online real estate platform which eases the stress of finding properties online </p>
                <div className='rentSelect'>
                    <p onClick={() => getMode1("Buy")} className={mode === "Buy" ? 'activeSelect' : "notActive1"}>Buy</p>
                    <p onClick={() => getMode1("Sell")} className={mode === "Sell" ? 'activeSelectMid' : "notActive"}>Sell</p>
                    <p onClick={() => getMode1("Rent")} className={mode === "Rent" ? 'activeSelectLast' : "notActive"}>Rent</p>
                </div>
                <div className='filterToggle'>
                    <img onClick={handleRightShow} src={filterToggle} alt="" />
                    <p onClick={makeSearch}>Search</p>
                </div>
                <img className='headImage' src={frame} alt="" />
                <div className='myBrand' id='myBrands'>
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
                <Offcanvas.Header style={{ height: '64px', margin: '0', paddingBottom: '0' }} closeButton>
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
                        <li onClick={() => navigate(id ? '/dashboard' : '/register')}>{id ? "Dashboard" : "Sign up"}</li>
                        <li onClick={() => navigate(id ? '/listing' : '/login')}>{id ? "Listing" : "Sign in"}</li>
                    </ul>
                    <p onClick={() => navigate(id ? '/post' : '/login')} className='postProps'>Post a property</p>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas className="rightCanvas" show={showRight} placement="end">
                <Offcanvas.Header>
                    <Offcanvas.Title><img style={{ marginRight: '2rem' }} onClick={handleRightClose} src={closeIcon} alt="" /> Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className='needHelp'>What do you need help with?</p>
                    <form>
                        <div className='myProperty'>
                            <p>Property</p>
                            <label htmlFor='myReset' onClick={() => setProperty([])}>clear</label>
                            <input type="reset" id='myReset' hidden />
                        </div>
                        <ul className='listOfProp'>
                            {
                                property.map((pro, i) => (
                                    <li key={i}>{pro}</li>
                                ))
                            }
                        </ul>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }} onClick={() => showMode('property')} className="housing">
                            <span>Duplex</span>
                            <img src={down} alt="" />
                        </div>
                        <ul id='property' className='propertyList2'>
                            <label htmlFor='duplex'><input onClick={() => getProperty('Duplex')} type="checkbox" id='duplex' value='Duplex' />Duplex</label>
                            <br />
                            <label htmlFor='apartment'><input onClick={() => getProperty('Apartment')} type="checkbox" id='apartment' value='Apartment' />Apartments</label>
                            <br />
                            <label htmlFor='bungalow'><input onClick={() => getProperty('Detached Bungalow')} type="checkbox" id='bungalow' value='Detached Bungalow' />Detached Bungalow</label>
                            <br />
                            <label htmlFor='office'><input onClick={() => getProperty('Office Space')} type="checkbox" id='office' value='Office Space' />Office Space</label>
                            <br />
                            <label htmlFor='penthouse'><input onClick={() => getProperty('Penthouse')} type="checkbox" id='penthouse' value='Penthouse' />Penthouse</label>
                            <br />
                            <label htmlFor='shop'><input onClick={() => getProperty('Shop')} type="checkbox" id='shop' value='Shop' />Shop</label>
                        </ul>
                    </form>
                    <div className='myProperty'>
                        <p>Type</p>
                        <span onClick={() => setMode("Rent")}>clear</span>
                    </div>
                    <div onClick={() => showMode("mode")} className="housing">
                        <span>{mode}</span>
                        <img src={down} alt="" />
                    </div>
                    <ul id='mode' style={{ height: '70px' }} className='propertyList'>
                        <li onClick={() => getMode("Rent")}>Rent</li>
                        <li onClick={() => getMode("Buy")}>Buy</li>
                        <li onClick={() => getMode("Sell")}>Sell</li>
                    </ul>
                    <div className='myProperty'>
                        <p>Price Range</p>
                        <span onClick={() => setCurr('Nigerian Naira (₦)')}>clear</span>
                    </div>
                    <div onClick={() => showMode("currency")} className="housing">
                        <span>{curr}</span>
                        <img src={down} alt="" />
                    </div>
                    <ul id='currency' style={{ height: '70px' }} className='propertyList'>
                        <li onClick={() => getCurr("Nigerian Naira (₦)")}>Nigerian Naira (₦)</li>
                        <li onClick={() => getCurr("US Dollar ($)")}>US Dollar ($)</li>
                        <li onClick={() => getCurr("Canadian Dollar ($)")}>Canadian Dollar ($)</li>
                        <li onClick={() => getCurr("Australian Dollar ($)")}>Australian Dollar ($)</li>
                        <li onClick={() => getCurr("Euro (€)")}>Euro (€)</li>
                        <li onClick={() => getCurr("Pound (£)")}>Pound (£)</li>
                    </ul>
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
                            color: "#2E7DD7;",
                            marginLeft: '1rem'
                        }}
                    />
                    <div className='myProperty'>
                        <p>Location</p>
                        <span onClick={() => setLoc("Lagos")}>clear</span>
                    </div>
                    <div onClick={() => showMode("location")} className="housing">
                        <span>{loc}</span>
                        <img src={down} alt="" />
                    </div>
                    <ul id='location' className='propertyList'>
                        {
                            NaijaStates.states().map((state, i) => (
                                <li key={i} onClick={() => getLoc(state)}>{state}</li>
                            ))
                        }
                    </ul>
                    <p onClick={() => setResult(true)} className='seeResult'>See 45 Results</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header