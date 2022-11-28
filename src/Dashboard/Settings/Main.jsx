import "./Main.css"
import { useState, useEffect } from 'react';
import url from './../../url';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import settingWhite from "../../img/SettingWhite.svg"
import search from "../../img/Search.svg"
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
import General from "./General";

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
    const [active, setActive] = useState("general")
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
            logOut()
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
            <div className="dashTopSet">
                <div className="dashTopDiv">
                    <div>
                        <p className="colDiv">Settings</p>
                    </div>
                    <div className="rowDiv">
                        <img src={search} alt="" />
                        <p onClick={() => navigate("/post")}>New property +</p>
                    </div>
                </div>
                <div className="secondSet">
                    <div>
                        <p onClick={() => setActive("general")} className={active === "general" ? "active" : ""}>General</p>
                        <p onClick={() => setActive("member")} className={active === "member" ? "active" : ""}>Members</p>
                        <p onClick={() => setActive("permission")} className={active === "permission" ? "active" : ""}>Permissions</p>
                        <p onClick={() => setActive("plan")} className={active === "plan" ? "active" : ""}>Plans</p>
                        <p onClick={() => setActive("billing")} className={active === "billing" ? "active" : ""}>Billing</p>
                        <p onClick={() => setActive("app")} className={active === "app" ? "active" : ""}>Connected apps</p>
                    </div>
                    <div>
                        <p onClick={() => setActive("profile")} className={active === "profile" ? "active" : ""}>Profile</p>
                        <p>General</p>
                        <p>General</p>
                    </div>
                </div>
            </div>

            {active === "general" && <General />}

        </div>
    )
}

export default Main