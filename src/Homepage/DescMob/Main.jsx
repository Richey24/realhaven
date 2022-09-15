import "./Main.css"
import "../Mobile/Header.css"
import "../Mobile/Result.css"
import logo from '../../img/logo_blue.svg'
import topToggle from '../../img/MenuAlt4Outline.svg'
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import shield from '../../img/Shield-Fail.svg'
import { useNavigate } from 'react-router-dom';
import call from '../../img/Call.svg'
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import star from '../../img/star.svg'
import link from '../../img/link.svg'

const Main = ({ property }) => {
    const [showTop, setShowTop] = useState(false)
    const [search, setSearch] = useState("")
    const [mainImage, setMainImage] = useState(property.mainImage?.url)
    const navigate = useNavigate()

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

    return (
        <div style={{ paddingBottom: "3rem" }}>
            <div className="descMain">
                <div className='fixedTop'>
                    <p className='fixedTopPara'><img src={logo} alt="" />Haven</p>
                    <img onClick={handleTopShow} src={topToggle} alt="" />
                </div>
            </div>

            <div className="descImages">
                <img className="descMainImage" src={mainImage} alt="" />
                <div className="descOtherImage">
                    {
                        property.otherImage?.map((image, i) => (
                            <img onClick={() => setMainImage(image.url)} src={image.url} alt="" />
                        ))
                    }
                </div>
            </div>
            <div className="theDesc">
                <p className="mobType">{property.title}<span>{property.purpose}</span></p>
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
                <p className="mobAmount">{property.price}{property.currency}{property.pricePer}</p>
                <p className="mobContact"><img src={call} alt="" /> Contact Agent</p>
            </div>
            <p className="descFeatures">Features:</p>
            <ul className="descList">
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
                        <li onClick={() => navigate('/register')}>Sign up</li>
                        <li onClick={() => navigate('/login')}>Sign in</li>
                    </ul>
                    <p className='postProps'>Post a property</p>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Main