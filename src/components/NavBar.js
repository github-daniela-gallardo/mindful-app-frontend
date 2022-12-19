import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const NavBar = () => {

    const {logOutUser} = useContext(AuthContext)


    return (
        <div className="navBar">

            <Link style={{textDecoration: "none", color:" #157575"}} to='/homeloggedin'>
            <div className="navbarIcons">
                <i className="fas fa-home-lg-alt"></i> 
                <p>Home</p>
            </div>
            </Link>


            <Link style={{textDecoration: "none", color:" #157575"}} to='/profile'>
            <div className="navbarIcons">
                <i className="fas fa-user-alt"> </i>
                <p> Profile</p>
            </div>
            </Link>



            <Link style={{textDecoration: "none", color:" #157575"}} to='/'>
            <div className="navbarIcons">
                <button className="buttonLogOut" onClick={logOutUser}> Log out </button>
                <i className="fas fa-sign-out"> </i>
            </div>
            </Link>



        </div>
    );
}

export default NavBar;
