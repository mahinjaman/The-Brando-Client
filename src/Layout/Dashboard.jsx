import React from 'react';
import { FaRegCalendarAlt, FaUsers } from 'react-icons/fa';
import { IoCartOutline, IoHomeOutline } from 'react-icons/io5';
import { MdChecklist, MdMenuBook } from 'react-icons/md';
import { VscOpenPreview } from 'react-icons/vsc';
import { NavLink, Outlet } from 'react-router-dom';
import { FcAbout, FcHome } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";
import { GrRestaurant } from "react-icons/gr";
import useIsAdmin from '../Hooks/useIsAdmin';


const Dashboard = () => {

    const [isAdmin] = useIsAdmin();


    const userMenu = <>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/'}> <span className=''><IoHomeOutline /></span> User Home</NavLink></li>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/reservation'}> <span className=''><FaRegCalendarAlt /></span>Reservation</NavLink></li>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/dashboard/bookings'}> <span className=''><IoCartOutline /></span>My Bookings</NavLink></li>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/add_review'}> <span className=''><VscOpenPreview /></span>Add Review</NavLink></li>


        <div className='divider divider-neutral'></div>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/'}> <span className=''><IoHomeOutline /></span>Home</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/about'}> <span className=''><FcAbout /></span> About Us</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/rooms'}> <span className=''><FcHome /></span> Rooms</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/restaurant'}> <span className=''><GrRestaurant /></span> Restaurant</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/contact'}> <span className=''><RiContactsFill /></span> Contact Us</NavLink></li>

        
        </>
    const adminMenu = <>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/dashboard/admin'}> <span className=''><IoHomeOutline /></span> Admin Home</NavLink></li>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/dashboard/manageBooking'}> <span className=''><FaRegCalendarAlt /></span>Manage Rooms</NavLink></li>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/dashboard/users'}> <span className=''><FaUsers /></span>All users</NavLink></li>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/dashboard/addRoom'}> <span className=''><FcHome /></span>Add Room</NavLink></li>

        <div className='divider divider-neutral'></div>

        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/'}> <span className=''><IoHomeOutline /></span>Home</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/about'}> <span className=''><FcAbout /></span> About Us</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/rooms'}> <span className=''><FcHome /></span> Rooms</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/restaurant'}> <span className=''><GrRestaurant /></span> Restaurant</NavLink></li>
        <li className='py-2.5 px-5 bg-slate-100 list-none font-semibold rounded-md duration-300 text-[#0f172a] hover:bg-[#fdba74]'><NavLink className={'flex gap-2 items-center'} to={'/contact'}> <span className=''><RiContactsFill /></span> Contact Us</NavLink></li>

        
        </>

    return (
        <div className='flex'>
            <div className='w-[15%] min-h-screen p-5 bg-[#0f172a]'>
                <ul className='flex flex-col gap-3'>
                    {
                        isAdmin ? adminMenu : userMenu
                    }
                </ul>
            </div>
            {/* content */}
            <div className='w-full flex-1 mx-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;