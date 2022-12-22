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

                <div className='videoInside'>
                    <h3 style={{ textAlign: "center", color: " #157575" }}>For beginners</h3>
                    <br />

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/U9YKY7fdwyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>

                <div className='videoInside'>
                    <h3 style={{ textAlign: "center", color: " #157575" }}>Do it anywhere</h3>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/inpok4MKVLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>

                <div className='videoInside'>
                    <h3 style={{ textAlign: "center", color: " #157575" }}>For anxiety</h3>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O-6f5wQXSu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>


                <div className='videoInside'>
                    <h3 style={{ textAlign: "center", color: " #157575" }}>Before going to sleep</h3>
                    <br />
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aEqlQvczMJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>


                <div className='videoInside'>
                    <h3 style={{ textAlign: "center", color: " #157575" }}>To start your day</h3>
                    <br />

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ENYYb5vIMkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>

                <div className='videoInside'>
                    <h3 style={{ textAlign: "center", color: " #157575" }}>When you feel depressed</h3>
                    <br />

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xRxT9cOKiM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </div>


            </div>


        </div>
    );
}

export default Videos;
