import "./Main.css"
import { useState, useEffect } from 'react';
import url from './../../url';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import settingWhite from "../../img/SettingWhite.svg"
import noti from "../../img/notiwhite.svg"
import dp from "../../img/largedp.svg"
import camera from "../../img/camera.svg"
import copy from "../../img/copy.svg"
import upload from "../../img/upload.svg"
import background from "../../img/background.svg"
import Profile from "./Profile";
import Compliance from "./Compliance";
import Team from "./Team";
import Permission from './Permission';
import Subscription from './Subscription';
import Billing from './Billing';
import Notification from './Notification';
import Integration from './Integration';

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
    const [user, setUser] = useState({})
    const [active, setActive] = useState("profile")
    const navigate = useNavigate()

    const imageType = ['png', 'jpg', 'jpeg', 'gif']
    const isImage = (fileName) => {
        const iType = fileName.split(".")
        const fileType = iType[iType.length - 1]
        if (imageType.includes(fileType)) {
            return true
        }
        else {
            return false
        }
    }


    const dragOver = (e) => {
        e.preventDefault()
    }

    const dropFile = async (e) => {
        e.preventDefault()
        if (e.dataTransfer.items.length > 1) {
            console.log("You can only upload one video at a time")
            return
        }
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
            let dragFile = e.dataTransfer.items[i].getAsFile()
            if (!isImage(dragFile.name)) {
                console.log("invalid format");
                return
            }
            let dropFile = new FormData();
            dropFile.append(
                "video",
                dragFile,
                dragFile.name
            );
            console.log(dropFile);
        }
    }

    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

    useEffect(() => {
        if (!token) {
            navigate("/login")
        } else {
            (async () => {
                const res = await axios.get(`${url}/v1/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }, { validateStatus: () => true })
                if (res.status !== 200) {
                    logOut()
                    return
                }
                const result = await res.data
                setUser(result)
            })()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const copyLink = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            alert("link copied")
        })
    }

    const getActive = (value) => {
        setActive(value)
    }

    const uploadCover = async (event) => {
        console.log(event.target.files);
        if (event.target.files.length < 1) return
        const image = new FormData()
        image.append("file", event.target.files[0])
        const res = await axios.put(`${url}/v1/user/cover/photo/${id}`, image, { validateStatus: () => true })
        if (res.status === 200) {
            const res = await axios.get(`${url}/v1/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }, { validateStatus: () => true })
            if (res.status !== 200) {
                logOut()
                return
            }
            const result = await res.data
            setUser(result)
        }
    }

    const uploadDP = async (event) => {
        console.log(event.target.files);
        if (event.target.files.length < 1) return
        const image = new FormData()
        image.append("file", event.target.files[0])
        const res = await axios.put(`${url}/v1/user/profile/photo/${id}`, image, { validateStatus: () => true })
        if (res.status === 200) {
            const res = await axios.get(`${url}/v1/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }, { validateStatus: () => true })
            if (res.status !== 200) {
                logOut()
                return
            }
            const result = await res.data
            setUser(result)
        }
    }

    return (
        <div className="mainDiv">
            <div className="dashTop">
                <div>
                    <p className="colDiv">Settings <span>Manage your personal and organization settings</span></p>
                </div>
                <div className="rowDiv">
                    <img src={noti} alt="" />
                    <img src={settingWhite} alt="" />
                    <div>
                        <img className="dashTopImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                        <p>{user.firstName}</p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: user.coverPhoto?.url ? `url(${user.coverPhoto?.url})` : `url(${background})` }} className="coverImage">
                <input onChange={uploadCover} type="file" id="cover" hidden />
                <label htmlFor="cover"><img src={camera} alt="" />Change cover</label>
            </div>

            <div className="mainSection">
                <div className="firstSection">
                    <div className="profileImg">
                        <img className="firstSectImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                        <input onChange={uploadDP} type="file" id="profile" hidden />
                        <label htmlFor="profile"><img src={camera} alt="" /></label>
                    </div>
                    <h6>{user.firstName} {user.lastName}</h6>
                    <p>Real Estate Manager</p>
                    <span className="spanDesc">“I am a real estate agent that gets things done faster and gets happy clients as a bonus... jk, the happy clients part comes first”</span>
                    <div className="middlePart">
                        <p className="landPage">View landing page</p>
                        <div className="userLink"><a href="h">https://www.haven.com/john... </a><img onClick={() => copyLink("https://www.haven.com/john")} src={copy} alt="" /></div>
                    </div>
                    <div className="lastPart">
                        <p>Upload Business Logo</p>
                        <input type="file" id="business" hidden />
                        <label onDrop={dropFile} onDragOver={dragOver} htmlFor="business">
                            <img src={upload} alt="" />
                            <p>Browse files or drag and drop</p>
                            <p> (PNG, JPG, GIF) </p>
                        </label>
                    </div>
                </div>
                <div className="secondSect">
                    <ul>
                        <li className={active === "profile" ? "activeSect" : ""} style={{ color: active === "profile" ? "#2E7DD7" : "" }} onClick={() => getActive("profile")}>Profile</li>

                        <li className={active === "Compliance" ? "activeSect" : ""} style={{ color: active === "Compliance" ? "#2E7DD7" : "" }} onClick={() => getActive("Compliance")}>Compliance</li>

                        <li className={active === "team" ? "activeSect" : ""} style={{ color: active === "team" ? "#2E7DD7" : "" }} onClick={() => getActive("team")}>Team</li>

                        <li className={active === "permission" ? "activeSect" : ""} style={{ color: active === "permission" ? "#2E7DD7" : "" }} onClick={() => getActive("permission")}>Permission</li>

                        <li className={active === "subscription" ? "activeSect" : ""} style={{ color: active === "subscription" ? "#2E7DD7" : "" }} onClick={() => getActive("subscription")}>Subscriptions</li>

                        <li className={active === "billing" ? "activeSect" : ""} style={{ color: active === "billing" ? "#2E7DD7" : "" }} onClick={() => getActive("billing")}>Billing</li>

                        <li className={active === "notification" ? "activeSect" : ""} style={{ color: active === "notification" ? "#2E7DD7" : "" }} onClick={() => getActive("notification")}>Notification</li>

                        <li className={active === "integration" ? "activeSect" : ""} style={{ color: active === "integration" ? "#2E7DD7" : "" }} onClick={() => getActive("integration")}>Integration</li>
                    </ul>
                    <div style={{ display: active === "profile" ? "" : "none" }}>
                        <Profile />
                    </div>
                    <div style={{ display: active === "Compliance" ? "" : "none" }}>
                        <Compliance />
                    </div>
                    <div style={{ display: active === "team" ? "" : "none" }}>
                        <Team />
                    </div>
                    <div style={{ display: active === "permission" ? "" : "none" }}>
                        <Permission />
                    </div>
                    <div style={{ display: active === "subscription" ? "" : "none" }}>
                        <Subscription />
                    </div>
                    <div style={{ display: active === "billing" ? "" : "none" }}>
                        <Billing />
                    </div>
                    <div style={{ display: active === "notification" ? "" : "none" }}>
                        <Notification />
                    </div>
                    <div style={{ display: active === "integration" ? "" : "none" }}>
                        <Integration />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main