import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import Auth from '../Firebase/Firebase.config';
import moment from 'moment'
import usePublicAxios from '../Hooks/usePublicAxios';
export const UserContext = createContext(null)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([])
    const publicAxios = usePublicAxios()

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



    setInterval(() => {
                
        
        publicAxios.get('/all_carts')
            .then(res => {
                const result = res?.data;
                setBookings(result);
            })
            .catch(err => {
                console.log('error while getting bookings', err);
            })
        if (bookings) {
            
            bookings.map(room => {
                const { _id, room_id, orderStatus } = room;

                const currentDate = new Date(room?.currentDate);
                const bookedDate = new Date(room?.bookDate.slice(0, 10));

                const diffInCurrentBook = today - currentDate;
                const diffInBookDate = today - bookedDate;

                const diffInDaysCurrent = diffInCurrentBook / (1000 * 60 * 60 * 24);
                const diffInDaysBook = diffInBookDate / (1000 * 60 * 60 * 24);

                

                if (currentDate < today && diffInDaysCurrent >= 1 && orderStatus !== 'Confirmed' && orderStatus !== 'Completed') {
                    publicAxios.patch(`/bookingStatus/${_id}?status=Cancelled`)
                        .then(() => {
                            publicAxios.patch(`/room_status/${room_id}?status=Available`)
                        })
                }

                if (diffInDaysBook >= 3 && orderStatus === "Confirmed" && orderStatus !== 'Cancelled' && orderStatus !== 'Completed') {

                    publicAxios.delete(`/booking/${_id}`)
                        .then(res => {
                            const result = res.data;
                            if (result.deletedCount > 0) {
                                publicAxios.patch(`/room_status/${room_id}?status=Available`)
                            }
                        })

                }
            })
        }
    }, 100000)

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