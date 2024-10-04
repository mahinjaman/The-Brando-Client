import React from 'react';
import  PropTypes from 'prop-types'
const BookingRow = ({room}) => {
    
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
                <p className='font-serif font-semibold'>{room?.bookDate}</p>
            </td>

            <td>
                <p className='font-serif font-semibold'>{room?.email}</p>
            </td>

            <td>
                <p className='primary-font text-2xl font-semibold'>${room?.price}</p>
            </td>

            <td>
                <p className='font-serif font-semibold text-green-500'>{room?.status}</p>
            </td>
            
            
        </tr>
    );
};

BookingRow.propTypes = {
    room: PropTypes.object.isRequired,
};

export default BookingRow;