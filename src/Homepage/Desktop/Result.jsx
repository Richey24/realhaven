import "./Result.css"
import { useState } from 'react';
import down from '../../img/Icon.svg'
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

const images = [one, two, three, four, five, six, seven, eight, nine]

const Result = () => {
    const [filter, setFilter] = useState("Most Relevant")

    const showFilter = () => {
        document.getElementById("searchResultFilter").classList.toggle("showSearchFilter")
    }

    const getFilter = (value) => {
        setFilter(value)
        showFilter()
    }

    return (
        <div>
            <div className="resultMain">
                <h4 className="findPlace">Find the perfect place</h4>
                <p className="advancedSearch">With our advanced search and filters you can easily find the best place in Nigeria</p>
                <div className="searchFilterMainDesk">
                    <span>45 listings found</span>
                    <div>

                        <p onClick={showFilter}>{filter} <img src={down} alt="" /></p>
                        <ul id="searchResultFilter" className="searchResultFilter">
                            <li onClick={() => getFilter("Most Relevant")}>Most Relevant</li>
                            <li onClick={() => getFilter("Most Recent")}>Most Recent</li>
                            <li onClick={() => getFilter("Nearest to location")}>Nearest to location</li>
                            <li onClick={() => getFilter("Cheapest")}>Cheapest</li>
                        </ul>
                    </div>
                </div>
                {
                    images.map((image) => (
                        <div className="mainResult">
                            <img src={image} alt="" />
                            <div>
                                <p className="houseTypeDesk">4 Bedroom flat for rent <span>Rent</span></p>
                                <p className="houseLocationDesk">Off Allen Avenue Allen Avenue Ikeja Lagos</p>
                                <p className="houseDescDesk">4 bedroom House for rent Off Allen Avenue Allen Avenue Ikeja Lagos renting for ₦6,500,000/year. Click to see property details or browse all our range of properties in Allen Avenue Ikeja Lagos</p>
                                <p className="housePriceDesk">₦15,000,000/Year</p>
                                <p className="contactAgent"><img src={call} alt="" /> Contact Agent</p>
                            </div>
                        </div>
                    ))
                }
                <div className="paginateDesk">
                    <p className="pagePrev"><img src={arrow} alt="" />Previous</p>
                    <div>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>...</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                    </div>
                    <p className="pageNext">Next <img src={arrow} alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default Result