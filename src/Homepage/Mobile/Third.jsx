import './Third.css'
import slant from '../../img/slantarrow.svg'
import arrow from '../../img/arrowgrey.svg'
import { useNavigate } from 'react-router-dom'


const Third = ({ properties }) => {
    const navigate = useNavigate()
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
                    properties.map((property, i) => (
                        <div key={i}>
                            <img src={property?.mainImage?.url} alt="" />

                            <div className='myAbs'>
                                <p>{property.title}</p>
                                <img onClick={() => navigate(`/desc/${property._id}`)} src={slant} alt="" />
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