import "./Result.css"
import call from '../../img/Call.svg'
import emp from "../../img/empty.svg"
import arrow from '../../img/arrowgrey.svg'
import { useNavigate } from 'react-router-dom';

const Result = ({ result }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div id="resultMob" className="mobResultMain">
                <h4 className="mobPerfect">Find the perfect place</h4>
                <p className="mobAdvanced">With our advanced search and filters you can easily find the best place in Nigeria</p>
                <p className="mobListing">{result.length} listings found</p>
                {
                    result.length < 1 ?
                        (
                            <div className="empMob">
                                <img src={emp} alt="" />
                                <p>Sorry, there are no results for this search. Please try another phrase</p>
                            </div>
                        ) :
                        (
                            result.map((res, i) => (
                                <div onClick={() => navigate(`/desc/${res._id}`)} key={i} className="mobResultDiv">
                                    <img src={res.mainImage?.url} alt="" />
                                    <p className="mobType">{res.title} <span>{res.purpose}</span></p>
                                    <p className="mobLocation">{res.address} {res.city} {res.country}</p>
                                    <p className="mobAddress">{res.description}</p>
                                    <p className="mobAmount">{res.price}{res.pricePer}</p>
                                    <p id="mobContact" className="mobContact"><img src={call} alt="" /> Contact Agent</p>
                                </div>
                            ))
                        )
                }
                <div id="mobPage" className="mobPage">
                    <p><img className="mobLeftArrow" src={arrow} alt="" />Previous</p>
                    <p>Next <img style={{ marginLeft: "12px" }} src={arrow} alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default Result