import "../DeskDash/DeskDashMain.css"
import Sidebar from '../DeskDash/Sidebar';
import MainDesk from "./MainDesk";

const AddDesk = () => {
    return (
        <div>
            <div className="deskDashMain">
                <Sidebar />
                <MainDesk />
            </div>
        </div>
    )
}

export default AddDesk