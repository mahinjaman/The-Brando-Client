import React from 'react';
import { IoDiamondSharp } from 'react-icons/io5';

const PrimaryDivider = () => {
    return (
      <div className="flex justify-evenly items-center my-10">
        <div className="w-20 h-[2px] bg-slate-600"></div>
        <div className="text-[#c4a676] text-xl">
          <IoDiamondSharp />
        </div>
        <div className="w-20 h-[2px] bg-slate-600"></div>
      </div>
    );
};

export default PrimaryDivider;