import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import background from '../images/sign-up-log-in.png'

const AddAnswer = () => {

    const navigate = useNavigate();

    const {noteId }= useParams();

    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState([]);
   

    const updateAnswer = i => e => {
        const copy = [...answer];
        copy[i] = e.target.value;
        setAnswer(copy);
    }



    //function to submit my answer

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/addnote/answer', {
            answer,
            questions,
            noteId
        }
            , {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }
        )
            .then(axiosResponse => {
                console.log('these are my answers', axiosResponse.data)
                navigate('/notes')
            })

            .catch(err => console.log(err))
    }

    // request to show the questions 
    useEffect(() => {
        axios.get(`http://localhost:4000/addnote/questions`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        )
            .then(axiosRespoonse => {
                console.log(axiosRespoonse.data)
                setQuestions(axiosRespoonse.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>

            <img src={background} alt='bg' className="bg" />

            <Link to='/notes'><i className="fas fa-times-circle" style={{ fontSize: "30px" }}></i></Link>
            <div className='noteForm'>

                <form onSubmit={handleSubmit} >

                    {/* q is  a single question, i is the updated state for a single answer */}

                    {questions.map((q, i) => {
                        return (

                            <div key={q._id} >
                                <h5>{q.text}</h5>
                                <textarea onChange={updateAnswer(i)} value={answer[i]} />
                                <br />
                            </div>
                        )
                    })}
                    <br />
                    <button className="button3">Save</button>
                </form>
            </div>

        </div>
    );
}

export default AddAnswer;
