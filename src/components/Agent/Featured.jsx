import "./Featured.css"
import slant from '../../img/slantarrow.svg'
import arrow from '../../img/arrowgrey.svg'
import one from "../../img/image 5 (1).png"
import two from "../../img/image 5 (2).png"
import three from "../../img/image 5 (3).png"
import four from "../../img/image 5 (4).png"
import five from "../../img/image 5 (5).png"
import six from "../../img/image 5 (6).png"
import { decrement, increment } from "../../utils/functions"

const images = [one, two, three, four, five, six]
const Featured = () => {

    return (
        <div className="aSecondDiv">
            <h1>Featured Properties</h1>
            <div className="aFeatDiv" id="aFeatDiv">
                {
                    images.map((image, i) => (
                        <div key={i}>
                            <img src={image} alt="" />
                            <p className="aFeatTitle">5 Bedroom Duplex</p>
                            <p className="aFeatAdd">Orchid Lekki, Lagos</p>
                            <div className="aInnerDiv">
                                <h6>₦150,000,000</h6>
                                <div className="aImageDiv">
                                    <img src={slant} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="aNavigateDiv">
                <p>See all <img src={arrow} alt="" /></p>
                <div>
                    <img onClick={() => decrement("aFeatDiv")} src={arrow} className="leftArrow" alt="" />
                    <img onClick={() => increment("aFeatDiv")} src={arrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured