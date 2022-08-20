import "./Header.css"
import logo from "../../img/logo_blue.svg"
import topToggle from '../../img/MenuAlt4Outline.svg'

const Header = () => {
    return (
        <div className="mainHead">
            <div className="dashHead">
                <p><img src={logo} alt="" />Haven</p>
                <img src={topToggle} alt="" />
            </div>
        </div>
    )
}

export default Header