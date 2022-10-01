import "./Result.css"
import { useEffect, useState } from 'react';
import down from '../../img/Icon.svg'
import call from '../../img/Call.svg'
import arrow from '../../img/arrowgrey.svg'
import emp from "../../img/empty.svg"
import { useNavigate } from 'react-router-dom';


const Result = ({ result }) => {
    const [filter, setFilter] = useState("Most Relevant")
    const [theResult, setTheResult] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setTheResult(result)
    }, [result])

    const showFilter = () => {
        document.getElementById("searchResultFilter").classList.toggle("showSearchFilter")
    }

    const getFilter = (value) => {
        setFilter(value)
        showFilter()
    }


    const getCheapest = () => {
        const arr = [...result]
        const sortedRes = arr.sort((a, b) => Number(a.price.split(",").reduce((a, b) => a + b)) - Number(b.price.split(",").reduce((a, b) => a + b)))
        setTheResult(sortedRes);
        getFilter("Cheapest")
    }

    const getRecent = () => {
        const arr = [...result]
        const sortedRes = arr.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        console.log(sortedRes);
        setTheResult(sortedRes)
        getFilter("Most Recent")
    }

    function match(s1, s2) {
        let count = 0;

        for (let i in s1) {
            s2.includes(s1[i]) && count++;
        }
        console.log(count);
        return count;
    }

    const nearLocation = () => {
        const arr = [...result]
        const sortedRes = arr.sort((a, b) => match(b.city, "Oredo") - match(a.city, "Oredo"))
        console.log(sortedRes);
        setTheResult(sortedRes)
        getFilter("Nearest to location")
    }

    return (
        <div>
            <div id="resultMain" className="resultMain">
                <h4 className="findPlace">Find the perfect place</h4>
                <p className="advancedSearch">With our advanced search and filters you can easily find the best place in Nigeria</p>
                {
                    theResult.length < 1 ?
                        (
                            <div className="emptyRes">
                                <img src={emp} alt="" />
                                <p>Sorry, there are no results for this search. Please try another phrase</p>
                            </div>
                        ) :
                        (
                            <div>
                                <div className="searchFilterMainDesk">
                                    <span>{result.length} listings found</span>
                                    <div>

                                        <p onClick={showFilter}>{filter} <img src={down} alt="" /></p>
                                        <ul id="searchResultFilter" className="searchResultFilter">
                                            <li onClick={() => getFilter("Most Relevant")}>Most Relevant</li>
                                            <li onClick={getRecent}>Most Recent</li>
                                            <li onClick={nearLocation}>Nearest to location</li>
                                            <li onClick={getCheapest}>Cheapest</li>
                                        </ul>
                                    </div>
                                </div>
                                {
                                    theResult.map((res, i) => (
                                        <div onClick={() => navigate(`/desc/${res._id}`)} key={i} className="mainResult">
                                            <img className="mainResultImage" src={res.mainImage?.url} alt="" />
                                            <div>
                                                <p className="houseTypeDesk">{res.title}<span>{res.purpose}</span></p>
                                                <p className="houseLocationDesk">{res.address} {res.city} {res.state} {res.country}</p>
                                                <p className="houseDescDesk">{res.description}</p>
                                                <p className="housePriceDesk">₦{res.price}{res.pricePer}</p>
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
                        )
                }

            </div>
        </div>
    )
}

export default Result