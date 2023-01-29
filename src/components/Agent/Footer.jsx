import "./Footer.css"
import down from '../../img/Icon.svg'
import slant from "../../img/slant-right.svg"
import { useState } from "react"
import { Slider } from "@mui/material";
import { propList } from "../../data/propertyList";

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;

const Footer = () => {
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
                            {
                                propList.map((pro) => (
                                    <li style={{ color: prop === pro ? "#2E7DD7" : "" }} onClick={() => closeProp(pro)}>{pro}</li>
                                ))
                            }
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

export default Footer