import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import search from "../../img/Search.svg"
import "../DeskDash/Main.css"
import "./Main.css"
import NaijaStates from 'naija-state-local-government';
import down from '../../img/Icon.svg'
import { useState, useEffect } from 'react';
import "../../Homepage/Desktop/Header.css"
import locate from "../../img/Location.svg"
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import "../../Homepage/DescMob/Main.css"
import { Offcanvas, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import url from '../../url';

const Main = () => {
    const [loc, setLoc] = useState("Lagos")
    const [active, setActive] = useState("all")
    const [showTop, setShowTop] = useState(false)
    const [user, setUser] = useState({})
    const [spin, setSpin] = useState(false)
    const [singleHouse, setSingleHouse] = useState({})
    const [houses, setHouses] = useState([])
    const [fHouses, setFHouses] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const email = document.cookie.split("=")[1]
        if (!email) {
            navigate("/login")
        } else {
            (async () => {
                setSpin(true)
                const res = await axios.post(`${url}/user/get`, { email: email })
                const rep = await axios.post(`${url}/house/user/get`, { email: email })
                const houseResult = await rep.data
                const result = await res.data
                setUser(result)
                setHouses(houseResult)
                setFHouses(houseResult)
                setSpin(false)
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


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

    const getHouseByID = async (id) => {
        setSpin(true)
        const res = await axios.get(`${url}/house/get/one/${id}`)
        const result = await res.data
        console.log(result);
        setSingleHouse(result)
        setSpin(false)
        setShowTop(true)
    }

    // filter the house
    const filterHouse = (value) => {
        if (value === "All") {
            setHouses(fHouses)
        } else {
            const filterResult = fHouses.filter((house) => house.purpose === value)
            setHouses(filterResult)
        }
    }

    return (
        <div className="mainDashDiv">
            {
                spin && (
                    <div className="spinDiv">
                        <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                    </div>
                )
            }
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
                    <p onClick={() => { setActive("all"); filterHouse("All") }} className={active === "all" ? "activeListDesk" : ""}>All({fHouses.length})</p>
                    <p onClick={() => { setActive("sale"); filterHouse("Sale") }} className={active === "sale" ? "activeListDesk" : ""}>Sale({fHouses.filter((house) => house.purpose === "Sale").length})</p>
                    <p onClick={() => { setActive("rent"); filterHouse("Rent") }} className={active === "rent" ? "activeListDesk" : ""}>Rent({fHouses.filter((house) => house.purpose === "Rent").length})</p>
                    <p onClick={() => { setActive("buy"); filterHouse("Buy") }} className={active === "buy" ? "activeListDesk" : ""}>Buy({fHouses.filter((house) => house.purpose === "Buy").length})</p>
                </div>
            </div>


            {
                houses.map((house, i) => (
                    <div key={i} onClick={() => getHouseByID(house.Id)} className="listContentDiv">
                        <img className="listContentDivImg" src={`${url}/image/${house.images?.split(",")[0]}`} alt="" />
                        <div>
                            <h4>{house.title}</h4>
                            <h5><img src={locate} alt="" />{house.address}</h5>
                            <div className="descImgInfoMob">
                                <div className="blueBackMob">
                                    <div data-value={house.no_of_bedroom} className="roomImgMob">
                                        <img src={room} alt="" />
                                    </div>
                                    <div className="bathroomImgMob" data-value={house.no_of_bathroom}>
                                        <img src={bathroom} alt="" />
                                    </div>
                                    <div className="toiletImgMob" data-value={house.no_of_toilet}>
                                        <img src={toilet} alt="" />
                                    </div>
                                </div>
                                <p className="listAmtDesk">{house.price} {house.currency}{house.period}</p>
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
                        <img className="canvasMainImage" src={`${url}/image/${singleHouse.images?.split(",")[0]}`} alt="" />
                        <p className="canvasHouseTitle">{singleHouse.title}<span>{singleHouse.purpose}</span></p>
                        <h5 className="canvasAddress"><img src={locate} alt="" />{singleHouse.address}</h5>
                        <div style={{ marginLeft: "5%", marginTop: "23px" }} className="blueBackMob">
                            <div data-value={singleHouse.no_of_bedroom} className="roomImgMob">
                                <img src={room} alt="" />
                            </div>
                            <div className="bathroomImgMob" data-value={singleHouse.no_of_bathroom}>
                                <img src={bathroom} alt="" />
                            </div>
                            <div className="toiletImgMob" data-value={singleHouse.no_of_toilet}>
                                <img src={toilet} alt="" />
                            </div>
                        </div>
                        <p style={{ margin: "0px", textAlign: "left", marginLeft: "5%", marginTop: "13px" }} className="listAmtDesk">{singleHouse.price} {singleHouse.currency}{singleHouse.period}</p>
                        <p className="canvasInfo">{singleHouse.description}</p>
                        <p className="otherPhotos">Other photos</p>
                        <div className="otherPhotoDiv">
                            {
                                singleHouse.images?.slice(0, singleHouse.images?.length - 1)?.split(",").map((image, i) => (
                                    <img key={i} src={`${url}/image/${image}`} alt="" />
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