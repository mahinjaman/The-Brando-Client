import axios from 'axios';


const secureAxios = axios.create({
    baseURL: 'https://the-brando-server.vercel.app',
    // withCredentials: true
})

const useSecureAxios = () => {
    return secureAxios;
};

export default useSecureAxios;