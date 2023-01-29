import "./Draft.css"
import preview from "../../img/small-preview.svg"
import locate from "../../img/Location.svg"
import del from "../../img/Delete.svg"
import edit from "../../img/green-edit.svg"
import empty from "../../img/Artowork.svg"
import empt from "../../img/empty.svg"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Draft = () => {

    const [draft, setDraft] = useState([])
    const [fdraft, setFDraft] = useState([])
    const [emp, setEmpty] = useState(false)
    const navigate = useNavigate()

    const helper = () => {
        const draftKey = Object.keys(localStorage).filter((key) => !isNaN(key)).sort((a, b) => a - b)
        const arr = []
        for (let i = 0; i < draftKey.length; i++) {
            const element = JSON.parse(localStorage.getItem(draftKey[i]));
            arr.push(element)
        }
        setDraft(arr)
        setFDraft(arr)
    }

    useEffect(() => {
        helper()
    }, [])


    const show = (id) => {
        document.getElementById(id).classList.toggle("shown")
    }

    const deleteDraft = (value) => {
        const draftKey = Object.keys(localStorage).filter((key) => !isNaN(key)).sort((a, b) => a - b)
        const key = draftKey[value]
        localStorage.removeItem(String(key))
        helper()
        console.log("sad");
    }

    const editDraft = (id) => {
        const draftKey = Object.keys(localStorage).filter((key) => !isNaN(key)).sort((a, b) => a - b)
        const key = draftKey[id]
        navigate("/post", {
            state: {
                draftPro: JSON.parse(localStorage.getItem(String(key))),
                key: key
            }
        })
    }

    document.getElementById("searchInput").addEventListener("keydown", (event) => {
        const arr = fdraft.filter((dra) => `${dra.title} ${dra.address} ${dra.city} ${dra.state}`.toLowerCase().includes(event.target.value.toLowerCase()))
        setDraft(arr)
        if (arr.length < 1) {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
    })

    const clearSearch = () => {
        document.getElementById("searchInput").value = ""
        setDraft(fdraft)
    }

    if (draft.length < 1 && emp) {
        return (
            <div className="emptyDraft">
                <img src={empt} alt="" />
                <h6>We couldn’t find any results.</h6>
                <p onClick={clearSearch}>Clear Search</p>
            </div>
        )
    }

    if (draft.length < 1) {
        return (
            <div className="emptyDraft">
                <img src={empty} alt="" />
                <h6>Unpublished properties will appear here</h6>
                <p onClick={() => navigate("/post")}>Add a new property</p>
            </div>
        )
    }

    return (
        <div className="mainDraftDiv">
            {
                draft.map((dra, i) => (
                    <div key={i} className="draftFirst">
                        <div className="draftSec">
                            <p onClick={() => show(`draftDiv${i}`)}>...</p>
                            <img src={preview} alt="" />
                            <div className="draftSecDiv" id={`draftDiv${i}`}>
                                <p onClick={() => editDraft(i)}><img src={edit} alt="" />Edit</p>
                                <p onClick={() => deleteDraft(i)}><img src={del} alt="" />Delete</p>
                            </div>
                        </div>
                        <h6>{dra.title}</h6>
                        <p className="inAdd"><img src={locate} alt="" />{dra.address} {dra.city} {dra.state}</p>
                        <span>{dra.price ? `₦${dra.price}` : "₦****"}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Draft