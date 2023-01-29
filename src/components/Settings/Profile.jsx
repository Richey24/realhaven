import "./Profile.css"
import message from "../../img/Message.svg"
import phone from "../../img/phone.svg"
import search from "../../img/Search.svg"
import time from "../../img/time.svg"
import down from '../../img/Stroke-1.svg'
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import timezone from '../../data/timezone';

const Profile = () => {
    const [con, setCon] = useState([])
    const [scCon, setSCon] = useState([])
    const [acc, setACC] = useState([])
    const [myTime, setMyTime] = useState(timezone[0])
    useEffect(() => {
        (async () => {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            const coun = await res.data
            setCon(coun)
            setSCon(coun)
            setACC(coun[234])
        })()
    }, [])
    // toggling country code
    const showList = (value) => {
        const myList = document.getElementById(value)
        myList.classList.toggle("showList")
    }

    // setting active country code
    const getCode = (codeNum) => {
        setACC(codeNum)
        const myList = document.getElementById("countryList")
        myList.classList.toggle("showList")
    }

    const getMyTime = (codeNum) => {
        setMyTime(codeNum)
        const myList = document.getElementById("timezone")
        myList.classList.toggle("showList")
    }

    // searching country
    const getSearch = (event) => {
        const searchResult = scCon.filter((sc) => sc.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
        setCon(searchResult)
    }

    return (
        <div>
            <div className="profileDiv">
                <h4>Profile</h4>
                <p>Manage details of your business profile.</p>
                <form>
                    <label htmlFor="businessName">Business name</label>
                    <input placeholder="Rejoice Real Estate Firm" type="text" name="businessName" id="businessName" />
                    <p>Your business URL: <a href="https://www.haven.com/rejoice">https://www.haven.com/rejoice</a></p>
                    <div className="formDiv">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                    </div>
                    <div className="formDiv">
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <div className="theDiv"><img src={message} alt="" /> <input type="text" placeholder="example@email.com" name="email" id="email" /></div>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <div className="theDiv"><img src={phone} alt="" />  <input placeholder="+1234567890" type="text" name="phone" id="phone" /></div>
                        </div>
                    </div>
                    <div className="formDiv">
                        <div>
                            <label htmlFor="country">Country</label>
                            <div onClick={() => showList("countryList")} id="country"><div><img className="conFlag" src={acc?.flags?.svg} alt="" /> {acc?.name?.common}</div> <img className="downImg" src={down} alt="" /></div>

                            <div id='countryList' className='countryList'>
                                <div><img src={search} alt="" /><input onChange={getSearch} placeholder='Search for countries' type="text" /></div>
                                <ul>
                                    {
                                        con.map(({ name, flags }, i) => (
                                            <li onClick={() => getCode({ name, flags })} key={i}><img className='counFlag' src={flags?.svg} alt="" />{name?.common}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="country">Timezone</label>
                            <div onClick={() => showList("timezone")} id="country"><div><img src={time} alt="" /> {myTime}</div> <img className="downImg" src={down} alt="" /></div>

                            <div id='timezone' className='countryList'>
                                <ul>
                                    {
                                        timezone.map((timez, i) => (
                                            <li onClick={() => getMyTime(timez)} key={i}>{timez}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <label style={{ marginTop: "1rem" }} htmlFor="bio">Bio</label>
                    <textarea placeholder="“I am a real estate agent that gets things done faster and gets happy clients as a bonus... jk, the happy clients part comes first”" name="bio" id="bio"></textarea>
                    <div className="theButt">
                        <p>Cancel</p>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
            <div className="secondSection">
                <h4>Profile</h4>
                <p>Manage details of your business profile.</p>
                <form>
                    <label htmlFor="currentPass">Current Password</label>
                    <input type="text" name="currentPass" id="currentPass" />

                    <label htmlFor="newPass">New Password</label>
                    <input type="text" name="newPass" id="newPass" />
                    <p style={{ fontSize: "12px" }}>At least 8 characters and one number.</p>
                    <label htmlFor="confirmPass">Confirm password</label>
                    <input type="text" name="confirmPass" id="confirmPass" />
                    <div className="theButt">
                        <p>Cancel</p>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile