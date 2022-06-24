import "../style/header.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forms = () => {
    let location = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [checkRemember, setCheckRemember] = useState(false);
    const handelOnchangeName = (e) => {
        setName(e.target.value);
    }
    const handelOnchangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handelLogin = () => {
        if (name.length > 2 && password.length > 2 && checkRemember) {
            location("/todolist")
        }
    }
    const handelCheck = (e) => {
        setCheckRemember(e.target.checked)
    }
    return (
        <div id="form">
            <div className="card-header">Sign in</div>
            <div className="card-body">
                <div className="name">
                    <label className="lb_name">d</label>
                    <input name="name" type={"text"} placeholder="E-mail" className="inputName" onChange={handelOnchangeName} />
                </div>
                <div className="password">
                    <label className="lb_password">d</label>
                    <input name="password" type={"password"} placeholder="Password" className="inputPassword" onChange={handelOnchangePassword} />
                </div>
                <div className="check_forgot">
                    <div className="check-form">
                        <input type={"checkbox"} onChange={handelCheck} />
                        <span>Remember me</span>
                    </div>
                    <div className="forgot">
                        <span>Forgot password?</span>
                    </div>
                </div>
                <div className="login">
                    <button onClick={handelLogin}>SIGN IN</button>
                </div>
                <p>
                    Not a member?
                    <a href="#">Register</a>
                </p>
                <p>
                    or sign in with:
                </p>
            </div>
        </div>
    )
}
export default Forms