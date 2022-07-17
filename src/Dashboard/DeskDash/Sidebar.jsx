import "./Sidebar.css"
import logo from '../../img/logo_blue.svg'
import combined from "../../img/combined.svg"
import dashboard from "../../img/dashboard.svg"
import disblue from "../../img/Vector-blue.svg"
import dashwhite from "../../img/Category-blue.svg"
import profile from "../../img/Profile.svg"
import bag from "../../img/Bag.svg"
import discover from "../../img/Discovery.svg"
import message from "../../img/Message.svg"
import logout from "../../img/Logout.svg"
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <div className="dashSideMain">
            <div>
                <p onClick={() => navigate("/")} className="dashLogoDesk"><img src={logo} alt="" />HAVEN</p>
                <p className="dashFindDesk">Find Your Home, Your Safe <span>Haven.</span></p>
                <center>
                    <p style={pathname === "/post" ? { background: "#17457A" } : {}} onClick={() => navigate("/post")} className="dashNewProp"><img src={combined} alt="" />New Property</p>
                </center>
                <p onClick={() => navigate("/dashboard")} className={pathname === "/dashboard" ? "dashDash" : "dashDis"}><img src={pathname === "/dashboard" ? dashboard : dashwhite} alt="" />Dashboard</p>
                <p className="dashProfile"><img src={profile} alt="" />Profile</p>
                <p className="dashReq" data-num="3"><img src={bag} alt="" />Requests</p>
                <p onClick={() => navigate("/listing")} className={pathname === "/listing" ? "dashDash" : "dashDis"}><img src={pathname === "/listing" ? disblue : discover} alt="" />Listings</p>
                <p className="dashMess" data-num="4"><img src={message} alt="" />Messages</p>
                <p style={{ marginTop: "6rem" }} className="dashDis"><img src={logout} alt="" />LOGOUT</p>
            </div>
        </div>
    )
}

export default Sidebar