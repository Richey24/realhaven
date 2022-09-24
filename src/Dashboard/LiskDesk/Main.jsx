import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import settingWhite from "../../img/SettingWhite.svg"
import "./Main.css"
import NaijaStates from 'naija-state-local-government';
import down from '../../img/Icon.svg'
import search from "../../img/Search.svg"
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

const Main = () => {
    const [loc, setLoc] = useState("Lagos")
    const [active, setActive] = useState("all")
    const [showTop, setShowTop] = useState(false)
    const [spin, setSpin] = useState(false)
    const [singleHouse, setSingleHouse] = useState({})
    const [houses, setHouses] = useState([])
    const [fHouses, setFHouses] = useState([])
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const email = document.cookie.split("=")[1]
        if (!email) {
            navigate("/login")
        } else {
            (async () => {
                setSpin(true)
                const res = await axios.get(`${url}/v1/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }, { validateStatus: () => true })
                if (res.status !== 200) {
                    document.cookie = "token=;expires=" + new Date(0).toUTCString()
                    document.cookie = "id=;expires=" + new Date(0).toUTCString()
                    navigate("/")
                    return
                }
                const userRes = await res.data
                setUser(userRes)
                const rep = await axios.get(`${url}/v1/property/find?userId=${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const houseResult = await rep.data
                setHouses(houseResult.properties)
                setFHouses(houseResult.properties)
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

    const getHouseByID = async (house) => {
        setSpin(true)
        setSingleHouse(house)
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

    const getActive = (x) => {
        setActive(x)
    }

    return (
        <div className="listDashDiv">
            {
                spin && (
                    <div className="spinDiv">
                        <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                    </div>
                )
            }
            <div className="dashTop">
                <div id="theListText">
                    <h6>Your Listing</h6>
                    <p>All the properties you’ve listed on your agency</p>
                </div>
                <div id="theListIcon">
                    <img src={noti} alt="" />
                    <img src={settingWhite} alt="" />
                    <div>
                        <img className="dashTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                        <p>{user.firstName}</p>
                    </div>
                </div>
            </div>

            <div className="listFilterDiv">
                <div className="listP">
                    <p onClick={() => getActive("all")} className={active === "all" && "activeList"}>All<span>200</span></p>
                    <p onClick={() => getActive("pro")} className={active === "pro" && "activeList"}>Promoted<span>54</span></p>
                    <p onClick={() => getActive("sold")} className={active === "sold" && "activeList"}>Sold<span>78</span></p>
                    <p onClick={() => getActive("active")} className={active === "active" && "activeList"}>Active<span>122</span></p>
                    <p onClick={() => getActive("draft")} className={active === "draft" && "activeList"}>Draft<span>4</span></p>
                </div>
                <div>
                    <div className="listSearch"><img src={search} alt="" /><input placeholder="apartment" type="text" id="searchInput" /></div>
                    <div className="listFilter">Recent <img src={down} alt="" /></div>
                    <p className="listPro">Promote Properties</p>
                </div>
            </div>

            {
                houses.map((house, i) => (
                    <div key={i} onClick={() => getHouseByID(house)} className="listContentDiv">
                        <img className="listContentDivImg" src={house.mainImage?.url} alt="" />
                        <div>
                            <h4>{house.title}</h4>
                            <h5><img src={locate} alt="" />{house.address}</h5>
                            <div className="descImgInfoMob">
                                <div className="blueBackMob">
                                    <div data-value={house.noOfBedroom} className="roomImgMob">
                                        <img src={room} alt="" />
                                    </div>
                                    <div className="bathroomImgMob" data-value={house.noOfBathroom}>
                                        <img src={bathroom} alt="" />
                                    </div>
                                    <div className="toiletImgMob" data-value={house.noOfToilet}>
                                        <img src={toilet} alt="" />
                                    </div>
                                </div>
                                <p className="listAmtDesk">{house.price} {house.pricePer}</p>
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
                        <img className="canvasMainImage" src={singleHouse.mainImage?.url} alt="" />
                        <p className="canvasHouseTitle">{singleHouse.title}<span>{singleHouse.purpose}</span></p>
                        <h5 className="canvasAddress"><img src={locate} alt="" />{singleHouse.address}</h5>
                        <div style={{ marginLeft: "5%", marginTop: "23px" }} className="blueBackMob">
                            <div data-value={singleHouse.noOfBedroom} className="roomImgMob">
                                <img src={room} alt="" />
                            </div>
                            <div className="bathroomImgMob" data-value={singleHouse.noOfBathroom}>
                                <img src={bathroom} alt="" />
                            </div>
                            <div className="toiletImgMob" data-value={singleHouse.noOfToilet}>
                                <img src={toilet} alt="" />
                            </div>
                        </div>
                        <p style={{ margin: "0px", textAlign: "left", marginLeft: "5%", marginTop: "13px" }} className="listAmtDesk">{singleHouse.price} {singleHouse.pricePer}</p>
                        <p className="canvasInfo">{singleHouse.description}</p>
                        <p className="otherPhotos">Other photos</p>
                        <div className="otherPhotoDiv">
                            {
                                singleHouse.otherImages?.url?.map((image, i) => (
                                    <img key={i} src={image} alt="" />

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