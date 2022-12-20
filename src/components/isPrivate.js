import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";


const IsPrivate = (props) => {

    

    const {isLoggedIn, isLoading} = useContext(AuthContext);
    
    if (isLoading) return <p>Loading...</p>

    if(!isLoggedIn) {
        return <Navigate to='/login' />
    }

    return props.children
}

export default IsPrivate;
