import "./Main.css"
import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import refer from "../../img/refer.png"
import dude from "../../img/dude.svg"
import longdude from "../../img/longdude.svg"
import hand from "../../img/hand.svg"
import money from "../../img/money.svg"
import callback from "../../img/callback.svg"
import people from "../../img/3-Friends.svg"
import logo from "../../img/logo_blue.svg"
import combined from "../../img/combined.svg"
import dashboard from "../../img/dashboard.svg"
import disblue from "../../img/Vector-blue.svg"
import bag from "../../img/Bag.svg"
import discover from "../../img/Discovery.svg"
import message from "../../img/Message.svg"
import home from "../../img/Home.svg"
import setting from "../../img/Setting.svg"
import logout from "../../img/Logout.svg"
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import url from '../../url';
import { Spinner, Offcanvas } from 'react-bootstrap';

const Main = ({ showTop, handleTopClose }) => {
    const [user, setUser] = useState({})
    const [houses, setHouses] = useState([])
    const [spin, setSpin] = useState(false)
    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
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
        if (!token) {
            navigate("/login")
        } else {
            (async () => {
                setSpin(true)
                const res = await axios.get(`${url}/v1/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                // const rep = await axios.post(`${url}/house/user/get`, { email: email })
                // const houseResult = await rep.data
                const result = await res.data
                setUser(result)
                // setHouses(houseResult)
                setSpin(false)
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
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

            <div style={{ visibility: spin ? "hidden" : "" }} >
                <div className="dashTop">
                    <p>Your Dashboard</p>
                    <div>
                        <span data-num="3"><img src={noti} alt="" /></span>
                        <img className="dashTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                    </div>
                </div>
                <div className="deskReferDiv">
                    <div className="myDeskRefer">
                        <div style={{ border: "none", width: "auto", height: "auto" }}>
                            <p>Hi {user.firstName} 👋</p>
                            <p style={{ fontWeight: "400" }}>Welcome back 🎉</p>
                        </div>
                        <img className="deskDude" src={window.innerWidth > 800 ? dude : longdude} alt="" />
                    </div>
                    <img style={{ cursor: "pointer", width: "300px" }} src={refer} alt="" />
                </div>

                <p className="deskMonthStat">This are your stat for <span>{new Date().toLocaleString("default", { month: "long" })}</span></p>
                <div className="deskStatMain">
                    <div className="deskHand">
                        <img src={hand} alt="" />
                        <h4>55</h4>
                        <p>Properties listed</p>
                        <h6>+8% from last month</h6>
                    </div>
                    <div className="deskHand">
                        <img style={{ background: "#F8EDED" }} src={money} alt="" />
                        <h4>22</h4>
                        <p>Properties sold</p>
                        <h6>+10% from last month</h6>
                    </div>
                    <div className="deskHand">
                        <img style={{ padding: "3px" }} src={callback} alt="" />
                        <h4>150</h4>
                        <p>Callback request</p>
                        <h6 style={{ color: "#BF5E65" }}>-3% from last month</h6>
                    </div>
                    <div className="deskHand">
                        <img src={people} alt="" />
                        <h4>11k</h4>
                        <p>Total Clients Leads</p>
                        <h6>+2% from last month</h6>
                    </div>
                </div>

                <div onClick={() => navigate("/post")} className="phoneAdd">
                    <div>+</div>
                </div>

                <Offcanvas style={{ width: "80%" }} className="topCanvas" show={showTop} onHide={handleTopClose} placement="start">
                    <Offcanvas.Header className="startHead" closeButton>
                        <Offcanvas.Title><p className="startLogo"><img src={logo} alt="" />Haven</p></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div>
                            <p style={pathname === "/post" ? { background: "#17457A" } : {}} onClick={() => navigate("/post")} className="dashNewProp"><img src={combined} alt="" />New Property</p>


                            <p onClick={() => navigate("/dashboard")} className={pathname === "/home" ? "dashDash" : "dashDis"}><img src={pathname === "/home" ? home : home} alt="" />Home</p>


                            <p className="dashProfile"><img src={pathname === "/dashboard" ? dashboard : dashboard} alt="" />Dashboard</p>


                            <p className="dashReq" data-num="3"><img src={bag} alt="" />Requests</p>


                            <p onClick={() => navigate("/listing")} className={pathname === "/listing" ? "dashDash" : "dashDis"}><img src={pathname === "/listing" ? disblue : discover} alt="" />Listings</p>


                            <p className="dashMess" data-num="4"><img src={message} alt="" />Messages</p>


                            <p className="dashProfile"><img src={setting} alt="" />Settings</p>


                            <p onClick={logOut} style={{ marginTop: "6rem" }} className="dashDis"><img src={logout} alt="" />LOGOUT</p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>

                <table className="deskTable">
                    <thead className="deskTableHead">
                        <tr>
                            <th>ID No</th>
                            <th className="propTableImage">Property Image</th>
                            <th>Property Title</th>
                            <th>Status</th>
                            <th className="tablePrice">Price</th>
                            <th className="tableClient">Client Leads</th>
                        </tr>
                    </thead>
                    <tbody className="deskTableBody">
                        {
                            houses.map((house, i) => (
                                <tr key={i}>
                                    <td className="propId">{house.Id}</td>
                                    <td className="propImageDesk"><img src={`${url}/image/${house.images?.split(",")[0]}`} alt="" /></td>
                                    <td className="propTitleDesk">{house.title}</td>
                                    <td className="propStatusDesk">Active</td>
                                    <td className="propPriceDesk">{house.price} {house.currency}</td>
                                    <td className="propLeadDesk">456</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Main