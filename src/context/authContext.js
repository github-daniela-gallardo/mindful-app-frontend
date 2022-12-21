import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { baseUrl } from "../service";



    const API_URL = baseUrl

    const AuthContext = createContext();

    function AuthProviderWrapper(props) {

        const [isLoggedIn, setIsloggedIn] = useState(false);
        const [isLoading, setIsLoading] = useState(true);
        const [user, setUser] = useState(null);

        //function to store the token into the local storage on the browser
        const storeToken = (token) => {
            localStorage.setItem('authToken', token)
        }

        const authenticateUser = () => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                axios.get(
                    `${API_URL}/auth/verify`,
                    { headers: { Authorization: `Bearer ${storedToken}` } },
                )
                    .then((axiosResponse) => {
                        const user = axiosResponse.data;
                        setIsloggedIn(true);
                        setIsLoading(false);
                        setUser(user)
                    })
                    .catch((error) => {
                        setIsloggedIn(false);
                        setIsLoading(false);
                        setUser(null);
                    })
            } else {
                setIsloggedIn(false);
                setIsLoading(false);
                setUser(null);
            }

        }

        const removeToken = () => {
            localStorage.removeItem('authToken');
        }

        const logOutUser = () => {
            removeToken()
            authenticateUser();
            
        }

        useEffect(() => {
            authenticateUser();
        }, [])


        return (
            <div>
                <AuthContext.Provider value={{
                    isLoggedIn,
                    isLoading,
                    user,
                    storeToken,
                    authenticateUser,
                    logOutUser
                }}>
                    {props.children}
                </AuthContext.Provider>

            </div>
        );
    }


export  { AuthContext, AuthProviderWrapper };
