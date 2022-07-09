import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import notification from "../../../helper/notification";
import "./Login.css"
import axios from "../../../api/axios";

const Login = () => {

    let navigate = useNavigate();
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const onHandle = async (e) => {
        e.preventDefault();
        setError(false);

        const email = user.email;
        const password = user.password;

        await axios.post("/login", { email, password }).then((result) => {
            console.log("result")
            switch (result.status) {
                case 200:
                    notification.show("You have successfully registered", "success", "bottom-center");
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 3000)
                    break;
                default:
                    notification.show("Something went wrong", "error", "bottom-center");
                    setError("Something went wrong");
                    break;
            }
        }).catch((err) => {
            switch (err.response.status) {
                case 401:
                    notification.show("Invalid email or password", "error", "bottom-center");
                    setError("Invalid email or password");
                    break;
                default:
                    notification.show("Something went wrong", "error", "bottom-center");
                    setError("Something went wrong");
                    break;
            }
        });
    }

    return (
        <div className="login">
            <div className="form-layout">
                <h1>Login</h1>
                <div className="form-group">
                    <form onSubmit={onHandle}>
                        <div className="input-container">
                            <label htmlFor="emailInput">
                                Email :
                                <input type="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" maxLength="100" required />
                            </label>
                        </div>
                        <div className="input-container">
                            <label htmlFor="passwordInput">
                                Password :
                                <input type="password" id="password" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" maxLength="100" autoComplete="off" required />
                            </label>
                        </div>
                        <div className="submit-container">
                            <button type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Login;