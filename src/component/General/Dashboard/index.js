import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {

    const { loggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn === false) {
            navigate("/signin");
        }
    }, [loggedIn])

    return (
        <div className="dashboard">
            {loggedIn === true && (<>
                <h1>Dashboard</h1>
                <p>This is the dashboard page</p>
            </>)}
        </div>
    )
}
export default Dashboard;