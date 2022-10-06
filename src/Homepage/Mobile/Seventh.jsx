import './Seventh.css'
import arrow from '../../img/arrowblack.svg'
import twitter from '../../img/Vector (2).svg'
import facebook from '../../img/Vector (1).svg'
import instagram from '../../img/Vector.svg'
import adimg from '../../img/Frame 36586.png'

const Seventh = () => {
    return (
        <div>
            <div className="seventhMain">
                <h4 className='getInTouch'>Can’t find properties that interest you? Get in touch with us</h4>
                <p className='manyWays'>There are many ways to get in touch with us. Choose your preferred method. We shall be at the other end</p>
                <div className='addressDiv'>
                    <h5>Visit us</h5>
                    <img src={arrow} alt="" />
                    <p>No 36A Stanbic IBTC Building Toyin Street, Ikeja, Lagos NIGERIA</p>
                </div>
                <div style={{ width: '80%' }} className='addressDiv'>
                    <h5>Email us</h5>
                    <img src={arrow} alt="" />
                    <p>support@haven.homes</p>
                </div>
                <div style={{ width: '80%' }} className='addressDiv'>
                    <h5>Call us</h5>
                    <img src={arrow} alt="" />
                    <p>09048694563</p>
                </div>
                <div style={{ width: '80%' }} className='addressDiv'>
                    <h5>Whatsapp us</h5>
                    <img src={arrow} alt="" />
                    <p>09048694563</p>
                </div>
                <div style={{ width: '80%' }} className='addressDiv'>
                    <h5>Follow us</h5>
                    <img src={arrow} alt="" />
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <img className='adImg' src={adimg} alt="" />
            </div>
        </div>
    )
}

export default Seventh