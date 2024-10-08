import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from '../Firebase/Firebase.config';
import moment from 'moment'
import usePublicAxios from '../Hooks/usePublicAxios';


export const UserContext = createContext(null);


const adminSecret = import.meta.env.VITE_ADMIN_SECRET_TOKEN;


const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([])
    const publicAxios = usePublicAxios();



    const today_date = moment().format('YYYY-MM-DD');


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



    setInterval(() => {



        publicAxios.get(`/all-bookings/${adminSecret}`)
            .then(res => {
                const result = res?.data;
                setBookings(result);
            })
            .catch(err => {
                console.log('error while getting bookings', err);
            })
        if (bookings) {

            bookings.map(room => {

                const bookingDate = room?.bookDate;

                const newDate1 = new Date(today_date);
                const newDate2 = new Date(bookingDate);

                const DifferenceInMs = newDate1 - newDate2;

                const differenceDay = DifferenceInMs / (1000 * 3600 * 24);

                if (differenceDay > 1 && room?.status === 'Confirmed' && room?.status !== 'Complete') {
                    publicAxios.patch(`/room_status/${room?.room_id}?status=Available`)
                    publicAxios.patch(`/update-bookings/${room._id}?status=Completed`)
                }
                
            })
        }
    }, 240000)

    // Manage User

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            if (currentUser?.email) {
                const email = currentUser.email;
                const loggedUser = { email }
                publicAxios.post('/jwt', loggedUser)
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
    }, [publicAxios])



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