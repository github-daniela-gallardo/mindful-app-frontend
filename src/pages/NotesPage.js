import NavBar from '../components/NavBar';
import { Link, useParams } from 'react-router-dom';
import background from '../images/sign-up-log-in.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
import EditNoteModal from '../components/EditNoteModal';


const NotesPage = () => {

    // const {userId} = useParams()

    // const [isOpen, setIsOpen] = useState(false);
    // const openModal = () => {
    //   setIsOpen(true);
    // }

    // const closeModal = () => {
    //   setIsOpen(false);
    // }

    const [notes, setNotes] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [noteId, setNoteId] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:4000/addnote/notes`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        )
            .then(axiosRespoonse => {
                console.log(axiosRespoonse.data)
                setNotes(axiosRespoonse.data)
            })
            .catch(err => console.log(err))
    }, [])


    //create a request to open the notes and update 





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


                <div className='notesContainer'>
                    <h5 style={{ textAlign: "center", color: "#157575", textDecoration: "underline" }} >Check out your notes: </h5>

                    <div >
                        {notes.map((singleNote) => {
                            return (

                                // click this and open a form showing the notes 
                                <div className='singleNote' onClick={() => {
                                    setNoteId(singleNote._id);
                                    setIsOpen(true)
                                }}>
                                    <div>
                                        <p>{singleNote.title}</p>

                                    </div>

                                    <div className='icons'>
                                        <p><i className="far fa-edit"></i></p>

                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>



            </div>


            {isOpen && <EditNoteModal noteId={noteId} />}.
        </div >

    );
}

export default NotesPage;
