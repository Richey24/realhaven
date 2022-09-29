import '../Mobile/Fourth.css'
import '../Mobile/Third.css'
import arrow from '../../img/arrowgrey.svg'
import { useEffect, useState } from 'react';
import url from './../../url';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Similar = ({ property }) => {
    const [recommend, setRecommend] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const recCity = await axios.get(`${url}/v1/property/find?state=${property.state}&city=${property.city}`)
            const recoCity = await recCity.data
            if (recoCity.properties.length <= 1) {
                const rec = await axios.get(`${url}/v1/property/find?state=${property.state}`)
                const reco = await rec.data
                if (reco.properties.length <= 1) {
                    const house = await axios.get(`${url}/v1/property/find`)
                    const result = await house.data
                    setRecommend(result.properties)
                } else {
                    setRecommend(reco.properties)
                }
            } else {
                setRecommend(recoCity.properties)
            }
        })()
    }, [property.city, property.state])
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
                    recommend.map((prop, i) => (
                        property._id !== prop._id && <div onClick={() => navigate(`/desc/${prop._id}`)} key={i} className='insideMainDiv'>
                            <img src={prop?.mainImage?.url} alt="" />
                            <h4>{prop.title}</h4>
                            <p>{prop.address} {prop.city} {prop.state !== "No states available" && prop.state} {prop.country}</p>
                            <span>₦{prop.price}{prop.pricePer}</span>
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