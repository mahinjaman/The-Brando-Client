import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TriangleIcon from '../../Components/TriangleIcon';
import "react-multi-carousel/lib/styles.css";
import RestaurantSlider from './RestaurantSlider';

import Bg1 from '../../assets/restaurant/breakfast.jpg'
import Bg2 from '../../assets/restaurant/restaurant.jpg'
import Bg3 from '../../assets/restaurant/japan.jpg'


import { useQuery, } from '@tanstack/react-query'
import useSecureAxios from '../../Hooks/useSecureAxios';
import MenuCard from './MenuCard';
import PrimaryDivider from '../../Components/Shared/PrimaryDivider';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Restaurant = () => {
    const [breakfastBg, setBreakfastBg] = useState(false);
    const [restaurantBg, setRestaurantBg] = useState(true);
    const [barBg, setBarBg] = useState(false);
    const [displayMenu, setDisplayMenu] = useState("Dishes");

    useEffect(()=>{
        AOS.init({
            duration: 1000
        });
    },[])


    const handleBgPhoto = (bgName) => {
        if (bgName === 'breakfast') {
            setBreakfastBg(true);
            setRestaurantBg(false);
            setBarBg(false);
        }
        if (bgName === 'restaurant') {
            setBreakfastBg(false);
            setRestaurantBg(true);
            setBarBg(false);
        }
        if (bgName === 'bar') {
            setBreakfastBg(false);
            setRestaurantBg(false);
            setBarBg(true);
        }

    }

    const secureAxios = useSecureAxios()

    // Loaded restaurant Menu 

    const { isPending, data: menus, isError } = useQuery({
        queryKey: 'restaurant_menu',
        queryFn: async () => {
            // Replace with your API call
            const response = await secureAxios.get('/restaurant_menu')
            return response.data;
        }
    })

    if (isPending) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Error fetching data: {isError.message}</h1>
    }

    const showMenu = menus.filter(menu => menu.category === displayMenu);

    

    return (
        // About Our Restaurant
        <section className='relative'>
            <Helmet>
                <title>The Brando | Restaurant</title>
            </Helmet>
            {/* Start About  */}

            <div className='z-10'>
                <div className="home_about relative grid grid-cols-1 lg:grid-cols-2 lg:p-32 gap-10 lg:gap-0 lg:mx-5 border border-dashed rounded-md mb-5 items-center">
                    {/* Content */}
                    <div className={`p-5 flex flex-col gap-3 items-start`} data-aos="fade-up-left">
                        <p className="text-[#c4a676] text-lg font-semibold">
                            <hr className="w-16 border border-[#c4a676] mb-2" />
                            Special selection
                        </p>
                        <h1 className="text-5xl font-semibold my-2 font-serif">
                            About Our Restaurant
                        </h1>
                        <div className="text-gray-500 text-sm leading-7 mb-3">
                            <h3 className='font-semibold text-black text-xl mb-5'>Welcome to The Brando</h3>
                            <p className="first-letter:text-6xl first-letter:text-[#c4a676]">
                                Nestled in the heart of [Location], The Brando offers an unparalleled retreat for those seeking luxury and tranquility. Our hotel is designed to provide guests with a perfect blend of modern comfort and natural beauty. From our elegantly appointed rooms to our serene surroundings, every detail at The Brando is crafted to ensure a memorable stay.
                            </p>
                            <br />
                            <h3 className='font-semibold text-black text-xl mb-5'>Dining at The Brando</h3>
                            <p>
                                Within The Brando, you'll find our exquisite restaurant, a culinary haven that promises a delightful dining experience. Our restaurant features a diverse menu, showcasing both local and international cuisine, prepared with the freshest ingredients by our skilled chefs. Whether you're in the mood for a leisurely breakfast, a sumptuous lunch, or an elegant dinner, our restaurant provides the perfect setting to indulge your taste buds.
                                <br />
                                <br />
                                Join us at The Brando, where luxury meets nature, and every meal is a celebration of flavor.
                            </p>
                        </div>
                        <button className="custom-btn bg-slate-900 text-[#c4a676] hover:bg-[#c4a676] hover:text-black uppercase">
                            <a href={"#"}>Explore Our Menu</a>
                        </button>
                    </div>

                    {/* Slider */}

                    <div className="" data-aos="fade-up-right">
                        <RestaurantSlider />
                    </div>

                    {/* Design */}

                    <div className='hidden lg:absolute lg:flex items-center gap-5 top-[52%]'>
                        <div className='w-10 h-[1px] bg-slate-500'></div>
                        <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
                            <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                        </div>
                    </div>

                    <div className='hidden lg:absolute lg:flex items-center gap-5 top-[47%] right-0'>
                        <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
                            <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                        </div>
                        <div className='w-14 h-[1px] bg-slate-500'></div>
                    </div>


                </div>
            </div>

            {/* More Restaurant  */}

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 relative overflow-hidden bg-blue-950 bg-opacity-35'>
                {/* Background */}
                <div className={` absolute ${breakfastBg ? "w-full h-full z-10 bg-top-[20%] restaurant-bg" : "restaurant-bg-end"} `} style={{ backgroundImage: `url(${Bg1})` }}></div>
                <div className={`absolute ${restaurantBg ? "w-full h-full z-10 bg-top bg-cover restaurant-bg" : "restaurant-bg-end"}  `} style={{ backgroundImage: `url(${Bg2})` }}></div>
                <div className={`absolute ${barBg ? "w-full h-full z-10 bg-center restaurant-bg" : "restaurant-bg-end"} `} style={{ backgroundImage: `url(${Bg3})` }}></div>
                <div className='absolute bg-slate-900 bg-opacity-20 w-full h-full z-10'>
                </div>

                {/* Content 1 */}
                <div className='p-5 z-20' onMouseEnter={() => handleBgPhoto('breakfast')} data-aos="fade-up-left">
                    <div className={`bg-slate-900 text-white flex flex-col items-center py-20 rounded-md border h-[500px] ${breakfastBg ? 'bg-opacity-70' : 'bg-opacity-10'}`}>
                        <div className={` bg-[#c4a676] rotate-90 mb-16 ${breakfastBg ? 't-to-b' : ''}`}></div>
                        <h3 className='text-[#c4a676] font-serif font-semibold text-lg italic'>Gourmet Breakfast</h3>
                        <h1 className='text-3xl primary-font'>Breakfast Buffet</h1>
                        <p className='my-5 flex flex-col gap-4 justify-center items-center'>
                            <hr className='w-12 border-[#c4a676] border-[1px]' />
                            <span className=''>LOCATION : LOBBY LEVEL</span>
                        </p>
                        <div className={`bg-slate-500 bg-opacity-20 p-3 rounded-md ${breakfastBg ? 'restaurant-timing block bg-opacity-50' : 'hidden '}`}>
                            <div className='border border-dashed border-[#c4a676] p-5'>
                                <p>MONDAY - SUNDAY</p>
                                <p>06:00 AM - 22:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Content 2 */}
                <div className='p-5 z-20 border-l border-r border-white' onMouseEnter={() => handleBgPhoto('restaurant')} data-aos="flip-up">
                    <div className={`bg-slate-900 text-white flex flex-col items-center py-20 rounded-md border h-[500px] ${restaurantBg ? 'bg-opacity-70' : 'bg-opacity-30'}`}>
                        <div className={` bg-[#c4a676] rotate-90 mb-16 ${restaurantBg ? 't-to-b' : ''}`}></div>
                        <h3 className='text-[#c4a676] font-serif font-semibold text-lg italic'>Lunch and Dinner</h3>
                        <h1 className='text-3xl primary-font'>The Restaurant</h1>
                        <p className='my-5 flex flex-col gap-4 justify-center items-center'>
                            <hr className='w-12 border-[#c4a676] border-[1px]' />
                            <span className=''>LOCATION: THE 2ND FLOOR EAST WING</span>
                        </p>
                        <div className={`bg-slate-500 bg-opacity-20 p-3 rounded-md duration-300 ${restaurantBg ? 'restaurant-timing block bg-opacity-50' : 'hidden '}`}>
                            <div className='border border-dashed border-[#c4a676] p-5'>
                                <p>MONDAY - SUNDAY</p>
                                <p>06:00 AM - 22:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Content 3 */}
                <div className='p-5 z-20' onMouseEnter={() => handleBgPhoto('bar')} data-aos="fade-up-right">
                    <div className={`bg-slate-900 text-white flex flex-col items-center py-20 rounded-md border h-[500px] ${barBg ? 'bg-opacity-70' : 'bg-opacity-30'}`}>
                        <div className={` bg-[#c4a676] rotate-90 mb-16 ${barBg ? 't-to-b' : ''}`}></div>
                        <h3 className='text-[#c4a676] font-serif font-semibold text-lg italic'>Bar, Lunch, Dinner</h3>
                        <h1 className='text-3xl primary-font'>Japanese Sushi Bar</h1>
                        <p className='my-5 flex flex-col gap-4 justify-center items-center'>
                            <hr className='w-12 border-[#c4a676] border-[1px]' />
                            <span className=''>LOCATION : TERRACE</span>
                        </p>
                        <div className={`bg-slate-500 bg-opacity-20 p-3 rounded-md ${barBg ? 'restaurant-timing block bg-opacity-50' : 'hidden '}`}>
                            <div className='border border-dashed border-[#c4a676] p-5'>
                                <p>MONDAY - SUNDAY</p>
                                <p>06:00 AM - 22:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Restaurant Menu */}

            <div className='my-20'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#C4A676] flex items-center flex-col justify-center gap-3'>
                        <hr className='w-14 border border-[#C4A676]' />
                        <span className='text-lg primary-font'>
                            Special selection</span>
                    </h1>
                    <h1 className='text-4xl font-semibold italic font-serif'>Discover Our Menu</h1>
                    <div className='w-3/4'>
                        <PrimaryDivider></PrimaryDivider>
                    </div>
                </div>
                <div role="tablist" className="tabs tabs-lifted w-5/12 mx-auto">
                    <a onClick={()=> setDisplayMenu("Dishes")} role="tab" className={`font-semibold text-[18px] tab ${displayMenu === "Dishes" ? 'tab-active text-[#C4A676]' : ''}`}>Main Dishes</a>
                    <a onClick={()=> setDisplayMenu("Starters")} role="tab" className={`font-semibold text-[18px] tab ${displayMenu === "Starters" ? 'tab-active text-[#C4A676]' : ''}`}>Starters</a>
                    <a onClick={()=> setDisplayMenu("Desserts")} role="tab" className={`font-semibold text-[18px] tab ${displayMenu === "Desserts" ? 'tab-active text-[#C4A676]' : ''}`}>Desserts</a>
                    <a onClick={()=> setDisplayMenu("Drinks")} role="tab" className={`font-semibold text-[18px] tab ${displayMenu === "Drinks" ? 'tab-active text-[#C4A676]' : ''}`}>Drinks</a>
                </div>
                <div className=' lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2'>
                    {
                        showMenu.map(menu => <MenuCard key={menu._id} menu={menu}></MenuCard>)
                    }
                </div>
            </div>

            <div className='hidden lg:flex items-center justify-center w-full absolute z-10'>
                <TriangleIcon></TriangleIcon>
            </div>
        </section>
    );
};

export default Restaurant;