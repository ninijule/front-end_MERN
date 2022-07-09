import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "../../../api/axios";
import "./Dashboard.css";


const Dashboard = () => {

    const navigate = useNavigate();
    const { loggedIn } = useContext(AuthContext);
    const [userData, setuserData] = useState({});

    const getUser = useCallback(async () => {
        const user = await axios.get("/user");
        setuserData(user.data);
    }, []);

    useEffect(() => {
        // if (loggedIn === false) {
        //     navigate("/signin");
        // }
        getUser();
    }, [loggedIn, getUser]);

    return (
        <div className="dashboard">
            {loggedIn === true && (<>
                <h1>Dashboard</h1>
                <p>This is the dashboard page</p>
                <br />
                <p>Hello {userData.name}</p>
            </>)}
        </div>
    )
}
export default Dashboard;