import PropTypes from 'prop-types'
import { FaBedPulse, FaPerson } from 'react-icons/fa6';
import { MdBathroom } from 'react-icons/md';
import { Link } from 'react-router-dom';
const PopularRoomCard = ({item}) => {
    console.log(item);
    const {img, title, short_description, price_per_night, bed, bath, guest} = item;
    return (
      <div className="text-white relative rounded-md overflow-hidden">
        <img src={img} alt="" className="rounded-md" />
        <div className="absolute bottom-0 p-5 bg-gradient-to-b from-transparent to-slate-800 h-full flex flex-col justify-end">
          <Link to={"/"} className="text-2xl font-bold font-serif">
            {title}
          </Link>
          <p className='text-slate-200'>{short_description}</p>
          <div>
            <div className="flex justify-between my-5 border-b pb-5 gap-2">
              <p className="flex gap-2 font-semibold items-center">
                <span className="text-xl p-1 bg-orange-300 rounded-full text-gray-900">
                  <FaPerson />
                </span>
                {guest} Guest
              </p>
              <p className="flex gap-2  font-semibold items-center">
                <span className="text-xl p-1 bg-orange-300 rounded-full text-gray-900">
                  <FaBedPulse />
                </span>
                {bed} Bed
              </p>
              <p className="flex gap-2  font-semibold items-center">
                <span className="text-xl p-1 bg-orange-300 rounded-full text-gray-900">
                  <MdBathroom />
                </span>
                {bath} Bath
              </p>
              <p className="flex gap-1 text-lg font-semibold items-center font-serif text-orange-300">
                {/* <span className="text-2xl p-2 bg-orange-300 rounded-full text-gray-900">
                  <IoCloudyNightSharp />
                </span> */}
                <span className="text-xl">$</span>
                {price_per_night}/Night
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

PopularRoomCard.propTypes = {
    item: PropTypes.object.isRequired,
};

export default PopularRoomCard;