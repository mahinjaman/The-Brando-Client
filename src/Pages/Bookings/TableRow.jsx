import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import useSecureAxios from '../../Hooks/useSecureAxios';
import useAuthInfo from '../../Hooks/useAuthInfo';
const TableRow = ({ room , handleStatusCancel}) => {
    const {_id} = room;

    const { user } = useAuthInfo();
    const currentUser = {email: user?.email , room_id:room?.room_id};

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
                <p className='font-serif font-semibold'>{room?.room_name}</p>
                <p><span className='font-serif font-semibold'>Guests:</span> {room?.guests}</p>
            </td>
            
            <td>
                <p className='font-serif font-semibold'>{room?.bookDate.slice(0,10)}</p>
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
                <button onClick={()=>handleStatusCancel(_id, currentUser)} disabled={room?.orderStatus ==="Cancelled" || room?.orderStatus ==="Confirmed"? true : false} className="text-red-500 border-[2px] py-3 px-7 rounded-md border-red-500">Cancel</button>
            </th>
        </tr>
    );
};

TableRow.propTypes = {
    room: PropTypes.object.isRequired,
    handleStatusCancel: PropTypes.func.isRequired
}

export default TableRow;