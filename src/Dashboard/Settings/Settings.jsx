import "./Settings.css"
import { useState } from 'react';
import Sidebar from './../DeskDash/Sidebar';
import { Offcanvas } from 'react-bootstrap';
import logo from "../../img/logo_blue.svg"
import dashboard from "../../img/Category-blue.svg"
import dashBlue from "../../img/DashBlue.svg"
import combined from "../../img/combined.svg"
import setting from "../../img/Setting.svg"
import settingWhite from "../../img/SettingWhite.svg"
import listing from "../../img/Listing.svg"
import listingBlue from "../../img/ListingBlue.svg"
import request from "../../img/Request.svg"
import requestBlue from "../../img/RequestBlue.svg"
import analytics from "../../img/Analytics.svg"
import analyticsBlue from "../../img/AnalyticsBlue.svg"
import logout from "../../img/Logout.svg"
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../DeskDash/Header';
import Main from "./Main";

const Settings = () => {
    const [showTop, setShowTop] = useState(false)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

    const handleTopClose = () => {
        setShowTop(false)
    }

    const handleTopShow = () => {
        setShowTop(true)
    }
    return (
        <div>
            <div className="deskDashMain">
                <Header handleTopShow={handleTopShow} />
                <Sidebar handleTopClose={handleTopClose} />
                <Main />
            </div>
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

export default Settings