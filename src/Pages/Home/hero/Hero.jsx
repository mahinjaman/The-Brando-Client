// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

import SearchRoom from "../../../Components/Shared/SearchRoom";

const Hero = () => {
  // const [room, setRoom ] = useState(1);
  // const [ guest, setGuest ] = useState(1);

  // const handlePlus = (item) =>{
  //   if(item === 'rooms'){
  //     if(room > 5){
  //       return;
  //     }
  //     setRoom(room + 1);
  //   }
  //   else if(item === 'guests'){
  //     if(guest > 7){
  //       return;
  //     }
  //     setGuest(guest + 1);
  //   }
  // }

  // const handleMinus = (item) =>{
  //   if (item === "rooms") {
  //     if(room < 1){
  //       return;
  //     }
  //     setRoom(room - 1);
  //   } 
  //   else if (item === "guests"){
  //     const newGuest = guest - 1;
  //     console.log(newGuest);
  //     setGuest(newGuest);
  //   }
  // }


  // const handleSearch = e =>{
  //   e.preventDefault();
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const date = formData.get('date');
  //   const rooms = room;
  //   const guests = guest;
  //   console.log(date, rooms, guests);
  // }

    return (
      <div
      id="#"
        className="hero h-[700px] text-white mb-5"
        style={{
          background:
            "url(https://c0.wallpaperflare.com/preview/621/1008/840/living-room-apartment-room-interior.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "darken",
        }}
      >
        <div className="hero-overlay bg-gradient-to-r from-zinc-900 to-blue-500 opacity-40"></div>
        <div className="hero-content grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-orange-300 text-lg font-semibold">
            <hr className="w-16 border border-orange-300 mb-3" />
              Enjoy your time in our Hotel with pleasure.
            </p>
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              WELCOME TO THE DIAMANT PREMIUM HOTEL
            </h1>

            <button className="custom-btn">Start Explore</button>
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