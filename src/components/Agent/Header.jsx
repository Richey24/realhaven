import "./Header.css"
import down from '../../img/Icon.svg'
import ham from "../../img/ham.svg"
import { useState } from "react"
import { Slider } from "@mui/material"
import Canvas from "./Canvas"
import { propList } from "../../utils/propertyList"
import { handleSlide, valueText } from "../../utils/functions"

const Header = () => {
    const [catAct, setCatAct] = useState("sale")
    const [prop, setProp] = useState("Semi detached duplex")
    const [value2, setValue2] = useState([5, 37]);
    const [show, setShow] = useState(false)

    const hideShow = () => {
        setShow(false)
    }

    const showEnd = () => {
        setShow(true)
    }

    const handleChange2 = (event, newValue, activeThumb) => {
        handleSlide(event, newValue, activeThumb, setValue2)
    };


    const closeCat = (value) => {
        setCatAct(value)
        document.getElementById("catDiv").classList.toggle("show")
    }

    const showCat = () => {
        document.getElementById("catDiv").classList.toggle("show")
    }

    const showProp = () => {
        document.getElementById("propDiv").classList.toggle("show")
    }

    const closeProp = (value) => {
        setProp(value)
        document.getElementById("propDiv").classList.toggle("show")
    }

    const showRange = () => {
        document.getElementById("rangeDiv").classList.toggle("show")
    }


    return (
        <div className="aHeaderDiv">
            <div className="aNavDiv">
                <h6>Capital agency</h6>
                <ul>
                    <li>All properties</li>
                    <li>Sales</li>
                    <li>Rent</li>
                    <li>Shortlets</li>
                    <li>About us</li>
                    <li>Services</li>
                </ul>
                <p>Contact us</p>
                <img onClick={showEnd} src={ham} alt="" />
            </div>
            <h6>Find your Home, Your safe Haven</h6>
            <div className="headFilter">
                <input type="text" className="headSearch" placeholder="Search by location" />
                <div className="theBod">
                    <span>Category</span>
                    <p onClick={showCat}>For {catAct} <img src={down} alt="" /></p>
                    <ul id="catDiv" className="aCatDiv">
                        <li onClick={() => closeCat("sale")} style={{ color: catAct === "sale" ? "#2E7DD7" : "" }}>For sale</li>
                        <li onClick={() => closeCat("rent")} style={{ color: catAct === "rent" ? "#2E7DD7" : "" }}>For rent</li>
                        <li onClick={() => closeCat("let")} style={{ color: catAct === "let" ? "#2E7DD7" : "" }}>For let</li>
                    </ul>
                </div>
                <div className="theBod">
                    <span>Property type</span>
                    <p onClick={showProp}>{prop}<img src={down} alt="" /></p>
                    <ul style={{ height: "202px" }} id="propDiv" className="aCatDiv">
                        {
                            propList.map((pro) => (
                                <li style={{ color: prop === pro ? "#2E7DD7" : "" }} onClick={() => closeProp(pro)}>{pro}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <span>Price range</span>
                    {
                        catAct === "sale" ?
                            (<p onClick={showRange}>₦{value2[0]}m-₦{value2[1]}m <img src={down} alt="" /></p>) :
                            (
                                <p onClick={showRange}>₦{value2[0]}0k-{value2[1] === 100 ? `1M` : `${value2[1]}0k`} <img src={down} alt="" /></p>
                            )

                    }
                    <div id="rangeDiv" className="aCatDiv">
                        <p>Price Range</p>
                        <div className="theRangeDiv">
                            {catAct === "sale" ? (
                                <>
                                    <p>₦{value2[0]}M</p>
                                    <p>₦{value2[1]}M</p>
                                </>
                            ) : (
                                <>
                                    <p>₦{value2[0]}0K</p>
                                    <p>₦{value2[1] === 100 ? `1M` : `${value2[1]}0K`}</p>
                                </>
                            )}
                        </div>
                        <Slider
                            getAriaLabel={() => 'Minimum distance shift'}
                            value={value2}
                            onChange={handleChange2}
                            valueLabelDisplay="auto"
                            getAriaValueText={valueText}
                            disableSwap
                            sx={{
                                width: '100%',
                                color: "#2E7DD7;",
                                height: "2px"
                            }}
                            min={1}
                        />
                    </div>
                </div>
                <p>Search</p>
            </div>
            <div className="blurryDiv">
                <div>
                    <p>500+</p>
                    <span>Listed Properties</span>
                </div>
                <div>
                    <p>5,000+</p>
                    <span>Happy customers</span>
                </div>
                <div>
                    <p>1,000+</p>
                    <span>Properties sold</span>
                </div>
            </div>
            <Canvas hideShow={hideShow} show={show} />
        </div>
    )
}

export default Header