import React, { useEffect, useState } from 'react';
import BookingNow from '../../Components/Shared/BookingNow';
import useSecureAxios from '../../Hooks/useSecureAxios';
import RoomCard from './RoomCard';
import bg from '../../assets/map_bg5.png'
const Rooms = () => {
    const [activePage, setActivePage] = useState(1)
    const [limit, setLimit] = useState(6);
    const [showForm, setShowForm] = useState(false);
    const secureAxios = useSecureAxios();
    const [totalRooms, setTotalRooms] = useState(1);
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await secureAxios.get('total_rooms')
            return response.data;
        }
        fetchData().then(data => {
            const { count } = data;
            setTotalRooms(count)
            console.log(count);
        });
    }, [])

    const pages = Math.ceil(totalRooms / limit);


    useEffect(() => {
        const fetchRooms = async () => {
            const response = await secureAxios.get(`/rooms?page=${activePage}&limit=${limit}`)
            return response.data;
        }
        fetchRooms().then(data => {
            setRooms(data);
        });
    }, [activePage, limit])



    let AllPages = [];
    for (let i = 1; i <= pages; i++) {
        AllPages.push(i);
    }



    const handlePage = e => {
        e.preventDefault();
        const page = parseInt(e.target.value);
        setActivePage(page);
    }



    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowForm(true);
            }
        })
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1000) {
                setShowForm(false);
            }
        })
    }, [])


    const handlePrev = () =>{
        if(activePage > 1){
            setActivePage(activePage - 1);
        }
    }

    const handleNext = () => {
        if (activePage < pages) {
            setActivePage(activePage + 1);
        }
    }


    return (
        <div className='border rounded-md bg-no-repeat bg-top'
            style={{ backgroundImage: `url(${bg})` }}>
            <div className='py-20 lg:w-10/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-5'>
                    <div className='col-span-2 text-white relative'>
                        <div className={ `w-[500px] duration-500 ${showForm ? 'fixed' : ''}`}>
                            <BookingNow>
                                Search Filters
                            </BookingNow>
                        </div>
                    </div>

                    <div className='col-span-4 p-7 bg-slate-100 rounded-md'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-7 bg-white border rounded-md'>
                            {
                                rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                            }
                        </div>
                    </div>
                </div>
                <div className='text-end py-5 '>
                    <button className='btn mr-5  hover:bg-blue-700 hover:text-white' onClick={handlePrev}>Prev</button>
                    {
                        AllPages.map(page => <button className={`btn mr-2 hover:bg-blue-700 hover:text-white ${page === activePage && 'bg-blue-700 text-white'}`} value={page} onClick={handlePage}>{page}</button>)
                    }
                    <button className='btn ml-5 hover:bg-blue-700 hover:text-white' onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Rooms;