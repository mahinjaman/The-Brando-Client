import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import useSecureAxios from '../../Hooks/useSecureAxios';
import useAuthInfo from '../../Hooks/useAuthInfo';
const TableRow = ({ room , handleStatusCancel}) => {
    const {_id, room_id, orderStatus} = room;

    const date = moment().format('YYYY-MM-DD');
    const today = new Date(date);
    const currentDate = new Date(room?.currentDate);
    const bookedDate = new Date(room?.bookDate.slice(0,10));

    const [ disabledCancel, setDisabledCancel ] = useState(false)
    const { user } = useAuthInfo();
    const secureAxios = useSecureAxios()
    const currentUser = {email: user?.email , room_id:room?.room_id};

    const diffInCurrentBook = today - currentDate;
    const diffInDaysCurrent = diffInCurrentBook / (1000 * 60 * 60 * 24);


    const diffInBookDate = today - bookedDate;
    const diffInDaysBook = diffInBookDate / (1000 * 60 * 60 * 24);

    useEffect(()=>{

        // update confirmed
        if(room?.currentDate < date && diffInDaysCurrent <= 1 && orderStatus !== 'Cancelled'){
            setDisabledCancel(true);
            secureAxios.put(`/bookingConfirmed/${_id}?status=Confirmed&email=${user?.email}`, currentUser)
        }
    },[date, room?.currentDate, secureAxios, _id, currentUser, user?.email, diffInDaysCurrent, diffInDaysBook, orderStatus, room_id])

    
    useEffect(()=>{
        // Update available
        if(  diffInDaysBook >=3){
            setDisabledCancel(true);
            secureAxios.patch(`/room_available/${room_id}?&email=${user?.email}`, currentUser)
        }
    },[currentUser, diffInDaysBook, room_id, secureAxios, user?.email])

    useEffect(()=>{
        if(orderStatus === 'Cancelled'){
            console.log(orderStatus);
            setDisabledCancel(true);
        }
    },[orderStatus])


    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle h-20 w-20">
                        <img
                            src={room?.thumb}
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                <p className='font-serif font-semibold'>{room.room_name}</p>
                <p><span className='font-serif font-semibold'>Guests:</span> {room?.guests}</p>
            </td>
            
            <td>
                <p className='font-serif font-semibold'>{room.bookDate.slice(0,10)}</p>
            </td>
            <td>
                <p className='font-serif font-semibold'>{room?.name}</p>
            </td>
            <td>
                <p className='font-serif font-semibold'>{room?.email}</p>
            </td>
            <td>
                <p className='primary-font text-2xl font-semibold'>${room?.price}</p>
            </td>
            <td>
                <p className={`font-serif font-semibold ${room?.orderStatus === 'Confirmed' ? 'text-green-500' : 'text-red-500'}`}>{room?.orderStatus}</p>
            </td>
            <th>
                <button onClick={()=>handleStatusCancel(_id, currentUser)} disabled={disabledCancel} className="text-red-500 border-[2px] py-3 px-7 rounded-md border-red-500">Cancel</button>
            </th>
        </tr>
    );
};

TableRow.propTypes = {
    room: PropTypes.object.isRequired,
    handleStatusCancel: PropTypes.func.isRequired
}

export default TableRow;