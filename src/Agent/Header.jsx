import "./Header.css"
import down from '../img/Icon.svg'
import ham from "../img/ham.svg"
import { useState } from "react"
import { Slider } from "@mui/material"

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;


const Header = () => {
    const [catAct, setCatAct] = useState("sale")
    const [prop, setProp] = useState("Semi detached duplex")
    const [value2, setValue2] = useState([5, 37]);

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
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
                <img src={ham} alt="" />
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
                        <li style={{ color: prop === "Duplex" ? "#2E7DD7" : "" }} onClick={() => closeProp("Duplex")}>Duplex</li>
                        <li style={{ color: prop === "Detached Bungalow" ? "#2E7DD7" : "" }} onClick={() => closeProp("Detached Bungalow")}>Detached Bungalow</li>
                        <li style={{ color: prop === "Shop" ? "#2E7DD7" : "" }} onClick={() => closeProp("Shop")}>Shop</li>
                        <li style={{ color: prop === "Office Space" ? "#2E7DD7" : "" }} onClick={() => closeProp("Office Space")}>Office Space</li>
                        <li style={{ color: prop === "Penthouse" ? "#2E7DD7" : "" }} onClick={() => closeProp("Penthouse")}>Penthouse</li>
                        <li style={{ color: prop === "Apartments" ? "#2E7DD7" : "" }} onClick={() => closeProp("Apartments")}>Apartments</li>
                        <li style={{ color: prop === "Semi detached duplex" ? "#2E7DD7" : "" }} onClick={() => closeProp("Semi detached duplex")}>Semi detached duplex </li>
                        <li style={{ color: prop === "Cottage" ? "#2E7DD7" : "" }} onClick={() => closeProp("Cottage")}>Cottage</li>
                        <li style={{ color: prop === "Townhouse" ? "#2E7DD7" : "" }} onClick={() => closeProp("Townhouse")}>Townhouse</li>
                        <li style={{ color: prop === "Mansion" ? "#2E7DD7" : "" }} onClick={() => closeProp("Mansion")}>Mansion</li>
                        <li style={{ color: prop === "Ranch-style house" ? "#2E7DD7" : "" }} onClick={() => closeProp("Ranch-style house")}>Ranch-style house</li>
                        <li style={{ color: prop === "Condominium" ? "#2E7DD7" : "" }} onClick={() => closeProp("Condominium")}>Condominium</li>
                        <li style={{ color: prop === "Terraced house" ? "#2E7DD7" : "" }} onClick={() => closeProp("Terraced house")}>Terraced house</li>
                        <li style={{ color: prop === "Villa" ? "#2E7DD7" : "" }} onClick={() => closeProp("Villa")}>Villa</li>
                        <li style={{ color: prop === "Mobile home" ? "#2E7DD7" : "" }} onClick={() => closeProp("Mobile home")}>Mobile home</li>
                        <li style={{ color: prop === "Farmhouse" ? "#2E7DD7" : "" }} onClick={() => closeProp("Farmhouse")}>Farmhouse</li>
                        <li style={{ color: prop === "Single-family home" ? "#2E7DD7" : "" }} onClick={() => closeProp("Single-family home")}>Single-family home</li>
                        <li style={{ color: prop === "Tiny house movement" ? "#2E7DD7" : "" }} onClick={() => closeProp("Tiny house movement")}>Tiny house movement</li>
                        <li style={{ color: prop === "Tree house" ? "#2E7DD7" : "" }} onClick={() => closeProp("Tree house")}>Tree house</li>
                        <li style={{ color: prop === "American Craftsman" ? "#2E7DD7" : "" }} onClick={() => closeProp("American Craftsman")}>American Craftsman</li>
                        <li style={{ color: prop === "Colonial architecture" ? "#2E7DD7" : "" }} onClick={() => closeProp("Colonial architecture")}>Colonial architecture</li>
                        <li style={{ color: prop === "Hut" ? "#2E7DD7" : "" }} onClick={() => closeProp("Hut")}>Hut</li>
                        <li style={{ color: prop === "Victorian architecture" ? "#2E7DD7" : "" }} onClick={() => closeProp("Victorian architecture")}>Victorian architecture</li>
                        <li style={{ color: prop === "Tudor architecture" ? "#2E7DD7" : "" }} onClick={() => closeProp("Tudor architecture")}>Tudor architecture</li>
                        <li style={{ color: prop === "Castle" ? "#2E7DD7" : "" }} onClick={() => closeProp("Castle")}>Castle</li>
                        <li style={{ color: prop === "Contemporary architecture" ? "#2E7DD7" : "" }} onClick={() => closeProp("Contemporary architecture")}>Contemporary architecture</li>
                        <li style={{ color: prop === "Log cabin" ? "#2E7DD7" : "" }} onClick={() => closeProp("Log cabin")}>Log cabin</li>
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
                            getAriaValueText={valuetext}
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
        </div>
    )
}

export default Header