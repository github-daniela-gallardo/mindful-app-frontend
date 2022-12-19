import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddNote = () => {

    const navigate = useNavigate();

    const [questions, setQuestions] = useState([])
    const [answer, setAnswer] = useState([]);
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(0)

    const updateAnswer = e => {
        setAnswer(e.target.value);
    }

    const updateTitle = e => {
        setTitle(e.target.value)
    }
    const updateDate = e => {
        setDate(e.target.value)
    }

    //function to submit my answer

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/addnote/answer', {
            answer: answer
        })
            .then(axiosResponse => {
                console.log('click works', axiosResponse.data)
                //navigate('/notes')
            })

            .catch(err => console.log(err))
    }

    // request to show the questions 
    useEffect(() => {
        axios.get(`http://localhost:4000/addnote/questions`)
            .then(axiosRespoonse => {
                console.log(axiosRespoonse.data)
                setQuestions(axiosRespoonse.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>

            <div>
                <form onSubmit={handleSubmit} className='noteForm'>
                    <div>
                        <Link to='/notes'><i className="fas fa-times-circle"></i></Link>
                        
                        <label>Title: </label>
                        <input onChange={updateTitle} value={title} />
                        <br />
                        <label>Date: </label>
                        <input onChange={updateDate} value={date} type='date' />

                    </div>

                    {questions.map((q) => {
                        return (

                            <>
                                <h5>{q.text}</h5>
                                <textarea onChange={updateAnswer} value={answer} name='answer' />
                                <br />
                            </>
                        )
                    })}
                    <br />
                    <button className="button3">Save</button>
                </form>
            </div>

        </div>
    );
}

export default AddNote;
