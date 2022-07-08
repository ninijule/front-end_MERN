import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="navbar">
            <h2><Link to="signin">Signin</Link><br/><Link to="signup">Signup</Link><br/><Link to="home">Home</Link></h2>
        </div>
    )
}
export default NavBar;