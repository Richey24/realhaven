import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import settingWhite from "../../img/SettingWhite.svg"
import "./Main.css"
import down from '../../img/Icon.svg'
import search from "../../img/Search.svg"
import { useState, useEffect } from 'react';
import locate from "../../img/Location.svg"
import back from "../../img/arrowblack.svg"
import activity from "../../img/Activity.svg"
import link from "../../img/Group.svg"
import share from "../../img/share.svg"
import del from "../../img/Delete.svg"
import expand from "../../img/expand.svg"
import moveleft from "../../img/moveleft.svg"
import moveright from "../../img/moveright.svg"
import room from '../../img/blackbed.svg'
import bathroom from '../../img/blackbath.svg'
import toilet from '../../img/blacktoilet.svg'
import cancel from "../../img/canc.svg"
import call from "../../img/Call.svg"
import "../../Homepage/DescMob/Main.css"
import { Offcanvas, Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';
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
    const [active, setActive] = useState("all")
    const [fAct, setFAct] = useState("Recent")
    const [showTop, setShowTop] = useState(false)
    const [spin, setSpin] = useState(false)
    const [singleHouse, setSingleHouse] = useState({})
    const [num, setNum] = useState(0)
    const [images, setImages] = useState([])
    const [houses, setHouses] = useState([])
    const [fHouses, setFHouses] = useState([])
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) {
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
            document.getElementById("moveleft").addEventListener("click", () => {
                if (num <= 0) return
                setNum(num - 1)
            })
            document.getElementById("moveright").addEventListener("click", () => {
                if (num >= images.length - 1) return
                setNum(num + 1)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleTopClose = () => {
        setShowTop(false)
    }

    const getHouseByID = async (house) => {
        setSpin(true)
        setSingleHouse(house)
        console.log(house);
        setImages([house.mainImage.url, ...house.otherImages.url])
        document.getElementById("theModal").classList.toggle("shown")
        document.getElementById("mainContent").classList.toggle("blurBack")
        setSpin(false)
        setShowTop(true)
    }

    const closeModal = () => {
        document.getElementById("theModal").classList.toggle("shown")
        document.getElementById("mainContent").classList.toggle("blurBack")
        setNum(0)
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

    const listSelect = () => {
        document.getElementById("listFilter").classList.toggle("shown")
    }

    const getAct = (value) => {
        setFAct(value)
        listSelect()
    }

    const fullScreen = () => {
        const fullScreen = document.getElementById("fullScreenDiv")
        document.getElementById("dashSideMain").style.display = "none"
        document.getElementById("listDashDiv").style.display = "none"
        fullScreen.style.display = "block"
    }

    const increase = () => {
        if (num >= images.length - 1) return
        setNum(num + 1)
    }

    const decrease = () => {
        if (num <= 0) return
        setNum(num - 1)
    }

    const hideScreen = () => {
        document.getElementById("dashSideMain").style.display = "flex"
        document.getElementById("listDashDiv").style.display = "block"
        document.getElementById("fullScreenDiv").style.display = "none"
    }

    const setActiveImg = (i) => {
        setNum(i)
    }

    return (
        <div className="listDashDiv">
            <div id="listDashDiv">
                {
                    spin && (
                        <div className="spinDiv">
                            <Spinner animation="border" style={{ color: "#2E7DD7" }} />
                        </div>
                    )
                }
                <div className="dashListTop">
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

                <div id="mainContent">

                    <div className="listFilterDiv">
                        <div className="listP">
                            <p onClick={() => getActive("all")} className={active === "all" ? "activeList" : ""}>All<span>200</span></p>
                            <p onClick={() => getActive("pro")} className={active === "pro" ? "activeList" : ""}>Promoted<span>54</span></p>
                            <p onClick={() => getActive("sold")} className={active === "sold" ? "activeList" : ""}>Sold<span>78</span></p>
                            <p onClick={() => getActive("active")} className={active === "active" ? "activeList" : ""}>Active<span>122</span></p>
                            <p onClick={() => getActive("draft")} className={active === "draft" ? "activeList" : ""}>Draft<span>4</span></p>
                        </div>
                        <div>
                            <div className="listSearch"><img src={search} alt="" /><input placeholder="apartment" type="text" id="searchInput" /></div>
                            <div className="filterDivList">
                                <div onClick={listSelect} className="listFilter"><p>{fAct}</p> <img src={down} alt="" /></div>
                                <ul id="listFilter" className="listSelect">
                                    <li onClick={() => getAct("Default")} style={{ color: fAct === "Default" && "#2E7DD7" }}>Default</li>
                                    <li onClick={() => getAct("Recent")} style={{ color: fAct === "Recent" && "#2E7DD7" }}>Recent</li>
                                    <li onClick={() => getAct("Date Posted (desc)")} style={{ color: fAct === "Date Posted (desc)" && "#2E7DD7" }}>Date Posted (desc)</li>
                                    <li onClick={() => getAct("Alphabetical (asc)")} style={{ color: fAct === "Alphabetical (asc)" && "#2E7DD7" }}>Alphabetical (asc)</li>
                                    <li onClick={() => getAct("Alphabetical (desc)")} style={{ color: fAct === "Alphabetical (desc)" && "#2E7DD7" }}>Alphabetical (desc)</li>
                                </ul>
                            </div>
                            <p className="listPro">Promote Properties</p>
                        </div>
                    </div>

                    <p className="resultAmt">Displaying {houses.length} results</p>

                    <div className="mainContent">
                        {
                            houses.map((house, i) => (
                                <div onClick={() => getHouseByID(house)} className="inCon" key={i}>
                                    <img className="inMain" src={house.mainImage?.url} alt="" />
                                    <p className="inTitle">{house.title}</p>
                                    <p className="inAdd"><img src={locate} alt="" />{house.aptUnit} {house.address} {house.city} {house.state}</p>
                                    <h6>₦{house.price}{house.pricePer}</h6>
                                </div>
                            ))
                        }
                    </div>

                    <p className="loadMore">Load more...</p>

                </div>

                <div id="theModal" className="theModal">
                    <div className="modeHead">
                        <p onClick={closeModal}><img src={back} alt="" />Back to listings</p>
                        <div>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="activity">Activity</Tooltip>
                                }
                            >
                                <img src={activity} alt="" />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="activity">Link</Tooltip>
                                }
                            >
                                <img src={link} alt="" />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="activity">Share</Tooltip>
                                }
                            >
                                <img src={share} alt="" />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="activity">Delete</Tooltip>
                                }
                            >
                                <img src={del} alt="" />
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="modeBody">
                        <img className="mainBodyImg" src={images[num]} alt="" />
                        <img onClick={fullScreen} className="expand" src={expand} alt="" />
                        <img onClick={decrease} className="moveleft" src={moveleft} alt="" />
                        <img onClick={increase} className="moveright" src={moveright} alt="" />
                        <p className="count">{num + 1}/{images.length}</p>
                        <div className="otherImg">
                            {
                                images.map((image, i) => (
                                    <img onClick={() => setActiveImg(i)} className={num === i ? "activeImg" : ""} key={i} src={image} alt="" />
                                ))
                            }
                        </div>
                        <div className="singleTitle">
                            <p>{singleHouse.title}</p>
                            <span>{singleHouse.purpose}</span>
                        </div>
                        <p className="singlePrice">₦{singleHouse.price}{singleHouse.pricePer}</p>
                        <div className="singleLoc">
                            <p>
                                <img src={locate} alt="" />
                                {singleHouse.aptUnit} {singleHouse.address} {singleHouse.city} {singleHouse.state}
                            </p>
                            <div>
                                <div data-num={singleHouse.noOfBedroom}><img src={room} alt="" /></div>
                                <div data-num={singleHouse.noOfBedroom}><img src={bathroom} alt="" /></div>
                                <div data-num={singleHouse.noOfBedroom}><img src={toilet} alt="" /></div>
                            </div>
                        </div>
                        <p className="singleDesc">{singleHouse.description}</p>
                        <p className="singleContact"><img src={call} alt="" />Contact Agent</p>
                        <p className="singleFeat">Features</p>
                        <ul className="singleAdd">
                            {
                                singleHouse.additionalFeatures?.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div id="fullScreenDiv" className="fullScreenDiv">
                <img src={images[num]} alt="" id="fullScreen" />
                <img onClick={decrease} className="moveleft" id="moveleft" src={moveleft} alt="" />
                <img onClick={increase} className="moveright" id="moveright" src={moveright} alt="" />
                <img onClick={hideScreen} id="cancel" className="expand" src={cancel} alt="" />
                <p id="count" className="count">{num + 1}/{images.length}</p>
            </div>

        </div>
    )
}

export default Main