import "./Canvas.css"
import { Offcanvas } from "react-bootstrap"
import cancel from "../img/cancel.svg"
import { useLocation } from "react-router-dom"

const Canvas = ({ hideShow, show }) => {
    const { pathname } = useLocation()
    return (
        <div>
            <Offcanvas className="canMain" placement="end" show={show} onHide={hideShow}>
                <Offcanvas.Header>
                    <img className="canImg" onClick={hideShow} src={cancel} alt="" />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className={pathname === "/" ? "activeCan" : ""}>All properties</p>
                    <p className={pathname === "/agency/sales" ? "activeCan" : ""}>Sales</p>
                    <p className={pathname === "/agency/rent" ? "activeCan" : ""}>Rent</p>
                    <p className={pathname === "/agency/shortlets" ? "activeCan" : ""}>Shortlets</p>
                    <p className={pathname === "/agency/about" ? "activeCan" : ""}>About us</p>
                    <p className={pathname === "/agency/services" ? "activeCan" : ""}>Services</p>
                    <button>Contact us</button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Canvas