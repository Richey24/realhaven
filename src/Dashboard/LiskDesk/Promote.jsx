import "./Promote.css"
import canc from "../../img/black-close.svg"
import close from "../../img/cancel.svg"
import promote from "../../img/promote.svg"
import proSuccess from "../../img/promote-success.svg"
import { useState } from "react"

const Promote = () => {
    const [ccNum, setCCNum] = useState("")
    const [exp, setExp] = useState("")
    const [pro, setPro] = useState(0)
    const [budget, setBudget] = useState("250,000")
    const [day, setDay] = useState(20)
    const [impress, setImpress] = useState("37,500")
    const [cvv, setCvv] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [numErr, setNumErr] = useState("")

    const hidePromote = () => {
        setPro(0)
        document.getElementById("promoteDiv").style.display = "none"
        if (!document.getElementById("theModal").classList.contains("shownX")) {
            document.getElementById("darkList").style.display = "none"
        }
    }

    const getCCNum = (event) => {
        let num = event.target.value
        const code = event.nativeEvent.inputType
        if (code === "deleteContentBackward") {
            let del = ccNum.slice(0, -1)
            setCCNum(del)
            return
        }
        if (isNaN(Number(num[num.length - 1])) || num.length >= 20) {
            return
        }
        setCCNum(num)
        if ((num.length === 4 || num.length === 9 || num.length === 14) && code !== "deleteContentBackward") {
            setCCNum(num += " ")
        }
    }

    const expire = (event) => {
        let num = event.target.value
        const code = event.nativeEvent.inputType
        if (code === "deleteContentBackward") {
            let del = exp.slice(0, -1)
            setExp(del)
            return
        }
        if (isNaN(Number(num[num.length - 1])) || num.length >= 6) {
            return
        }
        setExp(num)
        if ((num.length === 2) && code !== "deleteContentBackward") {
            if (Number(num) > 12) {
                num = 12
            }
            setExp(num += "/")
        }
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getBudget = (event) => {
        const value = event.target.value * 5000
        const imp = value / 200 * day
        const commaImp = numberWithCommas(imp)
        setImpress(commaImp)
        const commaNum = numberWithCommas(value)
        setBudget(commaNum)
    }

    const getDay = (event) => {
        const value = event.target.value
        const bud = budget.replace(',', '')
        const imp = bud / 200 * value
        const commaImp = numberWithCommas(imp)
        setImpress(commaImp)
        setDay(value)
    }

    const limitCvv = (event) => {
        const value = event.target.value
        if (value.length > 3) {
            return
        }
        setCvv(value)
    }

    const validateName = (event) => {
        const target = event.target
        if (target.value.length < 1) {
            target.style.border = "1px solid #F43F5E"
            setNameErr("This is a compulsory field!")
        } else if (target.value.split(" ").length < 2) {
            target.style.border = "1px solid #F43F5E"
            setNameErr("Input both name and surname")
        }
    }

    const resetErr = (event) => {
        const target = event.target
        target.style.border = "1px solid #F3F4F6"
        target.id === "cardName" && setNameErr("")
        target.id === "cardNum" && setNumErr("")
    }

    const validateNum = (event) => {
        const masterCardRegex = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
        const visaCardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
        const target = event.target
        if (target.value.length < 1) {
            target.style.border = "1px solid #F43F5E"
            setNumErr("This is a compulsory field!")
            return
        }
        let num = ccNum.split("").filter((n) => n !== ' ').join("")
        if (num.match(masterCardRegex) || num.match(visaCardRegex)) {
            return
        } else {
            target.style.border = "1px solid #F43F5E"
            setNumErr("Input a valid credit card number!")
        }
    }

    return (
        <div id="promoteDiv" className="promoteDiv">
            {pro === 0 && <div className="promoteFirst">
                <div className="promoteImageDiv">
                    <img onClick={hidePromote} className="promoteCancel" src={canc} alt="" />
                    <img className="promoteImage" src={promote} alt="" />
                </div>
                <div className="proSecondDiv">
                    <h6>Promote your Property</h6>
                    <span>Promoted properties get in front of more eyes by appearing on other pages and also first in search results on Haven.
                    </span>
                    <p onClick={() => setPro(1)}>Get Started</p>
                </div>
            </div>}
            {pro === 1 && <div className="promoteSecond">
                <div className="secHead">
                    <div>
                        <h6>Budget and Duration</h6>
                        <p>Boost engagement, reach more people.</p>
                    </div>
                    <img onClick={hidePromote} src={close} alt="" />
                </div>
                <label htmlFor="budget">Budget</label>
                <br />
                <input min={1} onChange={getBudget} type="range" name="budget" id="budget" />
                <div className="rangeDiv">
                    <p>₦5,000</p>
                    <p>₦500,000</p>
                </div>

                <label htmlFor="duration">Duration</label>
                <br />
                <input min={9} max={30} onChange={getDay} type="range" name="duration" id="duration" />
                <div className="rangeDiv">
                    <p>9 days</p>
                    <p>30 days</p>
                </div>
                <h3>Promotion details</h3>
                <div className="secondDel"><p>Budget</p><p>₦{budget}</p></div>
                <div className="secondDel"><p>Duration</p><p>{day} days</p></div>
                <div className="secondDel"><p>Estimated impressions</p><p>{impress}</p></div>
                <div className="secondDel"><p>Total price</p><p>₦5,000</p></div>
                <div className="secondButton">
                    <p onClick={() => setPro(0)}>Prev</p>
                    <p onClick={() => setPro(2)} style={{ background: "#2E7DD7", color: "white" }}>Next</p>
                </div>
            </div>}
            {pro === 2 && <div className="promoteThird">
                <div className="secHead">
                    <div>
                        <h6>Credit card</h6>
                        <p>Add your credit card information below.</p>
                    </div>
                    <img onClick={hidePromote} src={close} alt="" />
                </div>
                <label htmlFor="cardName">Name on card</label>
                <br />
                <input onFocus={resetErr} onBlur={validateName} type="text" name="cardName" id="cardName" placeholder="Real haven" />
                <p className="nameErr">{nameErr}</p>
                <label htmlFor="cardName">Card number</label>
                <br />
                <input onFocus={resetErr} onBlur={validateNum} value={ccNum} onChange={getCCNum} type="text" name="cardNum" id="cardNum" placeholder="1111 1111 1111 1111" />
                <p className="nameErr">{numErr}</p>
                <div className="cardDetail">
                    <div>
                        <label htmlFor="date">Expiration</label>
                        <br />
                        <input value={exp} onChange={expire} type="text" name="date" id="date" placeholder="MM/YY" />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV</label>
                        <br />
                        <input value={cvv} onChange={limitCvv} type="number" name="cvv" id="cvv" placeholder="123" />
                    </div>
                </div>
                <div className="saveLater">
                    <input type="checkbox" name="saveLater" id="saveLater" />
                    <label htmlFor="saveLater">Save this credit card for future use</label>
                </div>
                <div className="thirdTotal">
                    <h6>Subtotal</h6>
                    <p>₦5,000</p>
                </div>
                <div className="thirdTotal">
                    <h6>Total <span>(billing on arrival)</span></h6>
                    <p style={{ color: "#2E7DD7" }}>₦5,000</p>
                </div>
                <div className="secondButton">
                    <p onClick={() => setPro(1)}>Prev</p>
                    <p className="comPro" onClick={() => setPro(3)} style={{ background: "#2E7DD7", color: "white" }}>Complete promotion</p>
                    <p className="comProMob" onClick={() => setPro(3)} style={{ background: "#2E7DD7", color: "white" }}>Complete</p>
                </div>
            </div>}
            {pro === 3 && <div className="promoteFourth">
                <div className="promoteImageDiv">
                    <img onClick={hidePromote} className="promoteCancel" src={canc} alt="" />
                    <img className="promoteImage" src={proSuccess} alt="" />
                </div>
                <div className="proSecondDiv">
                    <h6>Congratulations!</h6>
                    <span>Your property has now been promoted and will reach more people. You can now view how it’s doing in “promoted properties” in your listings
                    </span>
                    <div style={{ marginTop: "30px" }} className="secondButton">
                        <p onClick={hidePromote} style={{ color: "#374151" }}>Done</p>
                        <p onClick={hidePromote} style={{ background: "#2E7DD7", color: "white" }}>View property</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Promote