import './Header.css'
import mainImage from '../../img/Frame 91.png'
import blueLogo from '../../img/logo_blue.svg'
import searchImage from '../../img/Search.svg'
import { useState } from 'react'
import { Slider } from '@mui/material'
import down from '../../img/Icon.svg'
import NaijaStates from 'naija-state-local-government';
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
import { useNavigate } from 'react-router-dom';

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Header = ({ setSearch }) => {
    const [mode, setMode] = useState("Rent")
    const [value2, setValue2] = useState([5, 37]);
    const [loc, setLoc] = useState("Lagos")
    const [curr, setCurr] = useState("Naira (₦)")
    const navigate = useNavigate()

    const getMode1 = (value) => {
        setMode(value)
    }

    const showMode = (id) => {
        document.getElementById(id).classList.toggle("showDrop")
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

    const getLoc = (value) => {
        setLoc(value)
        showMode("location")
    }

    const getCurr = (value) => {
        setCurr(value)
        showMode('deskCurr')
    }

    const getSearch = () => {
        setSearch(true)
        setTimeout(() => {
            document.getElementById("resultMain").scrollIntoView()
        }, 10)
    }

    const id = document.cookie.split(" ")[1].split("=")[1]

    return (
        <div>
            <div className='headerMain'>
                <div className='leftSide'>
                    <h4>Find Your Home, Your Safe <span style={{ color: '#2E7DD7' }}>Haven.</span></h4>
                    <p>Haven is Nigeria's leading online real estate platform which eases the stress of finding properties online </p>
                </div>
                <img className='rightImage' src={mainImage} alt="" />
                <div id='fixedNav' className='myNav'>
                    <p className='logoNav'><img src={blueLogo} alt="" />Haven</p>
                    <div className='firstNavDiv'>
                        <span>For Sale</span>
                        <span>For Rent</span>
                        <span>Short let</span>
                    </div>
                    <div className='secNavDiv'>
                        <img className='searchImage' src={searchImage} alt="" />
                        <p style={{ cursor: 'pointer' }} onClick={() => navigate(id ? '/dashboard' : '/register')} className='signUp'>{id ? "Dashboard" : "Sign up"}</p>
                        <p onClick={() => navigate(id ? '/listing' : '/login')} style={{ color: '#9CA3AF', cursor: 'pointer' }} className='signIn'>{id ? "Listing" : "Sign in"}</p>
                    </div>
                    <p onClick={() => navigate(id ? '/post' : '/login')} className='postProp'>Post a property</p>
                </div>

                <div className='alignDivSearch'>
                    <div className='rentSelectDesk'>
                        <p onClick={() => getMode1("Buy")} className={mode === "Buy" ? 'activeSelectDesk' : "notActive1Desk"}>Buy</p>
                        <p onClick={() => getMode1("Sell")} className={mode === "Sell" ? 'activeSelectMidDesk' : "notActiveDesk"}>Sell</p>
                        <p onClick={() => getMode1("Rent")} className={mode === "Rent" ? 'activeSelectLastDesk' : "notActiveDesk"}>Rent</p>
                    </div>
                    <div className='filterToggleDesk'>
                        <div>
                            <div onClick={() => showMode("location")} className='locationDesk'>
                                <p>{loc}</p>
                                <img src={down} alt="" />
                            </div>
                            <ul id='location' className='propertyListDesk'>
                                <div className='myPropertyDesk'>
                                    <p>Location</p>
                                    <span onClick={() => setMode("Rent")}>clear</span>
                                </div>
                                {
                                    NaijaStates.states().map((state, i) => (
                                        <li onClick={() => getLoc(state)} key={i} >{state}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <div onClick={() => showMode("apartment")} className='locationDesk'>
                                <p>Apartments</p>
                                <img src={down} alt="" />
                            </div>
                            <ul id='apartment' className='propertyListDesk'>
                                <div className='myPropertyDesk'>
                                    <p>Property type</p>
                                    <span>clear</span>
                                </div>
                                <label htmlFor='duplex'><input type="checkbox" id='duplex' value='Duplex' />Duplex</label>
                                <br />
                                <label htmlFor='apartments'><input type="checkbox" id='apartments' value='Apartment' />Apartments</label>
                                <br />
                                <label htmlFor='bungalow'><input type="checkbox" id='bungalow' value='Detached Bungalow' />Detached Bungalow</label>
                                <br />
                                <label htmlFor='office'><input type="checkbox" id='office' value='Office Space' />Office Space</label>
                                <br />
                                <label htmlFor='penthouse'><input type="checkbox" id='penthouse' value='Penthouse' />Penthouse</label>
                                <br />
                                <label htmlFor='shop'><input type="checkbox" id='shop' value='Shop' />Shop</label>
                            </ul>
                        </div>
                        <div>
                            <div onClick={() => showMode("priceRange")} className='locationDesk'>
                                {mode === "Buy" ? (<p>{value2[0] === 0 ? "₦100K" : `₦${value2[0]}M`}-₦{value2[1]}M</p>) :
                                    (<p>{value2[0] < 10 ? "₦100K" : `₦${value2[0]}0K`}-₦{value2[1] === 100 ? "1M" : `${value2[1]}0K`}</p>)
                                }
                                <img src={down} alt="" />
                            </div>
                            <ul id='priceRange' className='propertyListDesk'>
                                <div className='myPropertyDesk'>
                                    <p>Price range</p>
                                    <span>clear</span>
                                </div>
                                <div onClick={() => showMode("deskCurr")} className='locationDesk1'>
                                    <p>{curr}</p>
                                    <img src={down} alt="" />
                                </div>
                                <ul id='deskCurr' style={{ margin: '0', padding: '0' }} className='propertyListDesk1'>
                                    <li onClick={() => getCurr("Naira (₦)")}>Naira (₦)</li>
                                    <li onClick={() => getCurr("US Dollar ($)")}>US Dollar ($)</li>
                                    <li onClick={() => getCurr("Euro (€)")}>Euro (€)</li>
                                    <li onClick={() => getCurr("Pound (£)")}>Pound (£)</li>
                                </ul>
                                <div className="priceRange">
                                    {
                                        mode === "Buy" ?
                                            (
                                                <>
                                                    <p>{value2[0] === 0 ? "₦100K" : `₦${value2[0]}M`}</p>
                                                    <p>₦{value2[1]}M</p>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <p>{value2[0] < 10 ? "₦100K" : `₦${value2[0]}0K`}</p>
                                                    <p>{value2[1] === 100 ? "1M" : `${value2[1]}0K`}</p>
                                                </>
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
                                        width: '85%',
                                        color: "#2E7DD7;",
                                        marginLeft: '1rem'
                                    }}
                                />
                            </ul>
                        </div>
                        <p onClick={getSearch} className='deskSearchButton'>Search</p>
                    </div>
                </div>

            </div>


            <div style={{ marginTop: '-2.4rem' }} className='myBrands' id='myBrands'>
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
    )
}

export default Header