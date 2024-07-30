import React, { useEffect, useState } from 'react';
import useSecureAxios from '../../Hooks/useSecureAxios';
import RoomCard from './RoomCard';
import bg from '../../assets/map_bg5.png'
import SearchRoom from '../../Components/Shared/SearchRoom';
import { Helmet } from 'react-helmet-async';
import ErrorImage from '../../Components/ErrorImage';
const Rooms = () => {
    const [activePage, setActivePage] = useState(1)
    const [limit, setLimit] = useState(6);
    const secureAxios = useSecureAxios();
    const [totalRooms, setTotalRooms] = useState(1);
    const [rooms, setRooms] = useState([]);
    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await secureAxios.get('total_rooms')
            return response.data;
        }
        fetchData().then(data => {
            const { count } = data;
            setTotalRooms(count)
        });
    }, [secureAxios])

    const pages = Math.ceil(totalRooms / limit);


    useEffect(() => {
        const fetchRooms = async () => {
            const response = await secureAxios.get(`/rooms?page=${activePage}&limit=${limit}`)
            return response.data;
        }
        fetchRooms().then(data => {
            setRooms(data);
        });
    }, [activePage, limit, secureAxios])



    let AllPages = [];
    for (let i = 1; i <= pages; i++) {
        AllPages.push(i);
    }



    const handlePage = e => {
        e.preventDefault();
        const page = parseInt(e.target.value);
        setActivePage(page);
    }


    

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 100) {
    //             setShowForm(true);
    //         }
    //     })
    // }, []);

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 1000) {
    //             setShowForm(false);
    //         }
    //     })
    // }, [])


    const handlePrev = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);

        }
        if (activePage === 1) {
            setPrevDisabled(true);
        }
    }

    const handleNext = () => {
        if (activePage < pages) {
            setActivePage(activePage + 1);
        }
    }

    const handleLimit = e => {
        setLimit(parseInt(e.target.value));
        setActivePage(1)
    }
    useEffect(()=>{
        if (activePage === pages) {
            setNextDisabled(true);
        }
        else{
            setNextDisabled(false);
        }

        if (activePage === 1) {
            setPrevDisabled(true);
        }
        else{
            setPrevDisabled(false);
        }
    },[activePage, pages])


    return (
        <div className='border rounded-md bg-no-repeat bg-top'
            style={{ backgroundImage: `url(${bg})` }}>
                <Helmet>
                    <title>The Brando | Rooms</title>
                </Helmet>
            <div className='py-20 lg:w-10/12 mx-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-6 gap-5'>
                    <div className='md:col-span-2 text-white relative w-full p-2'>
                        <div className="">
                            <SearchRoom>
                                Search Filters
                            </SearchRoom>
                        </div>
                    </div>

                    <div className='md:col-span-4 p-7 bg-slate-100 rounded-md'>
                        <div className='lg:w-2/5 mb-5 text-end py-3 flex items-center justify-center bg-white rounded-md gap-3'>
                            <label htmlFor="limit" className='primary-font italic font-semibold'>Select Your Range</label>
                            <select name="limit" id="limit" onChange={handleLimit} className='outline-none py-3 px-10 bg-white'>
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                                <option value="24">24</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:p-7 bg-white border rounded-md'>
                            {
                                rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                            }
                        </div>
                    </div>
                </div>
                <div className='text-end py-5 '>
                    <button className='btn btn-outline mr-5 border hover:bg-blue-700 hover:text-white' disabled={prevDisabled} onClick={handlePrev}>Prev</button>
                    {
                        AllPages.map((page, idx) => <button key={idx} className={`btn mr-2 hover:bg-blue-700 hover:text-white ${page === activePage && 'bg-blue-700 text-white'}`} value={page} onClick={handlePage}>{page}</button>)
                    }
                    <button className={`btn btn-outline ml-5 hover:bg-blue-700 hover:text-white border`} disabled={nextDisabled} onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Rooms;