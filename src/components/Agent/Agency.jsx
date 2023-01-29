import "./Agency.css"
import bordered from "../../img/bordered.png"
import person1 from "../../img/person1.png"
import person2 from "../../img/person2.png"
import person3 from "../../img/person3.png"
import person4 from "../../img/person4.png"
const Agency = () => {
    return (
        <div className="aThirdMain">
            <div className="thirdInnerDiv">
                <h1>Capital agency is your</h1>
                <h2>best chance</h2>
                <p>Capital agent is here to serve you best in your property search. We’ve got quite an array of luxury homes and properties you would love to own. So it’s impossible to not find what you’re looking for on here.</p>
                <h4>Happy Client, Happy Agency</h4>
                <div>
                    <img src={person1} alt="" />
                    <img src={person2} alt="" />
                    <img src={person3} alt="" />
                    <img src={person4} alt="" />
                    <p>Over 500+ Happy clients</p>
                </div>
            </div>
            <img src={bordered} alt="" />
        </div>
    )
}

export default Agency