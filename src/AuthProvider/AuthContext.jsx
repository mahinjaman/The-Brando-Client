import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from '../Firebase/Firebase.config';
import useSecureAxios from '../Hooks/useSecureAxios';
import moment from 'moment'
export const UserContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([])
    const secureAxios = useSecureAxios();

    const date = moment().format('YYYY-MM-DD');
    const today = new Date(date);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    // logIn  User
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password)
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

    // useEffect(() => {
        
    // }, [secureAxios])

    setInterval(() => {
        console.log('Hello world !');
        
        secureAxios.get('/all_bookings')
            .then(res => {
                const result = res.data;
                setBookings(result);
            })
            .catch(err => {
                console.log('error while getting bookings', err);
            })
        if (bookings.length) {
            bookings.map(room => {
                const {_id, room_id, orderStatus} = room;
                const currentDate = new Date(room?.currentDate);
                const bookedDate = new Date(room?.bookDate.slice(0, 10));
                const diffInCurrentBook = today - currentDate;
                const diffInDaysCurrent = diffInCurrentBook / (1000 * 60 * 60 * 24);
                const diffInBookDate = today - bookedDate;
                const diffInDaysBook = diffInBookDate / (1000 * 60 * 60 * 24);
                if(room?.currentDate < date && diffInDaysCurrent <= 1 && orderStatus !== 'Cancelled'){
                    secureAxios.put(`/bookingConfirmed/${_id}?status=Confirmed&email=${user?.email}`)
                }

                if(  diffInDaysBook >=3){
                    secureAxios.patch(`/room_available/${room_id}`)
                }
            })
        }
    }, 3600)

    // Manage User

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            if (currentUser?.email) {
                const email = currentUser.email;
                const loggedUser = { email }
                secureAxios.post('/jwt', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
                setUser(currentUser);
                setLoading(false);
            }
            else {
                setUser(null);
                setLoading(false);
            }
        })
        return () => unSubscribe();
    }, [secureAxios])

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