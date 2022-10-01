import Footer from "../Mobile/Footer"
import Seventh from "../Mobile/Seventh"
import Main from "./Main"
import Similar from "./Similiar"
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import MainDesk from "./MainDesk";
import axios from "axios";
import url from './../../url';
import { useParams } from 'react-router-dom';

const DescMob = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [spin, setSpin] = useState(true)
    const [property, setProperty] = useState({})
    const { id } = useParams()
    window.scrollTo(0, 0)
    useEffect(() => {
        setSpin(true)
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        (async () => {
            const house = await axios.get(`${url}/v1/property/find/one/${id}`)
            const result = await house.data
            setProperty(result)
            setSpin(false)
        })()
    }, [size, id])

    window.addEventListener("resize", () => {
        window.innerWidth >= 1200 && setSize(window.innerWidth)
        window.innerWidth < 800 && window.innerWidth > 780 && setSize(window.innerWidth)
    })

    return (
        spin ?
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Spinner animation="border" style={{ color: "#2E7DD7" }} />
            </div>
            :
            <div className="App">
                {large ?
                    (
                        <>
                            <MainDesk property={property} />
                        </>
                    ) :
                    (
                        <>
                            <Main property={property} />
                            <Similar property={property} />
                            <Seventh />
                            <Footer />
                        </>
                    )
                }
            </div>
    )
}

export default DescMob