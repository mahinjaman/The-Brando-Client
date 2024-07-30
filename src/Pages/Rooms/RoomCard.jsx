import React, { useEffect, useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import { FaBedPulse, FaPerson } from 'react-icons/fa6';
import { MdBathroom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import PropTypes from "prop-types"
import AOS from 'aos';
import 'aos/dist/aos.css'
const RoomCard = ({ room }) => {
    const [ show, setShow ] = useState(false);
    const {_id, thumb, price, title, description, details } = room;
    const { guest, bed, bath } = details;
    useEffect(()=>{
        AOS.init({
            duration:1000
        });
      },[])
    
    return (
        <div className='group flex flex-col border rounded-md shadow-xl' data-aos="fade-up-right">
            <div className='rounded-t-md overflow-hidden  bg-slate-400 h-80 relative group'>
                <img src={thumb} alt="" className='duration-300 group-hover:scale-110 rounded-t-md w-full h-80' />
                <div className='absolute duration-300 group-hover:left-0  h-full w-full bg-slate-600 bg-opacity-50 top-0 left-[1000px]'>
                    <button onClick={()=>setShow(true)} className='p-[5px] absolute right-5 top-5 bg-white bg-opacity-30 text-[#C4A676] flex items-center justify-center rounded-full'><span className='p-3 bg-white flex items-center justify-center rounded-full text-xl'><CiSearch /></span></button>
                </div>
            </div>
            <div className='p-5 flex flex-col min-h-[340px]'>
                <h1 className='text-2xl font-serif font-semibold flex-grow'>{title}</h1>
                <p className='text-gray-500 mt-5'>{description.slice(0, 150)}...</p>

                <div className='flex gap-10 py-5 my-5 border-t border-b'>
                    <p className='text-sm font-bold flex items-center text-[#C4A676] primary-font gap-1'>
                        <span className="text-xl">
                            <FaPerson />
                        </span>
                        {guest} guests
                    </p>

                    <p className='text-sm font-bold flex items-center text-[#C4A676] primary-font gap-1'>
                        <span className="text-xl text-[C4A676]">
                            <FaBedPulse />
                        </span>
                        {bed} beds
                    </p>
                    <p className='text-sm font-bold flex items-center text-[#C4A676] primary-font gap-1'>
                        <span className="text-xl text-[C4A676]">
                            <MdBathroom />
                        </span>
                        {bath} baths
                    </p>
                </div>

                <div className='primary-font flex justify-between'>
                    <h2 className='text-xl text-[#C2A576]'>
                        <span className='text-2xl'>$</span>{price}/<span className='font-semibold italic'>Night</span>
                    </h2>
                    <button className='py-2 px-4 rounded-md text-[#C4A676] primary-font border'><Link className='flex items-center gap-2' to={`/details/${_id}`}><FaHandPointRight /> View Details</Link></button>
                </div>
            </div>

            {
                show &&
                <div onClick={()=> setShow(false)} className='fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center'>
                    <div className='p-5 rounded-md text-white relative'>
                       <img src={thumb} alt="" />
                        <button onClick={()=>setShow(false)} className='py-2 px-4 absolute top-0 right-0 text-[#C4A676] bg-white rounded-full primary-font'>X</button>
                    </div>
                </div>
            }
        </div>
    );
};

RoomCard.propTypes = {
    room: PropTypes.object.isRequired
};

export default RoomCard;