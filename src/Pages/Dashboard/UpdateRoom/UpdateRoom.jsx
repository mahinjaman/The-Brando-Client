import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSpecificRoom from '../../../Hooks/useSpecificRoom';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../../Components/ErrorImage';
import { useForm } from "react-hook-form"
import useIsAdmin from '../../../Hooks/useIsAdmin';
import Swal from 'sweetalert2';
import usePublicAxios from '../../../Hooks/usePublicAxios';
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { RxCross1 } from 'react-icons/rx';

const UpdateRoom = () => {
    const [gallery, setGallery] = useState([]);
    const [thumb, setThumb] = useState("");
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const isAdmin = useIsAdmin();
    const { roomId } = useParams();
    const secureAxios = useSecureAxios()
    const publicAxios = usePublicAxios();

    const [isPending, room, error] = useSpecificRoom(roomId);

    useEffect(() => {
        if (room) {
            setGallery(room?.photo_gallery);
            setThumb(room?.thumb)
        }
    }, [room])


    if (isPending) {
        return <RoomSkeleton />
    }

    if (error) {
        return <ErrorImage />
    }

    const handleGalleryImageChange = async e => {
        const file = e.currentTarget.files[0];        
        const formData = new FormData();
        formData.append('image', file);
        console.log(file);
        
        const res = await publicAxios.post(image_hosting_api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: false
        })

        console.log(res.data);
        const image = res.data.data.display_url;
        

        setGallery([...gallery, image]);
    }


    const onSubmit = async (data) => {
        // Basic Admin Validation
        if (!isAdmin) {
            Swal.fire({
                title: "Error",
                text: "Only admin can create rooms",
                icon: "error"
            });
            return;
        }

        // Gallery image Validation

        if (gallery.length < 3) {
            Swal.fire({
                title: "Error",
                text: "Please select at least 3 gallery images",
                icon: "error"
            });
            return;
        }

        const { title, status, price, rating, description, short_description, room_size, room_bed, occupancy, view, location, guest, bed, bath, thumbnail } = data;
        const formData = new FormData();
        formData.append('image', thumbnail[0]);

        // Image hosting to image bb
        const res = await publicAxios.post(image_hosting_api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: false
        })
        const image = res.data.data;
        const thumb = image?.display_url;

        const newRoom = {
            title,
            status,
            price,
            rating,
            description,
            short_description,
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
            thumb,
            photo_gallery: gallery
        };

        // secureAxios.post('rooms', newRoom)
        //     .then(res => {
        //         const result = res.data;
        //         if (result?.insertedId) {
        //             Swal.fire({
        //                 title: "Success",
        //                 text: "Room created successfully",
        //                 icon: "success"
        //             });
        //         }
        //     })
        //     .catch(err => {
        //         const message = err.message;
        //         Swal.fire({
        //             title: "Error",
        //             text: message,
        //             icon: "error"
        //         });
        //     })

    }

    const handleGalleryDeleteImage = (index) => {
        const image = gallery[index];
        const remainingRooms = gallery.filter(room => room !== image);
        setGallery(remainingRooms);
    }

    const handleDeleteThumb = () => {
        setThumb("");
    }

    const handleThumbImage = async e =>{
        const imageFile = e.currentTarget.files[0];
        console.log(imageFile);
        
    }

    return (
        <div className='bg-slate-950 lg:p-10 rounded-md'>

            <h1 className='text-4xl text-white font-semibold text-center italic primary-font my-5'>Update Your Room Information</h1>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title And Status */}
                    <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                        <div className='w-1/2'>
                            <label htmlFor="title" className='text-white font-semibold '>Title :</label>
                            <input defaultValue={room?.title} placeholder='Title' id='title'  {...register("title", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.title && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='w-1/2'>
                            <label htmlFor="status" className='text-white font-semibold '>Status :</label>
                            <input defaultValue={room?.status} placeholder='Status' id='status' {...register("status", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.status && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>

                    {/* Price & Rating */}
                    <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                        <div className='w-1/2'>
                            <label htmlFor="price" className='text-white font-semibold '>Price :</label>
                            <input defaultValue={room?.price} placeholder='Price' id='price' type='number' {...register("price", {
                                required: true,

                            })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            {errors.price && <p className='text-red-500'>This field is required</p>}
                        </div>

                        <div className='w-1/2 '>
                            <label htmlFor="rating" className='text-white font-semibold '>Rating :</label>
                            <input defaultValue={room?.rating} placeholder='Rating' id='rating' type='number' {...register("rating", {
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
                                <input defaultValue={room?.details?.room_size.split(" ")[0]} type='number' placeholder='Room_size' id='room_size' {...register("room_size", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                                {errors.room_size && <span className='text-red-500'>This field is required</span>}
                            </div>


                            {/* room_bed */}
                            <div>
                                <label htmlFor="room_bed" className='text-white font-semibold '>Room_bed :</label>
                                <input defaultValue={room?.details?.room_bed} placeholder='Room_bed' id='room_bed' {...register("room_bed", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                                {errors.room_bed && <span className='text-red-500'>This field is required</span>}
                            </div>

                            {/* occupancy */}
                            <div>
                                <label htmlFor="occupancy" className='text-white font-semibold '>Occupancy :</label>
                                <input defaultValue={room?.details?.occupancy} type='number' placeholder='Occupancy' id='occupancy' {...register("occupancy", {
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
                                <input defaultValue={room?.details?.view} placeholder='View' id='view' {...register("view", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                                {errors.view && <span className='text-red-500'>This field is required</span>}
                            </div>

                            {/* location */}
                            <div>
                                <label htmlFor="location" className='text-white font-semibold '>Location :</label>
                                <input defaultValue={room?.details?.location} placeholder='Location' id='location' {...register("location", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                                {errors.location && <span className='text-red-500'>This field is required</span>}
                            </div>

                            {/* guest */}
                            <div>
                                <label htmlFor="guest" className='text-white font-semibold '>Guest :</label>
                                <input defaultValue={room?.details?.guest} type='number' placeholder='Guest' id='guest' {...register("guest", {
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
                                <input defaultValue={room?.details?.bed} type='number' placeholder='Bed' id='bed' {...register("bed", {
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
                                <input defaultValue={room?.details?.bath} type='number' placeholder='Bath' id='bath' {...register("bath", {
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
                            <textarea defaultValue={room?.description} placeholder='Description' id='description' {...register("description", { required: true })} rows={5} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2'></textarea>
                            {errors.description && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='w-1/2 '>
                            <label htmlFor="short_description" className='text-white font-semibold '>Short_description :</label>
                            <textarea defaultValue={room?.short_description} placeholder='Short_Description' id='short_description' rows={5} {...register("short_description", { required: true })}
                                className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2'></textarea>
                            {errors.short_description && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>

                    {/* Thumbnail & Gallery Picture */}
                    <div className='flex flex-wrap lg:flex-nowrap gap-3 w-full my-3 text-black'>
                        <div className='w-1/2'>
                            <label htmlFor="thumbnail" className='text-white font-semibold '>Room Thumbnail :</label>
                            <input onChange={handleThumbImage} type='file' id='thumbnail'  {...register("thumbnail", { required: true })} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />

                            {
                                thumb &&
                                <div className='text-white flex items-center gap-5'>
                                    <li className=' list-decimal'>{thumb}</li>
                                    <span onClick={handleDeleteThumb}><RxCross1 /></span>
                                </div>
                            }

                            {errors.thumbnail && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='w-1/2'>
                            <label htmlFor="Gallery" className='text-white font-semibold '>Gallery( 3-photos) :</label>
                            <input type='file' id='Gallery' onChange={handleGalleryImageChange} className='border px-5 py-3 w-full bg-slate-100 rounded-md mt-2' />
                            <div>
                                {gallery.map((image, index) => (
                                    <div key={index} className='text-white flex items-center gap-5'>
                                        <li className='list-none'><span>{index+1}. </span> {image}</li>
                                        <span onClick={() => handleGalleryDeleteImage(index)}><RxCross1 /></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <input className='bg-[#FDBA74] w-[20%] mx-auto px-10 py-2.5 rounded-md text-gray-950 font-semibold cursor-pointer' type="submit" value="Update Room" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateRoom;