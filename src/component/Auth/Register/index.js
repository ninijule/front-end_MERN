import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "../../../api/axios";
import notification from "../../../helper/notification";


const Register = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");

    const onHandle = async (e) => {

        e.preventDefault();
        if (password !== password_confirmation) {
            setError("Passwords do not match");
            return;
        }

        setError(false);
        await axios.post("/register", JSON.stringify({ name, email, password, password_confirmation })).then((result) => {
            console.log(result)

            if (result.status === 200) {
                notification.show("You have successfully registered", "success", "bottom-center");
                setTimeout(() => {
                    navigate("/signin");
                }, 5000)

            }
        }).catch((err) => {
            notification.show(err.message, "error", "bottom-center");
            setError(err.message);

        })

    }

    return (
        <div className="register">
            <div className="form-layout">
                <h1>Register</h1>
                <div className="form-group">
                    <form onSubmit={onHandle}>
                        <div className="input-container">
                            <label htmlFor="nameInput"> Name </label>
                            <input type="text" id="user" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                            <label htmlFor="emailInput"> Email </label>
                            <input type="email" id="user" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <label htmlFor="passwordInput"> Password </label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <label htmlFor="passwordInput"> Confirm Password </label>
                            <input type="password" id="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required />
                        </div>
                        <div className="submit-container">
                            <button type="submit">Sign Up</button>
                        </div>
                        {error && <div className="error"><p>{error}</p></div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;