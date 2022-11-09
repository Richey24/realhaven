import "./Sixth.css"
import down from '../img/Icon.svg'
import slant from "../img/slant-right.svg"
import { useState } from "react"
import { Slider } from "@mui/material";

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Sixth = () => {
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


    const showProp = () => {
        document.getElementById("propDivSixth").classList.toggle("show")
    }

    const closeProp = (value) => {
        setProp(value)
        document.getElementById("propDivSixth").classList.toggle("show")
    }

    const showRange = () => {
        document.getElementById("rangeDivSixth").classList.toggle("show")
    }
    return (
        <div className="aSixMainDiv">
            <h1>Reach out to us</h1>
            <h2>we care 👋</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="name">Your name</label>
                        <br />
                        <input placeholder="John doe" type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Your email</label>
                        <br />
                        <input placeholder="johndoe@email.com" type="text" name="email" id="email" />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="name">What type of property are you interested in?</label>
                        <p onClick={showProp}>{prop}<img src={down} alt="" /></p>
                        <ul style={{ height: "202px" }} id="propDivSixth" className="sixthDiv">
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
                        <label htmlFor="email">Budget</label>
                        {

                            (<p onClick={showRange}>₦{value2[0]}m-₦{value2[1]}m <img src={down} alt="" /></p>)
                        }
                        <div id="rangeDivSixth" className="sixthDiv">
                            <span>Price Range</span>
                            <div className="theRangeDiv">

                                <span>₦{value2[0]}M</span>
                                <span>₦{value2[1]}M</span>

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
                                    height: "2px",
                                }}
                                min={1}
                            />
                        </div>
                    </div>
                </div>
                <label style={{ marginTop: "30px" }} htmlFor="message">Message</label>
                <br />
                <textarea placeholder="Additional message you’d like to add" name="message" id="message"></textarea>
                <button>Send <img src={slant} alt="" /></button>
            </form>
        </div>
    )
}

export default Sixth