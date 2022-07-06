import './Fifth.css'
import { Carousel } from 'react-bootstrap'
import caro1 from '../../img/image196.png'
import caro2 from '../../img/image 195.png'
import caro3 from '../../img/image 4.png'
import arrow from '../../img/arrowright.svg'

const Fifth = () => {
    return (
        <div>
            <div className='fifthMain'>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <h4 className='weRank'>We are the #1 Ranked Real Estate Agency in Nigeria</h4>
                        <p className='bestInterest'>Because we keep your best interests at heart</p>
                        <img
                            src={caro1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4 className='weRank'>We issue our agents the best rate more than anyone else</h4>
                        <p className='bestInterest'>Because we keep your best interests at heart</p>
                        <img
                            src={caro2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <h4 className='weRank'>We connect house owners and agents to potential buyers quickly</h4>
                        <p className='bestInterest'>Because we keep your best interests at heart</p>
                        <img
                            src={caro3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <center>
                    <p className='exploreMore'>Explore more <img src={arrow} alt="" /></p>
                </center>
            </div>
        </div>
    )
}

export default Fifth