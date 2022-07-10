import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    const { loggedIn } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="leftSide">
                <div className="logo">
                    <Link to="/"><h1>Questionary</h1></Link>
                </div>
                <div className="links">
                    {loggedIn === true && (<>
                        <Link to="/dashboard">Home</Link>
                    </>)}
                    <Link to="/about">About</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/signin">Signin</Link>

                    {loggedIn === true && (<>
                        <Link to="/logout">Logout</Link>
                    </>)}
                </div>
            </div>
            <div className="rightSide">
            </div>
        </div >
    )
}

export default NavBar;