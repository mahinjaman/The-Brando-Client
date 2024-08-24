import axios from 'axios';

const publicAxios = axios.create({
    // baseURL: 'https://the-brando-server.vercel.app',
    baseURL: 'http://localhost:3000',
    // withCredentials: true,
})

const usePublicAxios = () => {
    
    return publicAxios;
};

export default usePublicAxios;