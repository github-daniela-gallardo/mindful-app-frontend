import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import background from '../images/sign-up-log-in.png'

const LogInPage = () => {

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



    return (

        <div>
            <Link to='/'>
            <p>Go back</p>
            </Link>
             <img src={background} alt='bg' className="bg" />
            <form className="form">
            <label className="label">Email</label>
            <input className="input" name="email" value={state.email} onChange={updateState} type="text" />

            <br/>
            <br />
            
            <label className="label">Password</label>
            <input className="input" name="password" value={state.password} onChange={updateState} type="password" />
            <br/>
            <br />
            <button className="button2"> Log In</button>
            </form>
        </div>
    );
}

export default LogInPage;
