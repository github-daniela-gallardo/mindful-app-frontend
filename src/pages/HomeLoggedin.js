import notebookimg from '../images/notebooknoBackground.png'
import meditateimg from '../images/meditate.jpg'
import axios from 'axios';
import { useState, useEffect } from 'react';
import lotusimg from '../images/lotus1.png'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import background from '../images/sign-up-log-in.png'

const HomeLoggedin = () => {

    console.log('logged in')

    const [quote, setQuote] = useState('')

    // useEffect(() => {
    //     axios.get('http://localhost:4000/quote')
    //         .then(axiosResponse => {
    //             setQuote(axiosResponse.data[0]);
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    return (

        <div>
             <img src={background} alt='bg' className="bg" />
            <NavBar />
            <h2 className="title"> What would you like to do today? </h2>

            <br />


            <div className='homeCards'>


                <Link to='videos' style={{ textDecoration: "none", color: " #157575" }}>
                <div className='homeCardInside'>

                    <img className="meditateimg" src={meditateimg} alt='meditateimg' />
                    <h4>Mediate now</h4>

                </div>
                </Link>


                <br />
                <br />
                <Link style={{ textDecoration: "none", color: " #157575" }} to='/notes'>
                    <div className='homeCardInside'>
                        <img className="notebookimg" src={notebookimg} alt='meditateimg' />
                        <h4>Write in my journal</h4>
                    </div>
                </Link>

            </div>

            <br />
            <br />

            <div className='quote'>
                <img className="lotusimg" src={lotusimg} alt='lotusimg' />
                <p><i><b>{quote.q}</b></i></p>
                <p><i>- {quote.a} -</i></p>
            </div>

        </div>
    );
}

export default HomeLoggedin;
