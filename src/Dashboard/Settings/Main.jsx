import "./Main.css"
import { useState, useEffect } from 'react';
import url from './../../url';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import settingWhite from "../../img/SettingWhite.svg"
import noti from "../../img/notiwhite.svg"
import dp from "../../img/dp.png"
import camera from "../../img/camera.svg"
import copy from "../../img/copy.svg"


const Main = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()


    const logOut = () => {
        document.cookie = "token=;expires=" + new Date(0).toUTCString()
        document.cookie = "id=;expires=" + new Date(0).toUTCString()
        navigate("/")
    }

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
            <div className="coverImage">
                <input type="file" id="cover" hidden />
                <label htmlFor="cover"><img src={camera} alt="" />Change cover</label>
            </div>

            <div className="mainSection">
                <div className="firstSection">
                    <div className="profileImg">
                        <img className="firstSectImg" src={user.image?.url ? user.image?.url : dp} alt="" />
                        <input type="file" id="profile" hidden />
                        <label htmlFor="profile"><img src={camera} alt="" /></label>
                    </div>
                    <h6>{user.firstName} {user.lastName}</h6>
                    <p>Real Estate Manager</p>
                    <span>“I am a real estate agent that gets things done faster and gets happy clients as a bonus... jk, the happy clients part comes first”</span>
                    <div className="middlePart">
                        <p>View landing page</p>
                        <p>https://www.haven.com/john... <img src="" alt="" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main