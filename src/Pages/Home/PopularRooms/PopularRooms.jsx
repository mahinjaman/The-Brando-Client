import { FaStar } from 'react-icons/fa';
import popularBg from '../../../assets/map_bg5.png'
import useSecureAxios from '../../../Hooks/useSecureAxios';
import { useQuery } from '@tanstack/react-query';
import RoomSlider from './RoomSlider';
import PrimaryTitle from '../../../Components/Shared/PrimaryTitle';
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import RoomSkeleton from '../../../Components/Shared/RoomSkeleton';
import ErrorImage from '../../../Components/ErrorImage';
import { Link } from 'react-router-dom';


const PopularRooms = () => {

  const secureAxios = useSecureAxios();

  const { isPending, data: popularRooms, error } = useQuery({
    queryKey: 'popularRooms',
    queryFn: async () => {
      const response = await secureAxios.get('/popular_rooms')
      return response.data;
    }
  })


  if (isPending) {
    return <RoomSkeleton></RoomSkeleton>
  }
  if (error) {
    return <ErrorImage />
  }


  return ( 
    <div className="grid grid-cols-1 p-2 py-10 lg:py-0 lg:p-0 lg:grid-cols-9 xl:grid-cols-12 2xl:grid-cols-4 gap-5 bg-slate-900 bg-opacity-95">
      <div className="lg:col-span-3 xl:col-span-4 2xl:col-span-1 lg:p-5 bg-no-repeat bg-opacity-35 relative">
        <div className="absolute opacity-30 w-full flex items-center justify-center mt-20">
          <img src={popularBg} className="lg:w-56" alt="" />
        </div>

        <fieldset className="border border-slate-700 p-5 rounded-md shadow-md">
          <legend className="flex gap-3 text-center px-5 text-[#fdba74]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </legend>
          <div className="mt-10">
            <PrimaryTitle>Special Section</PrimaryTitle>
            <h1 className="text-4xl text-center text-white  font-serif my-3">
              Popular Rooms And Suites
            </h1>
            <PrimaryDivider></PrimaryDivider>

            <div className="flex flex-col w-full items-center justify-center mt-5 gap-5">
              <Link to={'/rooms'}><button className="custom-btn hover:bg-[#fdba74] hover:text-slate-900">
                View All Rooms
              </button></Link>
              <div className="flex gap-5 items-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="p-2 border border-dashed border-[#fdba74] rounded-full">
                  <div className="w-2 h-2 bg-[#fdba74] rotate-45"></div>
                </div>
                <div className="w-2 h-2 bg-white rounded-full "></div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      {/* Slider */}

      <div className="2xl:col-span-3 xl:col-span-8 lg:col-span-6 flex">
          <RoomSlider rooms={popularRooms}></RoomSlider>
      </div>
    </div>
  );
};

export default PopularRooms;