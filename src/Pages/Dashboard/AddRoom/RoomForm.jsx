import React, { useState } from 'react';
import usePublicAxios from '../../../Hooks/usePublicAxios';
import { useForm } from "react-hook-form"
import axios from 'axios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const RoomForm = () => {
    const [gallery, setGallery] = useState([]);
    const publicAxios = usePublicAxios()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


     const handleGalleryImageChange = async e => {
        const newImage = e.currentTarget.value;
        console.log(newImage);


        // setGallery([...gallery, newImage]);
    }

    const facility = [
        {
            "name": "Free Wi-Fi",
            "icon_url": "https://i.ibb.co/ySJrtVd/008-wifi.png"
        },
        {
            "name": "Air Conditioning",
            "icon_url": "https://i.ibb.co/F4H9P4H/005-air-conditioning.png"
        },
        {
            "name": "Television",
            "icon_url": "https://i.ibb.co/tMwkhM0/003-smart-tv.png"
        },
        {
            "name": "Washing Machine",
            "icon_url": "https://i.ibb.co/8r7RJ6g/washing.png"
        },
        {
            "name": "Coffee Maker",
            "icon_url": "https://i.ibb.co/vv1KVKJ/coffee-machine.png"
        },
        {
            "name": "Safe",
            "icon_url": "https://i.ibb.co/ZTkwbvz/shield.png"
        }
    ];


    const onSubmit = async (data) => {
        console.log(data);
        const { title, status, price, rating, description, short_description, room_size, room_bed, occupancy, view, location, guest, bed, bath , thumbnail} = data;
        // const imageFile =await  {thumb :thumbnail[0]};
        const formData = new FormData();
        formData.append('image', thumbnail[0]);
        const res = await publicAxios.post(image_hosting_api, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            },
            withCredentials: false
        })
        console.log(res.data);
        const newRoom = {
            title,
            status,
            price,
            rating,
            description,
            short_description,
            accessories: "Jacuzzi, designer toiletries, grand piano.",
            details: {
                room_size,
                room_bed,
                occupancy,
                view,
                location,
                guest,
                bed,
                bath
            },
            facility,
    
        };

    }

   


    


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Title And Status */}
                <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                    <div className='w-1/2'>
                        <label htmlFor="title" className='text-white font-semibold '>Title :</label>
                        <input placeholder='Title' id='title'  {...register("title", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                        {errors.title && <span className='text-red-500'>This field is required</span>}
                    </div>

                    <div className='w-1/2'>
                        <label htmlFor="status" className='text-white font-semibold '>Status :</label>
                        <input placeholder='Status' id='status' {...register("status", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                        {errors.status && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>

                {/* Price & Rating */}
                <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                    <div className='w-1/2'>
                        <label htmlFor="price" className='text-white font-semibold '>Price :</label>
                        <input placeholder='Price' id='price' type='number' {...register("price", {
                            required: true,

                        })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                        {errors.price && <p className='text-red-500'>This field is required</p>}
                    </div>

                    <div className='w-1/2 '>
                        <label htmlFor="rating" className='text-white font-semibold '>Rating :</label>
                        <input placeholder='Rating' id='rating' type='number' {...register("rating", {
                            required: true,
                            min: { value: 1, message: 'Rating must be at least 1' },
                            max: { value: 5, message: 'Rating must be at most 5' },
                        },)}
                            min={"1"}
                            max={"5"}
                            className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                        {errors.rating && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>

                {/* Details */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-black'>
                        {/* room_size */}
                        <div>
                            <label htmlFor="room_size" className='text-white font-semibold '>Room_size(sqm) :</label>
                            <input type='number' placeholder='Room_size' id='room_size' {...register("room_size", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.room_size && <span className='text-red-500'>This field is required</span>}
                        </div>


                        {/* room_bed */}
                        <div>
                            <label htmlFor="room_bed" className='text-white font-semibold '>Room_bed :</label>
                            <input placeholder='Room_bed' id='room_bed' {...register("room_bed", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.room_bed && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* occupancy */}
                        <div>
                            <label htmlFor="occupancy" className='text-white font-semibold '>Occupancy :</label>
                            <input type='number' placeholder='Occupancy' id='occupancy' {...register("occupancy", {
                                required: true,
                                min: { value: 1, message: 'Rating must be at least 1' }
                            })}
                                min={"1"}
                                className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.occupancy && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* view */}
                        <div>
                            <label htmlFor="view" className='text-white font-semibold '>View :</label>
                            <input placeholder='View' id='view' {...register("view", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.view && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* location */}
                        <div>
                            <label htmlFor="location" className='text-white font-semibold '>Location :</label>
                            <input placeholder='Location' id='location' {...register("location", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.location && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* guest */}
                        <div>
                            <label htmlFor="guest" className='text-white font-semibold '>Guest :</label>
                            <input type='number' placeholder='Guest' id='guest' {...register("guest", {
                                required: true,
                                min: { value: 1, message: 'Rating must be at least 1' }
                            })}
                                min={"1"}
                                className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.guest && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* bed */}
                        <div>
                            <label htmlFor="bed" className='text-white font-semibold '>Bed :</label>
                            <input type='number' placeholder='Bed' id='bed' {...register("bed", {
                                required: true,
                                min: { value: 1, message: 'Rating must be at least 1' }
                            })}
                                min={"1"}
                                className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.bed && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* bath */}
                        <div>
                            <label htmlFor="bath" className='text-white font-semibold '>Bath :</label>
                            <input type='number' placeholder='Bath' id='bath' {...register("bath", {
                                required: true,
                                min: { value: 1, message: 'Rating must be at least 1' }
                            })}
                                min={"1"}
                                className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.bath && <span className='text-red-500'>This field is required</span>}
                        </div>


                    </div>
                </div>

                {/* Description */}
                <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                    <div className='w-1/2 '>
                        <label htmlFor="description" className='text-white font-semibold '>Description :</label>
                        <textarea placeholder='Description' id='description' {...register("description", { required: true })} rows={5} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2'></textarea>
                        {errors.description && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='w-1/2 '>
                        <label htmlFor="short_description" className='text-white font-semibold '>Short_description :</label>
                        <textarea placeholder='Short_Description' id='short_description' rows={5} {...register("short_description", { required: true })}
                            className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2'></textarea>
                        {errors.short_description && <span className='text-red-500'>This field is required</span>}
                    </div>
                </div>

                {/* Thumbnail & Gallery Picture */}
                <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                    <div className='w-1/2'>
                        <label htmlFor="thumbnail" className='text-white font-semibold '>Room Thumbnail :</label>
                        <input type='file' id='thumbnail'  {...register("thumbnail", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                        {errors.thumbnail && <span className='text-red-500'>This field is required</span>}
                    </div>

                    {/* <div className='w-1/2'>
                        <label htmlFor="status" className='text-white font-semibold '>Status :</label>
                        <input placeholder='Status' id='status' {...register("status", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                        {errors.status && <span className='text-red-500'>This field is required</span>}
                    </div> */}
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default RoomForm;



