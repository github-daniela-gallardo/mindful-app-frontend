import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import background from '../images/sign-up-log-in.png'


const CreateNote = () => {

    const { user, isLoggedIn } = useContext(AuthContext)


    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [date, setDate] = useState(0)



    const updateTitle = e => {
        setTitle(e.target.value)
    }
    const updateDate = e => {
        setDate(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/addnote/createnote', {
            title: title,
            date: date

        }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        }
        )
            .then(axiosResponse => {
                console.log('click works', axiosResponse.data._id)
                navigate(`/addnote/${axiosResponse.data._id}`)
            })

            .catch(err => console.log(err))
    }


    return (
        <div>
            <img src={background} alt='bg' className="bg" />


            <form className="noteForm" onSubmit={handleSubmit}>

                <div >
                <Link to='/notes'><i className="fas fa-times-circle" style={{ fontSize: "30px" }}></i></Link>
                <br />
                <br/>

                    <label>Title: </label>
                    <input onChange={updateTitle} value={title} />
                    <br />
                    <label>Date: </label>
                    <input onChange={updateDate} value={date} type='date' />

                    <br />
                    <br />

                </div>
                <button className="button3">Continue</button>


            </form>

        </div>
    );
}

export default CreateNote;
