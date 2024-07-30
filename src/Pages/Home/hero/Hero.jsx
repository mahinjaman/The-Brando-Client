// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";
import SearchRoom from "../../../Components/Shared/SearchRoom";

const Hero = () => {
    return (
      <div
      id="#"
        className="hero lg:h-[700px] text-white mb-5 bg-no-repeat bg-[100%]]"
        style={{
          backgroundImage:
            "url(https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp)",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100%",
          // backgroundPosition: "center",
          // backgroundAttachment: "fixed",
          // backgroundBlendMode: "darken",
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-black to-blue-900 opacity-40"></div>
        <div className="hero-content grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-orange-300 text-lg font-semibold">
            <hr className="w-16 border border-orange-300 mb-3" />
              Enjoy your time in our Hotel with pleasure.
            </p>
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              WELCOME TO THE DIAMANT PREMIUM HOTEL
            </h1>

            <Link to={'/contact'}><button className="custom-btn" style={{color:'white'}}>Start Explore</button></Link>
          </div>
          <div className="lg:col-span-2">
            <SearchRoom>
              Search Room
            </SearchRoom>
          </div>
        </div>
      </div>
    );
};

export default Hero;