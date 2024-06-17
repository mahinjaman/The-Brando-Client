// import { useState } from "react";
// import { FaStar } from "react-icons/fa";

import BookingNow from "../../../Components/Shared/BookingNow";

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
        className="hero min-h-screen text-white"
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
            {/* <form onSubmit={handleSearch}>
              <fieldset className="border p-5 rounded-md">
                <legend className="text-orange-300 text-center flex gap-3 px-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </legend>
                <p className="text-xl font-semibold text-white text-center mb-5">
                  Search Room
                </p>
                <div className="w-full flex flex-col gap-5">
                  <div className="relative">
                    <label
                      htmlFor="date"
                      className="block  absolute top-5 left-3"
                    >
                      Date:
                    </label>
                    <input
                      className="w-full py-2.5 px-5 rounded bg-slate-800  border border-slate-700 mt-2 text-end"
                      type="date"
                      name="date"
                      id="date"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="room"
                      className="block  absolute top-5 left-3"
                    >
                      Rooms:
                    </label>
                    <input
                      className="w-full py-2.5 px-5 rounded bg-slate-800  border border-slate-700 mt-2"
                      type="text"
                      name="room"
                      id="room"
                      disabled
                    />
                    <div className="flex gap-5 absolute top-5 right-5">
                      <span
                        className="text-orange-300 cursor-pointer"
                        onClick={() => handleMinus("rooms")}
                      >
                        -
                      </span>
                      <span className="text-xl font-semibold">{room}</span>
                      <span
                        className="text-orange-300 cursor-pointer"
                        onClick={() => handlePlus("rooms")}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="guests"
                      className="block  absolute top-5 left-3"
                    >
                      Guests:
                    </label>
                    <input
                      className="w-full py-2.5 px-5 rounded bg-slate-800  border border-slate-700 mt-2"
                      type="text"
                      name="guests"
                      id="guests"
                    />
                    <div className="flex gap-5 absolute top-5 right-5">
                      <span
                        className="text-orange-300 cursor-pointer"
                        onClick={()=>handleMinus("guests")}
                      >
                        -
                      </span>
                      <span className="text-xl font-semibold">{guest}</span>
                      <span
                        className="text-orange-300 cursor-pointer"
                        onClick={()=>handlePlus("guests")}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="Search Room"
                    className="text-black tracking-wider py-3 rounded cursor-pointer bg-orange-300 font-semibold w-full"
                  />
                </div>
              </fieldset>
            </form> */}
            <BookingNow>
              Search Room
            </BookingNow>
          </div>
        </div>
      </div>
    );
};

export default Hero;