import './Fourth.css'
import './Third.css'
import arrow from '../../img/arrowgrey.svg'
import { useNavigate } from 'react-router-dom'


const Fourth = ({ properties }) => {
    const navigate = useNavigate()

    const increment = () => {
        const img = document.getElementById("fourthTrend")
        img.scrollLeft += 320
    }

    const decrement = () => {
        const img = document.getElementById("fourthTrend").style.marginBottom = "10px"
        img.scrollLeft -= 320
    }
    return (
        <div>
            <div className='fourthMain'>
                <h4 className='recommend'>Recommended</h4>
                <p className='ownLux'>Own a luxury home anywhere in Nigeria at unbelievable rates</p>
            </div>
            <div id='fourthTrend' className='insideMain'>
                {
                    properties.map((property, i) => (
                        <div onClick={() => navigate(`/desc/${property._id}`)} key={i} className='insideMainDiv'>
                            <img src={property?.mainImage?.url} alt="" />
                            <h4>{property.title}</h4>
                            <p>{property.address} {property.city} {property.state !== "No states available" && property.state} {property.country}</p>
                            <span>{property.price} {property.currency}{property.pricePer}</span>
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

export default Fourth