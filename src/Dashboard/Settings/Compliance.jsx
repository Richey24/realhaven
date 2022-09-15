import "./Compliance.css"
import "./Profile.css"
import upload from "../../img/upload.svg"
import message from "../../img/Message.svg"
import search from "../../img/Search.svg"
import { useState, useEffect } from 'react';
import axios from "axios"
import down from '../../img/Stroke-1.svg'

const Compliance = () => {
    const [con, setCon] = useState([])
    const [numCon, setNumCon] = useState([])
    const [scCon, setSCon] = useState([])
    const [acc, setACC] = useState({})
    const [num, setNum] = useState({})
    const [cat, setCat] = useState("Real Estate")
    const [theID, setTheID] = useState("National ID")
    const [nState, setNState] = useState("")
    const [myState, setMyState] = useState([])
    const [lga, setLga] = useState([])
    const [aLga, setAlga] = useState(lga[0])
    useEffect(() => {
        (async () => {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            const coun = await res.data
            setCon(coun)
            setNumCon(coun)
            setSCon(coun)
            setACC(coun[162])
            setNum(coun[162])
            const theState = await axios.get(`https://countriesnow.space/api/v0.1/countries/states/q?country=${coun[162].name.common}`)
            const result = await theState.data
            setNState(result.data.states[0].name)
            setMyState(result.data.states)
            const theCity = await axios.get(`https://countriesnow.space/api/v0.1/countries/state/cities/q?country=${coun[162].name.common}&state=${result.data.states[0].name}`)
            const cities = await theCity.data
            setLga(cities.data)
            setAlga(cities.data[0])
        })()
    }, [])

    const showList = (value) => {
        const myList = document.getElementById(value)
        myList.classList.toggle("showList")
    }

    const getCode = async (codeNum, value) => {
        setACC(codeNum)
        const myList = document.getElementById(value)
        myList.classList.toggle("showList")
        const theState = await axios.get(`https://countriesnow.space/api/v0.1/countries/states/q?country=${codeNum.name.common}`)
        const result = await theState.data
        setNState(result.data.states[0]?.name)
        setMyState(result.data.states)
        const theCity = await axios.get(`https://countriesnow.space/api/v0.1/countries/state/cities/q?country=${codeNum.name.common}&state=${result.data.states[0].name}`)
        const cities = await theCity.data
        setLga(cities.data)
        setAlga(cities.data[0])
    }

    const getNum = (codeNum, value) => {
        setNum(codeNum)
        const myList = document.getElementById(value)
        myList.classList.toggle("showList")
    }

    const getSearch = (event) => {
        const searchResult = scCon.filter((sc) => sc.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
        setCon(searchResult)
    }

    const getSearch1 = (event) => {
        const searchResult = scCon.filter((sc) => sc.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
        setNumCon(searchResult)
    }

    const getCat = (value) => {
        setCat(value)
        document.getElementById("countryList2").classList.toggle("showList")
    }

    const getTheID = (value) => {
        setTheID(value)
        document.getElementById("countryList6").classList.toggle("showList")
    }

    const getState = async (value) => {
        setNState(value)
        document.getElementById("countryList3").classList.toggle("showList")
        const theCity = await axios.get(`https://countriesnow.space/api/v0.1/countries/state/cities/q?country=${acc.name.common}&state=${value}`)
        const cities = await theCity.data
        setLga(cities.data)
        setAlga(cities.data[0])
    }

    const getLga = (value) => {
        setAlga(value)
        document.getElementById("countryList4").classList.toggle("showList")
    }

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


    const theDragOver = (e) => {
        e.preventDefault()
    }

    const theDropFile = async (e) => {
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

    return (
        <div className="compliance">
            <div className="profileDiv">
                <h4>Business information</h4>
                <p>Enter your business information so we can verify where your account and deposit your earnings.</p>
                <form>
                    <label htmlFor="businessName">Business name</label>
                    <input placeholder="Rejoice Real Estate Firm" type="text" name="businessName" id="businessName" />
                    <p>Your business URL: <a href="https://www.haven.com/rejoice">https://www.haven.com/rejoice</a></p>
                    <div className="formDiv">
                        <div>
                            <label htmlFor="lastName">Business Category</label>
                            <p onClick={() => showList("countryList2")} style={{ justifyContent: "space-between", paddingTop: "5px" }} className="thePhone">
                                {cat}
                                <img src={down} alt="" />
                            </p>
                            <div style={{ height: "100px" }} id='countryList2' className='countryList'>
                                <ul>
                                    <li onClick={() => getCat("Mortgage")}>Mortgage</li>
                                    <li onClick={() => getCat("Hotel")}>Hotel</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="country">Country</label>
                            <div onClick={() => showList("countryList1")} className="theCoun" id="country">
                                <p><img style={{ marginRight: "10px" }} className="phoneImg" src={acc?.flags?.svg} alt="" />{acc?.name?.common}</p>
                                <img src={down} alt="" />
                            </div>
                            <div id='countryList1' className='countryList'>
                                <div><img src={search} alt="" /><input onChange={getSearch} placeholder='Search for countries' type="text" /></div>
                                <ul>
                                    {
                                        con.map(({ name, flags, idd }, i) => (
                                            <li onClick={() => getCode({ name, flags, idd }, "countryList1")} key={i}><img className='counFlag' src={flags?.svg} alt="" />{name?.common}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="formDiv">
                        <div>
                            <label htmlFor="lastName">Select state/province</label>
                            <p onClick={() => showList("countryList3")} style={{ justifyContent: "space-between", paddingTop: "5px" }} className="thePhone">
                                {nState}
                                <img src={down} alt="" />
                            </p>
                            <div id='countryList3' className='countryList'>
                                <ul>
                                    {
                                        myState.map(({ name }, i) => (
                                            <li onClick={() => getState(name)} key={i}>{name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName">Select city/surburban/region</label>
                            <p onClick={() => showList("countryList4")} style={{ justifyContent: "space-between", paddingTop: "5px" }} className="thePhone">
                                {aLga}
                                <img src={down} alt="" />
                            </p>
                            <div id='countryList4' className='countryList'>
                                <ul>
                                    {
                                        lga.map((lg, i) => (
                                            <li onClick={() => getLga(lg)} key={i}>{lg}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="formDiv">
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <div className="theDiv"><img src={message} alt="" /> <input type="text" placeholder="example@email.com" name="email" id="email" /></div>
                        </div>
                        <div>
                            <label htmlFor="thePhone">Phone Number</label>
                            <div onClick={() => showList("countryList5")} className='thePhone'>
                                <p style={{ color: "black" }}><img className="phoneImg" src={num?.flags?.svg} alt="" />{num?.idd?.root}{num?.idd?.suffixes}</p>
                                <input type="tel" placeholder="0123456789" />
                                <img src={down} alt="" />
                            </div>
                            <div id='countryList5' className='countryList'>
                                <div><img src={search} alt="" /><input onChange={getSearch1} placeholder='Search for countries' type="text" /></div>
                                <ul>
                                    {
                                        numCon.map(({ name, flags, idd }, i) => (
                                            <li onClick={() => getNum({ name, flags, idd }, "countryList5")} key={i}><img className='counFlag' src={flags?.svg} alt="" />{name?.common}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: "2rem", position: "relative" }} >
                        <label htmlFor="id">Select ID to upload</label>
                        <p onClick={() => showList("countryList6")} style={{ justifyContent: "space-between", paddingTop: "8px" }} id="id" className="thePhone">
                            {theID}
                            <img src={down} alt="" />
                        </p>
                        <div style={{ height: "100px" }} id='countryList6' className='countryList'>
                            <ul>
                                <li onClick={() => getTheID("National ID")}>National ID</li>
                                <li onClick={() => getTheID("Driver License")}>Driver License</li>
                                <li onClick={() => getTheID("Voter's card")}>Voter's card</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: "2rem" }} >
                        <label htmlFor="idUpload">Upload a copy of the selected ID</label>
                        <input type="file" name="theID" id="theID" hidden />
                        <label onDrop={theDropFile} onDragOver={theDragOver} style={{ justifyContent: "space-between", paddingTop: "8px" }} htmlFor="theID" id="idUpload" className="theIdUpload">
                            <img src={upload} alt="" />
                            <p>Browse files or drag and drop (PNG, JPG, GIF)</p>
                        </label>
                    </div>
                    <div className="theButt">
                        <p>Cancel</p>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Compliance