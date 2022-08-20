import "./Main.css"
import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import refer from "../../img/refer.png"
import dude from "../../img/dude.svg"
import hand from "../../img/hand.svg"
import money from "../../img/money.svg"
import callback from "../../img/callback.svg"
import people from "../../img/3-Friends.svg"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import url from '../../url';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const [user, setUser] = useState({})
    const [houses, setHouses] = useState([])
    const [spin, setSpin] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        const token = document.cookie?.split(" ")[0]?.split("=")[1]
        const id = document.cookie?.split(" ")[1]?.split("=")[1]
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
                        <div style={{ border: "none", width: "auto", height: "auto", marginBottom: "30px" }}>
                            <p>Hi {user.firstName} 👋</p>
                            <p style={{ fontWeight: "400" }}>Welcome back 🎉</p>
                        </div>
                        <img className="deskDude" src={dude} alt="" />
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