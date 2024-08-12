import axios from 'axios';
import { signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
import { useEffect } from 'react';



const secureAxios = axios.create({
    // baseURL: 'https://the-brando-server.vercel.app',
    baseURL: 'http://localhost:3000',
    withCredentials: true
})


const useSecureAxios = () => {

    useEffect(()=>{
        secureAxios.interceptors.response.use(res => {
            return res;
        }, error => {
            if (error?.response?.status === 401 || error?.response?.status === 403) {
                signOut(Auth)
                .then(()=>{
                    window.location.href = '/login';
                })
                .catch(err=>{
                    console.log('error while log out the user',err);
                })
            }
        })
    },[])
    return secureAxios;
};

export default useSecureAxios;