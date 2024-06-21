import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const { title, post_date, description } = news;
    return (
        <div className='flex flex-col p-5 gap-5 text-center'>
            <h2 className='text-xl font-serif text-[#c2a576]'><Link to={'/'}>{title}</Link></h2>
            <h4>{post_date}</h4>
            <p className='mx-auto'>{description.slice(0, 150)}...</p>
            <p className='text-xl font-bold text-[#c2a576]'>. . .</p>
        </div>
    );
};

export default NewsCard;