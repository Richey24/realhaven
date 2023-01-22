import "./Footer.css"
import logo from "../../img/logo_blue.svg"
import black from "../../img/arrowblack.svg"
import twitter from "../../img/greyTwitter.svg"
import facebook from "../../img/greyFacebook.svg"
import insta from "../../img/greyInsta.svg"

const Footer = () => {
    return (
        <div className="heroFooter">
            <div className="heroCrossDiv">
                <h1>Get started for free in 10 minutes</h1>
                <p>Get all the best financial products for your business growth for free.
                    Open the last current account you will ever need for your business</p>
                <button>Get started in minutes</button>
            </div>
            <div className="theMainFooterDiv">
                <div className="firstFooterDiv">
                    <p><img src={logo} alt="" /> Haven real estate inc.</p>
                </div>
                <div className="footerProductDiv">
                    <div>
                        <h6>Product</h6>
                        <p>All Properties</p>
                        <p>For Sale</p>
                        <p>For Rent</p>
                        <p>Agent</p>
                    </div>
                    <div>
                        <h6>Support</h6>
                        <p>Blog</p>
                        <p>Help</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div className="lastFooterDiv">
                    <h5>Subscribe</h5>
                    <p>Receive latest properties straight to your inbox once a week?</p>
                    <div><input placeholder="Your email" type="text" /> <img src={black} alt="" /></div>
                </div>
            </div>
            <div className="finalFooterDiv">
                <div>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                </div>
                <div>
                    <p>Copyright © Haven 2022.</p>
                    <p>Privacy Policy | Cookie</p>
                </div>
            </div>
        </div>
    )
}

export default Footer