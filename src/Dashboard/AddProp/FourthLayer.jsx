import "./FourthLayer.css"
import locate from "../../img/Location.svg"
import room from '../../img/room.svg'
import bathroom from '../../img/bathroom.svg'
import toilet from '../../img/toilet.svg'
import pen from "../../img/Edit.svg"
import send from "../../img/Send.svg"
import { Spinner } from 'react-bootstrap';

const FourthLayer = ({ property, spin }) => {
    return (
        <div style={{ display: "none" }} id="fourthLayer" className="fourthLayer">
            <div className="firstDiv">
                <img className="middleImage" src={property.mainImage && URL.createObjectURL(property.mainImage)} alt="" />
            </div>
            <div className="secondDiv">
                {
                    property.otherImages?.map((image, i) => (
                        <img key={i} src={URL.createObjectURL(image)} alt="" />
                    ))
                }
            </div>
            <div className="thirdDiv">
                <p>{property.title} <span>{property.purpose}</span></p>
                <h5>{property.price}{property.currency}{property.pricePer}</h5>
            </div>
            <div className="fourthDiv">
                <h5 className="fourthAddress"><img src={locate} alt="" />{`${property.aptUnit} ${property.address} ${property.city} ${property.state} ${property.country} ${property.postalCode}`}</h5>
                <div className="blueBackMob">
                    <div data-value={property.noOfBedroom} className="roomImgMob">
                        <img src={room} alt="" />
                    </div>
                    <div className="bathroomImgMob" data-value={property.noOfBathroom}>
                        <img src={bathroom} alt="" />
                    </div>
                    <div className="toiletImgMob" data-value={property.noOfToilet}>
                        <img src={toilet} alt="" />
                    </div>
                </div>
            </div>
            <p className="fifthDesc">{property.description}</p>

            <div className="sixthDiv">
                <p className="addFinal1"><img src={pen} alt="" />Save to Drafts</p>
                <button type="submit" style={{ background: "#2E7DD7", color: "white", border: "none", outline: "none" }} className="addFinal1"><img src={send} alt="" />{spin ? (<Spinner animation="border" style={{ color: "white" }} />) : "Post Property"}</button>
            </div>
        </div>
    )
}

export default FourthLayer