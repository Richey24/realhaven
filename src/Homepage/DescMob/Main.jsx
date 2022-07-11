import "./Main.css"
import "../Mobile/Header.css"
import "../Mobile/Result.css"
import logo from '../../img/logo_blue.svg'
import topToggle from '../../img/MenuAlt4Outline.svg'
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import shield from '../../img/Shield-Fail.svg'
import { useNavigate } from 'react-router-dom';
import one from '../../img/Rectangle 307.png'
import two from '../../img/Rectangle 309.png'
import three from '../../img/image 5.png'
import four from '../../img/image 5 (1).png'
import five from '../../img/image 5 (2).png'
import call from '../../img/Call.svg'

const Main = () => {
    const [showTop, setShowTop] = useState(false)
    const [search, setSearch] = useState("")
    const [mainImage, setMainImage] = useState(two)
    const navigate = useNavigate()

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
        <div style={{ paddingBottom: "4rem" }}>
            <div className="descMain">
                <div className='fixedTop'>
                    <p className='fixedTopPara'><img src={logo} alt="" />Haven</p>
                    <img onClick={handleTopShow} src={topToggle} alt="" />
                </div>
            </div>

            <div className="descImages">
                <img className="descMainImage" src={mainImage} alt="" />
                <div className="descOtherImage">
                    <img onClick={() => setMainImage(one)} src={one} alt="" />
                    <img onClick={() => setMainImage(three)} src={three} alt="" />
                    <img onClick={() => setMainImage(four)} src={four} alt="" />
                    <img onClick={() => setMainImage(five)} src={five} alt="" />
                </div>
            </div>
            <div className="theDesc">
                <p className="mobType">4 BEDROOM HOUSE FOR RENT <span>Rent</span></p>
                <p className="mobLocation">Off Allen Avenue Allen Avenue Ikeja Lagos</p>
                <p className="mobAddress">4 bedroom House for rent Off Allen Avenue Allen Avenue Ikeja Lagos renting for ₦6,500,000/year. See property details on PropertyPro.ng or browse all our range of properties in Allen Avenue Ikeja Lagos</p>
                <p className="mobAmount">₦15,000,000/Year</p>
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