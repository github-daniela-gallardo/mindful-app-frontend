import NavBar from '../components/NavBar';
import { Link, useParams } from 'react-router-dom';
import background from '../images/sign-up-log-in.png'
import axios from 'axios';
import { useState, useEffect } from 'react';


const NotesPage = () => {

    // const {userId} = useParams()

    const [notes, setNotes] = useState([])

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
                        <Link to="editNote" style={{textDecoration: "none", color: "#157575"}}>
                            {
                                notes.map((singleNote) => {
                                    return (
                                        <div className='singleNote'>
                                            <div>
                                                <p>{singleNote.title}</p>

                                            </div>


                                            <div className='icons'>
                                                {/* <div> */}
                                                <p><i className="far fa-edit"></i></p>
                                                {/* </div> */}
                                                {/* <div>
                                            <p><i className="fas fa-trash"></i></p>
                                        </div> */}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Link>
                    </div>


                </div>

            </div>


        </div >

    );
}

export default NotesPage;
