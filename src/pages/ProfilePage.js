import React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import NavBar from '../components/NavBar';
import background from '../images/sign-up-log-in.png'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {

    const navigate = useNavigate();

    const { user, isLoggedIn, storeToken, authenticateUser , logOutUser} = useContext(AuthContext)

    const [isEditingUsername, setIsEditingUsername] = useState(false)
    const [isEditingEmail, setIsEditingEmail] = useState(false)
    const [isEditingPassword, setIsEditingPassword] = useState(false)



    const [updatedUser, setUpdatedUser] = useState({
        userName: user.userName,
        email: user.email,
        password: user.password
    });

    // const [state, setState] = useState({
    //     userName: '',
    //     email: '',
    //     password: ''

    // })

    // const  updateState = e => setState({
    //     ...state,
    //     [e.target.name]: e.target.value
    // })

    const inputChange = (e) => {

        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
        console.log("this is the state", updatedUser)
    }


    //create a post request to update the users info and to delete de account 

    const updatedUserFunction = (event) => {
        event.preventDefault();

        console.log('this is the user id', user._id)

        axios.put('http://localhost:4000/auth/user/update', {
            userName: updatedUser.userName,
            email: updatedUser.email,
            password: updatedUser.password
        }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(axiosResponse => {
                console.log(axiosResponse.data)
                storeToken(axiosResponse.data.authToken)
                authenticateUser()
                alert('You have updated your info succesfully!')
            })
            .catch(err => console.log(err))

    }

    //function to delete the account 
   

    const deleteAccount = () =>{
       console.log('button works!!!!')
       if (window.confirm("Are you sure you want to delete?") === true) {
           
             axios.delete('http://localhost:4000/auth/user/delete',{
                 headers: {
                     authorization: `Bearer ${localStorage.getItem('authToken')}`
                 }
             } )
             .then(axiosResponse => {
                 localStorage.clear()
                 authenticateUser()
                 console.log(axiosResponse.data)
                 
     
                // storeToken(localStorage.removeItem('authToken'))
                 
     
                 navigate('/signup')
             })
             .catch((err) => {
                console.log(err)
             })

       } else {
        return
       }
     
    }




    return (
        <div>
            <img src={background} alt='bg' className="bg" />
            <NavBar />
            {isLoggedIn && (
                <h1 style={{ textAlign: "center", color: " #157575" }}>Hi {user.userName}! </h1>


            )}

            <div className='profileSections'>
                <div>
                    <form className='profileForm' onSubmit={updatedUserFunction}>
                        <p style={{fontSize: "small"}}>Enter your new information and click submit to change it.</p>
                        <br/>
                        <label>User Name:</label>
                        <input value={updatedUser.userName} onChange={inputChange} name='userName' type='text' placeholder={user.userName} />
                        <br />
                        <label>Email:</label>
                        <input value={updatedUser.email} onChange={inputChange} name='email' type='email' placeholder={user.email} />
                        <br />
                        <label> Password: </label>
                        <input value={updatedUser.password} onChange={inputChange} name='password' type='password' placeholder='Enter new password' />

                        <br />

                        <br />
                        <button className='button3'>Update my info  <i className="fas fa-user-edit" style={{ color: "#EAD7C7" }}></i> </button>
                        <br />
                        <br />
                    </form>

                    

                        <button  className='button1' style={{ textDecoration: "underline" , textAlign: "center" , fontSize: "small"}} onClick={deleteAccount}>Delete my account</button>
                </div>


                {/* this is for favorites videos */}
                {/* <div className='profileFavorite'>
                    <h5 style={{ textAlign: "center", color: " #157575" }}> My favorites </h5>

                    <p style={{ textAlign: "center", fontSize: "smaller" }}>Here you can see your favorite videos</p>
                    <br />
                    <br />
                    <i className="fab fa-gratipay"></i>
                    <br />
                    <Link to='FavoriteVideos'>
                        <button style={{ fontSize: "smaller" }} className='button3'>See my favorites</button>
                    </Link>


                </div> */}

                
            </div>

        </div>
    );
}

export default ProfilePage;
