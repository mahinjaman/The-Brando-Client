import React from 'react';

const TriangleIcon = () => {
    return (
        <div className='hidden lg:flex items-center justify-center w-full'>
            <div className=' absolute w-8 mb-5 h-[1px] bg-slate-500 rotate-90'></div>
            <div className=' absolute flex items-center justify-center bg-white bg-opacity-50 w-11 h-11 rotate-45'>
                <div className='w-9 h-9 bg-white flex items-center justify-center'><h1 className='font-extrabold text-3xl text-[#C2A576] mb-4'>.</h1></div>
            </div>
        </div>
    );
};

export default TriangleIcon;