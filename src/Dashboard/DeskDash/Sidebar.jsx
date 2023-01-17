import "./Sidebar.css"
import logo from '../../img/logo_blue.svg'
import combined from "../../img/combined.svg"
import dashboard from "../../img/Category-blue.svg"
import dashBlue from "../../img/DashBlue.svg"
// import message from "../../img/Message.svg"
// import notify from "../../img/notifiy.svg"
import setting from "../../img/Setting.svg"
import settingWhite from "../../img/SettingWhite.svg"
import listing from "../../img/Listing.svg"
import listingBlue from "../../img/ListingBlue.svg"
import request from "../../img/Request.svg"
import requestBlue from "../../img/RequestBlue.svg"
import analytics from "../../img/Analytics.svg"
import analyticsBlue from "../../img/AnalyticsBlue.svg"
// import activity from "../../img/Activity.svg"
// import dp from "../../img/dp.png"
// import collapse from "../../img/Collpase.svg"
import logout from "../../img/Logout.svg"
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ handleTopClose }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    // const hide = () => {
    //     const elements = document.getElementsByClassName("toBeHidden")
    //     const jCenter = document.getElementsByClassName("jCenter")
    //     const dashNotify = document.getElementById("dashNotify")
    //     const collapseImg = document.getElementById("collapseImg")
    //     for (let i = 0; i < elements.length; i++) {
    //         const element = elements[i]
    //         element.classList.toggle("hideSide")
    //     }
    //     for (let i = 0; i < jCenter.length; i++) {
    //         const element = jCenter[i]
    //         if (element.id === "dashNotify") {
    //             continue
    //         }
    //         element.classList.toggle("justifyCenter")
    //     }
    //     dashNotify.classList.toggle("afterDot")
    //     collapseImg.classList.toggle("turnRight")
    // }

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

    return (
        <div id="dashSideMain" className="dashSideMain">
            <div>
                <p onClick={() => navigate("/")} className="dashLogoDesk jCenter"><img style={{ width: "30px" }} src={logo} alt="" /><span className="toBeHidden">HAVEN</span></p>


                <p className="dashFindDesk toBeHidden">Find Your Home, Your Safe <span>Haven.</span></p>


                <p style={pathname === "/post" ? { background: "#17457A" } : {}} onClick={() => navigate("/post")} className="dashNewProp"><img src={combined} alt="" /><span className="toBeHidden">New Property</span></p>



                <p onClick={() => navigate("/home")} className={pathname === "/home" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/home" ? dashBlue : dashboard} alt="" /><span className="toBeHidden">Dashboard</span></p>

                <p onClick={() => navigate("/analytics")} className={pathname === "/analytics" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "analytics" ? analyticsBlue : analytics} alt="" /><span className="toBeHidden">Analytics</span></p>


                <p onClick={() => navigate("/listing")} className={pathname === "/listing" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/listing" ? listingBlue : listing} alt="" /><span className="toBeHidden">Listings</span></p>


                <p onClick={() => navigate("/request")} id="dashReq" className={pathname === "/request" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "request" ? requestBlue : request} alt="" /><span className="toBeHidden">Requests</span></p>

                {/* 
                <p onClick={() => navigate("/activity")} id="dashReq" className={pathname === "/activity" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "activity" ? requestBlue : activity} alt="" /><span className="toBeHidden">Activity</span></p> */}


                <p onClick={() => navigate("/setting")} className={pathname === "/setting" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/setting" ? setting : settingWhite} alt="" /><span className="toBeHidden">Settings</span></p>


                {/* <p id="dashNotify" data-num="3" style={{ marginTop: "10rem" }} className="dashNotify jCenter"><div><img src={notify} alt="" /></div><span className="toBeHidden">Notification</span></p>


                <p id="dashMess" className="dashMess jCenter" data-num="4"><img src={message} alt="" /><span className="toBeHidden">Messages</span></p>


                <p onClick={hide} className="dashProfile jCenter"><img id="collapseImg" src={collapse} alt="" /><span className="toBeHidden">Collapse</span></p>


                <div className="userDP jCenter">
                    <img style={{ width: "30px" }} src={dp} alt="" />
                    <p className="toBeHidden">Rejoice SnrDev <span>uahomorejoice@gmail.com</span></p>
                </div> */}

                <p style={{ marginTop: "10rem", marginBottom: "3rem" }} onClick={logOut} className="dashProfile jCenter"><img src={logout} alt="" /><span className="toBeHidden">LOGOUT</span></p>
            </div>
        </div>
    )
}

export default Sidebar