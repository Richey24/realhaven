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

const MainDesk = () => {
    const [purpose, setPurpose] = useState("Purpose")
    const [propType, setPropType] = useState("Property type")
    const [bedNum, setBedNum] = useState("No Of Bedroom")
    const [bathNum, setBathNum] = useState("No Of Bathroom")
    const [toiletNum, setToiletNum] = useState("No Of Toilet")
    const [curr, setCurr] = useState("Nigerian Naira (₦)")
    const [rate, setRate] = useState("/year")
    const showMode = (id) => {
        document.getElementById(id).classList.toggle("showDrop")
    }

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

    const getBedNum = (value) => {
        setBedNum(value)
        showMode("bedroom")
    }

    const getBathNum = (value) => {
        setBathNum(value)
        showMode("bathroom")
    }

    const getToiletNum = (value) => {
        setToiletNum(value)
        showMode("toilet")
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
                    <div style={{ width: "20vw", margin: "0px" }} onClick={() => showMode("bedroom")} className='locationDesk'>
                        <p>{bedNum}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='bedroom' className='propertyListDesk'>
                        <li onClick={() => getBedNum(1)}>1</li>
                        <li onClick={() => getBedNum(2)} >2</li>
                        <li onClick={() => getBedNum(3)}>3</li>
                        <li onClick={() => getBedNum(4)}>4</li>
                        <li onClick={() => getBedNum(5)}>5</li>
                        <li onClick={() => getBedNum(6)}>6</li>
                        <li onClick={() => getBedNum(7)}>7</li>
                        <li onClick={() => getBedNum(8)}>8</li>
                        <li onClick={() => getBedNum(9)}>9</li>
                        <li onClick={() => getBedNum(10)}>10</li>
                    </ul>
                </div>
                <div>
                    <p className="purposePara">Bathroom</p>
                    <div style={{ width: "20vw", margin: "0px" }} onClick={() => showMode("bathroom")} className='locationDesk'>
                        <p>{bathNum}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='bathroom' className='propertyListDesk'>
                        <li onClick={() => getBathNum(1)}>1</li>
                        <li onClick={() => getBathNum(2)}>2</li>
                        <li onClick={() => getBathNum(3)}>3</li>
                        <li onClick={() => getBathNum(4)}>4</li>
                        <li onClick={() => getBathNum(5)}>5</li>
                        <li onClick={() => getBathNum(6)}>6</li>
                        <li onClick={() => getBathNum(7)}>7</li>
                        <li onClick={() => getBathNum(8)}>8</li>
                        <li onClick={() => getBathNum(9)}>9</li>
                        <li onClick={() => getBathNum(10)}>10</li>
                    </ul>
                </div>
                <div>
                    <p className="purposePara">Toilet</p>
                    <div style={{ width: "20vw", margin: "0px" }} onClick={() => showMode("toilet")} className='locationDesk'>
                        <p>{toiletNum}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='toilet' className='propertyListDesk'>
                        <li onClick={() => getToiletNum(1)}>1</li>
                        <li onClick={() => getToiletNum(2)}>2</li>
                        <li onClick={() => getToiletNum(3)}>3</li>
                        <li onClick={() => getToiletNum(4)}>4</li>
                        <li onClick={() => getToiletNum(5)}>5</li>
                        <li onClick={() => getToiletNum(6)}>6</li>
                        <li onClick={() => getToiletNum(7)}>7</li>
                        <li onClick={() => getToiletNum(8)}>8</li>
                        <li onClick={() => getToiletNum(9)}>9</li>
                        <li onClick={() => getToiletNum(10)}>10</li>
                    </ul>
                </div>
            </div>

            <div className="checkBoxSelect">
                <label htmlFor="furnished"><input type="checkbox" name="furnished" id="furnished" />Furnished</label>
                <label htmlFor="serviced"><input type="checkbox" name="serviced" id="serviced" />Serviced</label>
                <label htmlFor="newlybuilt"><input type="checkbox" name="newlybuilt" id="newlybuilt" />Newly-built</label>
            </div>

            <div className="puporseDivDesk">
                <div>
                    <p className="purposePara">Property price</p>
                    <div style={{ width: "20vw", margin: "0px" }} onClick={() => showMode("price")} className='locationDesk'>
                        <p>price</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='price' className='propertyListDesk'>

                    </ul>
                </div>
                <div>
                    <p className="purposePara">Currency</p>
                    <div style={{ width: "20vw", margin: "0px" }} onClick={() => showMode("currency")} className='locationDesk'>
                        <p>{curr}</p>
                        <img src={down} alt="" />
                    </div>
                    <ul style={{ height: "150px", width: "20vw", position: "absolute", zIndex: "1", margin: "0px" }} id='currency' className='propertyListDesk'>
                        <li onClick={() => getCurr("Nigerian Naira (₦)")}>Nigerian Naira (₦)</li>
                        <li onClick={() => getCurr("US Dollar ($)")}>US Dollar ($)</li>
                        <li onClick={() => getCurr("Euro (€)")}>Euro (€)</li>
                        <li onClick={() => getCurr("Pound (£)")}>Pound (£)</li>
                    </ul>
                </div>
                <div>
                    <p className="purposePara">Period</p>
                    <div style={{ width: "20vw", margin: "0px" }} onClick={() => showMode("rate")} className='locationDesk'>
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