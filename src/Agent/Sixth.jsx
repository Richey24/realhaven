import "./Sixth.css"
import down from '../img/Icon.svg'
import slant from "../img/slant-right.svg"

const Sixth = () => {
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
                        <p>Semi detached duplex <img src={down} alt="" /></p>
                    </div>
                    <div>
                        <label htmlFor="email">Budget</label>
                        <p>₦5m-₦15m<img src={down} alt="" /></p>
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