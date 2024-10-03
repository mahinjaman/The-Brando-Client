import { useQuery } from '@tanstack/react-query';
import useSecureAxios from './useSecureAxios';
import { useContext} from 'react';
import { UserContext } from '../AuthProvider/AuthContext';

const useCartRooms = () => {
    // const [bookingsRoom, setBookingRooms ] = useState([])
    const { user } = useContext(UserContext);


    const secureAxios = useSecureAxios()


    const { data: cartRooms = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            if (user?.email) {
                try {
                    const response = await secureAxios.get(`/carts/?email=${user?.email}`);
                    return response?.data;
                } catch (err) {
                    console.log('error while fetching bookings room', err);
                    throw err; // This will properly handle the error in the useQuery hook
                }
            }
        },
    });


    // useEffect(()=>{
    //     user?.email && secureAxios.get(`/booking/?email=${user?.email}`)
    //     .then(res =>{
    //         setBookingRooms(res.data);
    //     })
    //     .catch(err => {
    //         console.log('error while fetching bookings room', err);
    //     })
    // },[secureAxios ,user?.email])


    return [cartRooms,refetch];
};

export default useCartRooms;