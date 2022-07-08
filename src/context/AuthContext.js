import React, { createContext, useEffect } from "react";
import axios from "../api/axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = React.useState(undefined);

    async function getLoggedIn() {
        const loggedIn = await axios.get("/isLogged");
        setLoggedIn(loggedIn.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, []);

    return <AuthContext.Provider value={[loggedIn, getLoggedIn]}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;
export {AuthContextProvider};