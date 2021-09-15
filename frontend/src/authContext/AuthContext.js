import React, { useContext, useEffect, useState } from 'react';
import { auth } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    function signInWithGoogle() {
        return signInWithPopup(auth, provider);
    }

    function logOut() {
        return auth.signOut();
    }

    useEffect(() => {
        const unmount = auth.onAuthStateChanged(user => { setUser(user); setLoading(false);})
        return unmount;
    } , [])
    
    let value = {
        signInWithGoogle,
        loading,
        user,
        logOut
    }

    return (
        // this is wrapped around the whole project.
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

// useAuth() -> with this we can receive the data passed down by AuthContext.provider.("value")