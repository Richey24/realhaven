import "./Result.css"
import { useState } from 'react';
import down from '../../img/Icon.svg'
import call from '../../img/Call.svg'
import arrow from '../../img/arrowgrey.svg'
import { useNavigate } from 'react-router-dom';


const Result = ({ result }) => {
    const [filter, setFilter] = useState("Most Relevant")
    const navigate = useNavigate()

    const showFilter = () => {
        document.getElementById("searchResultFilter").classList.toggle("showSearchFilter")
    }

    const getFilter = (value) => {
        setFilter(value)
        showFilter()
    }

    return (
        <div>
            <div id="resultMain" className="resultMain">
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
                    result.map((res, i) => (
                        <div onClick={() => navigate(`/desc/${res._id}`)} key={i} className="mainResult">
                            <img className="mainResultImage" src={res.mainImage?.url} alt="" />
                            <div>
                                <p className="houseTypeDesk">{res.title}<span>{res.purpose}</span></p>
                                <p className="houseLocationDesk">{res.address} {res.city} {res.country}</p>
                                <p className="houseDescDesk">{res.description}</p>
                                <p className="housePriceDesk">{res.price}{res.currency}/{res.pricePer}</p>
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