import './Eight.css'
import iPhone from '../../img/Frame 36620.png'
import android from '../../img/Frame 36621.png'
import woman from '../../img/Woman hand holding iPhone 12 mockup (Black skin) (Mockuuups Studio).png'

const Eight = () => {
    return (
        <div>
            <div className='eightMain'>
                <h4 className='browseProp'>Browse Properties on the go!</h4>
                <p className='downloadApp'>Download our mobile app and get the best experience when searching for your next properties.</p>
                <img src={iPhone} alt="" />
                <img src={android} alt="" />
                <img style={{ width: '80%' }} src={woman} alt="" />
            </div>
        </div>
    )
}

export default Eight