import React from 'react';
import { IoDiamondSharp } from 'react-icons/io5';

const PrimaryDivider = () => {
    return (
      <div className="flex justify-evenly items-center my-10">
        <div className="w-20 h-[3px] bg-slate-700"></div>
        <div className="text-[rgb(253,186,116)] text-xl">
          <IoDiamondSharp />
        </div>
        <div className="w-20 h-[3px] bg-slate-700"></div>
      </div>
    );
};

export default PrimaryDivider;