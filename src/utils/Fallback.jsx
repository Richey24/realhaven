import React from 'react'
import { Spinner } from 'react-bootstrap'

const Fallback = () => {
    return (
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
    )
}

export default Fallback