import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css'
const MenuCard = ({ menu }) => {
    const { title, price, description, thumb } = menu;

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className='flex gap-5 items-center border-b my-5 pb-5'
        data-aos="fade-left"
        >
            <div className=' p-2 border border-dashed border-[#C4A676] rounded-full flex items-center justify-center'>
                <img className='rounded-full w-16 h-14' src={thumb} alt="" />
            </div>
            <div className='flex items-center gap-5 pr-10 w-full'>
                <div className='flex-grow'>
                    <h1 className='font-serif font-semibold'>{title}</h1>
                    <p>{description}</p>
                </div>
                <h1 className='primary-font text-3xl text-[#C4A676]'>${price}</h1>
            </div>
        </div>
    );
};

MenuCard.propTypes = {
    menu: PropTypes.object.isRequired
};

export default MenuCard;