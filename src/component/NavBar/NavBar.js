import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="leftSide">
                <div className="logo">
                    <Link to="/"><h1>Questionary</h1></Link>
                </div>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/signin">Signin</Link>
                </div>
            </div>
            <div className="rightSide">

            </div>


        </div>
    )
}

export default NavBar;