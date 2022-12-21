import { useNavigate, Link } from "react-router-dom";
import background from '../images/sign-up-log-in.png';
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { baseUrl } from "../service";


const LogInPage = () => {

    const { storeToken, authenticateUser } = useContext(AuthContext)

    const navigate = useNavigate();

    const [state, setState] = useState({
        email: '',
        userName: '',
        password: ''
    })

    const updateState = (e) => setState({
        ...state,
        [e.target.name]: e.target.value
    });

    const submitFunction = e =>{
        e.preventDefault();
      
        axios.post(`${baseUrl}/auth/login` , {            
            email: state.email,
            password: state.password
        })
        .then(axiosResponse => {
            console.log(axiosResponse.data);
            storeToken(axiosResponse.data.authToken);
            authenticateUser();
            navigate('/homeloggedin');
            

        })
        .catch(err => console.log(err))
    }



    return (

        <div>
            <Link to='/'>
                <p>Go back</p>
            </Link>
            <img src={background} alt='bg' className="bg" />

            <form className="form" onSubmit={submitFunction}>
                <label className="label">Email</label>
                <input className="input" name="email" value={state.email} onChange={updateState} type="text" />

                <br />
                <br />

                <label className="label">Password</label>
                <input className="input" name="password" value={state.password} onChange={updateState} type="password" />
                <br />
                <br />
                <button className="button2"> Log In</button>
            </form>
        </div>
    );
}

export default LogInPage;
