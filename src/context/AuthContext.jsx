import { useEffect } from 'react';
import { useState } from 'react';
import {createContext}  from 'react'


export const AuthContext = createContext();



// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({children})=> {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const checkAuth = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/auth/auth-check", {credentials: "include"});
            const data = await response.json();
            if(data.user){
                setLoggedIn(true)
            }
        }catch(e){
            setLoggedIn(false);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=> {
        checkAuth()
    }, [])
    return <AuthContext.Provider value={{loggedIn, loading, setLoggedIn}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;