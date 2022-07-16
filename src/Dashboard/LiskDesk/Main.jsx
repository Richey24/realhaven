import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import search from "../../img/Search.svg"
import "../DeskDash/Main.css"
import "./Main.css"
import NaijaStates from 'naija-state-local-government';
import down from '../../img/Icon.svg'
import { useState } from 'react';
import "../../Homepage/Desktop/Header.css"
import two from '../../img/Rectangle 309.png'
import three from '../../img/image 5.png'
import four from '../../img/image 5 (1).png'
import five from '../../img/image 5 (2).png'
import six from '../../img/image 5 (3).png'
import seven from '../../img/image 5 (4).png'
import eight from '../../img/image 5 (5).png'
import nine from '../../img/image 5 (6).png'
import locate from "../../img/Location.svg"
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import "../../Homepage/DescMob/Main.css"
import { Offcanvas } from 'react-bootstrap';

const images = [two, three, four]
const canvasImages = [four, five, six, seven, eight, nine]
const Main = () => {
    const [loc, setLoc] = useState("Lagos")
    const [active, setActive] = useState("all")
    const [showTop, setShowTop] = useState(false)


    const showMode = (id) => {
        document.getElementById(id).classList.toggle("showDrop")
    }

    const getLoc = (value) => {
        setLoc(value)
        showMode("location")
    }

    const handleTopClose = () => {
        setShowTop(false)
    }

    const handleTopShow = () => {
        setShowTop(true)
    }

    return (
        <div className="mainDashDiv">
            <div className="dashTop">
                <div>
                    <img src={search} alt="" />
                    <input className="listingInput" type="text" placeholder="Search for properties titles, location etc" />
                </div>
                <div>
                    <span data-num="3"><img src={noti} alt="" /></span>
                    <img src={dp} alt="" />
                </div>
            </div>

            <div className="listFilterDiv">
                <p className="listFilterPara">Listings</p>
                <div className="listInsideDiv">
                    <div>
                        <div style={{ minWidth: "169px", width: "auto" }} onClick={() => showMode("location")} className='locationDesk'>
                            <p style={{ fontSize: "14px", marginRight: "10px" }}>{loc}</p>
                            <img src={down} alt="" />
                        </div>
                        <ul style={{ width: "auto", position: "absolute", zIndex: "1" }} id='location' className='propertyListDesk'>
                            {
                                NaijaStates.states().map((state, i) => (
                                    <li onClick={() => getLoc(state)} key={i} >{state}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <div style={{ width: "169px" }} onClick={() => showMode("apartment")} className='locationDesk'>
                            <p style={{ fontSize: "14px" }}>Apartments</p>
                            <img src={down} alt="" />
                        </div>
                        <ul style={{ width: "169px", position: "absolute", zIndex: "1" }} id='apartment' className='propertyListDesk'>
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
                </div>
            </div>

            <div className="buyWrapper">
                <div className="listFilterBuy">
                    <p onClick={() => setActive("all")} className={active === "all" ? "activeListDesk" : ""}>All(150)</p>
                    <p onClick={() => setActive("sale")} className={active === "sale" ? "activeListDesk" : ""}>Sale(75)</p>
                    <p onClick={() => setActive("rent")} className={active === "rent" ? "activeListDesk" : ""}>Rent(30)</p>
                    <p onClick={() => setActive("buy")} className={active === "buy" ? "activeListDesk" : ""}>Buy(5)</p>
                </div>
            </div>


            {
                images.map((image, i) => (
                    <div key={i} onClick={handleTopShow} className="listContentDiv">
                        <img className="listContentDivImg" src={image} alt="" />
                        <div>
                            <h4>4 bedroom for rent</h4>
                            <h5><img src={locate} alt="" />Off Allen Avenue Allen Avenue Ikeja Lagos</h5>
                            <div className="descImgInfoMob">
                                <div className="blueBackMob">
                                    <div data-value="4" className="roomImgMob">
                                        <img src={room} alt="" />
                                    </div>
                                    <div className="bathroomImgMob" data-value="2">
                                        <img src={bathroom} alt="" />
                                    </div>
                                    <div className="toiletImgMob" data-value="5">
                                        <img src={toilet} alt="" />
                                    </div>
                                </div>
                                <p className="listAmtDesk">₦15,000,000/Year</p>
                            </div>
                        </div>
                    </div>
                ))
            }


            <Offcanvas className="listCanvas" show={showTop} onHide={handleTopClose} placement="end">
                <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ padding: '0' }}>
                    <center>
                        <img className="canvasMainImage" src={two} alt="" />
                        <p className="canvasHouseTitle">4 Bedroom house for rent <span>Rent</span></p>
                        <h5 className="canvasAddress"><img src={locate} alt="" />Off Allen Avenue Allen Avenue Ikeja Lagos</h5>
                        <div style={{ marginLeft: "5%", marginTop: "23px" }} className="blueBackMob">
                            <div data-value="4" className="roomImgMob">
                                <img src={room} alt="" />
                            </div>
                            <div className="bathroomImgMob" data-value="2">
                                <img src={bathroom} alt="" />
                            </div>
                            <div className="toiletImgMob" data-value="5">
                                <img src={toilet} alt="" />
                            </div>
                        </div>
                        <p style={{ margin: "0px", textAlign: "left", marginLeft: "5%", marginTop: "13px" }} className="listAmtDesk">₦15,000,000/Year</p>
                        <p className="canvasInfo">4 bedroom House for rent Off Allen Avenue Allen Avenue Ikeja Lagos renting for ₦6,500,000/year. Contact me for more information about the house or browse through my other house collection</p>
                        <p className="otherPhotos">Other photos</p>
                        <div className="otherPhotoDiv">
                            {
                                canvasImages.map((image, i) => (
                                    <img key={i} src={image} alt="" />
                                ))
                            }
                        </div>
                    </center>
                </Offcanvas.Body>
            </Offcanvas>


        </div>
    )
}

export default Main