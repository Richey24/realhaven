import blueLogo from '../../img/logo_blue.svg'
import searchImage from '../../img/Search.svg'
import { useNavigate } from 'react-router-dom';
import "../Hero/Header.css"
import "./MainDesk.css"
import { useEffect, useState } from 'react'
import call from '../../img/Call.svg'
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import star from '../../img/star.svg'
import link from '../../img/link.svg'
import expand from "../../img/expand.svg"
import moveleft from "../../img/moveleft.svg"
import moveright from "../../img/moveright.svg"
import cancel from "../../img/canc.svg"
import Similar from './Similiar';
// import Seventh from './../Desktop/Seventh';
// import Footer from "../Mobile/Footer"


let id = ""
for (let i = 0; i < document.cookie?.split(" ").length; i++) {
    if (document.cookie?.split(" ")[i].split("=")[0] === "id") {
        id = document.cookie?.split(" ")[i].split("=")[1]
    }
}

const MainDesk = ({ property }) => {
    const navigate = useNavigate()
    const [num, setNum] = useState(0)
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages([property.mainImage?.url, ...property.otherImages?.url])
    }, [property.mainImage?.url, property.otherImages?.url])


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

    const expandImg = () => {
        document.getElementById("mainDesc").style.display = "none"
        document.getElementById("descFull").style.display = "block"
    }

    const goBack = () => {
        document.getElementById("descFull").style.display = "none"
        document.getElementById("mainDesc").style.display = "block"
    }

    return (
        <div>
            <div id='mainDesc' style={{ textAlign: "left" }}>
                <div className='descDeskMain'>
                    <div style={{ position: "absolute" }} className='myNav'>
                        <p onClick={() => navigate("/")} style={{ cursor: "pointer" }} className='logoNav'><img src={blueLogo} alt="" />Haven</p>
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
                </div>
                <div className='mainImgDeskDiv'>
                    <div className='descImgRel'>
                        <img className='mainImgDeskDesc' src={images[num]} alt="" />
                        <img onClick={expandImg} className='descEx' src={expand} alt="" />
                        {num > 0 && <img onClick={decrease} className='descMl' src={moveleft} alt="" />}
                        {num < images.length - 1 && <img onClick={increase} className='descMr' src={moveright} alt="" />}
                    </div>
                    <div className='otherImageDesk'>
                        {
                            images.map((image, i) => (
                                <img className={num === i ? "descAct" : ""} loading='lazy' key={i} onClick={() => setNum(i)} src={image} alt="" />
                            ))
                        }
                    </div>
                </div>
                <div className='deskDescAbout'>
                    <p className="houseTypeDesk">{property.title} <span>{property.purpose}</span></p>
                    <p className="houseLocationDesk">{property.address} {property.city} {property.state}</p>
                    <p className="houseDescDesk">{property.description}</p>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>
                        <p className="housePriceDesk">₦{property.price}{property.pricePer}</p>
                        <p className="contactAgentDesc"><img src={call} alt="" /> Contact Agent</p>
                    </div>
                </div>
                <p style={{ fontSize: "24px" }} className="descFeatures">Features:</p>
                <ul style={{ fontSize: "24px" }} className="descList">
                    {
                        property.additionalFeatures?.map((feat, i) => (
                            <li key={i}>{feat}</li>
                        ))
                    }
                </ul>
                <div style={{ marginLeft: "3%" }}>
                    <Similar property={property} />
                </div>
                {/* <div style={{ textAlign: "center" }}>
                    <Seventh />
                </div>
                <Footer /> */}
            </div>
            <div id='descFull' className='descFull'>
                <img className='descFullImg' src={images[num]} alt="" />
                {num > 0 && <img onClick={decrease} className='descMl' src={moveleft} alt="" />}
                {num < images.length - 1 && <img onClick={increase} className='descMr' src={moveright} alt="" />}
                <img onClick={goBack} className='descCanc' src={cancel} alt="" />
                <p>{num + 1}/{images.length}</p>
            </div>
        </div>
    )
}

export default MainDesk