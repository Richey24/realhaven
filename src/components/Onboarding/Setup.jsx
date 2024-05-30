import "./Setup.css"
import setupImage from "../../img/setupimage.png"
import logo from "../../img/logo_blue.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { changeBorderColorOnFocus } from "../../utils/styleFunc"
import Header from "./Header"

const Setup = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const continueSetup = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            navigate("/onboarding/team")
        }, 2000)
    }

    if (loading) {
        return (
            <div className="onboardSetupLoad">
                <div>
                    <img src={logo} alt="" />
                    <p>Setting up your new Agency...</p>
                </div>
            </div>
        )
    }
    return (
        <div className="onboardSetup">
            <Header />
            <div className="onboardSetupMainDiv">
                <form onSubmit={continueSetup} className="onboardSetupFirstDiv">
                    <h4>Setup your Agency</h4>
                    <p>Agencies are shared environments where you and your team can manage all your properties and clients.</p>
                    <div>
                        <label htmlFor="name">Agency Name</label>
                        <br />
                        <input required placeholder="Agency Name" type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="url">Agency URL</label>
                        <br />
                        <div id="agentUrl">
                            <input onFocus={() => changeBorderColorOnFocus("agentUrl", "rgba(46, 125, 215, 1)")} onBlur={() => changeBorderColorOnFocus("agentUrl", "#E5E7EB")} required placeholder="Agency URL" type="text" name="url" />
                            .realhaven.homes
                        </div>
                    </div>
                    <div>
                        <label htmlFor="size">How large is your team</label>
                        <br />
                        <input required placeholder="Team size" type="text" name="size" />
                    </div>
                    <div>
                        <label htmlFor="email">Business email</label>
                        <br />
                        <input required placeholder="Business email" type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Business phone number</label>
                        <br />
                        <input required placeholder="Business phone number" type="text" name="phone" />
                    </div>
                    <button type="submit">Continue</button>
                </form>
                <div className="onboardSetupSecondDiv">
                    <img src={setupImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Setup