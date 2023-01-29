import "./Testimony.css"
import bakare from "../../img/bakare.jpg"
import adeyemi from "../../img/adeyemi.jpg"
import james from "../../img/james.jpg"
import black from "../../img/arrowblack.svg"
import { useEffect, useState } from "react"

const arr = [
    {
        name: "Dr. Temitope Bakare",
        img: bakare,
        speech: '“My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.”'
    },
    {
        name: "Adeyemi Simisola",
        img: adeyemi,
        speech: '“My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.”'
    },
    {
        name: "James Mcgil",
        img: james,
        speech: '“My experience with Haven has been smooth sailing from the start. Transparent, great communication and my property agent was friendly, professional and kept me informed throughout the whole process.”'
    },
]

const Testimony = () => {
    const [num, setNum] = useState(0)

    const moveRight = () => {
        if (num >= arr.length - 1) {
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
            if (num >= arr.length - 1) {
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
                <img src={arr[num].img} alt="" />
                <div>
                    <p>{arr[num].speech}</p>
                    <div className="heroFifthName"><div></div> {arr[num].name} <div className="secondDivLine"></div></div>
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