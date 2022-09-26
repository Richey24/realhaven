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
    const [fAct, setFAct] = useState("recent")
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

    const listSelect = () => {
        document.getElementById("listFilter").classList.toggle("shown")
    }

    const getAct = (value) => {
        setFAct(value)
        listSelect()
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

            </div>
        </div>
    )
}

export default Main