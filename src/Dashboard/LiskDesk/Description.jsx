import "./Description.css"
import "./Main.css"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import url from "../../url"
import axios from "axios"
import room from '../../img/blackbed.svg'
import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import settingWhite from "../../img/SettingWhite.svg"
import bathroom from '../../img/blackbath.svg'
import toilet from '../../img/blacktoilet.svg'
// import back from "../../img/arrowBlack.svg"
import moveleft from "../../img/moveleft.svg"
import moveright from "../../img/moveright.svg"
import expand from "../../img/expand.svg"
import activity from "../../img/Activity.svg"
import cancel from "../../img/white-cancel.svg"
import bigDel from "../../img/bigdel.svg"
import bigCopy from "../../img/bigcopy.svg"
import canc from "../../img/cancel.svg"
import link from "../../img/Group.svg"
import locate from "../../img/Location.svg"
import share from "../../img/share.svg"
import del from "../../img/Delete.svg"
import { Spinner, OverlayTrigger, Tooltip } from "react-bootstrap"
import Sidebar from './../DeskDash/Sidebar';
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

const Description = () => {
    const { listid } = useParams()
    const nav = useNavigate()
    const [user, setUser] = useState({})
    const [spin, setSpin] = useState(false)
    const [house, setHouse] = useState({})
    const [images, setImages] = useState([])
    const [num, setNum] = useState(0)

    const navigate = (path) => {
        nav(path)
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
                const theHouse = await axios.get(`${url}/v1/property/find/one/${listid}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const result = await theHouse.data
                setHouse(result)
                setImages([result.mainImage.url, ...result.otherImages.url])
                setSpin(false)
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fullScreen = () => {
        const fullScreen = document.getElementById("fullScreenDiv")
        document.getElementById("listDesc").style.display = "none"
        fullScreen.style.display = "block"
    }

    const setActiveImg = (i) => {
        setNum(i)
    }

    const showPromote = () => {
        document.getElementById("promoteDiv").style.display = "block"
        document.getElementById("darkList").style.display = "block"
    }

    const increase = () => {
        if (num >= images.length - 1) return
        setNum(num + 1)
    }

    const decrease = () => {
        if (num <= 0) return
        setNum(num - 1)
    }

    const copyLink = (id) => {
        navigator.clipboard.writeText(`${window.location.origin}/listing/${id}`).then(() => {
            document.getElementById("copyModal").style.display = "flex"
            document.getElementById("darkList").style.display = "block"
            setTimeout(() => {
                document.getElementById("copyModal").style.display = "none"
                document.getElementById("darkList").style.display = "none"
            }, 3000)
        })
    }


    const showDelModal = (id) => {
        document.getElementById("delModal").style.display = "block"
        document.getElementById("darkList").style.display = "block"
    }

    const closeDelModal = () => {
        document.getElementById("delModal").style.display = "none"
        document.getElementById("darkList").style.display = "none"
    }

    const hideScreen = () => {
        document.getElementById("listDesc").style.display = "flex"
        document.getElementById("fullScreenDiv").style.display = "none"
    }

    const deleteHouse = async (houseId) => {
        closeDelModal()
        setSpin(true)
        await axios.delete(`${url}/v1/property/${houseId}`)
        nav("/listing")
        setSpin(false)
    }

    if (spin) {
        return (
            <div className="spinDiv">
                <Spinner animation="border" style={{ color: "#2E7DD7" }} />
            </div>
        )
    }

    return (
        <div className="mainListDesc">
            <div id="listDesc" className="listDesc">
                <Sidebar />
                <div className="listDescMain">
                    <div className="dashListTop">
                        <div id="theListText">
                            <h6>Your Listing</h6>
                            <p>All the properties you’ve listed on your agency</p>
                        </div>
                        <img className="mobileTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                        <div id="theListIcon">
                            <img style={{ cursor: "pointer" }} onClick={() => nav("/setting")} src={noti} alt="" />
                            <img src={settingWhite} alt="" />
                            <div>
                                <img className="dashTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                                <p>{user.firstName}</p>
                            </div>
                        </div>
                    </div>
                    <div className="modeHead">
                        {/* <p onClick={() => nav("/listing")}><img src={back} alt="" />Back to listings</p> */}
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
                                <img onClick={() => copyLink(house._id)} src={link} alt="" />
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
                                <img onClick={() => showDelModal(house._id)} src={del} alt="" />
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
                            <p>{house.title}</p>
                            <span>{house.purpose}</span>
                        </div>
                        <p className="singlePrice">₦{house.price} <span style={{ color: "black", fontWeight: "400" }}>{house.pricePer}</span></p>
                        <div className="singleLoc">
                            <p>
                                <img src={locate} alt="" />
                                {house.aptUnit} {house.address} {house.city} {house.state}
                            </p>
                            <div>
                                <div data-num={house.noOfBedroom}><img src={room} alt="" /></div>
                                <div data-num={house.noOfBedroom}><img src={bathroom} alt="" /></div>
                                <div data-num={house.noOfBedroom}><img src={toilet} alt="" /></div>
                            </div>
                        </div>
                        <p className="singleDesc">{house.description}</p>
                        <p className="singleFeat">Features</p>
                        <ul className="singleAdd">
                            {
                                house.additionalFeatures?.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))
                            }
                        </ul>
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
                        <button onClick={() => deleteHouse(house._id)} className="delDelete">Delete</button>
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

            <div id="fullScreenDiv" className="fullScreenDiv">
                <img src={images[num]} alt="" id="fullScreen" />
                {num > 0 && <img onClick={decrease} className="moveleft" id="moveleft" src={moveleft} alt="" />}
                {num < images.length - 1 && <img onClick={increase} className="moveright" id="moveright" src={moveright} alt="" />}
                <img onClick={hideScreen} id="cancel" className="cancel" src={cancel} alt="" />
                <p id="count" className="count">{num + 1}/{images.length}</p>
            </div>

            <div id="darkList" className="darkList">

            </div>

        </div>
    )
}

export default Description