import React, { useRef, useState } from 'react';
import bg from '../../assets/map_bg5.png'
import TriangleIcon from '../../Components/TriangleIcon';
import { IoLocationOutline } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { Map, Draggable } from "pigeon-maps";
import map_icon from '../../assets/image/Map_symbol_location_02.png'
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const Contact = () => {
    const [anchor, setAnchor] = useState([24.3329, 90.0288]);
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    const form = useRef();

    const handleMessage = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    Swal.fire({
                        title: 'Thank You',
                        text: 'Your Message Sent Successfully',
                        icon:'success',
                        confirmButtonText: 'Okay'
                    });
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <div className='bg-white pt-5'>
            <Helmet>
                <title>The Brando | Contact Us</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${bg})` }} className='border  py-20 bg-no-repeat bg-top bg-opacity-30 relative rounded-md'>
                {/* Contact Info */}
                <div className='p-7 lg:w-10/12 mx-auto bg-slate-50 border rounded-md mb-5'>
                    <div className='md:border md:p-5 bg-white rounded-md grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>

                        <div className='flex items-center gap-5 p-5 border rounded-md bg-slate-50' data-aos="fade-down-right">
                            <div>
                                <h1 className='text-5xl text-[#C2A576]'><IoLocationOutline /></h1>
                            </div>
                            <div>
                                <h3 className='font-serif text-xl font-semibold'>Our Location</h3>
                                <p className='text-sm my-3'>Nestled in the heart of Dhaka,Bangladesh, our resort offers stunning views and easy access to local attractions. Enjoy the perfect blend of tranquility and convenience.</p>
                                <p className='text-[#C2A576] italic'>Balla Bazar, Kalihati, Tangail</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-5 border rounded-md bg-slate-50' data-aos="flip-up">
                            <div>
                                <h1 className='text-5xl text-[#C2A576]'><GiRotaryPhone /></h1>
                            </div>
                            <div>
                                <h3 className='font-serif text-xl font-semibold'>Our Phone</h3>
                                <p className='text-sm my-3'>For inquiries and support, call us at +8801644448473. Our team is available to assist you with any questions or concerns. We look forward to hearing from you!</p>
                                <p className='text-[#C2A576] italic'>+8801644448473, +8801916899544</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5 p-5 border rounded-md bg-slate-50' data-aos="fade-down-left">
                            <div>
                                <h1 className='text-5xl text-[#C2A576]'><IoLocationOutline /></h1>
                            </div>
                            <div>
                                <h3 className='font-serif text-xl font-semibold'>Our Mail</h3>
                                <p className='text-sm my-3'>For inquiries and support, please email us at mahinjaman01@gmail.com. Our team is here to assist you with any questions or concerns you may have. We look forward to connecting with you!</p>
                                <p className='text-[#C2A576] italic'>mahinjaman01@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}

                <div className=' w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-5'>
                    <div className='md:p-7 md:border bg-slate-50 rounded-md' data-aos="fade-up-left">
                        <div className='p-5 bg-white border rounded-md'>
                            <div className='flex items-center justify-between py-4 border-b'>
                                <h1 className='text-xl font-serif'>Get In Touch</h1>
                                <p className='w-10 h-[1px] bg-[#C2A576]'></p>
                            </div>

                            <form className='mt-5' ref={form} onSubmit={handleMessage}>
                                <div className='flex flex-col xl:flex-row gap-5'>
                                    <input className='w-full py-4 px-5 placeholder:text-slate-400 outline-none border rounded-md xl:w-1/2 bg-slate-50' placeholder='Your Name *' type="text" name="name" id="name" required />
                                    <input className='w-full py-4 px-5 placeholder:text-slate-400 outline-none border rounded-md xl:w-1/2 bg-slate-50' placeholder='Your Email *' type="email" name="email" id="email" required />
                                </div>
                                <textarea name="message" id="message" placeholder='Your Message:' rows={5} className='border rounded-md mt-5 w-full p-5 bg-slate-50 outline-none'></textarea>
                                <input type="submit" value="Send Message" className='py-3 px-7 cursor-pointer bg-slate-900 text-[#C2A576] font-serif tracking-wider rounded-md' />
                            </form>
                        </div>
                    </div>
                    {/* Map */}
                    <div className='rounded-md overflow-hidden' data-aos="fade-up-right">
                        <Map height={500} defaultCenter={[24.3329, 90.0288]} defaultZoom={11}>
                            <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                                <img src={map_icon} width={50} height={95} alt="Pigeon!" />
                            </Draggable>
                        </Map>
                    </div>
                </div>

                {/* Bottom Triangle Icon */}
                <div className='absolute bottom-0 w-full'>
                    <TriangleIcon></TriangleIcon>
                </div>
            </div>
        </div>
    );
};

export default Contact;