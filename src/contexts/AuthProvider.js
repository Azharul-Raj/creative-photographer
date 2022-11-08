import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebse/firebase.config';




export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // email SignUp
    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email Login
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google signIn
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth,googleProvider)
    }
    // update profile
    const update = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:image
        })
            .then(() => { })
        .catch(err=>console.error(err))
    }
    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])
    // logOut
    const logOut = () => {
        signOut(auth)
            .then(() => { })
        .catch(()=>{})
    }
    const info={user,loading,emailSignUp,emailLogin,googleSignIn,update,logOut}
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;