import React from 'react';
import RoomForm from './RoomForm';



const AddRoom = () => {
    return (
        <div className='py-20  rounded-md text-black '>
            <div className='text-center py-5'>
                <h1 className='text-xl font-semibold primary-font'>Add Room</h1>
                <h1 className='text-2xl italic'>Please Make Sure Your Room Details</h1>
            </div>
            <div className='md:w-2/3 mx-auto border-blue-600 bg-slate-900 bg-opacity-75 rounded-md p-5'>
                <RoomForm />
            </div>
        </div>
    );
};

export default AddRoom;