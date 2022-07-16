import './Third.css'
import one from '../../img/Rectangle 307.png'
import two from '../../img/Rectangle 309.png'
import three from '../../img/image 5.png'
import four from '../../img/image 5 (1).png'
import five from '../../img/image 5 (2).png'
import six from '../../img/image 5 (3).png'
import seven from '../../img/image 5 (4).png'
import eight from '../../img/image 5 (5).png'
import nine from '../../img/image 5 (6).png'
import slant from '../../img/slantarrow.svg'
import arrow from '../../img/arrowgrey.svg'

const images = [one, two, three, four, five, six, seven, eight, nine]

const Third = () => {
    const increment = () => {
        const img = document.getElementById("trendImage")
        img.scrollLeft += 320
    }

    const decrement = () => {
        const img = document.getElementById("trendImage")
        img.scrollLeft -= 320
    }
    return (
        <div>
            <h4 className='trendProp'>Trending Properties types</h4>
            <div id='trendImage' className='thirdMain'>
                {
                    images.map((image, i) => (
                        <div key={i}>
                            <img src={image} alt="" />

                            <div className='myAbs'>
                                <p>Shortlet apartment</p>
                                <img src={slant} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='navigateButton'>
                <p>See all <img src={arrow} alt="" /></p>
                <div>
                    <img onClick={decrement} className='leftArrow' src={arrow} alt="" />
                    <img onClick={increment} src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Third