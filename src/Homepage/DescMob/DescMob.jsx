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
    const { id } = useParams()
    useEffect(() => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        (async () => {
            console.log(id)
            const house = await axios.get(`${url}/v1/property/find?id=${id}`)
            const result = await house.data
            console.log(result);
        })()
        setSpin(false)
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
                            <MainDesk />
                            <Footer />
                        </>
                    ) :
                    (
                        <>
                            <Main />
                            <Similar />
                            <Seventh />
                            <Footer />
                        </>
                    )
                }
            </div>
    )
}

export default DescMob