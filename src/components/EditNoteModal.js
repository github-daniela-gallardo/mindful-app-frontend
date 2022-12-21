import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const EditNoteModal = (props) => {

    const [note, setNote] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:4000/addnote/notes/${props.noteId}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(axiosRes => {
                console.log(axiosRes.data)
                setNote(axiosRes.data)
            })
            .catch(err => console.log(err))
    }, [props.noteId]);


    return (

        <div>
            <div className='overlay'></div>
            <div className="notesModal" >

                {note ? (
                    <div>
                        {/* this 'close button' is not closing the modal */}
                         <Link to='/notes'><i className="fas fa-times-circle" style={{ fontSize: "30px" }}></i></Link>
                        <h3 style={{ textAlign: "center" }}>{note.title}</h3>
                        <h5>{(new Date(note.date)).toDateString()}</h5>

                        {note.answers.map((thisAnswer) => {
                            return (
                                <div>
                                    <h4>{thisAnswer.question.text}</h4>
                                    {thisAnswer.answer ? <p>{thisAnswer.answer}</p> : <p>No answer provided.</p>}
                                </div>

                            )
                        })}

                        <div className='buttonsModal'>
                            <button style={{ fontSize: 'small' }} className='button2'>Update<i className="fas fa-pencil"></i></button>
                            <button style={{ fontSize: 'small' }} className='button2'>Delete <i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
}

export default EditNoteModal;
