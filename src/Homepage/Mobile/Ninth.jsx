import './Ninth.css'
import plane from '../../img/Group 36528.svg'
import line from '../../img/Vector 324.svg'

const Ninth = () => {
    return (
        <div>
            <div className='ninthMain'>
                <h4 className='subscribeInspo'>Subscribe to Haven Inspo and tips</h4>
                <p className='beTheFirst'>Be the first to know when new cool properties turn up
                    and also get tips on home decor. twice in a month</p>
                <input type="text" placeholder='Enter your email address' />
                <p className='subscribeButton'>Subscribe</p>
                <img className='plane' src={plane} alt="" />
                <img className='line' src={line} alt="" />
            </div>
        </div>
    )
}

export default Ninth