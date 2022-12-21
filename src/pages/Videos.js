import NavBar from '../components/NavBar';
import background from '../images/sign-up-log-in.png'
import palosanto from '../images/palosantp.jpg'
import dani from '../images/meditatedani.jpg'
import meditateimg from '../images/meditate.jpg'
import { Link } from 'react-router-dom';


const Videos = () => {



    return (
        <div>
            <img src={background} alt='bg' className="bg" />
            <NavBar />

            <h2 style={{ textAlign: "center", color: " #157575" }}>Lets meditate!</h2>

            <br />
            <br />

            <div className='videos'>

                <Link to='https://www.youtube.com/watch?v=U9YKY7fdwyg'  style={{  color: " #157575" }}>
                    <div>
                        <img className="meditateimg" src={dani} alt='meditate' />
                        <br/>
                        <h5>Meditation for beginner</h5>
                    </div>
                </Link>

                <Link   style={{  color: " #157575" }}>
                    <div>
                        <img className="meditateimg" src={palosanto} alt='meditate' />
                        <br/>
                        <h5>Meditation for beginner</h5>
                    </div>
                </Link>


                <Link   style={{  color: " #157575" }}>
                    <div>
                        <img className="meditateimg" src={palosanto} alt='meditate' />
                        <br/>
                        <h5>Meditation for beginner</h5>
                    </div>
                </Link>








            </div>


        </div>
    );
}

export default Videos;
