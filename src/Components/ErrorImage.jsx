import React from 'react';
import errorImg from '../assets/image/error.gif'
const ErrorImage = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <img src={errorImg} alt="Error" />
        </div>
    );
};

export default ErrorImage;
