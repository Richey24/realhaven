import "./Recommend.css"
import black from "../../img/arrowblack.svg"
import theImg from "../../img/image.png"
import addressImg from "../../img/Location.svg"
import blue from "../../img/blueArrow.svg"

const Recommend = () => {
    const arr = ['a', 'b', 'c', 's', 'f', 'g']

    const moveRight = () => {
        document.getElementById("fourthSec").scrollLeft += 500
    }
    const moveLeft = () => {
        document.getElementById("fourthSec").scrollLeft -= 500
    }

    return (
        <div className="mainFourth">
            <div className="fourthInner">
                <div>
                    <h1>Recommended properties</h1>
                    <p>Browse the website’s database to choose a  property that best fit your taste </p>
                </div>
                <p>Sell all <img src={black} alt="" /></p>
            </div>
            <div id="fourthSec" className="fourthSec">
                {
                    arr.map((ar, i) => (
                        <div key={i}>
                            <div className="fourthImg">
                                <img src={theImg} alt="" />
                                <span>Rent</span>
                            </div>
                            <h6>A stunning two bedroom two bathroom apartment close to Angel and Old Street Stations</h6>
                            <p><img src={addressImg} alt="" /> Orchid Lekki, Lagos</p>
                            <h5>₦150,000,000</h5>
                        </div>
                    ))
                }
            </div>
            <div className="fourthLast">
                <img onClick={moveRight} src={black} className="fourthLeft" alt="" />
                <img onClick={moveLeft} src={black} className="fourthRight" alt="" />
            </div>
            <button className="fourthSeeAll">See all <img src={blue} alt="" /></button>

        </div>
    )
}

export default Recommend