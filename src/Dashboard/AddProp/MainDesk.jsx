/* eslint-disable react-hooks/exhaustive-deps */
import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import "../DeskDash/Main.css"
import "./MainDesk.css"
import down from '../../img/Icon.svg'
import { useState } from 'react';
import preview from "../../img/preview.svg"
import pen from "../../img/Edit.svg"
import settingWhite from "../../img/SettingWhite.svg"
import cancel from "../../img/cancel.svg"
import check from "../../img/speech-bubble.svg"
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from "react"
import { Toast, ProgressBar, Offcanvas, Spinner, OffcanvasBody } from "react-bootstrap"
import axios from 'axios';
import url from '../../url';
import FourthLayer from "./FourthLayer"
import NaijaStates from 'naija-state-local-government';

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

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MainDesk = () => {
    const [purpose, setPurpose] = useState("Purpose")
    const [propType, setPropType] = useState("Property type")
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
    const [user, setUser] = useState({})
    const [state, setState] = useState(NaijaStates.states()[24])
    const [city, setCity] = useState(NaijaStates.lgas(state).lgas[0])
    const [showDraft, setShowDraft] = useState(false)
    const [draft, setDraft] = useState({})
    const [keys, setKey] = useState("")
    const navigate = useNavigate()
    const loc = useLocation()

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

    useEffect(() => {
        if (!id) {
            logOut()
        } else {
            (async () => {
                setSpin(true)
                const res = await axios.get(`${url}/v1/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }, { validateStatus: () => true })

                if (res.status !== 200) {
                    logOut()
                    return
                }
                const result = await res.data
                setUser(result)
                setSpin(false)
            })()
            if (loc.state) {
                const { draftPro, key } = loc.state
                setDraft(draftPro)
                setKey(key)
                setState(draftPro.state)
                setCity(draftPro.city)
                setPurpose(draftPro.purpose)
                setPropType(draftPro.propertyType)
            }
        }
    }, [])

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

    const getState = (value) => {
        setState(value)
        setCity(NaijaStates.lgas(value).lgas[0])
        showMode("state")
    }

    const getCity = (value) => {
        setCity(value)
        showMode("city")
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

    const saveDraft = () => {
        setShowDraft(false)
        const elements = document.getElementsByTagName("input")
        const desc = document.getElementById("desc")

        if (!elements.title.value) {
            setShowA(true)
            setTimeout(() => {
                setShowA(false)
            }, 6000)
            return
        }

        const conArray = [elements.furnished, elements.serviced, elements.newlybuilt].filter((element) => element.checked === true)

        const newArray = conArray.map((con) => con.value)

        const imageArray = [elements.secondImage.files[0], elements.thirdImage.files[0], elements.fourthImage.files[0], elements.fifthImage.files[0], elements.sixthImage.files[0]].filter((image) => image !== undefined)

        const price = numberWithCommas(elements.price.value)

        const theProp = {
            title: elements.title.value,
            address: elements.address.value,
            aptUnit: elements.apt.value,
            city: city,
            state: state,
            country: "Nigeria",
            postalCode: elements.postalCode.value,
            purpose: purpose,
            propertyType: propType,
            noOfBedroom: elements.bedroom.value,
            noOfBathroom: elements.bathroom.value,
            noOfToilet: elements.toilet.value,
            description: desc.value,
            stateOfBuilding: newArray,
            price: price,
            pricePer: rate,
            additionalFeatures: elements.features.value.split(","),
            mainImage: elements.mainImage.files[0],
            otherImages: imageArray
        }
        if (keys) {
            localStorage.setItem(String(keys), JSON.stringify(theProp))
        } else {
            let num = 0
            while (localStorage.getItem(String(num)) !== null) {
                num++
            }
            localStorage.setItem(String(num), JSON.stringify(theProp))
        }
        const draftModal = document.getElementById("draftModal")
        const mainDashDiv = document.getElementById("dimDiv")
        draftModal.style.display = "block"
        mainDashDiv.classList.toggle("blurMain")
    }

    const closeDraft = () => {
        const mainDashDiv = document.getElementById("dimDiv")
        const draftModal = document.getElementById("draftModal")
        draftModal.style.display = "none"
        mainDashDiv.classList.toggle("blurMain")
    }

    const postProperty = async (event) => {
        event.preventDefault()
        if (document.activeElement.type !== "submit") return
        setSpin(true)
        const mainProp = new FormData()
        console.log(id);
        console.log(property);
        mainProp.append("userId", id)
        mainProp.append("title", property.title)
        mainProp.append("address", property.address)
        mainProp.append("aptUnit", property.aptUnit)
        mainProp.append("country", "Nigeria")
        mainProp.append("state", property.state)
        mainProp.append("city", property.city)
        mainProp.append("postalCode", property.postalCode)
        mainProp.append("purpose", property.purpose.toLowerCase())
        mainProp.append("propertyType", property.propertyType.toLowerCase())
        mainProp.append("noOfBedroom", property.noOfBedroom)
        mainProp.append("noOfBathroom", property.noOfBathroom)
        mainProp.append("noOfToilet", property.noOfToilet)
        mainProp.append("description", property.description)
        mainProp.append("stateOfBuilding", property.stateOfBuilding)
        mainProp.append("price", property.price)
        mainProp.append("pricePer", property.pricePer)
        for (let i = 0; i < property.additionalFeatures.length; i++) {
            mainProp.append("additionalFeatures", property.additionalFeatures[i])
        }
        mainProp.append("mainImage", property.mainImage)
        for (let i = 0; i < property.otherImages.length; i++) {
            mainProp.append("file", property.otherImages[i])
        }
        console.log(property.additionalFeatures);
        const res = await axios.post(`${url}/v1/property`, mainProp, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            validateStatus: () => true
        })
        setSpin(false)
        const rep = res.data
        console.log(rep);
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
                setNow(25)
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
                if (!elements.title.value || !elements.address.value) {
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
                if (!elements.price.value) {
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

                const price = numberWithCommas(elements.price.value)

                const theProp = {
                    title: elements.title.value,
                    address: elements.address.value,
                    aptUnit: elements.apt.value,
                    city: city,
                    state: state,
                    country: "Nigeria",
                    postalCode: elements.postalCode.value,
                    purpose: purpose,
                    propertyType: propType,
                    noOfBedroom: elements.bedroom.value,
                    noOfBathroom: elements.bathroom.value,
                    noOfToilet: elements.toilet.value,
                    description: desc.value,
                    stateOfBuilding: newArray,
                    price: price,
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

    if (spin) {
        return (
            <div className="spinDiv">
                <Spinner animation="border" style={{ color: "#2E7DD7" }} />
            </div>
        )
    }

    const roundUp = (event) => {
        if (parseInt(event.target.value) > 10) {
            event.target.value = 10
        }
    }

    const deleteDraft = () => {
        setShowDraft(false)
        setTimeout(() => {
            navigate("/home")
        }, 1000)
    }

    return (
        <div>
            <div id="mainDashDiv" className="mainDashDiv">
                <Toast className="myToast" show={showA} onClose={() => setShowA(false)}>
                    <Toast.Header>
                        <strong id="myToast" className="me-auto">Kindly fill all the required field</strong>
                    </Toast.Header>
                </Toast>

                <form onSubmit={postProperty}>
                    <div className="dashTop">
                        <div className="dashTopDiv">
                            <p>Post Property</p>
                            <h4 className="getAttDesk">Get your properties the attention of 500k+ home seekers</h4>
                        </div>
                        <img className="dashTopImg" onClick={() => setShowDraft(true)} src={cancel} alt="" />
                        <div className="dashSec">
                            <img src={noti} alt="" />
                            <img src={settingWhite} alt="" />
                            <div>
                                <img className="dashTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                                <p>{user.firstName}</p>
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
                            <input defaultValue={draft.title} placeholder="Name your property E.g “Five Bedroom Luxury Semi Detached Duplex" type="text" name="title" id="title" />
                        </div>
                        <div className="puporseDivDesk">
                            <div>
                                <p className="purposePara">Address</p>
                                <input defaultValue={draft.address} name="address" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="Enter the property address" className='locationDesk' type="text" />
                            </div>
                            <div>
                                <p className="purposePara" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: "19.5vw" }}>Apt/Unit <span className="aptSpan">optional</span></p>
                                <input defaultValue={draft.aptUnit} name="apt" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="000" className='locationDesk' type="number" />
                            </div>
                            <div>
                                <p className="purposePara">Country</p>
                                <input name="country" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} disabled value="Nigeria" className='locationDesk' type="text" />
                            </div>
                        </div>

                        <div className="puporseDivDesk">
                            <div>
                                <p className="purposePara">State</p>
                                <div style={{ margin: "0px" }} onClick={() => showMode("state")} className='locationDesk'>
                                    <p>{state}</p>
                                    <img src={down} alt="" />
                                </div>
                                <ul style={{ height: "200px", position: "absolute", zIndex: "1", margin: "0px" }} id='state' className='propertyListDesk'>
                                    {
                                        NaijaStates.states().map((state, i) => (
                                            <li onClick={() => getState(state)} key={i}>{state}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <p className="purposePara">City</p>
                                <div style={{ margin: "0px" }} onClick={() => showMode("city")} className='locationDesk'>
                                    <p>{city}</p>
                                    <img src={down} alt="" />
                                </div>
                                <ul style={{ height: "200px", position: "absolute", zIndex: "1", margin: "0px" }} id='city' className='propertyListDesk'>
                                    {
                                        NaijaStates.lgas(state).lgas.map((lga, i) => (
                                            <li onClick={() => getCity(lga)} key={i}>{lga}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div>
                                <p className="purposePara">Postal code</p>
                                <input defaultValue={draft.postalCode} name="postalCode" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="******" className='locationDesk' type="text" />
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
                                    <li onClick={() => getPropType("Cottage")}>Cottage</li>
                                    <li onClick={() => getPropType("Townhouse")}>Townhouse</li>
                                    <li onClick={() => getPropType("Mansion")}>Mansion</li>
                                    <li onClick={() => getPropType("Ranch-style house")}>Ranch-style house</li>
                                    <li onClick={() => getPropType("Condominium")}>Condominium</li>
                                    <li onClick={() => getPropType("Terraced house")}>Terraced house</li>
                                    <li onClick={() => getPropType("Villa")}>Villa</li>
                                    <li onClick={() => getPropType("Mobile home")}>Mobile home</li>
                                    <li onClick={() => getPropType("Farmhouse")}>Farmhouse</li>
                                    <li onClick={() => getPropType("Semi-detached")}>Semi-detached</li>
                                    <li onClick={() => getPropType("Single-family home")}>Single-family home</li>
                                    <li onClick={() => getPropType("Tiny house movement")}>Tiny house movement</li>
                                    <li onClick={() => getPropType("Tree house")}>Tree house</li>
                                    <li onClick={() => getPropType("American Craftsman")}>American Craftsman</li>
                                    <li onClick={() => getPropType("Colonial architecture")}>Colonial architecture</li>
                                    <li onClick={() => getPropType("Hut")}>Hut</li>
                                    <li onClick={() => getPropType("Victorian architecture")}>Victorian architecture</li>
                                    <li onClick={() => getPropType("Tudor architecture")}>Tudor architecture</li>
                                    <li onClick={() => getPropType("Castle")}>Castle</li>
                                    <li onClick={() => getPropType("Contemporary architecture")}>Contemporary architecture</li>
                                    <li onClick={() => getPropType("Log cabin")}>Log cabin</li>
                                </ul>
                            </div>

                            <div>
                                <p className="purposePara">Property price</p>
                                <div style={{ paddingTop: "0px", paddingRight: "0px", cursor: "unset" }} className='locationDesk'>
                                    <p>₦</p>
                                    <input defaultValue={draft.price?.replace(',', '')} id="price" name="price" placeholder="150,000" type="number" />
                                </div>
                            </div>
                        </div>


                        <div className="puporseDivDesk">
                            <div>
                                <p className="purposePara">Bedroom</p>
                                <input defaultValue={draft.noOfBedroom} onChange={roundUp} name="bedroom" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bedrooms" className='locationDesk' type="number" />
                            </div>
                            <div>
                                <p className="purposePara">Bathroom</p>
                                <input defaultValue={draft.noOfBathroom} onChange={roundUp} name="bathroom" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Bathrooms" className='locationDesk' type="number" />
                            </div>
                            <div>
                                <p className="purposePara">Toilet</p>
                                <input defaultValue={draft.noOfToilet} onChange={roundUp} name="toilet" style={{ margin: "0px", paddingTop: "0px", outline: "none", cursor: "unset" }} placeholder="No of Toilets" className='locationDesk' type="number" />
                            </div>
                        </div>


                        <div className="addTextAreaDiv">
                            <p className="purposePara">Description</p>
                            <textarea defaultValue={draft.description} id="desc" name="description" placeholder="Tell us everything about the property..."></textarea>
                        </div>

                        <div className="checkBoxSelect">
                            <label htmlFor="furnished"><input defaultChecked={draft.stateOfBuilding?.includes("Furnished") ? true : false} type="checkbox" name="furnished" id="furnished" value="Furnished" />Furnished</label>
                            <label htmlFor="serviced"><input defaultChecked={draft.stateOfBuilding?.includes("Serviced") ? true : false} type="checkbox" name="serviced" id="serviced" value="Serviced" />Serviced</label>
                            <label htmlFor="newlybuilt"><input defaultChecked={draft.stateOfBuilding?.includes("Newly built") ? true : false} type="checkbox" name="newlybuilt" id="newlybuilt" value="Newly built" />Newly-built</label>
                        </div>

                    </div>

                    <div id="thirdLayer" style={{ display: "none" }}>
                        {/* <div>
                            <p className="purposePara">Period</p>
                            <div style={{ margin: "0px" }} onClick={() => showMode("rate")} className='locationDesk' id="locationDesk">
                                <p>{rate}</p>
                                <img src={down} alt="" />
                            </div>
                            <ul style={{ height: "120px", position: "absolute", zIndex: "1", margin: "0px" }} id='rate' className='propertyListDesk'>
                                <li onClick={() => getRate("/year")}>/year</li>
                                <li onClick={() => getRate("/month")}>/month</li>
                                <li onClick={() => getRate("/week")}>/week</li>
                            </ul>
                        </div> */}

                        <div className="additionFeat">
                            <p className="purposePara">Additional Features</p>
                            <input defaultValue={draft.additionalFeatures?.join()} name="features" placeholder="Add features" type="text" />
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
                        <p onClick={saveDraft} className="addFinal1"><img src={pen} alt="" />Save to Drafts</p>
                        <div>
                            <p onClick={moveBack} style={{ background: "white", color: "black", border: "1px solid #E5E7EB" }} className="addFinal2">Back</p>
                            <p id="addFinal33" onClick={moveOn} className="addFinal2">Continue</p>
                        </div>
                    </div>
                    <FourthLayer spin={spin} property={property} />
                </form>
            </div>
            <div id="draftModal" className="draftModal">
                <img onClick={closeDraft} className="draftCancel" src={cancel} alt="" />
                <img className="draftCheck" src={check} alt="" />
                <h6>Draft saved</h6>
                <p>Your drafts has been saved for later <span onClick={() => navigate("/listing")}>in your listings</span></p>
            </div>
            <Offcanvas className="mainDraftCan" placement="bottom" show={showDraft} onHide={() => setShowDraft(false)}>
                <div onClick={() => setShowDraft(false)} className="draftCanDiv"></div>
                <OffcanvasBody className="draftCanvas">
                    <h6>Are you sure you want to cancel?</h6>
                    <div onClick={deleteDraft}>
                        <p>Yes, Delete</p>
                    </div>
                    <div onClick={saveDraft} style={{ background: "#F3F4F6" }}>
                        <p style={{ color: "#374151" }}>No, Save draft</p>
                    </div>
                </OffcanvasBody>
            </Offcanvas>

        </div>
    )
}

export default MainDesk