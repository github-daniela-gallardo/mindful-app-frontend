import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


const NotesPage = () => {
    return (
        <div>
            <NavBar/>
            <h3 className='title' style={{ textAlign: "center" }}>Add new notes to your journal</h3>

            <div className='container'>

                <Link to='/addnote'>
                <div style={{ textAlign: "center" }} className='buttonposition'>
                    <button className='button3'> Add a new note </button> 
                   
                </div>
                </Link>
                {/* <i className="fal fa-smile-plus"></i> */}




                <div className='notesContainerMobile'>
                <i className="far fa-sticky-note"></i>
                </div>

                <div className='notesContainer'>
                    this div will contain notes.
                </div>

            </div>


        </div>

    );
}

export default NotesPage;
