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
import url from './../../url';
import axios from 'axios'

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Header = ({ setSearch, setResult }) => {
    const [mode, setMode] = useState("rent")
    const [value2, setValue2] = useState([5, 37]);
    const [loc, setLoc] = useState("Lagos")
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

    const getSearch = async () => {
        console.log(mode, loc);
        const house = await axios.get(`${url}/v1/property/find?purpose=${mode}&state=${loc}`)
        const result = await house.data
        console.log(result);
        setSearch(true)
        setResult(result.properties)
        setTimeout(() => {
            document.getElementById("resultMain")?.scrollIntoView()
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
                        <p style={{ cursor: 'pointer' }} onClick={() => navigate(id ? '/home' : '/register')} className='signUp'>{id ? "Dashboard" : "Sign up"}</p>
                        <p onClick={() => navigate(id ? '/listing' : '/login')} style={{ color: '#9CA3AF', cursor: 'pointer' }} className='signIn'>{id ? "Listing" : "Sign in"}</p>
                    </div>
                    <p onClick={() => navigate(id ? '/post' : '/login')} className='postProp'>Post a property</p>
                </div>

                <div className='alignDivSearch'>
                    <div className='rentSelectDesk'>
                        <p onClick={() => getMode1("buy")} className={mode === "buy" ? 'activeSelectDesk' : "notActive1Desk"}>Buy</p>
                        <p onClick={() => getMode1("sell")} className={mode === "sell" ? 'activeSelectMidDesk' : "notActiveDesk"}>Sell</p>
                        <p onClick={() => getMode1("rent")} className={mode === "rent" ? 'activeSelectLastDesk' : "notActiveDesk"}>Rent</p>
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
                                    <span onClick={() => getLoc("Lagos")}>clear</span>
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
                            <form id='apartment' className='propertyListDesk'>
                                <div className='myPropertyDesk'>
                                    <p>Property type</p>
                                    <span><input className='clearApart' type="reset" value="clear" /></span>
                                </div>
                                <label htmlFor='duplex'><input type="checkbox" name='propType' id='duplex' value='Duplex' />Duplex</label>
                                <label htmlFor='apartments'><input type="checkbox" name='propType' id='apartments' value='Apartment' />Apartments</label>
                                <label htmlFor='bungalow'><input type="checkbox" name='propType' id='bungalow' value='Detached Bungalow' />Detached Bungalow</label>
                                <label htmlFor='office'><input type="checkbox" name='propType' id='office' value='Office Space' />Office Space</label>
                                <label htmlFor='penthouse'><input type="checkbox" name='propType' id='penthouse' value='Penthouse' />Penthouse</label>
                                <label htmlFor='shop'><input type="checkbox" name='propType' id='shop' value='Shop' />Shop</label>
                                <label htmlFor='cottage'><input type="checkbox" name='propType' id='cottage' value='Cottage' />Cottage</label>
                                <label htmlFor='Townhouse'><input type="checkbox" name='propType' id='Townhouse' value='Townhouse' />Townhouse</label>
                                <label htmlFor='Mansion'><input type="checkbox" name='propType' id='Mansion' value='Mansion' />Mansion</label>
                                <label htmlFor='Ranch-style house'><input type="checkbox" name='propType' id='Ranch-style house' value='Ranch-style house' />Ranch-style house</label>
                                <label htmlFor='Condominium'><input type="checkbox" name='propType' id='Condominium' value='Condominium' />Condominium</label>
                                <label htmlFor='Terraced house'><input type="checkbox" name='propType' id='Terraced house' value='Terraced house' />Terraced house</label>
                                <label htmlFor='Villa'><input type="checkbox" name='propType' id='Villa' value='Villa' />Villa</label>
                                <label htmlFor='Mobile home'><input type="checkbox" name='propType' id='Mobile home' value='Mobile home' />Mobile home</label>
                                <label htmlFor='Farmhouse'><input type="checkbox" name='propType' id='Farmhouse' value='Farmhouse' />Farmhouse</label>
                                <label htmlFor='Semi-detached'><input type="checkbox" name='propType' id='Semi-detached' value='Semi-detached' />Semi-detached</label>
                                <label htmlFor='Single-family home'><input type="checkbox" name='propType' id='Single-family home' value='Single-family home' />Single-family home</label>
                                <label htmlFor='Tiny house movement'><input type="checkbox" name='propType' id='Tiny house movement' value='Tiny house movement' />Tiny house movement</label>
                                <label htmlFor='Tree house'><input type="checkbox" name='propType' id='Tree house' value='Tree house' />Tree house</label>
                                <label htmlFor='American Craftsman'><input type="checkbox" name='propType' id='American Craftsman' value='American Craftsman' />American Craftsman</label>
                                <label htmlFor='Colonial architecture'><input type="checkbox" name='propType' id='Colonial architecture' value='Colonial architecture' />Colonial architecture</label>
                                <label htmlFor='Victorian architecture'><input type="checkbox" name='propType' id='Victorian architecture' value='Victorian architecture' />Victorian architecture</label>
                                <label htmlFor='Tudor architecture'><input type="checkbox" name='propType' id='Tudor architecture' value='Tudor architecture' />Tudor architecture</label>
                                <label htmlFor='Contemporary architecture'><input type="checkbox" name='propType' id='Contemporary architecture' value='Contemporary architecture' />Contemporary architecture</label>
                            </form>
                        </div>
                        <div>
                            <div onClick={() => showMode("priceRange")} className='locationDesk'>
                                {mode === "Buy" ? (<p>{value2[0] === 0 ? "₦100K" : `₦${value2[0]}M`}-₦{value2[1]}M</p>) :
                                    (<p>{value2[0] < 10 ? "₦100K" : `₦${value2[0]}0K`}-₦{value2[1] === 100 ? "1M" : `${value2[1]}0K`}</p>)
                                }
                                <img src={down} alt="" />
                            </div>
                            <ul id='priceRange' className='propertyListDesk' style={{ height: "130px" }}>
                                <div className='myPropertyDesk'>
                                    <p>Price range</p>
                                    <span onClick={() => setValue2([5, 37])}>clear</span>
                                </div>
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