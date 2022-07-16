import '../Mobile/Fourth.css'
import '../Mobile/Third.css'
import one from '../../img/image.png'
import two from '../../img/image 4.png'
import three from '../../img/image 5.png'
import four from '../../img/image 5 (1).png'
import five from '../../img/image 5 (2).png'
import six from '../../img/image 5 (3).png'
import seven from '../../img/image 5 (4).png'
import eight from '../../img/image 5 (5).png'
import nine from '../../img/image 5 (6).png'
import arrow from '../../img/arrowgrey.svg'

const images = [one, two, three, four, five, six, seven, eight, nine]

const Similar = () => {
    const increment = () => {
        const img = document.getElementById("fourthTrend")
        img.scrollLeft += 320
    }

    const decrement = () => {
        const img = document.getElementById("fourthTrend")
        img.scrollLeft -= 320
    }
    return (
        <div>
            <div className='fourthMain'>
                <h4 className='recommend'>Similar Properties</h4>
                <p className='ownLux'>Browse similar properties in the same area</p>
            </div>
            <div id='fourthTrend' className='insideMain'>
                {
                    images.map((image, i) => (
                        <div key={i} className='insideMainDiv'>
                            <img src={image} alt="" />
                            <h4>5 Bedroom Duplex</h4>
                            <p>Orchid Lagos</p>
                            <span>₦150,000,000</span>
                        </div>
                    ))
                }
            </div>
            <div style={{ paddingBottom: '6rem' }} className='navigateButton'>
                <p>See all <img src={arrow} alt="" /></p>
                <div>
                    <img onClick={decrement} className='leftArrow' src={arrow} alt="" />
                    <img onClick={increment} src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Similar