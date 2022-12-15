import React from 'react';
import { Link } from 'react-router-dom';
import background from '../images/home.jpg'

const Homepage = () => {


    return (


        <div className='homepage'>
             <img src={background} alt='bg' className="bg" />

            <h1 className='title'>Welcome to your mindful journey</h1>

            <div >
                <div className='buttonHomePagesignUp'>
                    <Link to='/signup'>
                        <button className='button1'>Sign up</button>
                    </Link>
                </div>
                <div className='buttonHomePagelogIn'>
                    <Link to='/login'>
                        <button className='button2'>Log In</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Homepage;
