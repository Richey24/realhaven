import "./Result.css"
import call from '../../img/Call.svg'
import one from '../../img/Rectangle 307.png'
import two from '../../img/Rectangle 309.png'
import three from '../../img/image 5.png'
import four from '../../img/image 5 (1).png'
import five from '../../img/image 5 (2).png'
import six from '../../img/image 5 (3).png'
import seven from '../../img/image 5 (4).png'
import eight from '../../img/image 5 (5).png'
import nine from '../../img/image 5 (6).png'
import arrow from '../../img/arrowgrey.svg'
import { useNavigate } from 'react-router-dom';

const images = [one, two, three, four, five, six, seven, eight, nine]

const Result = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="mobResultMain">
                <h4 className="mobPerfect">Find the perfect place</h4>
                <p className="mobAdvanced">With our advanced search and filters you can easily find the best place in Nigeria</p>
                <p className="mobListing">25 listings found</p>
                {
                    images.map((image, i) => (
                        <div onClick={() => navigate("/desc")} key={i} className="mobResultDiv">
                            <img src={image} alt="" />
                            <p className="mobType">4 BEDROOM HOUSE FOR RENT <span>Rent</span></p>
                            <p className="mobLocation">Off Allen Avenue Allen Avenue Ikeja Lagos</p>
                            <p className="mobAddress">4 bedroom House for rent Off Allen Avenue Allen Avenue Ikeja Lagos...</p>
                            <p className="mobAmount">₦15,000,000/Year</p>
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