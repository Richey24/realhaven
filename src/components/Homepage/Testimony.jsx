import "./Testimony.css"
import black from "../../img/arrowblack.svg"
import { useEffect, useState } from "react"
import testimony from "../../data/testimony"


const Testimony = () => {
    const [num, setNum] = useState(0)

    const moveRight = () => {
        if (num >= testimony.length - 1) {
            return
        }
        setNum(num + 1)
    }
    const moveLeft = () => {
        if (num <= 0) {
            return
        }
        setNum(num - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (num >= testimony.length - 1) {
                setNum(0)
                return
            }
            setNum(num + 1)
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [num])

    return (
        <div className="heroFifth">
            <h1>Don’t just take our word for it</h1>
            <p>Hear what our clients says about us</p>
            <div className="heroFifthInner">
                <img src={testimony[num].img} alt="" />
                <div>
                    <p>{testimony[num].speech}</p>
                    <div className="heroFifthName"><div></div> {testimony[num].name} <div className="secondDivLine"></div></div>
                    <div className="fifthPaginate">
                        <div className="fifthPaginateDiv">
                            <div className={num === 2 ? "bluePaginate" : "greyPaginate"}></div>
                            <div className={num === 0 ? "bluePaginate" : "greyPaginate"}></div>
                            <div className={num === 1 ? "bluePaginate" : "greyPaginate"}></div>
                        </div>
                        <div className="fifthPageImg">
                            <img onClick={moveLeft} className="leftFifth" src={black} alt="" />
                            <img onClick={moveRight} src={black} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony