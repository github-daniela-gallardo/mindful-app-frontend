import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";


const IsAnon = (props) => {

    

    const {isLoggedIn, isLoading} = useContext(AuthContext);

    if(isLoading) return <p>Loading...</p>;

    if(isLoggedIn) {
        return <Navigate to="/homeloggedin"/>
    }
    return props.children

}

export default IsAnon;