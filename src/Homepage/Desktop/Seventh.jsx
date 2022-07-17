import './Seventh.css'

import deskAdd from '../../img/deskAdd.png'
import arrow from '../../img/arrowblack.svg'
import twitter from '../../img/Vector (2).svg'
import facebook from '../../img/Vector (1).svg'
import instagram from '../../img/Vector.svg'

const Seventh = () => {
    return (
        <div>
            <div className="deskSeventh">
                <h4 className="deskFind">Can’t find properties that interest you? Get in touch with us</h4>
                <h5 className='manyWays'>There are many ways to get in touch with us. Choose your preferred method. We shall be at the other end</h5>
                <div className='deskFlexAdd'>
                    <img src={deskAdd} alt="" />
                    <div>
                        <div style={{ width: '80%' }} className='deskAddDiv'>
                            <h5>Visit us</h5>
                            <img src={arrow} alt="" />
                            <p style={{ textAlign: 'left' }}>No 36A Stanbic IBTC Building Toyin Street, Ikeja, Lagos NIGERIA</p>
                        </div>
                        <div style={{ width: '80%' }} className='deskAddDiv'>
                            <h5>Email us</h5>
                            <img src={arrow} alt="" />
                            <p>hello@haven.homes</p>
                        </div>
                        <div style={{ width: '80%' }} className='deskAddDiv'>
                            <h5>Call us</h5>
                            <img src={arrow} alt="" />
                            <p>09048694563</p>
                        </div>
                        <div style={{ width: '80%' }} className='deskAddDiv'>
                            <h5>Whatsapp us</h5>
                            <img src={arrow} alt="" />
                            <p>09048694563</p>
                        </div>
                        <div style={{ width: '60%' }} className='deskAddDiv'>
                            <h5>Follow us</h5>
                            <img src={arrow} alt="" />
                            <img src={twitter} alt="" />
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seventh