import './Header.css'
import logo from "../../img/logo_blue.svg"
import heroImage from "../../img/heroImage.svg"
import mobileHero from "../../img/mobileHero.png"
import search from "../../img/Search.svg"
import down from "../../img/Icon.svg"
import ham from "../../img/ham.svg"
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className='theMainHero'>
            <div className='mainHero'>
                <div className='heroNav'>
                    <p className='navFirst'><img src={logo} alt="" /> Haven</p>
                    <div className='navSecond'>
                        <p>All properties</p>
                        <p>For Agents</p>
                        <p>Blogs</p>
                    </div>
                    <div className='navThird'>
                        <p onClick={() => navigate("register")} className='navSignUp'>Sign up</p>
                        <p onClick={() => navigate("login")} className='navSignIn'>Sign in</p>
                        <button className='navPost'>Post a property</button>
                    </div>
                    <img className='navham' src={ham} alt="" />
                </div>
                <div className='heroSecond'>
                    <h1>Find Your Home, Your Safe <span>Haven.</span></h1>
                    <p>Haven is Nigeria's leading online real estate platform which eases the stress of finding properties online</p>
                </div>
                <div className='heroSearch'>
                    <div className='heroInput'>
                        <img src={search} alt="" />
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className='heroSearchButton'>
                        <p>Location <img src={down} alt="" /></p>
                        <p>Property type <img src={down} alt="" /></p>
                        <p>Price range <img src={down} alt="" /></p>
                        <button>Search</button>
                    </div>
                </div>
                <img className='heroImage' src={heroImage} alt="" />
                <img className='mobileHero' src={mobileHero} alt="" />
            </div>
            <div className='mobileHeroSearch'>
                <div className='heroInputMobile'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search...' />
                </div>
                <p>Location <img src={down} alt="" /></p>
                <p>Property type <img src={down} alt="" /></p>
                <p>Price range <img src={down} alt="" /></p>
                <button>Search</button>
            </div>
        </div>

    )
}

export default Header