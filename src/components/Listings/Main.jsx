import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import settingWhite from "../../img/SettingWhite.svg"
import "./Main.css"
import down from '../../img/Icon.svg'
import search from "../../img/Search.svg"
import { useState, useEffect } from 'react';
import locate from "../../img/Location.svg"
import activity from "../../img/Activity.svg"
import link from "../../img/Group.svg"
import share from "../../img/share.svg"
import del from "../../img/Delete.svg"
import emp from "../../img/empty.svg"
import building from "../../img/building.svg"
import bigDel from "../../img/bigdel.svg"
import bigCopy from "../../img/bigcopy.svg"
import canc from "../../img/cancel.svg"
import dashboard from "../../img/Category-blue.svg"
import dashBlue from "../../img/DashBlue.svg"
import combined from "../../img/combined.svg"
import setting from "../../img/Setting.svg"
import listing from "../../img/Listing.svg"
import listingBlue from "../../img/ListingBlue.svg"
import request from "../../img/Request.svg"
import requestBlue from "../../img/RequestBlue.svg"
import analytics from "../../img/Analytics.svg"
import analyticsBlue from "../../img/AnalyticsBlue.svg"
import logout from "../../img/Logout.svg"
import logo from "../../img/logo_blue.svg"
import { Offcanvas, Spinner, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import url from '../../utils/url';
import Promote from "./Promote"
import Draft from "./Draft"

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

const Main = ({ showTop, handleTopClose }) => {
    const [active, setActive] = useState("all")
    const [fAct, setFAct] = useState("Recent")
    const [spin, setSpin] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [houses, setHouses] = useState([])
    const [fHouses, setFHouses] = useState([])
    const [delID, setDelID] = useState("")
    const [user, setUser] = useState({})
    const nav = useNavigate()
    const { pathname } = useLocation()

    const navigate = (path) => {
        handleTopClose()
        setTimeout(() => {
            nav(path)
        }, 500)
    }

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

    useEffect(() => {
        if (!id) {
            document.cookie = "token=;expires=" + new Date(0).toUTCString()
            document.cookie = "id=;expires=" + new Date(0).toUTCString()
            logOut()
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

    const getHouseByID = async (house) => {
        nav(`/listing/${house._id}`)
    }

    const showDelModal = (id) => {
        setDelID(id)
        document.getElementById("delModal").style.display = "block"
        document.getElementById("darkList").style.display = "block"
    }

    const closeDelModal = () => {
        document.getElementById("delModal").style.display = "none"
        document.getElementById("darkList").style.display = "none"
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
                document.getElementById("darkList").style.display = "none"
            }, 3000)
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
                    <img className="mobileTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
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
                            <p onClick={() => getActive("draft")} className={active === "draft" ? "activeList" : ""}>Draft<span>{Object.keys(localStorage).filter((key) => !isNaN(key)).length}</span></p>
                        </div>
                        <div className="mobileListDiv">
                            <div style={{ backgroundColor: active === 'draft' ? 'white' : '' }} className="listSearch"><img src={search} alt="" /><input style={{ backgroundColor: active === 'draft' ? 'white' : '' }} onChange={searchHouse} placeholder={active === "all" ? "apartment" : "Search"} type="text" id="searchInput" /></div>

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
                            <div className="listPro">
                                <p>Promote Properties</p>
                                <img src={activity} alt="" />
                            </div>
                        </div>
                    </div>

                    {active === "all" && <div>

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

                    </div>}

                    {
                        active === "draft" && <div className="draftDiv">
                            <Draft />
                        </div>
                    }

                </div>
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

            <Offcanvas style={{ width: "80%" }} className="topCanvas" show={showTop} onHide={handleTopClose} placement="start">
                <Offcanvas.Header className="startHead" closeButton>
                    <Offcanvas.Title><p className="startLogo"><img src={logo} alt="" />Haven</p></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <p style={pathname === "/post" ? { background: "#17457A" } : {}} onClick={() => navigate("/post")} className="dashNewProp"><img src={combined} alt="" />New Property</p>

                        <p onClick={() => navigate("/home")} className={pathname === "/home" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/home" ? dashBlue : dashboard} alt="" /><span className="toBeHidden">Dashboard</span></p>

                        <p onClick={() => navigate("/analytics")} className={pathname === "/analytics" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "analytics" ? analyticsBlue : analytics} alt="" /><span className="toBeHidden">Analytics</span></p>


                        <p onClick={() => navigate("/request")} id="dashReq" className={pathname === "/request" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "request" ? requestBlue : request} alt="" /><span className="toBeHidden">Requests</span></p>


                        <p onClick={() => navigate("/listing")} className={pathname === "/listing" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/listing" ? listingBlue : listing} alt="" /><span className="toBeHidden">Listings</span></p>

                        <p onClick={() => navigate("/setting")} className={pathname === "/setting" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/setting" ? setting : settingWhite} alt="" /><span className="toBeHidden">Settings</span></p>

                        <p onClick={logOut} style={{ marginTop: "6rem" }} className="dashDis"><img src={logout} alt="" />LOGOUT</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Main