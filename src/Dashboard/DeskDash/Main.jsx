import "./Main.css"
import noti from "../../img/noti.svg"
import dp from "../../img/dp.png"
import refer from "../../img/refer.png"
import dude from "../../img/dude.svg"
import hand from "../../img/hand.svg"
import money from "../../img/money.svg"
import callback from "../../img/callback.svg"
import people from "../../img/3-Friends.svg"
import two from '../../img/Rectangle 309.png'
import three from '../../img/image 5.png'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const Main = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const email = document.cookie.split("=")[1]
        if (!email) {
            navigate("/login")
        }
        (async () => {
            const res = await axios.post("http://localhost:5000/user/get", { email: email })
            const result = await res.data
            setUser(result)
        })()
    })
    return (
        <div className="mainDashDiv">
            <div className="dashTop">
                <p>Your Dashboard</p>
                <div>
                    <span data-num="3"><img src={noti} alt="" /></span>
                    <img src={dp} alt="" />
                </div>
            </div>
            <div className="deskReferDiv">
                <div className="myDeskRefer">
                    <div style={{ border: "none", width: "auto", height: "auto", marginBottom: "30px" }}>
                        <p>Hi {user.fullname?.split(" ")[0]} 👋</p>
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
                    <tr>
                        <td className="propId">525</td>
                        <td className="propImageDesk"><img src={two} alt="" /></td>
                        <td className="propTitleDesk">4 Bedroom duplex for sale</td>
                        <td className="propStatusDesk">Sold</td>
                        <td className="propPriceDesk">₦15,000,000</td>
                        <td className="propLeadDesk">456</td>
                    </tr>
                    <tr>
                        <td className="propId">660</td>
                        <td className="propImageDesk"><img src={three} alt="" /></td>
                        <td className="propTitleDesk">4 Bedroom duplex for sale</td>
                        <td className="propStatusDesk">Active</td>
                        <td className="propPriceDesk">₦64,000,000</td>
                        <td className="propLeadDesk">200</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Main