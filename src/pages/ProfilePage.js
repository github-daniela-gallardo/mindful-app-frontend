import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import NavBar from '../components/NavBar';
import background from '../images/sign-up-log-in.png'

const ProfilePage = () => {

    const { user, isLoggedIn } = useContext(AuthContext)



    return (
        <div>
            <img src={background} alt='bg' className="bg" />
            <NavBar />
            {isLoggedIn && (
                <h1 style={{ textAlign: "center", color: " #157575" }}>Hi {user.userName} </h1>
            )}

        </div>
    );
}

export default ProfilePage;
