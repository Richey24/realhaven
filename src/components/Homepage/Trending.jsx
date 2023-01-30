import "./Trending.css"
import black from "../../img/arrowblack.svg"
import img1 from "../../img/trend.png"
import img2 from "../../img/image 5 (2).png"
import img3 from "../../img/image 5 (3).png"
import img4 from "../../img/image 5 (4).png"
import img5 from "../../img/image 5 (5).png"
import blue from "../../img/blueArrow.svg"
import { mouseEnter, mouseLeave } from "../../utils/functions"

const Trending = () => {

    return (
        <div className="mainThird">
            <div className="thirdInner">
                <div>
                    <h1>Trending property types</h1>
                    <p>Browse the website’s database to choose a  property that best fit your taste </p>
                </div>
                <p>Sell all <img src={black} alt="" /></p>
            </div>
            <div className="thirdImages">
                <div onMouseEnter={() => mouseEnter("firstHover", "modern")} onMouseLeave={() => mouseLeave("firstHover", "modern")} className="firstImgDiv">
                    <img loading="lazy" src={img1} alt="" />
                    <p id="modern">Modern residential apartments</p>
                    <div className="firstHover" id="firstHover">
                        <div>
                            <h6>Modern residential apartments</h6>
                            <span>View more</span>
                        </div>
                    </div>
                </div>
                <div className="secondImgDiv">
                    <div onMouseEnter={() => mouseEnter("secondHover", "short")} onMouseLeave={() => mouseLeave("secondHover", "short")}>
                        <img loading="lazy" src={img2} alt="" />
                        <p id="short">Shortlet apartments</p>
                        <div className="secondHover" id="secondHover">
                            <div>
                                <h6>Shortlets apartments</h6>
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => mouseEnter("thirdHover", "real")} onMouseLeave={() => mouseLeave("thirdHover", "real")}>
                        <img loading="lazy" src={img3} alt="" />
                        <p id="real">Real estate resort</p>
                        <div className="secondHover" id="thirdHover">
                            <div>
                                <h6>Real estate resort</h6>
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thirdImgDiv">
                    <div onMouseEnter={() => mouseEnter("fourthHover", "office")} onMouseLeave={() => mouseLeave("fourthHover", "office")}>
                        <img loading="lazy" src={img4} alt="" />
                        <p id="office">Office spaces</p>
                        <div className="secondHover" id="fourthHover">
                            <div>
                                <h6>Office spaces</h6>
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => mouseEnter("fifthHover", "apart")} onMouseLeave={() => mouseLeave("fifthHover", "apart")}>
                        <img loading="lazy" src={img5} alt="" />
                        <p id="apart">Apartments Collections</p>
                        <div className="secondHover" id="fifthHover">
                            <div>
                                <h6>Apartments Collections</h6>
                                <span>View more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="thirdSeeAll">See all <img src={blue} alt="" /></button>
        </div>
    )
}

export default Trending