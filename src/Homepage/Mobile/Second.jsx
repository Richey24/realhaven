import './Second.css'
import first from '../../img/Frame 36641.png'
import second from '../../img/Frame 36641 (1).png'
import third from '../../img/Frame 36641 (2).png'
import blueArrow from '../../img/arrowblue.svg'
import redArrow from '../../img/arrowpink.svg'
import { useNavigate } from 'react-router-dom'


const Second = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div className='secondMain'>
                <h4 className='whatWeDo'>What we do</h4>
                <center>
                    <div className='propsCon'>
                        <div className='buyProps'>
                            <img src={first} alt="" />
                            <h4>Buy Properties</h4>
                            <p>Find real estate properties for sale with Haven. Browse the website’s database to choose a property that best fit your taste</p>
                            <span>Discover properties <img src={blueArrow} alt="" /></span>
                        </div>
                        <div className='buyProps'>
                            <img src={second} alt="" />
                            <h4>Sell Properties</h4>
                            <p>Put your properties in front of millions of Nigerians and get the best deal in days not months.</p>
                            <span onClick={() => navigate("/login")}>Sell properties now<img src={blueArrow} alt="" /></span>
                        </div>
                        <div style={{ borderColor: "#BF5E65" }} className='buyProps'>
                            <img src={third} alt="" />
                            <h4>Become an agent</h4>
                            <p>Create an account and join us to become an agent. You get your personal website and everything all set up for you to become a real estate agent.</p>
                            <span onClick={() => navigate("/register")} style={{ color: '#BF5E65' }}>Join us now<img src={redArrow} alt="" /></span>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Second