import Footer from "../Mobile/Footer"
import Seventh from "../Mobile/Seventh"
import Main from "./Main"
import Similar from "./Similiar"
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

const DescMob = () => {
    const [large, setLarge] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [spin, setSpin] = useState(true)
    useEffect(() => {
        if (window.innerWidth >= 800) {
            setLarge(true)
        } else {
            setLarge(false)
        }
        setSpin(false)
    }, [size])

    window.addEventListener("resize", () => { setSize(window.innerWidth) })

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