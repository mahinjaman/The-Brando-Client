import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const FacilityCard = ({item, idx}) => {
    const { icon , facility, description} = item;
    useEffect(()=>{
        AOS.init();
      },[])
    return (
        <div className='border p-5 rounded-lg flex flex-col relative overflow-hidden duration-300 hover:shadow-xl'
        data-aos="fade-down-right"
        >
            <div>
            <img src={icon} alt={facility} className='w-10' />
            </div>

            <div className='border-b border-dashed flex flex-col gap-4 pb-5 mt-5 flex-grow'>
                <h3 className='uppercase font-serif font-semibold text-xl'>{facility}</h3>
                <p className='flex-grow'>{description}</p>
            </div>
            <div className='absolute px-5 py-3 border-b border-l  right-0 top-0 rounded-bl-lg bg-purple-300 bg-opacity-10'>
                <h1 className='font-serif text-lg'>.{idx +1 }</h1>
            </div>
        </div>
    );
};

FacilityCard.propTypes = {
    item: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}

export default FacilityCard;