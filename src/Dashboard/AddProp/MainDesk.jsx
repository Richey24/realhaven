import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import "../DeskDash/Main.css"
import "./MainDesk.css"
import down from '../../img/Icon.svg'
import "../../Homepage/Desktop/Header.css"
import { useState } from 'react';
import preview from "../../img/preview.svg"
import pen from "../../img/Edit.svg"
import setting from "../../img/Setting.svg"
import combined from "../../img/combined.svg"
import dashboard from "../../img/dashboard.svg"
import disblue from "../../img/Vector-blue.svg"
import bag from "../../img/Bag.svg"
import discover from "../../img/Discovery.svg"
import logo from "../../img/logo_blue.svg"
import message from "../../img/Message.svg"
import home from "../../img/Home.svg"
import logout from "../../img/Logout.svg"
import { useEffect } from "react"
import { useNavigate, useLocation } from 'react-router-dom';
import { Toast, ProgressBar, Offcanvas } from "react-bootstrap"
import axios from 'axios';
import url from '../../url';
import FourthLayer from "./FourthLayer"

let token = ""
let id = ""
for (let i = 0; i < document.cookie?.split(" ").length; i++) {
    if (document.cookie?.split(" ")[i].split("=")[0] === "token") {
        token = document.cookie?.split(" ")[i].split("=")[1]
    }
    if (document.cookie?.split(" ")[i].split("=")[0] === "id") {
        id = document.cookie?.split(" ")[i].split("=")[1]
    }
}

const MainDesk = ({ showTop, handleTopClose }) => {
    const [purpose, setPurpose] = useState("Purpose")
    const [propType, setPropType] = useState("Property type")
    const [curr, setCurr] = useState("Naira (₦)")
    const [rate, setRate] = useState("/year")
    const [spin, setSpin] = useState(false)
    const [previewImage1, setPreviewImage1] = useState("")
    const [previewImage2, setPreviewImage2] = useState("")
    const [previewImage3, setPreviewImage3] = useState("")
    const [previewImage4, setPreviewImage4] = useState("")
    const [previewImage5, setPreviewImage5] = useState("")
    const [previewImage6, setPreviewImage6] = useState("")
    const [property, setProperty] = useState({})
    const [showA, setShowA] = useState(false)
    const [now, setNow] = useState(25)
    const [info, setInfo] = useState(["Add Basic Information", "Let's get started"])
    const [step, setStep] = useState(1)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

    useEffect(() => {
        if (!id) {
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
        setSpin(true)
        event.preventDefault()
        const mainProp = new FormData()
        mainProp.append("userId", id)
        mainProp.append("title", property.title)
        mainProp.append("address", property.address)
        mainProp.append("aptUnit", property.aptUnit)
        mainProp.append("country", property.country)
        mainProp.append("state", property.state)
        mainProp.append("city", property.city)
        mainProp.append("postalCode", property.postalCode)
        mainProp.append("purpose", property.purpose)
        mainProp.append("propertyType", property.propertyType)
        mainProp.append("noOfBedroom", property.noOfBedroom)
        mainProp.append("noOfBathroom", property.noOfBathroom)
        mainProp.append("noOfToilet", property.noOfToilet)
        mainProp.append("description", property.description)
        mainProp.append("stateOfBuilding", property.stateOfBuilding)
        mainProp.append("price", property.price)
        mainProp.append("currency", property.currency)
        mainProp.append("pricePer", property.pricePer)
        mainProp.append("additionalFeatures", property.additionalFeatures)
        mainProp.append("mainImage", property.mainImage)
        for (let i = 0; i < property.otherImages.length; i++) {
            mainProp.append("file", property.otherImages[i])
        }
        const res = await axios.post(`${url}/v1/property`, mainProp, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            validateStatus: () => true
        })
        if (res.status === 200) {
            setShowA(true)
            setTimeout(() => {
                const myToast = document.getElementById("myToast")
                myToast.innerHTML = "Property Uploaded Successfully"
                setSpin(false)
                navigate("/listing")
            }, 10)
            setTimeout(() => {
                const myToast = document.getElementById("myToast")
                myToast.innerHTML = "Kindly fill all the required field"
                setSpin(false)
                setShowA(false)
            }, 6000)
        } else {
            setShowA(true)
            setTimeout(() => {
                const myToast = document.getElementById("myToast")
                myToast.innerHTML = "Something went wrong, try again"
                setSpin(false)
            }, 10)
            setTimeout(() => {
                const myToast = document.getElementById("myToast")
                myToast.innerHTML = "Kindly fill all the required field"
                setSpin(false)
                setShowA(false)
            }, 6000)
        }
        setSpin(false)
    }

    const moveOn = () => {
        const firstLayer = document.getElementById("firstLayer")
        const secondLayer = document.getElementById("secondLayer")
        const thirdLayer = document.getElementById("thirdLayer")
        const fourthLayer = document.getElementById("fourthLayer")
        const finalButton = document.getElementById("finalButton")
        const elements = document.getElementsByTagName("input")
        const desc = document.getElementById("desc")
        switch (now) {
            case 25:
                if (!elements.title.value || !elements.address.value || !elements.country.value || !elements.city.value || !elements.state.value || !elements.postalCode.value) {
                    setShowA(true)
                    setTimeout(() => {
                        setShowA(false)
                    }, 6000)
                    return
                }
                setStep(step + 1)
                setNow(now + 25)
                setInfo(["Add Property description", "Nicely done, keep going!"])
                firstLayer.style.display = "none"
                thirdLayer.style.display = "none"
                fourthLayer.style.display = "none"
                secondLayer.style.display = "block"
                window.scrollTo(0, 0)
                break;
            case 50:
                if (!elements.bedroom.value || !elements.bathroom.value || !elements.toilet.value || !desc.value || propType === "Property type" || purpose === "Purpose") {
                    setShowA(true)
                    setTimeout(() => {
                        setShowA(false)
                    }, 6000)
                    return
                }
                setStep(step + 1)
                setNow(now + 25)
                setInfo(["Add Property description", "Almost there now!"])
                firstLayer.style.display = "none"
                secondLayer.style.display = "none"
                fourthLayer.style.display = "none"
                thirdLayer.style.display = "block"
                window.scrollTo(0, 0)
                break;
            case 75:
                if (!elements.price.value || !elements.features.value) {
                    setShowA(true)
                    setTimeout(() => {
                        setShowA(false)
                    }, 6000)
                    return
                }
                if (!elements.mainImage.files[0]) {
                    setShowA(true)
                    setTimeout(() => {
                        const myToast = document.getElementById("myToast")
                        myToast.innerHTML = "The First Image Is Required"
                    }, 10)
                    setTimeout(() => {
                        const myToast = document.getElementById("myToast")
                        myToast.innerHTML = "Kindly fill all the required field"
                        setShowA(false)
                    }, 6000)
                    return
                }
                const conArray = [elements.furnished, elements.serviced, elements.newlybuilt].filter((element) => element.checked === true)

                const newArray = conArray.map((con) => con.value)

                const imageArray = [elements.secondImage.files[0], elements.thirdImage.files[0], elements.fourthImage.files[0], elements.fifthImage.files[0], elements.sixthImage.files[0]].filter((image) => image !== undefined)

                const theProp = {
                    title: elements.title.value,
                    address: elements.address.value,
                    aptUnit: elements.apt.value,
                    city: elements.city.value,
                    state: elements.state.value,
                    country: elements.country.value,
                    postalCode: elements.postalCode.value,
                    purpose: purpose,
                    propertyType: propType,
                    noOfBedroom: elements.bedroom.value,
                    noOfBathroom: elements.bathroom.value,
                    noOfToilet: elements.toilet.value,
                    description: desc.value,
                    stateOfBuilding: newArray,
                    price: elements.price.value,
                    currency: curr,
                    pricePer: rate,
                    additionalFeatures: elements.features.value.split(","),
                    mainImage: elements.mainImage.files[0],
                    otherImages: imageArray
                }
                setProperty(theProp)
                setStep(step + 1)
                setNow(now + 25)
                setInfo(["Post preview, Check if the details are correct", "Yay! you did it!"])
                secondLayer.style.display = "none"
                thirdLayer.style.display = "none"
                firstLayer.style.display = "none"
                finalButton.style.display = "none"
                fourthLayer.style.display = "block"
                window.scrollTo(0, 0)
                break;
            default:
                break;
        }
    }
    const moveBack = () => {
        if (now === 25) {
            return
        }
        const firstLayer = document.getElementById("firstLayer")
        const secondLayer = document.getElementById("secondLayer")
        const thirdLayer = document.getElementById("thirdLayer")
        switch (now) {
            case 50:
                setStep(step - 1)
                setNow(now - 25)
                setInfo(["Add Basic Information", "Let's get started"])
                secondLayer.style.display = "none"
                thirdLayer.style.display = "none"
                firstLayer.style.display = "block"
                break;
            case 75:
                setStep(step - 1)
                setNow(now - 25)
                setInfo(["Add Property description", "Nicely done, keep going!"])
                thirdLayer.style.display = "none"
                firstLayer.style.display = "none"
                secondLayer.style.display = "block"
                break;
            default:
                break;
        }
    }

    // window.navigator.geolocation.getCurrentPosition(async (position) => {
    //     const { latitude, longitude } = position.coords;
    //     const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a06ee162a5a1476a87cdbec1d7c4f197`)
    //     const loc = await res.data
    //     console.log(loc);
    // }, console.log("sad"))

    return (
        <div className="mainDashDiv">
            <Toast className="myToast" show={showA} onClose={() => setShowA(false)}>
                <Toast.Header>
                    <strong id="myToast" className="me-auto">Kindly fill all the required field</strong>
                </Toast.Header>
            </Toast>
            <Offcanvas style={{ width: "80%" }} className="topCanvas" show={showTop} onHide={handleTopClose} placement="start">
                <Offcanvas.Header className="startHead" closeButton>
                    <Offcanvas.Title><p className="startLogo"><img src={logo} alt="" />Haven</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <p style={pathname === "/post" ? { background: "#17457A" } : {}} onClick={() => navigate("/post")} className="dashNewProp"><img src={combined} alt="" />New Property</p>


                        <p onClick={() => navigate("/home")} className={pathname === "/home" ? "dashDash" : "dashDis"}><img src={pathname === "/home" ? home : home} alt="" />Home</p>


                        <p className="dashProfile"><img src={pathname === "/dashboard" ? dashboard : dashboard} alt="" />Dashboard</p>


                        <p className="dashReq" data-num="3"><img src={bag} alt="" />Requests</p>


                        <p onClick={() => navigate("/listing")} className={pathname === "/listing" ? "dashDash" : "dashDis"}><img src={pathname === "/listing" ? disblue : discover} alt="" />Listings</p>


                        <p className="dashMess" data-num="4"><img src={message} alt="" />Messages</p>


                        <p className="dashProfile"><img src={setting} alt="" />Settings</p>


                        <p onClick={logOut} style={{ marginTop: "6rem" }} className="dashDis"><img src={logout} alt="" />LOGOUT</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <form onSubmit={postProperty}>
                <div className="dashTop">
                    <div>
                        <p>Post Property</p>
                        <h4 className="getAttDesk">Get your properties the attention of 500k+ home seekers</h4>
                    </div>
                    <div className="getAttDiv">
                        <span data-num="3"><img src={noti} alt="" /></span>
                        <img src={setting} alt="" />
                        <div>
                            <img src={dp} alt="" />
                            <p>Rejoice dev</p>
                        </div>
                    </div>
                </div>
                <div className="proBarDiv">
                    <div>
                        <p>STEP {step} of 4</p>
                        <h4>{info[0]}</h4>
                    </div>
                    <div className="divBar">
                        <ProgressBar className="proBar" now={now} />
                        <p>{info[1]}<span>{now}%</span></p>
                    </div>
                </div>
                <div id="firstLayer">
                    <div className="deskAddTitle">
                        <label htmlFor="title">Title</label>
                        <br />
                        <input placeholder="Name your property E.g “Five Bedroom Luxury Semi Detached Duplex" type="text" name="title" id="title" />
                    </div>
                    <div className="puporseDivDesk">
                        <div>
                            <p className="purposePara">Address</p>
                            <input name="address" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="Enter the property address" className='locationDesk' type="text" />
                        </div>
                        <div>
                            <p className="purposePara" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "19.5vw" }}>Apt/Unit <span className="aptSpan">optional</span></p>
                            <input name="apt" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="000" className='locationDesk' type="text" />
                        </div>
                        <div>
                            <p className="purposePara">Country</p>
                            <input name="country" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="Nigeria" className='locationDesk' type="text" />
                        </div>
                    </div>

                    <div className="puporseDivDesk">
                        <div>
                            <p className="purposePara">City</p>
                            <input name="city" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="City/Town" className='locationDesk' type="text" />
                        </div>
                        <div>
                            <p className="purposePara">State</p>
                            <input name="state" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="State/Province" className='locationDesk' type="text" />
                        </div>
                        <div>
                            <p className="purposePara">Postal code</p>
                            <input name="postalCode" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="******" className='locationDesk' type="text" />
                        </div>
                    </div>

                </div>

                <div id="secondLayer" style={{ display: "none" }}>
                    <div className="puporseDivDesk">
                        <div>
                            <p className="purposePara">Purpose</p>
                            <div style={{ margin: "0px" }} onClick={() => showMode("mode")} className='locationDesk'>
                                <p>{purpose}</p>
                                <img src={down} alt="" />
                            </div>
                            <ul style={{ height: "auto", position: "absolute", zIndex: "1", margin: "0px" }} id='mode' className='propertyListDesk'>
                                <li onClick={() => getPurpose("Rent")}>Rent</li>
                                <li onClick={() => getPurpose("Sell")}>Sell</li>
                                <li onClick={() => getPurpose("Buy")}>Buy</li>
                            </ul>
                        </div>
                        <div>
                            <p className="purposePara">Property type</p>
                            <div style={{ margin: "0px" }} onClick={() => showMode("apartment")} className='locationDesk'>
                                <p>{propType}</p>
                                <img src={down} alt="" />
                            </div>
                            <ul style={{ height: "150px", position: "absolute", zIndex: "1", margin: "0px" }} id='apartment' className='propertyListDesk'>
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
                            <input name="bedroom" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bedrooms" className='locationDesk' type="number" />
                        </div>
                        <div>
                            <p className="purposePara">Bathroom</p>
                            <input name="bathroom" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bathrooms" className='locationDesk' type="number" />
                        </div>
                        <div>
                            <p className="purposePara">Toilet</p>
                            <input name="toilet" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Toilets" className='locationDesk' type="number" />
                        </div>
                    </div>


                    <div className="addTextAreaDiv">
                        <p className="purposePara">Description</p>
                        <textarea id="desc" name="description" placeholder="Tell us everything about the property..."></textarea>
                    </div>

                    <div className="checkBoxSelect">
                        <label htmlFor="furnished"><input type="checkbox" name="furnished" id="furnished" value="Furnished" />Furnished</label>
                        <label htmlFor="serviced"><input type="checkbox" name="serviced" id="serviced" value="Serviced" />Serviced</label>
                        <label htmlFor="newlybuilt"><input type="checkbox" name="newlybuilt" id="newlybuilt" value="Newly built" />Newly-built</label>
                    </div>

                </div>

                <div id="thirdLayer" style={{ display: "none" }}>
                    <div className="puporseDivDesk">
                        <div style={{ width: "30%" }}>
                            <p className="purposePara">Property price</p>
                            <div>
                                <input id="price" name="price" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="Property Price" className='locationDesk' type="number" />
                            </div>
                        </div>
                        <div style={{ width: "30%" }}>
                            <p className="purposePara">Currency</p>
                            <div style={{ width: "100%", margin: "0px" }} onClick={() => showMode("currency")} className='locationDesk'>
                                <p>{curr}</p>
                                <img src={down} alt="" />
                            </div>
                            <ul style={{ height: "150px", position: "absolute", zIndex: "1", margin: "0px" }} id='currency' className='propertyListDesk'>
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
                            <ul style={{ height: "150px", position: "absolute", zIndex: "1", margin: "0px" }} id='rate' className='propertyListDesk'>
                                <li onClick={() => getRate("/year")}>/year</li>
                                <li onClick={() => getRate("/month")}>/month</li>
                                <li onClick={() => getRate("/week")}>/week</li>
                            </ul>
                        </div>
                    </div>

                    <div className="additionFeat">
                        <p className="purposePara">Additional Features</p>
                        <input name="features" placeholder="Add features" type="text" />
                        <h6>Suggested: <span>Balcony, Family Lounge, Swimming Pool, CCTV, Jacuzzi, Adequate car space, Security</span></h6>
                    </div>
                    <div className="addHouseImages">
                        <p className="purposePara">Add Images</p>
                        <input name="mainImage" onChange={(event) => getPreviewImage1(event, 1)} type="file" id="mainImage" hidden />
                        <label className="mainImage" htmlFor="mainImage">
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

                </div>

                <div className="addFinalButton" id="finalButton">
                    <p className="addFinal1"><img src={pen} alt="" />Save to Drafts</p>
                    <div>
                        <p onClick={moveBack} style={{ background: "white", color: "black", border: "1px solid #E5E7EB" }} className="addFinal2">Back</p>
                        <p onClick={moveOn} className="addFinal2">Next</p>
                    </div>
                </div>
                <FourthLayer spin={spin} property={property} />
            </form>
        </div>
    )
}

export default MainDesk