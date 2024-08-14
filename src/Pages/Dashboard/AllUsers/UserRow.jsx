import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import usePublicAxios from '../../../Hooks/usePublicAxios';
const UserRow = ({ user, serial, refetch }) => {
    const [showUpdateRole, setShowUpdateRole] = useState(false);
    const publicAxios = usePublicAxios();

    const handleUserDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete the user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.delete(`/users/${id}`)
                    .then(res => {
                        const result = res.data;
                        if (result.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }

                    })
            }

        })


    }

    const handleUserRole = (id, role) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be ${role} the user!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                publicAxios.patch(`/users/${id}?role=${role}`)
                    .then(res => {
                        const result = res.data;

                        if (result.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your role has been updated successfully.",
                                icon: "success"
                            });
                            setShowUpdateRole(false)
                            refetch();
                        }
                    })
                    .catch(err => {
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to update role.",
                            icon: "error"
                        });
                    })
            }

        })


    }

    return (
        <tr className='text-white'>
            <td className='text-white'>
                <p className='font-serif font-semibold'>{serial + 1}</p>
            </td>

            <td className='text-white'>
                <p className='font-serif font-semibold'>{user?.name}</p>
            </td>
            <td className='text-white'>
                <p className='font-serif font-semibold'>{user?.email}</p>
            </td>
            <td className='text-white'>
                <p className='font-serif font-semibold'>{user?.password}</p>
            </td>
            <td className='text-white relative'>

                <button onClick={() => setShowUpdateRole(!showUpdateRole)}>{user?.role}</button>

                {
                    <ul className={`absolute bg-white rounded-md text-gray-900 px-5 py-3 flex flex-col gap-3 z-10 duration-300 top-14 ${showUpdateRole ? 'scale-100' : 'scale-0'}`}>
                        <li className='border-b duration-300 flex items-center px-5 py-1 hover:bg-blue-950 font-semibold hover:text-white rounded-md '><button disabled={user.role === "Admin" ? true : false} onClick={() => handleUserRole(user?._id, 'Admin')}>Admin</button></li>
                        <li className='border-b duration-300 flex items-center px-5 py-1 hover:bg-blue-950 font-semibold hover:text-white rounded-md '><button disabled={user.role === "Member" ? true : false} onClick={() => handleUserRole(user?._id, 'Member')}>Member</button></li>
                    </ul>
                }
            </td>

            <th>
                <button className='text-xl hover:bg-white hover:text-slate-950 p-2 rounded-full duration-300' onClick={() => handleUserDelete(user?._id)}><MdDelete /></button>
            </th>
        </tr>
    );
};

UserRow.propTypes = {
    user: PropTypes.object.isRequired,
    serial: PropTypes.number.isRequired,
    refetch: PropTypes.func.isRequired,
};

export default UserRow;