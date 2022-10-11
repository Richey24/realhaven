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
import emp from "../../img/empty.svg"
import building from "../../img/building.svg"
import bigDel from "../../img/bigdel.svg"
import bigCopy from "../../img/bigcopy.svg"
import canc from "../../img/cancel.svg"
import "../../Homepage/DescMob/Main.css"
import { Offcanvas, Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import url from '../../url';
import Promote from "./Promote"

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
    const [empty, setEmpty] = useState(false)
    const [houses, setHouses] = useState([])
    const [fHouses, setFHouses] = useState([])
    const [delID, setDelID] = useState("")
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) {
            document.cookie = "token=;expires=" + new Date(0).toUTCString()
            document.cookie = "id=;expires=" + new Date(0).toUTCString()
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
                if (houseResult.properties.length < 1) {
                    setEmpty(true)
                }
                setHouses(houseResult.properties)
                setFHouses(houseResult.properties)
                setSpin(false)
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleTopClose = () => {
        setShowTop(false)
    }

    const getHouseByID = async (house) => {
        setSpin(true)
        setSingleHouse(house)
        setImages([house.mainImage.url, ...house.otherImages.url])
        document.getElementById("theModal").classList.toggle("shown")
        document.getElementById("darkList").style.display = "block"
        setSpin(false)
        setShowTop(true)
    }

    const closeModal = () => {
        document.getElementById("theModal").classList.toggle("shown")
        document.getElementById("darkList").style.display = "none"
        setNum(0)
    }

    const showDelModal = (id) => {
        setDelID(id)
        document.getElementById("delModal").style.display = "block"
        document.getElementById("darkList").style.display = "block"
    }

    const closeDelModal = () => {
        document.getElementById("delModal").style.display = "none"
        if (!document.getElementById("theModal").classList.contains("shown")) {
            document.getElementById("darkList").style.display = "none"
        }
    }

    const showPromote = () => {
        document.getElementById("promoteDiv").style.display = "block"
        document.getElementById("darkList").style.display = "block"
    }

    // search for house
    const searchHouse = (event) => {
        const arr = fHouses.filter((house) => `${house.title} ${house.address} ${house.state} ${house.city} ${house.description}`.toLowerCase().includes(event.target.value.toLowerCase()))
        setHouses(arr)
        if (arr.length <= 0) {
            setEmpty(true)
        } else {
            setEmpty(false)
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

    const clearSearch = () => {
        if (fHouses.length < 1) {
            navigate("/post")
            return
        }
        document.getElementById("searchInput").value = ""
        setHouses(fHouses)
        setEmpty(false)
    }

    const sortHouse = (val) => {
        const arr = [...fHouses]
        if (val === "aS") {
            const aD = arr.sort((house1, house2) => house1.title.localeCompare(house2.title))
            setHouses(aD)
            getAct("Alphabetical (asc)")
        } else if (val === "aD") {
            const aS = arr.sort((house1, house2) => -1 * house1.title.localeCompare(house2.title))
            setHouses(aS)
            getAct("Alphabetical (desc)")
        } else if (val === "def") {
            setHouses(fHouses)
            getAct("Default")
        } else if (val === "date") {
            const dateSort = arr.sort((house1, house2) => new Date(house1.createdAt) - new Date(house2.createdAt))
            setHouses(dateSort)
            getAct("Date Posted (desc)")
        } else if (val === "recent") {
            const recentSort = arr.sort((house1, house2) => new Date(house2.createdAt).getTime() - new Date(house1.createdAt).getTime())
            setHouses(recentSort)
            getAct("Recent")
        }
    }

    const deleteHouse = async (houseId) => {
        closeDelModal()
        setSpin(true)
        await axios.delete(`${url}/v1/property/${houseId}`)
        const rep = await axios.get(`${url}/v1/property/find?userId=${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const houseResult = await rep.data
        if (houseResult.properties.length < 1) {
            setEmpty(true)
        }
        setHouses(houseResult.properties)
        setFHouses(houseResult.properties)
        setSpin(false)
    }

    const copyLink = (id) => {
        navigator.clipboard.writeText(`${window.location.origin}/desc/${id}`).then(() => {
            document.getElementById("copyModal").style.display = "flex"
            document.getElementById("darkList").style.display = "block"
            setTimeout(() => {
                document.getElementById("copyModal").style.display = "none"
                if (!document.getElementById("theModal").classList.contains("shown")) {
                    document.getElementById("darkList").style.display = "none"
                }
            }, 2500)
        })
    }

    const showIcon = (id) => {
        document.getElementById(id).style.display = "block"
    }
    const hideIcon = (id) => {
        document.getElementById(id).style.display = "none"
    }

    if (spin) {
        return (
            <div className="spinDiv">
                <Spinner animation="border" style={{ color: "#2E7DD7" }} />
            </div>
        )
    }

    return (
        <div className="listDashDiv">
            <div id="listDashDiv">
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
                            <p onClick={() => getActive("all")} className={active === "all" ? "activeList" : ""}>All<span>{fHouses.length}</span></p>
                            <p onClick={() => getActive("pro")} className={active === "pro" ? "activeList" : ""}>Promoted<span>54</span></p>
                            <p onClick={() => getActive("sold")} className={active === "sold" ? "activeList" : ""}>Sold<span>78</span></p>
                            <p onClick={() => getActive("active")} className={active === "active" ? "activeList" : ""}>Active<span>122</span></p>
                            <p onClick={() => getActive("draft")} className={active === "draft" ? "activeList" : ""}>Draft<span>4</span></p>
                        </div>
                        <div>
                            <div className="listSearch"><img src={search} alt="" /><input onChange={searchHouse} placeholder="apartment" type="text" id="searchInput" /></div>

                            <div className="filterDivList">
                                <div onClick={listSelect} className="listFilter"><p>{fAct}</p> <img src={down} alt="" /></div>
                                <ul id="listFilter" className="listSelect">
                                    <li onClick={() => sortHouse("def")} style={{ color: fAct === "Default" && "#2E7DD7" }}>Default</li>
                                    <li onClick={() => sortHouse("recent")} style={{ color: fAct === "Recent" && "#2E7DD7" }}>Recent</li>
                                    <li onClick={() => sortHouse("date")} style={{ color: fAct === "Date Posted (desc)" && "#2E7DD7" }}>Date Posted (desc)</li>
                                    <li onClick={() => sortHouse("aS")} style={{ color: fAct === "Alphabetical (asc)" && "#2E7DD7" }}>Alphabetical (asc)</li>
                                    <li onClick={() => sortHouse("aD")} style={{ color: fAct === "Alphabetical (desc)" && "#2E7DD7" }}>Alphabetical (desc)</li>
                                </ul>
                            </div>
                            <p className="listPro">Promote Properties</p>
                        </div>
                    </div>

                    {!spin && <p className="resultAmt">Displaying {houses.length} results</p>}

                    {
                        empty ?
                            (
                                <div className="emptyDiv">
                                    <img src={fHouses.length < 1 ? building : emp} alt="" />
                                    <h6>{fHouses.length < 1 ? "You haven’t added any properties yet" : "We couldn’t find any results."}</h6>
                                    <p style={fHouses.length < 1 ? { backgroundColor: "white" } : {}} onClick={clearSearch}>{fHouses.length < 1 ? "Add a new property" : "Clear Search"}</p>
                                </div>
                            ) :
                            (
                                <div className="mainContent">
                                    {
                                        houses.map((house, i) => (
                                            <div key={i} onMouseEnter={() => showIcon(house._id)} onMouseLeave={() => hideIcon(house._id)} className="inConDiv">
                                                <div onClick={() => getHouseByID(house)} className="inCon">
                                                    <img className="inMain" src={house.mainImage?.url} alt="" />
                                                    <p className="inTitle">{house.title}</p>
                                                    <p className="inAdd"><img src={locate} alt="" />{house.aptUnit} {house.address} {house.city} {house.state}</p>
                                                    <h6>₦{house.price}{house.pricePer}</h6>
                                                    <div className="hPurpose">
                                                        <p style={{ color: house.purpose === "rent" ? "#306584" : "#BF5E65" }}>{house.purpose}</p>
                                                    </div>
                                                </div>
                                                <div style={{ display: "none" }} id={house._id}>
                                                    <div className="hoverIcon">
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                overlay={
                                                                    <Tooltip
                                                                        id="activity">Promote</Tooltip>
                                                                }
                                                            >
                                                                <img onClick={showPromote} src={activity} alt="" />
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div onClick={() => copyLink(house._id)}>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                overlay={
                                                                    <Tooltip id="copy">Copy link</Tooltip>
                                                                }
                                                            >
                                                                <img src={link} alt="" />
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                overlay={
                                                                    <Tooltip id="share">Share</Tooltip>
                                                                }
                                                            >
                                                                <img src={share} alt="" />
                                                            </OverlayTrigger>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger
                                                                placement="bottom"
                                                                overlay={
                                                                    <Tooltip id="delete">Delete</Tooltip>
                                                                }
                                                            >
                                                                <img onClick={() => showDelModal(house._id)} src={del} alt="" />
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                    }

                    {!spin && houses.length > 6 && !empty && <p className="loadMore">Load more...</p>}

                </div>

                <div id="theModal" className="theModal">
                    <div className="modeHead">
                        <p onClick={closeModal}><img src={back} alt="" />Back to listings</p>
                        <div>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="activity">Promote</Tooltip>
                                }
                            >
                                <img onClick={showPromote} src={activity} alt="" />
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={
                                    <Tooltip id="activity">Copy Link</Tooltip>
                                }
                            >
                                <img onClick={() => copyLink(singleHouse._id)} src={link} alt="" />
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
                                <img onClick={() => showDelModal(singleHouse._id)} src={del} alt="" />
                            </OverlayTrigger>
                        </div>
                    </div>
                    <div className="modeBody">
                        <img className="mainBodyImg" src={images[num]} alt="" />
                        <img onClick={fullScreen} className="expand" src={expand} alt="" />
                        {num > 0 && <img onClick={decrease} className="moveleft" src={moveleft} alt="" />}
                        {num < images.length - 1 && <img onClick={increase} className="moveright" src={moveright} alt="" />}
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
                {num > 0 && <img onClick={decrease} className="moveleft" id="moveleft" src={moveleft} alt="" />}
                {num < images.length - 1 && <img onClick={increase} className="moveright" id="moveright" src={moveright} alt="" />}
                <img onClick={hideScreen} id="cancel" className="expand" src={cancel} alt="" />
                <p id="count" className="count">{num + 1}/{images.length}</p>
            </div>

            <div id="delModal" className="delModal">
                <div className="delFirstDiv">
                    <img src={bigDel} alt="" />
                    <img onClick={closeDelModal} style={{ cursor: "pointer" }} src={canc} alt="" />
                </div>
                <h6>Delete property</h6>
                <p>Are you sure you want to delete this property? This action cannot be undone.</p>
                <div className="delSecondDiv">
                    <button onClick={closeDelModal} className="delCancel">Cancel</button>
                    <button onClick={() => deleteHouse(delID)} className="delDelete">Delete</button>
                </div>
            </div>

            <div id="copyModal" className="copyModal">
                <img src={bigCopy} alt="" />
                <div>
                    <h6>Link copied to clipboard</h6>
                    <p>You can send this link to anyone or post it on your social media for more reach</p>
                </div>
            </div>
            <Promote />
        </div>
    )
}

export default Main