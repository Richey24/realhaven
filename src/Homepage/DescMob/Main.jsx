import "./Main.css"
import "../Mobile/Header.css"
import "../Mobile/Result.css"
import logo from '../../img/logo_blue.svg'
import topToggle from '../../img/MenuAlt4Outline.svg'
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Footer from "../Mobile/Footer"
import Seventh from "../Mobile/Seventh"
import Similar from "./Similiar"
import shield from '../../img/Shield-Fail.svg'
import { useNavigate } from 'react-router-dom';
import call from '../../img/Call.svg'
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import star from '../../img/star.svg'
import link from '../../img/link.svg'
import expand from "../../img/expand.svg"
import moveleft from "../../img/moveleft.svg"
import cancel from "../../img/canc.svg"
import moveright from "../../img/moveright.svg"
import { useEffect } from "react"

const Main = ({ property }) => {
    const [showTop, setShowTop] = useState(false)
    const [search, setSearch] = useState("")
    const [images, setImages] = useState([])
    const [num, setNum] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        setImages([property.mainImage?.url, ...property.otherImages?.url])
    }, [property.mainImage?.url, property.otherImages?.url])

    window.scrollTo(0, 0)

    const handleTopClose = () => {
        setShowTop(false)
    }

    const handleTopShow = () => {
        setShowTop(true)
    }

    const getSearch = (e) => {
        setSearch(e.target.value)
    }

    const increase = () => {
        if (num >= images.length - 1) {
            return
        }
        setNum(num + 1)
    }

    const decrease = () => {
        if (num <= 0) {
            return
        }
        setNum(num - 1)
    }

    const expandImgMob = () => {
        document.getElementById("mainDescMob").style.display = "none"
        document.getElementById("descFullMob").style.display = "block"
    }

    const goBackMob = () => {
        document.getElementById("descFullMob").style.display = "none"
        document.getElementById("mainDescMob").style.display = "block"
    }

    let id = ""
    for (let i = 0; i < document.cookie?.split(" ").length; i++) {
        if (document.cookie?.split(" ")[i].split("=")[0] === "id") {
            id = document.cookie?.split(" ")[i].split("=")[1]
        }
    }

    return (
        <div>
            <div id="mainDescMob" style={{ paddingBottom: "3rem" }}>
                <div className="descMain">
                    <div className='fixedTop'>
                        <p className='fixedTopPara'><img src={logo} alt="" />Haven</p>
                        <img onClick={handleTopShow} src={topToggle} alt="" />
                    </div>
                </div>

                <div className="descImages">
                    <div className="descMobAbs">
                        <img className="descMainImage" src={images[num]} alt="" />
                        <img onClick={expandImgMob} className="expMob" src={expand} alt="" />
                        {num > 0 && <img className="leftMoveMob" onClick={decrease} src={moveleft} alt="" />}
                        {num < images.length - 1 && <img className="rightMoveMob" onClick={increase} src={moveright} alt="" />}
                    </div>
                    <div className="descOtherImage">
                        {
                            images.map((image, i) => (
                                <img className={num === i ? "descAct" : ""} key={i} onClick={() => setNum(i)} src={image} alt="" />
                            ))
                        }
                    </div>
                </div>
                <div className="theDesc">
                    <p className="mobType">{property.title}<span style={{ marginLeft: "0.5rem" }}>{property.purpose}</span></p>
                    <p className="mobLocation">{property.address} {property.city} {property.state}</p>
                    <p className="mobAddress">{property.description}</p>
                    <div className="descImgInfoMob">
                        <div className="blueBackMob">
                            <div data-value={property.noOfBedroom} className="roomImgMob">
                                <img src={room} alt="" />
                            </div>
                            <div className="bathroomImgMob" data-value={property.noOfBathroom}>
                                <img src={bathroom} alt="" />
                            </div>
                            <div className="toiletImgMob" data-value={property.noOfToilet}>
                                <img src={toilet} alt="" />
                            </div>
                        </div>
                        <div className="imgLinkMob">
                            <img src={star} alt="" />
                            <img src={link} alt="" />
                        </div>
                    </div>
                    <p className="mobAmount">₦{property.price}{property.pricePer}</p>
                    <p className="mobContact"><img src={call} alt="" /> Contact Agent</p>
                </div>
                <p className="descFeatures">Features:</p>
                <ul className="descList">
                    {
                        property.additionalFeatures?.map((feat, i) => (
                            <li key={i}>{feat}</li>
                        ))
                    }
                </ul>

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
                            <li onClick={() => { handleTopClose(); navigate(id ? '/home' : '/register') }}>{id ? "Dashboard" : "Sign up"}</li>
                            <li onClick={() => { handleTopClose(); navigate(id ? '/listing' : '/login') }}>{id ? "Listing" : "Sign in"}</li>
                        </ul>
                        <p style={{ marginTop: "5rem" }} onClick={() => { handleTopClose(); navigate(id ? '/post' : '/login') }} className='postProps'>Post a property</p>
                    </Offcanvas.Body>
                </Offcanvas>
                <Similar property={property} />
                <Seventh />
                <Footer />
            </div>
            <div id="descFullMob" className="descFullMOb">
                <img className="descFullImgMob" src={images[num]} alt="" />
                {num > 0 && <img style={{ top: "40%" }} className="leftMoveMob" onClick={decrease} src={moveleft} alt="" />}
                {num < images.length - 1 && <img style={{ top: "40%" }} className="rightMoveMob" onClick={increase} src={moveright} alt="" />}
                <img onClick={goBackMob} className='descCancMob' src={cancel} alt="" />
                <p>{num + 1}/{images.length}</p>
            </div>
        </div>
    )
}

export default Main