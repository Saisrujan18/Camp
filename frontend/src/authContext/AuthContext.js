import React, { useContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import app from "../firebase";
import {auth} from "../firebase";

const AuthContext = React.createContext();
const provider = new GoogleAuthProvider();

//  We used firebase for authentication

//  useAuth is exported and is used in different js files to get the infromation about the 
//  logined user.

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState();
    const [userData, setUserData] = useState();
    const [loading, setLoading] = useState(true);

    function signInWithGoogle() {
        return signInWithPopup(auth, provider);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unmount = onAuthStateChanged(auth, user => { setUser(user); setLoading(false);})
        return unmount;
    } , [])
    
    let value = {
        auth,
        signInWithGoogle,
        loading,
        user,
        logOut,
        setUserData
    }

    return (
        // this is wrapped around the whole project.
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

// useAuth() -> with this we can receive the data passed down by AuthContext.provider.("value")