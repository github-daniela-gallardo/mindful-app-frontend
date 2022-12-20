import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import background from '../images/sign-up-log-in.png'


const NotesPage = () => {
    return (
        <div>
            <img src={background} alt='bg' className="bg" />
            <NavBar />
            <h3 className='title' style={{ textAlign: "center" }}>Add notes to your journal</h3>
            
            <div className='container'>

                <Link to='/createnote'>
                    <div style={{ textAlign: "center" }} className='buttonposition'>

                        <button className='button3'> Create a new note +</button>

                    </div>
                </Link>
                {/* <i className="fal fa-smile-plus"></i> */}



                {/* this is for mobile first design  */}
                <div className='notesContainerMobile'>
                    <div>
                        {/* <Link to='savedNotesMobile'>
                    <p style={{ textAlign: "center", color: "#157575"}}>Check out your notes  </p> 
                    </div>
                    <div>
                    <i className="far fa-sticky-note">  </i>
                    </Link> */}
                    </div>
                </div>


                {/* this is for screens greater that 500  */}
                <div className='notesContainer'>
                    <h5 style={{ textAlign: "center", color: "#157575", textDecoration: "underline"}} >Check out your notes: </h5>


                </div>

            </div>


        </div>

    );
}

export default NotesPage;
