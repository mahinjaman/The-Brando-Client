import React from 'react';
import img1 from '../../../assets/ExtraService/1.jpg'
import img2 from '../../../assets/ExtraService/2.jpg'
import img3 from '../../../assets/ExtraService/3.jpg'
import PrimaryDivider from '../../../Components/Shared/PrimaryDivider';
import PrimaryTitle from '../../../Components/Shared/PrimaryTitle';
const ExtraService = () => {
    return (
      <div className="w-11/12 mx-auto p-10 border rounded-md my-10 bg-slate-100">
        <div className="text-center mb-5">
          <PrimaryTitle>
            Enjoy your time in our Hotel with pleasure.
          </PrimaryTitle>
          <h1 className="text-5xl font-bold font-serif my-5">
            Hotels Extra Services
          </h1>
        </div>

        {/* Card */}

        <div className=" grid grid-cols-1 lg:grid-cols-3 text-center text-white gap-10 h-80">

          <div className="relative rounded-md overflow-hidden">
            <div className="theCard absolute w-full h-full">
              <div
                className="theFront absolute w-full h-full"
                style={{ backgroundImage: `url(${img1})` }}
              >
                <div className=" bg-slate-900 bg-opacity-30 p-5">
                  <div className="border p-5 flex flex-col justify-center items-center">
                    <hr className="w-16 border border-[#c4a676]" />
                    <h1 className="text-center text-3xl font-bold my-5 font-serif">
                      Spa And Wellness
                    </h1>
                    <h4 className="text-lg font-semibold uppercase">
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
              <div className="theBack absolute w-full h-full">
                Backend
                </div>
            </div>
          </div>

          <div className="relative rounded-md overflow-hidden">
            <div className="theCard absolute w-full h-full ">
              <div
                className="theFront absolute w-full h-full"
                style={{ backgroundImage: `url(${img2})` }}
              >
                <div className=" bg-slate-900 bg-opacity-30 p-5 rounded-md">
                  <div className="border p-5 flex flex-col justify-center items-center rounded-md">
                    <hr className="w-16 border border-[#c4a676]" />
                    <h1 className="text-center text-3xl font-bold my-5 font-serif">
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
              <div className="theBack absolute w-full h-full">Backend</div>
            </div>
          </div>

          <div className="relative rounded-md overflow-hidden">
            <div className="theCard absolute w-full h-full ">
              <div
                className="theFront absolute w-full h-full"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className=" bg-slate-900 bg-opacity-30 p-5 rounded-md">
                  <div className="border p-5 flex flex-col justify-center items-center rounded-md">
                    <hr className="w-16 border border-[#c4a676]" />
                    <h1 className="text-center text-3xl font-bold my-5 font-serif">
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
              <div className="theBack absolute w-full h-full">Backend</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExtraService;