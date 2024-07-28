import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from '../Firebase/Firebase.config';
import useSecureAxios from '../Hooks/useSecureAxios';

export const UserContext = createContext(null)

const AuthContext = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const secureAxios = useSecureAxios()

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    // logIn  User
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth,  email, password)
    }

    // logOut 

    const LogOut = () => {
        setLoading(true);
        return signOut(Auth)
    }

    // forget Password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(Auth, email)
    }

    // login with google
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(Auth, googleProvider)
    }

    // login with google
    const githubProvider = new GithubAuthProvider()
    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(Auth, githubProvider)
    }


    // Manage User

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(Auth, currentUser =>{
            if(currentUser?.email){
                const email = currentUser.email;
                const loggedUser = {email}
                secureAxios.post('/jwt', loggedUser)
                .then(res => {
                    console.log(res.data);
                })
                setUser(currentUser);
                setLoading(false);
            }
            else{
                setUser(null);
                setLoading(false);
            }
        })
        return () => unSubscribe();
    },[secureAxios])

    const info = {
        createUser,
        logIn,
        LogOut,
        forgetPassword,
        loginWithGoogle,
        loginWithGithub,
        user,
        loading
    }
    return (
        <UserContext.Provider value={info}>
            {children}
        </UserContext.Provider>
    );
};

AuthContext.propTypes = {
    children: PropTypes.node.isRequired
}


export default AuthContext;