import blueLogo from '../../img/logo_blue.svg'
import searchImage from '../../img/Search.svg'
import { useNavigate } from 'react-router-dom';
import "../Desktop/Header.css"
import "./MainDesk.css"
import one from '../../img/Rectangle 307.png'
import two from '../../img/Rectangle 309.png'
import three from '../../img/image 5.png'
import four from '../../img/image 5 (1).png'
import five from '../../img/image 5 (2).png'
import { useState } from 'react'
import call from '../../img/Call.svg'
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import star from '../../img/star.svg'
import link from '../../img/link.svg'
import "../Desktop/Result.css"
import Similar from './Similiar';
import Seventh from './../Desktop/Seventh';

const MainDesk = () => {
    const navigate = useNavigate()
    const [mainImage, setMainImage] = useState(two)
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
                        <img onClick={() => setMainImage(one)} src={one} alt="" />
                        <img onClick={() => setMainImage(three)} src={three} alt="" />
                        <img onClick={() => setMainImage(four)} src={four} alt="" />
                        <img onClick={() => setMainImage(five)} src={five} alt="" />
                    </div>
                </div>
                <div className='deskDescAbout'>
                    <p className="houseTypeDesk">4 Bedroom flat for rent <span>Rent</span></p>
                    <p className="houseLocationDesk">Off Allen Avenue Allen Avenue Ikeja Lagos</p>
                    <p className="houseDescDesk">4 bedroom House for rent Off Allen Avenue Allen Avenue Ikeja Lagos renting for ₦6,500,000/year. Contact the seller for more information about the house or browse all our range of properties in Allen Avenue Ikeja Lagos</p>
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
                        <div className="imgLinkMob">
                            <img src={star} alt="" />
                            <img src={link} alt="" />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "3rem" }}>
                        <p className="housePriceDesk">₦15,000,000/Year</p>
                        <p className="contactAgent"><img src={call} alt="" /> Contact Agent</p>
                    </div>
                </div>
                <p style={{ fontSize: "24px" }} className="descFeatures">Features:</p>
                <ul style={{ fontSize: "24px" }} className="descList">
                    <li>All rooms en-suite</li>
                    <li>Adequate car space</li>
                    <li>Fitted kitchen</li>
                    <li>Balcony</li>
                    <li>Family lounge</li>
                    <li>Inbuilt speakers</li>
                    <li>Chandeliers</li>
                    <li>Cctv</li>
                    <li>Fitted wardrobe</li>
                    <li>Modern sanitary wares</li>
                    <li>Jacuzzi</li>
                    <li>Shower cubicle</li>
                    <li>Secured estate</li>
                    <li>Security post</li>
                    <li>Interlocked flooring</li>
                </ul>
            </div>
            <div style={{ marginLeft: "3%" }}>
                <Similar />
            </div>
            <div style={{ textAlign: "center" }}>
                <Seventh />
            </div>
        </div>
    )
}

export default MainDesk