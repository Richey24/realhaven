import "./Header.css"
import logoutArrow from "../../img/logout-blue.svg"

const Header = () => {
    return (
        <div>
            <div className="onboardSetupHeader">
                <div>Logged in as <span>uahomorejoice@gmail.com</span></div>
                <div>
                    Log out
                    <img src={logoutArrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header