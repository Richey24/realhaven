import './Ninth.css'
import plane from '../../img/Group 36528.svg'
import line from '../../img/Vector 324.svg'

const Ninth = () => {
    return (
        <div>
            <div className='ninthMainDesk'>
                <h4 className='subscribeDesk'>Subscribe to Haven Inspo and tips </h4>
                <center>
                    <h5 className='beTheFirstDesk'>Be the first to know when new cool properties turn up and also get tips on home decor. twice in a month</h5>
                </center>
                <div className='subDivDesk'>
                    <input type="text" placeholder='Enter your email address' />
                    <p style={{ marginTop: '16px' }}>Subscribe</p>
                </div>
                <img className='planeDesk' src={plane} alt="" />
                <img className='lineDesk' src={line} alt="" />
            </div>
        </div>
    )
}

export default Ninth