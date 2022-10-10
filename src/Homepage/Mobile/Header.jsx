import './Header.css'
import logo from '../../img/logo_blue.svg'
import topToggle from '../../img/MenuAlt4Outline.svg'
import filterToggle from '../../img/MenuAlt4Outline (1).svg'
import frame from '../../img/Framephone.png'
import { Offcanvas, Spinner } from 'react-bootstrap'
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
import url from './../../url';
import axios from 'axios'
import { useEffect } from 'react'


function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Header = ({ setResult, setHouse, properties }) => {
    const [showTop, setShowTop] = useState(false)
    const [showRight, setShowRight] = useState(false)
    const [search, setSearch] = useState("")
    const [value2, setValue2] = useState([5, 37]);
    const [property, setProperty] = useState([])
    const [mode, setMode] = useState("Rent")
    const [prop, setProp] = useState([])
    const [loc, setLoc] = useState("Lagos")
    const [spin, setSpin] = useState(false)
    const navigate = useNavigate()

    const handleTopClose = () => {
        setShowTop(false)
    }

    const handleTopShow = () => {
        setShowTop(true)
    }

    useEffect(() => {
        (async () => {
            const house = await axios.get(`${url}/v1/property/find?purpose=${mode.toLowerCase()}&state=${loc}`)
            const result = await house.data
            setProp(result.properties)
        })()
    }, [loc, mode])

    const handleRightShow = () => {
        setShowRight(true)
    }

    const handleRightClose = () => {
        setShowRight(false)
    }

    const getSearch = (e) => {
        const val = e.target.value
        setSearch(val)
    }

    const searchEnter = (e) => {
        const code = e.keyCode || e.which
        console.log(e.keyCode);
        if (parseInt(code) === 13) {
            const filter = properties.filter((property) => `${property.title} ${property.description} ${property.address} ${property.state} ${property.city}`.includes(search))
            console.log(filter);
            setHouse(filter)
            setResult(true)
            handleTopClose()
            setTimeout(() => {
                const theDiv = document.getElementById("mobContact") || document.getElementById("mobPage")
                theDiv.scrollIntoView()
            }, 10)
        }
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

    const getLoc = async (value) => {
        setSpin(true)
        setLoc(value)
        showMode("location")
        const house = await axios.get(`${url}/v1/property/find?purpose=${mode.toLowerCase()}&state=${value}`)
        const result = await house.data
        setProp(result.properties)
        setSpin(false)
    }

    const getMode = async (value) => {
        setSpin(true)
        setMode(value)
        const house = await axios.get(`${url}/v1/property/find?purpose=${value.toLowerCase()}&state=${loc}`)
        const result = await house.data
        setProp(result.properties)
        setSpin(false)
    }

    const getMode1 = async (value) => {
        setMode(value)
        const house = await axios.get(`${url}/v1/property/find?purpose=${value.toLowerCase()}&state=${loc}`)
        const result = await house.data
        setProp(result.properties)
    }

    const makeSearch = async () => {
        setHouse(prop)
        setResult(true)
        setTimeout(() => {
            document.getElementById("resultMob")?.scrollIntoView()
        }, 10)
    }

    let id = ""
    for (let i = 0; i < document.cookie?.split(" ").length; i++) {
        if (document.cookie?.split(" ")[i].split("=")[0] === "id") {
            id = document.cookie?.split(" ")[i].split("=")[1]
        }
    }

    const signIn = () => {
        handleTopClose()
        setTimeout(() => {
            navigate(id ? '/post' : '/login')
        }, 1000)
    }

    const signUp = () => {
        handleTopClose()
        setTimeout(() => {
            navigate(id ? '/home' : '/register')
        }, 1000)
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
                        <input value={search} onKeyDown={searchEnter} onChange={getSearch} placeholder="Search for properties e.g 'Duplex' " type="text" />
                        <img onClick={() => setSearch("")} src={shield} alt="" />
                    </div>
                    <ul className='listSelect'>
                        <li>For sale</li>
                        <li>For Rent</li>
                        <li>Short let</li>
                    </ul>
                    <ul className='myAuth'>
                        <li onClick={signUp}>{id ? "Dashboard" : "Sign up"}</li>
                        <li onClick={() => { handleTopClose(); navigate(id ? '/listing' : '/login') }}>{id ? "Listing" : "Sign in"}</li>
                    </ul>
                    <p onClick={signIn} className='postProps'>Post a property</p>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas className="rightCanvas" show={showRight} placement="end">
                <Offcanvas.Header>
                    <Offcanvas.Title><img style={{ marginRight: '2rem' }} onClick={handleRightClose} src={closeIcon} alt="" /> Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='relateBody'>
                    <p className='needHelp'>What do you need help with?</p>
                    <form className='propertyForm'>
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
                            <label htmlFor='apartment'><input onClick={() => getProperty('Apartment')} type="checkbox" id='apartment' value='Apartment' />Apartments</label>
                            <label htmlFor='bungalow'><input onClick={() => getProperty('Detached Bungalow')} type="checkbox" id='bungalow' value='Detached Bungalow' />Detached Bungalow</label>
                            <label htmlFor='office'><input onClick={() => getProperty('Office Space')} type="checkbox" id='office' value='Office Space' />Office Space</label>
                            <label htmlFor='penthouse'><input onClick={() => getProperty('Penthouse')} type="checkbox" id='penthouse' value='Penthouse' />Penthouse</label>
                            <label htmlFor='shop'><input onClick={() => getProperty('Shop')} type="checkbox" id='shop' value='Shop' />Shop</label>
                            <label htmlFor='cottage'><input onClick={() => getProperty('Cottage')} type="checkbox" name='propType' id='cottage' value='Cottage' />Cottage</label>
                            <label htmlFor='Townhouse'><input type="checkbox" onClick={() => getProperty('Input')} name='propType' id='Townhouse' value='Townhouse' />Townhouse</label>
                            <label htmlFor='Mansion'><input type="checkbox" name='propType' onClick={() => getProperty('Mansion')} id='Mansion' value='Mansion' />Mansion</label>
                            <label htmlFor='Ranch-style house'><input type="checkbox" onClick={() => getProperty('Ranch-style house')} name='propType' id='Ranch-style house' value='Ranch-style house' />Ranch-style house</label>
                            <label htmlFor='Condominium'><input type="checkbox" onClick={() => getProperty('Condominium')} name='propType' id='Condominium' value='Condominium' />Condominium</label>
                            <label htmlFor='Terraced house'><input type="checkbox" onClick={() => getProperty('Terraced house')} name='propType' id='Terraced house' value='Terraced house' />Terraced house</label>
                            <label htmlFor='Villa'><input type="checkbox" name='propType' onClick={() => getProperty('Villa')} id='Villa' value='Villa' />Villa</label>
                            <label htmlFor='Mobile home'><input type="checkbox" onClick={() => getProperty('Mobile home')} name='propType' id='Mobile home' value='Mobile home' />Mobile home</label>
                            <label htmlFor='Farmhouse'><input type="checkbox" onClick={() => getProperty('Farmhouse')} name='propType' id='Farmhouse' value='Farmhouse' />Farmhouse</label>
                            <label htmlFor='Semi-detached'><input type="checkbox" onClick={() => getProperty('Semi-detached')} name='propType' id='Semi-detached' value='Semi-detached' />Semi-detached</label>
                            <label htmlFor='Single-family home'><input type="checkbox" onClick={() => getProperty('Single-family home')} name='propType' id='Single-family home' value='Single-family home' />Single-family home</label>
                            <label htmlFor='Tiny house movement'><input type="checkbox" onClick={() => getProperty('Tiny house movement')} name='propType' id='Tiny house movement' value='Tiny house movement' />Tiny house movement</label>
                            <label htmlFor='Tree house'><input type="checkbox" onClick={() => getProperty('Tree house')} name='propType' id='Tree house' value='Tree house' />Tree house</label>
                            <label htmlFor='American Craftsman'><input type="checkbox" name='propType' id='American Craftsman' onClick={() => getProperty('American Craftsman')} value='American Craftsman' />American Craftsman</label>
                            <label htmlFor='Colonial architecture'><input type="checkbox" onClick={() => getProperty('Colonial architecture')} name='propType' id='Colonial architecture' value='Colonial architecture' />Colonial architecture</label>
                            <label htmlFor='Victorian architecture'><input type="checkbox" onClick={() => getProperty('Victorian architecture')} name='propType' id='Victorian architecture' value='Victorian architecture' />Victorian architecture</label>
                            <label htmlFor='Tudor architecture'><input type="checkbox" onClick={() => getProperty('Tudor architecture')} name='propType' id='Tudor architecture' value='Tudor architecture' />Tudor architecture</label>
                            <label htmlFor='Contemporary architecture'><input type="checkbox" name='propType' onClick={() => getProperty('Contemporary architecture')} id='Contemporary architecture' value='Contemporary architecture' />Contemporary architecture</label>
                        </ul>
                    </form>
                    <div className='myProperty'>
                        <p>Type</p>
                        <span onClick={() => setMode("Rent")}>clear</span>
                    </div>
                    <div onClick={() => showMode("mode")} className="housing">
                        <span>{mode}</span>
                        <img src={down} alt="" />
                        <ul id='mode' style={{ height: '88px' }} className='propertyList'>
                            <li onClick={() => getMode("Rent")}>Rent</li>
                            <li onClick={() => getMode("Buy")}>Buy</li>
                            <li onClick={() => getMode("Sell")}>Sell</li>
                        </ul>
                    </div>
                    <div className='myProperty'>
                        <p>Price Range</p>
                        <span onClick={() => setValue2([5, 37])}>clear</span>
                    </div>
                    <div className="priceRange">
                        {
                            mode === "Rent" ? (
                                <p>{value2[0]}0K</p>
                            ) :
                                (
                                    <p>{`₦${value2[0]}M`}</p>
                                )
                        }
                        {
                            mode === "Rent" ?
                                (
                                    <p>{value2[1] === 100 ? "1M" : `₦${value2[1]}0K`}</p>
                                ) :
                                (
                                    <p>₦{value2[1]}M</p>
                                )
                        }
                    </div>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        sx={{
                            width: '80%',
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
                    <ul id='location' className='propertyList3'>
                        {
                            NaijaStates.states().map((state, i) => (
                                <li key={i} onClick={() => getLoc(state)}>{state}</li>
                            ))
                        }
                    </ul>
                    <p onClick={() => { handleRightClose(); makeSearch() }} className='seeResult'>See {prop.length} Results {spin && <Spinner animation="grow" className='spinRes' />}</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Header