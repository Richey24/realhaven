import React from 'react'

const Progress = ({ position }) => {
    const nums = [1, 2, 3]
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", position: "absolute", width: "100px", bottom: "0px" }}>
            {
                nums.map((num) => (
                    <div style={{ width: "7px", height: "7px", borderRadius: "100%", backgroundColor: position === num ? "rgba(46, 125, 215, 1)" : "rgba(229, 231, 235, 1)" }} key={num}></div>
                ))
            }
        </div>
    )
}

export default Progress