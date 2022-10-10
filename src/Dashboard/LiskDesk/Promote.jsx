import "./Promote.css"
import canc from "../../img/cancel.svg"
import promote from "../../img/promote.svg"

const Promote = () => {
    return (
        <div className="promoteDiv">
            <div className="promoteFirst">
                <img className="promoteCancel" src={canc} alt="" />
                <img className="promoteImage" src={promote} alt="" />
                <h6>Promote your Property</h6>
                <span>Promoted properties get in front of more eyes by appearing on other pages and also first in search results on Haven.
                </span>
                <p>Get Started</p>
            </div>
            <div className="promoteSecond">
                <div className="secHead">
                    <div>
                        <h6>Budget and Duration</h6>
                        <p>Boost engagement, reach more people.</p>
                    </div>
                    <img src={canc} alt="" />
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
                    <p>Prev</p>
                    <p style={{ background: "#2E7DD7", color: "white" }}>Next</p>
                </div>
            </div>
        </div>
    )
}

export default Promote