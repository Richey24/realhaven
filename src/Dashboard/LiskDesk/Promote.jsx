import "./Promote.css"
import canc from "../../img/cancel.svg"
import promote from "../../img/promote.svg"
import { useState } from "react"

const Promote = () => {
    const [ccNum, setCCNum] = useState("")
    const [pro, setPro] = useState(0)

    const hidePromote = () => {
        setPro(0)
        document.getElementById("promoteDiv").style.display = "none"
        if (!document.getElementById("theModal").classList.contains("shown")) {
            document.getElementById("darkList").style.display = "none"
        }
    }

    const getCCNum = (event) => {
        let num = event.target.value
        const code = event.nativeEvent.inputType
        if (isNaN(Number(num[num.length - 1])) || num.length >= 20) {
            return
        }
        setCCNum(num)
        if ((num.length === 4 || num.length === 9 || num.length === 14) && code !== "deleteContentBackward") {
            setCCNum(num += " ")
        }
        if (num.length === 1 && code === "deleteContentBackward") {
            console.log("sad");
            setCCNum("")
            return
        }
    }

    return (
        <div id="promoteDiv" className="promoteDiv">
            {pro === 0 && <div className="promoteFirst">
                <img onClick={hidePromote} className="promoteCancel" src={canc} alt="" />
                <img className="promoteImage" src={promote} alt="" />
                <h6>Promote your Property</h6>
                <span>Promoted properties get in front of more eyes by appearing on other pages and also first in search results on Haven.
                </span>
                <p onClick={() => setPro(1)}>Get Started</p>
            </div>}
            {pro === 1 && <div className="promoteSecond">
                <div className="secHead">
                    <div>
                        <h6>Budget and Duration</h6>
                        <p>Boost engagement, reach more people.</p>
                    </div>
                    <img onClick={hidePromote} src={canc} alt="" />
                </div>
                <label htmlFor="budget">Budget</label>
                <br />
                <input type="range" name="budget" id="budget" />
                <div className="rangeDiv">
                    <p>₦5,000</p>
                    <p>₦500,000</p>
                </div>

                <label htmlFor="duration">Duration</label>
                <br />
                <input type="range" name="duration" id="duration" />
                <div className="rangeDiv">
                    <p>9 days</p>
                    <p>30 days</p>
                </div>
                <h3>Promotion details</h3>
                <div className="secondDel"><p>Budget</p><p>₦5,000</p></div>
                <div className="secondDel"><p>Duration</p><p>9 days</p></div>
                <div className="secondDel"><p>Estimated impressions</p><p>20,000</p></div>
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
                    <img onClick={hidePromote} src={canc} alt="" />
                </div>
                <label htmlFor="cardName">Name on card</label>
                <br />
                <input type="text" name="cardName" id="cardName" placeholder="Real haven" />
                <br />
                <label htmlFor="cardName">Card number</label>
                <br />
                <input value={ccNum} onChange={getCCNum} type="text" name="cardName" id="cardName" placeholder="1111 1111 1111 1111" />
                <div className="cardDetail">
                    <div>
                        <label htmlFor="date">Expiration</label>
                        <br />
                        <input type="number" name="date" id="date" placeholder="MM/YY" />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV</label>
                        <br />
                        <input type="number" name="cvv" id="cvv" placeholder="123" />
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
                    <p onClick={() => setPro(3)} style={{ background: "#2E7DD7", color: "white" }}>Complete promotion</p>
                </div>
            </div>}
            {pro === 3 && <div className="promoteFourth">
                <img onClick={hidePromote} className="promoteCancel" src={canc} alt="" />
                <img className="promoteImage" src={promote} alt="" />
                <h6>Congratulations!</h6>
                <span>Your property has now been promoted and will reach more people. You can now view how it’s doing in “promoted properties” in your listings
                </span>
                <div style={{ marginTop: "30px" }} className="secondButton">
                    <p onClick={hidePromote} style={{ color: "#374151" }}>Done</p>
                    <p onClick={hidePromote} style={{ background: "#2E7DD7", color: "white" }}>View property</p>
                </div>
            </div>}
        </div>
    )
}

export default Promote