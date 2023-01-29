import { useLocation, useNavigate } from "react-router-dom"
import "./SideBar.css"
import dashboard from "../../img/Category-blue.svg"
import dashBlue from "../../img/DashBlue.svg"
import setting from "../../img/Setting.svg"
import settingWhite from "../../img/SettingWhite.svg"
import listing from "../../img/Listing.svg"
import listingBlue from "../../img/ListingBlue.svg"
import request from "../../img/Request.svg"
import requestBlue from "../../img/RequestBlue.svg"
import analytics from "../../img/Analytics.svg"
import analyticsBlue from "../../img/AnalyticsBlue.svg"
import dp from "../../img/dp.png"
import logo from "../../img/companyLogo.svg"
import arrow from "../../img/arrowUp.svg"

const SideBar = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <div className="setSideBar">


            <div className="agencyLogo">
                <div className="agencyFirstDiv">
                    <img src={logo} alt="" />
                    <h4>Rich Agency <p>Agency</p></h4>
                </div>
                <div className="agencySecondDiv">
                    <img className="arrowUp" src={arrow} alt="" />
                    <img src={arrow} alt="" />
                </div>
            </div>

            <p onClick={() => navigate("/home")} className={pathname === "/home" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/home" ? dashBlue : dashboard} alt="" /><span className="toBeHidden">Dashboard</span></p>

            <p onClick={() => navigate("/analytics")} className={pathname === "/analytics" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "analytics" ? analyticsBlue : analytics} alt="" /><span className="toBeHidden">Analytics</span></p>


            <p onClick={() => navigate("/listing")} className={pathname === "/listing" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/listing" ? listingBlue : listing} alt="" /><span className="toBeHidden">Listings</span></p>


            <p onClick={() => navigate("/request")} id="dashReq" className={pathname === "/request" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "request" ? requestBlue : request} alt="" /><span className="toBeHidden">Requests</span></p>

            <p onClick={() => navigate("/setting")} className={pathname === "/setting" ? "dashDash jCenter" : "dashDis jCenter"}><img src={pathname === "/setting" ? setting : settingWhite} alt="" /><span className="toBeHidden">Settings</span></p>

            <p style={{ marginTop: "11rem", marginBottom: "3rem" }} className="dashProfile jCenter"><img className="bottomImage" src={dp} alt="" /><span className="toBeHidden">Rejoice</span> <span style={{ marginLeft: "35%" }}>...</span></p>
        </div>
    )
}

export default SideBar