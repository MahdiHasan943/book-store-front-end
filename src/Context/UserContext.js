import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword,GithubAuthProvider  , updateProfile,getAuth,signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
// console.log(user);

    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }
    const GooogleSign = () => {
        
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
        
    }

    const signInWithGithub = () => {
        setLoading(true)
        
        return signInWithPopup(auth, githubprovider);
    }

    const Login = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword (auth, email, password);

        



    }

    const logOut = () => {
        localStorage.removeItem('genius-token');

        setLoading(true)

        return signOut(auth)
        
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);

            
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        loading,
        createUser,
        Login,
        setLoading,
        logOut,
        GooogleSign,
        updateUserProfile,
        signInWithGithub


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;