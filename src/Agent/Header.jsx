import "./Header.css"
import down from '../img/Icon.svg'

const Header = () => {
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
            </div>
            <h6>Find your Home, Your safe Haven</h6>
            <div className="headFilter">
                <input type="text" className="headSearch" placeholder="Search by location" />
                <div className="theBod">
                    <span>Category</span>
                    <p>For sale <img src={down} alt="" /></p>
                </div>
                <div className="theBod">
                    <span>Property type</span>
                    <p>Semi detached duplex <img src={down} alt="" /></p>
                </div>
                <div>
                    <span>Price range</span>
                    <p>₦5m-₦15m <img src={down} alt="" /></p>
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