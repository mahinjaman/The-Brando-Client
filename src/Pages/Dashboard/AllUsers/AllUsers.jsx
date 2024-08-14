import React from 'react';
import { useQuery } from '@tanstack/react-query'
import UserRow from './UserRow';
import useSecureAxios from '../../../Hooks/useSecureAxios';
const AllUsers = () => {
    const secureAxios = useSecureAxios()
    const { data: users = [] , refetch} = useQuery({
        queryKey: 'allUsers',
        queryFn: async () => {
            const response = await secureAxios.get('/users')
            return response.data
        }
    })

    return (
        <div className='py-10 bg-blue-950 min-h-screen px-10'>

            <div className='flex justify-evenly'>
                <h1 className='text-3xl font-semibold text-white'>All Users </h1>
                <h1 className='text-3xl font-semibold text-white'>Total Users: {users.length}</h1>
            </div>

            {/* Table */}
            <div>
                <table className="table">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <UserRow key={idx} serial={idx} user={user} refetch={refetch}></UserRow>)
                        }
                    </tbody>

                </table>
            </div>
            
        </div>
    );
};

export default AllUsers;