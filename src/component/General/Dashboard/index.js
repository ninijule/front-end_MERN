import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import axios from "../../../api/axios";
import Table from "../Table";
import "./Dashboard.css";


const Dashboard = () => {

    const navigate = useNavigate();
    const { loggedIn } = useContext(AuthContext);
    const [userLog, setUserLog] = useState([]);

    async function getUser() {
        const user = await axios.get("/user");
        setUserLog(user.data);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="dashboard">
            {loggedIn === true && (<>
                <h1>Dashboard</h1>
                <p>This is the dashboard page</p>
                <Table userData={userLog} />
            </>)}
        </div>
    )
}
export default Dashboard;