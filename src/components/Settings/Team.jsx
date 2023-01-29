import "./Team.css"
import dp from "../../img/dp.png"
import close from "../../img/close.svg"
import good from "../../img/good.svg"

const Team = () => {
    return (
        <div>
            <div className="profileDiv">
                <h4>Invite Your Team</h4>
                <p>Manage invitations and requests to join your team.</p>
                <div className="inviteDiv">
                    <div className="firstInviteDiv">
                        <img src={dp} alt="" />
                        <div>
                            <p><span>Ayodeji Dev </span>would like to join your team  <p style={{ fontSize: "12px" }}>ayodeji.dev@gmail.com</p></p>
                        </div>
                    </div>
                    <div className="secInviteDiv">
                        <div>
                            <img src={close} alt="" />
                        </div>
                        <div>
                            <img src={good} alt="" />
                        </div>
                    </div>
                </div>
                <div className="underDiv"></div>
                <div className="addTeam">
                    <div>
                        <input placeholder="email@domain.com" type="text" name="teamEmail" id="teamEmail" />
                        <select name="teamRole" id="teamRole">
                            <option value="Teammate">Teammate</option>
                            <option value="Owner">Owner</option>
                            <option value="Agent">Agent</option>
                            <option value="Customer support">Customer support</option>
                        </select>
                    </div>
                    <button>Invite</button>
                </div>
                <div className="teamList">
                    <div className="teamHead">
                        <p>You have 8 active team members:</p>
                        <span>Roles</span>
                    </div>
                    <div>
                        <div className="firstInviteDiv">
                            <img src={dp} alt="" />
                            <div>
                                <p><span>Laura Ward</span><p style={{ fontSize: "12px" }}>laura.ward@gmail.com</p></p>
                            </div>
                        </div>
                        <select name="teamRole" id="teamRole">
                            <option value="Teammate">Teammate</option>
                            <option selected value="Owner">Owner</option>
                            <option value="Agent">Agent</option>
                            <option value="Customer support">Customer support</option>
                        </select>
                    </div>
                    <div>
                        <div className="firstInviteDiv">
                            <img src={dp} alt="" />
                            <div>
                                <p><span>Judy Richardson</span><p style={{ fontSize: "12px" }}>judy.richardson@gmail.com</p></p>
                            </div>
                        </div>
                        <select name="teamRole" id="teamRole">
                            <option value="Teammate">Teammate</option>
                            <option value="Owner">Owner</option>
                            <option selected value="Agent">Agent</option>
                            <option value="Customer support">Customer support</option>
                        </select>
                    </div>
                    <div>
                        <div className="firstInviteDiv">
                            <img src={dp} alt="" />
                            <div>
                                <p><span>Keith Morrison</span><p style={{ fontSize: "12px" }}>keith.morrison@gmail.com</p></p>
                            </div>
                        </div>
                        <select name="teamRole" id="teamRole">
                            <option value="Teammate">Teammate</option>
                            <option value="Owner">Owner</option>
                            <option value="Agent">Agent</option>
                            <option selected value="Customer support">Customer support</option>
                        </select>
                    </div>
                    <div>
                        <div className="firstInviteDiv">
                            <img src={dp} alt="" />
                            <div>
                                <p><span>Ayodeji Dev </span><p style={{ fontSize: "12px" }}>ayodeji.dev@gmail.com</p></p>
                            </div>
                        </div>
                        <p style={{ cursor: "pointer" }}>Revoke invite</p>
                    </div>
                    <div>
                        <div className="firstInviteDiv">
                            <img src={dp} alt="" />
                            <div>
                                <p><span>Rejoice D Strong </span><p style={{ fontSize: "12px" }}>rejoice.strong@gmail.com</p></p>
                            </div>
                        </div>
                        <p style={{ cursor: "pointer" }}>Revoke invite</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team