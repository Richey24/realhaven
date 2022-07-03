import './Sixth.css'
import rate1 from '../../img/Rectangle 4042.png'
import rate2 from '../../img/Rectangle 4043.png'
import rate3 from '../../img/Rectangle 4044.png'
import { Carousel } from 'react-bootstrap'

const Sixth = () => {
    return (
        <div>
            <div className='sixthMain'>
                <p className='ourWord'>Don’t just take our word for it</p>
                <p className='ourClient'>Hear what our clients says about us</p>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item style={{ height: '350px' }}>
                        <div className='customerDiv'>
                            <q>Haven is the best real estate</q>
                            <p>agency i could find, the experience was smooth when i got my first house.</p>
                            <div className='customerRating'>
                                <img src={rate1} alt="" />
                                <p>Dr. Temitope Bakare</p>
                                <h6>C.E.O Hodl</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '350px' }}>
                        <div className='customerDiv'>
                            <q>Haven is the best real estate</q>
                            <p>agency i could find, the experience was smooth when i got my first house.</p>
                            <div className='customerRating'>
                                <img src={rate2} alt="" />
                                <p>Dr. Julian Wan</p>
                                <h6>Founder Creative Wan</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: '350px' }}>
                        <div className='customerDiv'>
                            <q>Haven is the best real estate</q>
                            <p>agency i could find, the experience was smooth when i got my shop.</p>
                            <div className='customerRating'>
                                <img src={rate3} alt="" />
                                <p>Luis Vilasmil</p>
                                <h6>Luis Beauty Salon</h6>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Sixth