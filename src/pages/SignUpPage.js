import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import background from '../images/sign-up-log-in.png'
import axios from "axios";
import { baseUrl } from "../service";

const SignUpPage = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null)


    const [state, setState] = useState({
        email: '',
        userName: '',
        password: ''
    })

    const updateState = (e) => setState({
        ...state,
        [e.target.name]: e.target.value
    });

    //this will create the user and send it to the log in page 

    const submitFunction = e =>{
        e.preventDefault();
        axios.post(`${baseUrl}/auth/signup`, {
            email: state.email,
            password: state.password,
            userName: state.userName
        })
        .then(axiosResponse => {
            console.log(axiosResponse)
            navigate('/login')
        })
        .catch(err => setError(err.response.data));
    }


    return (

        <div >
            <img src={background} alt='bg' className="bg" />
            <Link to='/'>
            <p>Go back</p>
            </Link>
            <form className="form" onSubmit={submitFunction}>
            <label className="label">Email</label>
            <input className="input" name="email" value={state.email} onChange={updateState} type="email" />

            <br/>
            <br />
            <label className="label">User Name</label>
            <input className="input" name="userName" value={state.userName}  onChange={updateState} type="text" />
            <br/>
            <br />
            <label className="label">Password</label>
            <input className="input" name="password" value={state.password} onChange={updateState} type="password" />
            <br/>
            <br />

            <p style={{color: "red"}}>{error}</p>

            
            <br/>
            <button className="button2"> Sign up</button>

            <br/>

            <p style={{fontSize: "small"}}>Already has an account? 
                <br/> 
             <Link to='/login'> Log in Here!</Link></p>
           
            </form>
        </div>
    );
}

export default SignUpPage;
