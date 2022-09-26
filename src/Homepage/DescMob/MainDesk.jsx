import blueLogo from '../../img/logo_blue.svg'
import searchImage from '../../img/Search.svg'
import { useNavigate } from 'react-router-dom';
import "../Desktop/Header.css"
import "./MainDesk.css"
import { useEffect, useState } from 'react'
import call from '../../img/Call.svg'
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import star from '../../img/star.svg'
import link from '../../img/link.svg'
import "../Desktop/Result.css"
import Similar from './Similiar';
import Seventh from './../Desktop/Seventh';

const MainDesk = ({ property }) => {
    const navigate = useNavigate()
    const [mainImage, setMainImage] = useState("")

    useEffect(() => {
        setMainImage(property.mainImage?.url)
    }, [property.mainImage?.url])
    let id = ""
    for (let i = 0; i < document.cookie?.split(" ").length; i++) {
        if (document.cookie?.split(" ")[i].split("=")[0] === "id") {
            id = document.cookie?.split(" ")[i].split("=")[1]
        }
    }
    return (
        <div>
            <div style={{ textAlign: "left" }}>
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
                    <img className='mainImgDeskDesc' src={mainImage} alt="" />
                    <div className='otherImageDesk'>
                        {
                            property.otherImages?.url?.map((image, i) => (
                                <img loading='lazy' key={i} onClick={() => setMainImage(image)} src={image} alt="" />
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
                        <p className="contactAgent"><img src={call} alt="" /> Contact Agent</p>
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
            </div>
            <div style={{ marginLeft: "3%" }}>
                <Similar property={property} />
            </div>
            <div style={{ textAlign: "center" }}>
                <Seventh />
            </div>
        </div>
    )
}

export default MainDesk