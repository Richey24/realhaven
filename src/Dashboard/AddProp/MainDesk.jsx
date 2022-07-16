import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import "../DeskDash/Main.css"
import "./MainDesk.css"
import down from '../../img/Icon.svg'
import "../../Homepage/Desktop/Header.css"
import { useState } from 'react';
import preview from "../../img/preview.svg"
import pen from "../../img/Edit.svg"
import send from "../../img/Send.svg"
import { Slider } from '@mui/material'

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const MainDesk = () => {
    const [purpose, setPurpose] = useState("Purpose")
    const [propType, setPropType] = useState("Property type")
    const [curr, setCurr] = useState("Naira (₦)")
    const [rate, setRate] = useState("/year")
    const [value2, setValue2] = useState([5, 37]);

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

    const getRate = (value) => {
        setRate(value)
        showMode("rate")
    }

    const getPropType = (value) => {
        setPropType(value)
        showMode("apartment")
    }

    const getPurpose = (value) => {
        setPurpose(value)
        showMode("mode")
    }

    const getCurr = (value) => {
        setCurr(value)
        showMode("currency")
    }

    return (
        <div className="mainDashDiv">
            <div className="dashTop">
                <p>Post Property</p>
                <div>
                    <span data-num="3"><img src={noti} alt="" /></span>
                    <img src={dp} alt="" />
                </div>
            </div>
            <h4 className="getAttDesk">Get your properties the attention of 500k+ home seekers</h4>
            <div className="deskAddTitle">
                <label htmlFor="title">Title</label>
                <br />
                <input placeholder="Name your property E.g “Five Bedroom Luxury Semi Detached Duplex" type="text" name="title" id="title" />
            </div>

            <div className="puporseDivDesk">
                <div>
                    <p className="purposePara">Purpose</p>
                    <div style={{ width: "30vw", margin: "0px" }} onClick={() => showMode("mode")} className='locationDesk'>
                        <p>{purpose}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "auto", width: "30vw", position: "absolute", zIndex: "1", margin: "0px" }} id='mode' className='propertyListDesk'>
                        <li onClick={() => getPurpose("Rent")}>Rent</li>
                        <li onClick={() => getPurpose("Sell")}>Sell</li>
                        <li onClick={() => getPurpose("Buy")}>Buy</li>
                    </ul>
                </div>
                <div>
                    <p className="purposePara">Property type</p>
                    <div style={{ width: "30vw", margin: "0px" }} onClick={() => showMode("apartment")} className='locationDesk'>
                        <p>{propType}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "30vw", position: "absolute", zIndex: "1", margin: "0px" }} id='apartment' className='propertyListDesk'>
                        <li onClick={() => getPropType("Duplex")}>Duplex</li>
                        <li onClick={() => getPropType("Detached Bungalow")}>Detached Bungalow</li>
                        <li onClick={() => getPropType("Shop")}>Shop</li>
                        <li onClick={() => getPropType("Office Space")}>Office Space</li>
                        <li onClick={() => getPropType("Penthouse")}>Penthouse</li>
                        <li onClick={() => getPropType("Apartments")}>Apartments</li>
                    </ul>
                </div>
            </div>


            <div className="puporseDivDesk">
                <div>
                    <p className="purposePara">Bedroom</p>
                    <input style={{ width: "20vw", margin: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bedrooms" className='locationDesk' type="number" />
                </div>
                <div>
                    <p className="purposePara">Bathroom</p>
                    <input style={{ width: "20vw", margin: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bathrooms" className='locationDesk' type="number" />
                </div>
                <div>
                    <p className="purposePara">Toilet</p>
                    <input style={{ width: "20vw", margin: "0px", outline: "none", cursor: "unset" }} placeholder="No of Toilets" className='locationDesk' type="number" />
                </div>
            </div>

            <div className="checkBoxSelect">
                <label htmlFor="furnished"><input type="checkbox" name="furnished" id="furnished" />Furnished</label>
                <label htmlFor="serviced"><input type="checkbox" name="serviced" id="serviced" />Serviced</label>
                <label htmlFor="newlybuilt"><input type="checkbox" name="newlybuilt" id="newlybuilt" />Newly-built</label>
            </div>

            <div className="puporseDivDesk">
                <div style={{ width: "30%" }}>
                    <p className="purposePara">Property price</p>
                    <div style={{ width: "100%", margin: "0px" }} onClick={() => showMode("price")} className='locationDesk'>
                        <p>Price</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "100px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='price' className='propertyListDesk'>
                        <div className="priceRange">
                            {
                                purpose === "Buy" ?
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
                <div style={{ width: "30%" }}>
                    <p className="purposePara">Currency</p>
                    <div style={{ width: "100%", margin: "0px" }} onClick={() => showMode("currency")} className='locationDesk'>
                        <p>{curr}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='currency' className='propertyListDesk'>
                        <li onClick={() => getCurr("Naira (₦)")}>Naira (₦)</li>
                        <li onClick={() => getCurr("US Dollar ($)")}>US Dollar ($)</li>
                        <li onClick={() => getCurr("Euro (€)")}>Euro (€)</li>
                        <li onClick={() => getCurr("Pound (£)")}>Pound (£)</li>
                    </ul>
                </div>
                <div style={{ width: "30%" }}>
                    <p className="purposePara">Period</p>
                    <div style={{ width: "100%", margin: "0px" }} onClick={() => showMode("rate")} className='locationDesk'>
                        <p>{rate}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='rate' className='propertyListDesk'>
                        <li onClick={() => getRate("/year")}>/year</li>
                        <li onClick={() => getRate("/month")}>/month</li>
                        <li onClick={() => getRate("/week")}>/week</li>
                    </ul>
                </div>
            </div>


            <div className="addTextAreaDiv">
                <p className="purposePara">Description</p>
                <textarea placeholder="Tell us everything about the property..."></textarea>
            </div>

            <div className="additionFeat">
                <p className="purposePara">Additional Features</p>
                <input placeholder="Add features" type="text" />
                <h6>Suggested: <span>Balcony, Family Lounge, Swimming Pool, CCTV, Jacuzzi, Adequate car space, Security</span></h6>
            </div>

            <div className="addHouseImages">
                <p className="purposePara">Add Images</p>
                <input type="file" id="mainImage" hidden />
                <label htmlFor="mainImage">
                    <div className="addHouseMainImage">
                        <img src={preview} alt="" />
                    </div>
                </label>
                <div className="addHouseOtherImage">
                    <input type="file" id="secondImage" hidden />
                    <label htmlFor="secondImage">
                        <div>
                            <img src={preview} alt="" />
                        </div>
                    </label>
                    <input type="file" id="thirdImage" hidden />
                    <label htmlFor="thirdImage">
                        <div>
                            <img src={preview} alt="" />
                        </div>
                    </label>
                    <input type="file" id="fourthImage" hidden />
                    <label htmlFor="fourthImage">
                        <div>
                            <img src={preview} alt="" />
                        </div>
                    </label>
                    <input type="file" hidden id="fifthImage" />
                    <label htmlFor="fifthImage">
                        <div>
                            <img src={preview} alt="" />
                        </div>
                    </label>
                    <input type="file" hidden id="sixthimage" />
                    <label htmlFor="sixthimage">
                        <div>
                            <img src={preview} alt="" />
                        </div>
                    </label>
                </div>
                <p className="purposePara">600x600 or higher recommeneded.</p>
            </div>

            <div className="addFinalButton">
                <p className="addFinal1"><img src={pen} alt="" />Save to Drafts</p>
                <p className="addFinal2"><img src={send} alt="" />Post Property</p>
            </div>
        </div>
    )
}

export default MainDesk