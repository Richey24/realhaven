import "./Result.css"
import call from '../../img/Call.svg'
import arrow from '../../img/arrowgrey.svg'
import { useNavigate } from 'react-router-dom';


const Result = ({ result }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div id="resultMob" className="mobResultMain">
                <h4 className="mobPerfect">Find the perfect place</h4>
                <p className="mobAdvanced">With our advanced search and filters you can easily find the best place in Nigeria</p>
                <p className="mobListing">25 listings found</p>
                {
                    result.map((res, i) => (
                        <div onClick={() => navigate("/desc")} key={i} className="mobResultDiv">
                            <img src={res.mainImage?.url} alt="" />
                            <p className="mobType">{res.title} <span>{res.purpose}</span></p>
                            <p className="mobLocation">{res.address} {res.city} {res.country}</p>
                            <p className="mobAddress">{res.description}</p>
                            <p className="mobAmount">{res.price}{res.currency}/{res.pricePer}</p>
                            <p className="mobContact"><img src={call} alt="" /> Contact Agent</p>
                        </div>
                    ))
                }
                <div className="mobPage">
                    <p><img className="mobLeftArrow" src={arrow} alt="" />Previous</p>
                    <p>Next <img style={{ marginLeft: "12px" }} src={arrow} alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default Result