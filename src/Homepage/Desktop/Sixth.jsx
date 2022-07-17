import "./Sixth.css"
import rate1 from '../../img/Rectangle 4042.png'
import rate2 from '../../img/Rectangle 4043.png'
import rate3 from '../../img/Rectangle 4044.png'
import { useEffect } from 'react';

const Sixth = () => {
    useEffect(() => {
        const one = document.getElementById('one');
        const two = document.getElementById('two');
        const three = document.getElementById('three');

        const arr = [one, two, three]
        rotate(arr)
    }, [])

    const rotate = (arr) => {
        setInterval(() => {
            if (arr[0].className === 'activeDivDesk') {
                arr[0].className = "leftDivDesk"
                arr[1].className = "activeDivDesk"
                arr[2].className = "rightDivDesk"
            } else if (arr[1].className === 'activeDivDesk') {
                arr[0].className = "leftDivDesk"
                arr[1].className = "rightDivDesk"
                arr[2].className = "activeDivDesk"
            } else if (arr[2].className === 'activeDivDesk') {
                arr[0].className = "activeDivDesk"
                arr[1].className = "rightDivDesk"
                arr[2].className = "leftDivDesk"
            }
        }, 7000)
    }

    return (
        <div>
            <div className="deskSixth">
                <h4 className="deskDont">Don't just take our word for it</h4>
                <h5 className="deskHear">Hear what our clients say about us</h5>
                <div id="one" className='activeDivDesk'>
                    <center>
                        <q>Haven is the best real estate</q>
                        <p>agency i could find, the experience was smooth when i got my first house.</p>
                        <div className='customerRatingDesk'>
                            <img src={rate1} alt="" />
                            <h6>Dr. Temitope Bakare</h6>
                            <h6>C.E.O Hodl</h6>
                        </div>
                    </center>
                </div>

                <div id="two" className='leftDivDesk'>
                    <center>
                        <q>Haven is the best real estate</q>
                        <p>agency i could find, the experience was smooth when i got my first house.</p>
                        <div className='customerRatingDesk'>
                            <img src={rate2} alt="" />
                            <h6>Dr. Julian Wan</h6>
                            <h6>Founder Creative Wan</h6>
                        </div>
                    </center>
                </div>

                <div id="three" className='rightDivDesk'>
                    <center>
                        <q>Haven is the best real estate</q>
                        <p>agency i could find, the experience was smooth when i got my shop.</p>
                        <div className='customerRatingDesk weirdLady'>
                            <img src={rate3} alt="" />
                            <h6>Luis Vilasmil</h6>
                            <h6>Luis Beauty Salon</h6>
                        </div>
                    </center>
                </div>


            </div>
        </div>
    )
}

export default Sixth