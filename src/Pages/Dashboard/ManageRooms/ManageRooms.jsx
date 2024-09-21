import React from 'react';
import useTotalRooms from '../../../Hooks/useTotalRooms';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import Swal from 'sweetalert2';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import useIsAdmin from '../../../Hooks/useIsAdmin';

const ManageRooms = () => {


    const [totalRooms, isPending, refetch] = useTotalRooms();
    const secureAxios = useSecureAxios();

    const isAdmin = useIsAdmin();

    if (isPending) {
        return <RoomSkeleton />
    }

    const handleDelete = id =>{

        if (!isAdmin) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are not authorized to delete rooms.",
                footer: "Please contact an admin."
            })
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                secureAxios.delete(`/delete_room/${id}`)
                .then(res =>{
                    const result = res.data;
                    if (result.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your room has been deleted.",
                            icon: "success"
                          });
                    }
                })
                .catch(err =>{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: "Please try again later."
                    })
                })
            }
          });
        
    }

    return (
        <div>
            <h1>Hello Booking: {totalRooms.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>$ Price</th>
                            <th> Update </th>
                            <th>Action </th>
                            <th>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            totalRooms.map((room, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>

                                    <td>
                                        <img
                                            src={room?.thumb}
                                            width={80}
                                            className='rounded-lg'
                                            alt="Avatar Tailwind CSS Component" />
                                    </td>

                                    <td>{room?.title}</td>

                                    <td>$ {room?.price}</td>

                                    <td>$ {room?.price}</td>

                                    <th>
                                        <Link to={`/dashboard/updateRoom/${room._id}`}>Edit</Link>
                                    </th>
                                    
                                    <th>
                                        <button onClick={() => handleDelete(room?._id)} className='text-xl'><RxCross1 /></button>
                                    </th>
                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageRooms;