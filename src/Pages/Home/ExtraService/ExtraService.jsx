import React from 'react';
import img1 from '../../../assets/ExtraService/1.jpg'
import img2 from '../../../assets/ExtraService/2.jpg'
import img3 from '../../../assets/ExtraService/3.jpg'
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import PrimaryTitle from '../../../Components/Shared/PrimaryTitle';
import { MdOutlineSpa } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { GrRestaurant } from 'react-icons/gr';
import bg from '../../../assets/map_bg5.png'
import TriangleIcon from '../../../Components/TriangleIcon';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExtraService = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000
    });
}, [])
  return (
    <div className=" mx-5 lg:mb-10 xl:p-10 border rounded-md mt-10 bg-slate-50 relative z-20">
      {/* background */}
      <div className='absolute lg:top-20 top-10 rotate-45 right-10 lg:right-10 '>
        <img src={bg} alt="" />
      </div>
      {/* Content */}
      <div className="text-center mb-5 relative">
        <PrimaryTitle>
          Enjoy your time in our Hotel with pleasure.
        </PrimaryTitle>
        <h1 className=" text-3xl lg:text-5xl font-bold font-serif my-5">
          Hotels Extra Services
        </h1>
      </div>

      {/* Card */}

      <div className=" xl:w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 text-center text-white gap-5 xl:gap-10 lg:h-80 p-2">
        {/* Card-1 */}
        <div className="relative rounded-md overflow-hidden h-[355px] xl:h-80 "
        data-aos="fade-down-left"
        >
          <div className="theCard absolute w-full h-full">
            {/* font */}
            <div
              className="theFront absolute w-full h-full "
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className=" bg-slate-900 bg-opacity-30 p-5 h-full">
                <div className="border p-5 flex flex-col rounded-md h-full">
                  <hr className="w-16 border border-[#c4a676]" />
                  <h1 className="text-center text-3xl font-bold font-serif">
                    Spa And Wellness
                  </h1>
                  <h4 className="text-lg font-semibold uppercase ">
                    Start relax better
                  </h4>
                  <div className="w-full">
                    <PrimaryDivider></PrimaryDivider>
                  </div>
                  <h4 className="text-[#c4a676] font-bold font-serif text-2xl">
                    .1
                  </h4>
                </div>
              </div>
            </div>
            {/* back */}
            <div className="theBack absolute w-full h-full bg-gray-900 p-5">
              <div className="border rounded-md flex flex-col  p-5 h-full">
                <div className="relative flex flex-col items-center justify-center ">
                  <div className="absolute top-0 w-32 h-6 bg-slate-700 bg-opacity-50 rounded-xl mr-10"></div>
                  <div className="text-5xl text-[#c4a676] z-10">
                    <MdOutlineSpa />
                  </div>
                  <div className=" w-32 h-6 bg-slate-700 bg-opacity-50 rounded-xl ml-10"></div>
                </div>
                <p className='text-sm'>
                  Indulge in our Swedish Massage, a soothing full-body
                  treatment that uses gentle, flowing strokes to relieve
                  tension, improve circulation, and promote relaxation.
                  Perfect for de-stressing and enhancing overall well-being.
                </p>
                <p className='text-4xl text-[#c4a676]'>. . .</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card-2 */}

        <div className="relative rounded-md overflow-hidden h-[355px] xl:h-80"
        data-aos="flip-up"
        >
          <div className="theCard absolute w-full h-full">
            {/* font */}
            <div
              className="theFront absolute w-full h-full"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className=" bg-slate-900 bg-opacity-30 p-5 rounded-md h-full">
                <div className="border p-5 flex flex-col rounded-md h-full">
                  <hr className="w-16 border border-[#c4a676]" />
                  <h1 className="text-center text-3xl font-bold font-serif">
                    Indoor Swimming Pool
                  </h1>
                  <h4 className="text-lg font-semibold uppercase">
                    Quality is the heart
                  </h4>
                  <div className="w-full">
                    <PrimaryDivider></PrimaryDivider>
                  </div>
                  <h4 className="text-[#c4a676] font-bold font-serif text-2xl">
                    .2
                  </h4>
                </div>
              </div>
            </div>
            {/* back */}
            <div className="theBack absolute w-full h-full bg-gray-900 p-5">
              <div className="border rounded-md h-full flex flex-col justify-center items-center p-5">
                <div className="relative flex flex-col items-center justify-center ">
                  <div className="absolute top-0 w-32 h-6 bg-slate-700 bg-opacity-50 rounded-xl mr-10"></div>
                  <div className="text-5xl text-[#c4a676] z-10">
                    <FaSwimmingPool />
                  </div>
                  <div className=" w-32 h-6 bg-slate-700 bg-opacity-50 rounded-xl ml-10"></div>
                </div>
                <p className='flex-grow'>
                  Enjoy a swim in our heated indoor pool, perfect for relaxation and exercise all year round. Immerse yourself in the serene ambiance and comfortable water temperature.
                </p>
                <p className='text-4xl text-[#c4a676]'>. . .</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card-3 */}

        <div className="relative rounded-md overflow-hidden h-[355px] xl:h-80"
        data-aos="fade-down-right"
        >
          <div className="theCard absolute w-full h-full ">
            {/* Font */}
            <div
              className="theFront absolute w-full h-full"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className=" bg-slate-900 bg-opacity-30 p-5 rounded-md h-full">
                <div className="border p-5 flex flex-col rounded-md h-full">
                  <hr className="w-16 border border-[#c4a676]" />
                  <h1 className="text-center text-3xl font-bold  font-serif">
                    The Restaurant Center
                  </h1>
                  <h4 className="text-lg font-semibold uppercase">
                    Hot & ready to serve
                  </h4>
                  <div className="w-full">
                    <PrimaryDivider></PrimaryDivider>
                  </div>
                  <h4 className="text-[#c4a676] font-bold font-serif text-2xl">
                    .3
                  </h4>
                </div>
              </div>
            </div>
            {/* back */}
            <div className="theBack absolute w-full h-full bg-gray-900 p-5">
              <div className="border rounded-md h-full flex flex-col justify-center items-center p-5">
                <div className="relative flex flex-col items-center justify-center">
                  <div className="absolute top-0 w-32 h-6 bg-slate-700 bg-opacity-50 rounded-xl mr-10"></div>
                  <div className="text-5xl text-[#c4a676] z-10">
                    <GrRestaurant />
                  </div>
                  <div className=" w-32 h-6 bg-slate-700 bg-opacity-50 rounded-xl ml-10"></div>
                </div>
                <p className='flex-grow'>
                  Experience exquisite gourmet dining at our restaurant, where our chefs craft culinary masterpieces using the freshest local ingredients. Enjoy a memorable meal in an elegant and sophisticated setting.
                </p>
                <p className='text-4xl text-[#c4a676]'>. . .</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GET IN TOUCH WITH US btn */}
      <div className='flex flex-col items-center justify-center mt-14 relative z-30 mb-5'>
        <Link to={'/contact'}><button className='custom-btn lg:mt-5  bg-gray-900 text-[#c4a676] border-gray-900 hover:bg-[#c4a676] hover:text-gray-900'> GET IN TOUCH WITH US </button></Link>
      </div>
    </div>
  );
};

export default ExtraService;