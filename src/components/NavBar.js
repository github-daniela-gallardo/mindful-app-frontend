import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">

            <Link style={{textDecoration: "none", color:" #157575"}} to='/homeloggedin'>
            <div className="navbarIcons">
                <i className="fas fa-home-lg-alt"> </i>
                <p> Home</p>
            </div>
            </Link>
            <Link style={{textDecoration: "none", color:" #157575"}} to='/profile'>
            <div className="navbarIcons">
                <i className="fas fa-user-alt"> </i>
                <p> Profile</p>
            </div>
            </Link>
            <Link style={{textDecoration: "none", color:" #157575"}} to='/logout'>
            <div className="navbarIcons">
                <p> Log out </p>
                
                <i className="fas fa-sign-out"> </i>
            </div>
            </Link>
        </div>
    );
}

export default NavBar;
