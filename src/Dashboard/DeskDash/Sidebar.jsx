import "./Sidebar.css"
import logo from '../../img/logo_blue.svg'
import combined from "../../img/combined.svg"
import dashboard from "../../img/dashboard.svg"
import profile from "../../img/Profile.svg"
import bag from "../../img/Bag.svg"
import discover from "../../img/Discovery.svg"
import message from "../../img/Message.svg"
import logout from "../../img/Logout.svg"
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className="dashSideMain">
            <div>
                <p className="dashLogoDesk"><img src={logo} alt="" />HAVEN</p>
                <p data-text="color" className="dashFindDesk">Find Your Home, Your Safe <span>Haven.</span></p>
                <p className="dashNewProp"><img src={combined} alt="" />New Property</p>
                <p onClick={() => navigate("/dashboard")} className="dashDash"><img src={dashboard} alt="" />Dashboard</p>
                <p className="dashProfile"><img src={profile} alt="" />Profile</p>
                <p className="dashReq" data-num="3"><img src={bag} alt="" />Requests</p>
                <p onClick={() => navigate("/listing")} className="dashDis"><img src={discover} alt="" />Listings</p>
                <p className="dashMess" data-num="4"><img src={message} alt="" />Messages</p>
                <p style={{ marginTop: "6rem" }} className="dashDis"><img src={logout} alt="" />LOGOUT</p>
            </div>
        </div>
    )
}

export default Sidebar