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
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { Toast } from "react-bootstrap"
import axios from 'axios';

const MainDesk = () => {
    const [purpose, setPurpose] = useState("Purpose")
    const [propType, setPropType] = useState("Property type")
    const [curr, setCurr] = useState("Naira (₦)")
    const [rate, setRate] = useState("/year")
    const [previewImage1, setPreviewImage1] = useState("")
    const [previewImage2, setPreviewImage2] = useState("")
    const [previewImage3, setPreviewImage3] = useState("")
    const [previewImage4, setPreviewImage4] = useState("")
    const [previewImage5, setPreviewImage5] = useState("")
    const [previewImage6, setPreviewImage6] = useState("")
    const [showA, setShowA] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const email = document.cookie.split("=")[1]
        if (!email) {
            navigate("/login")
        }
    })

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

    const getCurr = (value) => {
        setCurr(value)
        showMode("currency")
    }

    const getPreviewImage1 = (event, id) => {
        const imgUrl = URL.createObjectURL(event.target.files[0])
        switch (id) {
            case 1:
                setPreviewImage1(imgUrl)
                break;
            case 2:
                setPreviewImage2(imgUrl)
                break;
            case 3:
                setPreviewImage3(imgUrl)
                break;
            case 4:
                setPreviewImage4(imgUrl)
                break;
            case 5:
                setPreviewImage5(imgUrl)
                break;
            case 6:
                setPreviewImage6(imgUrl)
                break;
            default:
                break;
        }
    }

    const postProperty = async (event) => {
        event.preventDefault()
        if (!event.target.mainImage.files[0] || !document.cookie.split("=")[1] || !event.target.title.value || !event.target.address.value || !purpose || !propType || !event.target.bedroom.value || !event.target.bathroom.value || !event.target.toilet.value || !event.target.description.value) {
            setShowA(true)
            setTimeout(() => { setShowA(false) }, 5000)
            return
        }
        const formData = new FormData()
        event.target.mainImage.files[0] && formData.append("image", event.target.mainImage.files[0])
        event.target.secondImage.files[0] && formData.append("image", event.target.secondImage.files[0])
        event.target.thirdImage.files[0] && formData.append("image", event.target.thirdImage.files[0])
        event.target.fourthImage.files[0] && formData.append("image", event.target.fourthImage.files[0])
        event.target.fifthImage.files[0] && formData.append("image", event.target.fifthImage.files[0])
        event.target.sixthImage.files[0] && formData.append("image", event.target.sixthImage.files[0])
        formData.append("email", document.cookie.split("=")[1])
        formData.append("title", event.target.title.value)
        formData.append("address", event.target.address.value)
        formData.append("purpose", purpose)
        formData.append("propType", propType)
        formData.append("bedroom", event.target.bedroom.value)
        formData.append("bathroom", event.target.bathroom.value)
        formData.append("toilet", event.target.toilet.value)
        formData.append("status", (event.target.furnished.checked ? event.target.furnished.value : "") + " " + (event.target.serviced.checked ? event.target.serviced.value : "") + " " + (event.target.newlybuilt.checked ? event.target.newlybuilt.value : ""))
        formData.append("price", event.target.price.value)
        formData.append("currency", curr)
        formData.append("rate", rate)
        formData.append("description", event.target.description.value)
        formData.append("features", event.target.features.value)
        const res = await axios.post("http://localhost:5000/house/post", formData)
        const rep = await res.data
        console.log(rep);
    }

    return (
        <div className="mainDashDiv">
            <Toast className="myToast" show={showA} onClose={() => setShowA(false)}>
                <Toast.Header>
                    <strong id="myToast" className="me-auto">Kindly fill all the required field</strong>
                </Toast.Header>
            </Toast>
            <form onSubmit={postProperty}>
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
                <div className="deskAddTitle">
                    <label htmlFor="title">Address</label>
                    <br />
                    <input placeholder="Address of the property you are posting" type="text" name="address" />
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
                        <input name="bedroom" style={{ width: "20vw", margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bedrooms" className='locationDesk' type="number" />
                    </div>
                    <div>
                        <p className="purposePara">Bathroom</p>
                        <input name="bathroom" style={{ width: "20vw", margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bathrooms" className='locationDesk' type="number" />
                    </div>
                    <div>
                        <p className="purposePara">Toilet</p>
                        <input name="toilet" style={{ width: "20vw", margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Toilets" className='locationDesk' type="number" />
                    </div>
                </div>

                <div className="checkBoxSelect">
                    <label htmlFor="furnished"><input type="checkbox" name="furnished" id="furnished" value="Furnished" />Furnished</label>
                    <label htmlFor="serviced"><input type="checkbox" name="serviced" id="serviced" value="Serviced" />Serviced</label>
                    <label htmlFor="newlybuilt"><input type="checkbox" name="newlybuilt" id="newlybuilt" value="Newly built" />Newly-built</label>
                </div>

                <div className="puporseDivDesk">
                    <div style={{ width: "30%" }}>
                        <p className="purposePara">Property price</p>
                        <div>
                            <input name="price" style={{ width: "20vw", margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="Property Price" className='locationDesk' type="number" />
                        </div>
                    </div>
                    <div style={{ width: "30%" }}>
                        <p className="purposePara">Currency</p>
                        <div style={{ width: "100%", margin: "0px" }} onClick={() => showMode("currency")} className='locationDesk'>
                            <p>{curr}</p>
                            <img src={down} alt="" />
                        </div>
                        <ul style={{ height: "150px", width: "18vw", position: "absolute", zIndex: "1", margin: "0px" }} id='currency' className='propertyListDesk'>
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
                        <ul style={{ height: "150px", width: "18vw", position: "absolute", zIndex: "1", margin: "0px" }} id='rate' className='propertyListDesk'>
                            <li onClick={() => getRate("/year")}>/year</li>
                            <li onClick={() => getRate("/month")}>/month</li>
                            <li onClick={() => getRate("/week")}>/week</li>
                        </ul>
                    </div>
                </div>


                <div className="addTextAreaDiv">
                    <p className="purposePara">Description</p>
                    <textarea name="description" placeholder="Tell us everything about the property..."></textarea>
                </div>

                <div className="additionFeat">
                    <p className="purposePara">Additional Features</p>
                    <input name="features" placeholder="Add features" type="text" />
                    <h6>Suggested: <span>Balcony, Family Lounge, Swimming Pool, CCTV, Jacuzzi, Adequate car space, Security</span></h6>
                </div>
                <div className="addHouseImages">
                    <p className="purposePara">Add Images</p>
                    <input name="mainImage" onChange={(event) => getPreviewImage1(event, 1)} type="file" id="mainImage" hidden />
                    <label htmlFor="mainImage">
                        <div className="addHouseMainImage">
                            <img src={previewImage1 ? `${previewImage1}` : preview} alt="" />
                        </div>
                    </label>
                    <div className="addHouseOtherImage">
                        <input onChange={(event) => getPreviewImage1(event, 2)} type="file" id="secondImage" name="secondImage" hidden />
                        <label htmlFor="secondImage">
                            <div>
                                <img src={previewImage2 ? previewImage2 : preview} alt="" />
                            </div>
                        </label>
                        <input onChange={(event) => getPreviewImage1(event, 3)} type="file" id="thirdImage" name="thirdImage" hidden />
                        <label htmlFor="thirdImage">
                            <div>
                                <img src={previewImage3 ? previewImage3 : preview} alt="" />
                            </div>
                        </label>
                        <input onChange={(event) => getPreviewImage1(event, 4)} type="file" id="fourthImage" name="fourthImage" hidden />
                        <label htmlFor="fourthImage">
                            <div>
                                <img src={previewImage4 ? previewImage4 : preview} alt="" />
                            </div>
                        </label>
                        <input onChange={(event) => getPreviewImage1(event, 5)} type="file" hidden id="fifthImage" name="fifthImage" />
                        <label htmlFor="fifthImage">
                            <div>
                                <img src={previewImage5 ? previewImage5 : preview} alt="" />
                            </div>
                        </label>
                        <input onChange={(event) => getPreviewImage1(event, 6)} type="file" hidden id="sixthImage" name="sixthImage" />
                        <label htmlFor="sixthImage">
                            <div>
                                <img src={previewImage6 ? previewImage6 : preview} alt="" />
                            </div>
                        </label>
                    </div>
                    <p className="purposePara">600x600 or higher recommeneded.</p>
                </div>

                <div className="addFinalButton">
                    <p className="addFinal1"><img src={pen} alt="" />Save to Drafts</p>
                    <button type="submit" className="addFinal2"><img src={send} alt="" />Post Property</button>
                </div>
            </form>
        </div>
    )
}

export default MainDesk