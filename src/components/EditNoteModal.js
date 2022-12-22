import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from "../service";


const EditNoteModal = (props) => {

    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState([]);

    const { noteId } = useParams();



    const [note, setNote] = useState(null)

    const updateSingleNote = (index) => (event) => {
        const copyNote = JSON.parse(JSON.stringify(note));
        copyNote.answers[index].answer = event.target.value;
        setNote(copyNote);
    }



    useEffect(() => {
        axios.get(`${baseUrl}/addnote/notes/${props.noteId}`, {
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

    //this function updates the answers from the notes 

    const submitEditedAnswer = e => {
        e.preventDefault();
        axios.put(`${baseUrl}/addnote/update/${props.noteId}`, note
            , {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }
        )
            .then(axiosResponse => {
                props.setIsOpen(false)
            })

            .catch(err => console.log(err))
    }


    //this function deletes the note

    const deleteFunction = e => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this note?") === true) {

            axios.delete(`${baseUrl}/addnote/notes/${props.noteId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }
            )
                .then(axiosResponse => {
                    console.log("This is the note we deleted", axiosResponse.data)
                    props.setNotes(
                        [...props.notes].filter(note => note._id !== axiosResponse.data._id)
                    )
                    props.setIsOpen(false)
                })
                .catch(err => {
                    console.log(err)
                })

        } else {
            return
        }

    }


    return (

        <div>
            <div className='overlay'></div>
            <div className="notesModal" >

                {note ? (
                    <div>
                        {/* this 'close button' is not closing the modal */}
                        <i className="fas fa-times-circle" style={{ fontSize: "30px" }} onClick={() => props.setIsOpen(false)}></i>


                        <h3 style={{ textAlign: "center" }}>{note.title}</h3>
                        <h5>{(new Date(note.date)).toDateString()}</h5>


                        {note.answers.map((thisAnswer, i) => {
                            return (
                                <div>
                                    <h4>{thisAnswer.question.text}</h4>
                                    <textarea value={thisAnswer.answer} onChange={updateSingleNote(i)} cols="56"></textarea>
                                </div>

                            )
                        })}

                        <hr />
                        <div className='buttonsModal'>
                            <button onClick={submitEditedAnswer} style={{ fontSize: 'small' }} className='button2'>Update<i className="fas fa-pencil"></i></button>
                            <button onClick={deleteFunction} style={{ fontSize: 'small' }} className='button2'>Delete <i className="fas fa-trash"></i></button>
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
