import React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import NavBar from '../components/NavBar';
import background from '../images/sign-up-log-in.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)

    const [state, setState] = useState({
        userName: '',
        email: '',
        password: ''

    })

    const  updateState = e => setState({
        ...state,
        [e.target.name]: e.target.value
    })


    //create a post request to update the users info and to delete de account 

    



    return (
        <div>
            <img src={background} alt='bg' className="bg" />
            <NavBar />
            {isLoggedIn && (
                <h1 style={{ textAlign: "center", color: " #157575" }}>Hi {user.userName}! </h1>
                

            )}

            <div className='profileSections'>
                <div>
                    <form className='profileForm'>
                        <label>User Name:</label>
                        <input value={state.userName} onChange={updateState} name='userName' type='text'/>
                        <br />
                        <label>Email:</label>
                        <input value={state.email} onChange={updateState} name='email' type='email'/>
                        <br />
                        <label> Password: </label>
                        <input value={state.password} onChange={updateState} name='password' type='password' />

                        <br />
                        
                        <br />
                        <button className='button3'>Update my info  <i className="fas fa-user-edit" style={{color: "#EAD7C7"}}></i> </button>
                        <br/>
                        <br/>
                        <button className='button1' style={{textDecoration: "underline"}}>Delete my account</button>
                    </form>
                </div>


                <div className='profileFavorite'>
                    <h5 style={{ textAlign: "center", color: " #157575" }}> My favorites </h5>

                    <p style={{ textAlign: "center", fontSize: "smaller" }}>Here you can see your favorite videos</p>
                    <br/>
                    <br/>
                    <i className="fab fa-gratipay"></i>
                    <br/>
                    <Link to='FavoriteVideos'>
                        <button style={{ fontSize: "smaller" }} className='button3'>See my favorites</button>
                    </Link>

                    
                </div>
            </div>

        </div>
    );
}

export default ProfilePage;
