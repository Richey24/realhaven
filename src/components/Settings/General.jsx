import "./General.css"
import dp from "../../img/dp.png"
import saved from "../../img/saved.svg"
import cancel from "../../img/cancel.svg"
import { useState } from "react"

const General = () => {

    const [preview, setPreview] = useState(dp)

    const saveInfo = async () => {
        document.getElementById("savedAgentDiv").style.display = "flex"
        setTimeout(() => {
            document.getElementById("savedAgentDiv").style.display = "none"
        }, 2000)
    }

    const closeInfo = () => {
        document.getElementById("savedAgentDiv").style.display = "none"
    }

    const getPreview = (e) => {
        const image = URL.createObjectURL(e.target.files[0])
        setPreview(image)
    }

    return (
        <div className="generalDiv">
            <div className="firstDiv">
                <div>
                    <h1>Agency settings</h1>
                    <h3>Manage your agency settings</h3>
                </div>
                <p onClick={saveInfo}>Save changes</p>
            </div>
            <div className="secondDiv">
                <div className="firstSec">
                    <label className="agencyName" htmlFor="agencyName">Agency name</label>
                    <br />
                    <input className="agencyInput" type="text" name="agencyName" id="agencyName" placeholder="Enter your agency’s name" />
                    <br />
                    <label className="agencyName" htmlFor="email">Support email address</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="email@example.com" />
                    <br />
                    <label className="agencyName" htmlFor="email">Agency URL</label>
                    <br />
                    <div className="subDomainDiv">
                        <input placeholder="agency" type="text" name="email" id="email" />
                        <p>.realhaven.homes</p>
                    </div>
                </div>
                <div className="secondSec">
                    <h4>Logo</h4>
                    <p>Choose your agency logo</p>
                    <div>
                        <img src={preview} alt="" />
                        <input onChange={getPreview} hidden type="file" name="logo" id="logo" accept="image/*" />
                        <label htmlFor="logo">Choose</label>
                    </div>
                    <p>Recommended size is 256x256 px</p>
                </div>
            </div>
            <div id="savedAgentDiv" className="savedAgentDiv">
                <div>
                    <img src={saved} alt="" />
                    <h4>Saved <p>Your Agency’s information has been updated.</p></h4>
                </div>
                <img onClick={closeInfo} src={cancel} alt="" />
            </div>
        </div>
    )
}

export default General