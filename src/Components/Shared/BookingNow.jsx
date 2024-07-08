import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import PrimaryDivider from "./PrimaryDivider";
import useUserContext from "../../Hooks/useUserContext";
const BookingNow = ({ children, room }) => {


  const {name} = useUserContext();
  console.log(name);

  const [guest, setGuest] = useState(1);

  const handlePlus = () => {
    if(guest >= 7){
      return;
    }
    setGuest(guest + 1) 
  };

  const handleMinus = () => {
    if (guest <= 1) {
      return;
    }
    setGuest(guest - 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const date = formData.get("date");

    const guests = guest;

    console.log(name, email , date, guests , room);
  };

  return (
    <div className="lg:col-span-2 bg-slate-900 p-5 rounded-md border-4 border-slate-700">
      <form onSubmit={handleSearch}>
        <fieldset className="border p-5 rounded-md">
          <legend className="text-orange-300 text-center flex gap-3 px-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </legend>
          <p className="text-xl font-semibold text-white text-center mb-5 font-serif">
            {children}
          </p>

          <PrimaryDivider></PrimaryDivider>

          <div className="w-full flex flex-col gap-5">

            {/* Name */}

            <div className="relative">
              <label
                htmlFor="room"
                className="block  absolute top-[25px] left-3 font-semibold"
              >
                Name:
              </label>
              <input
                className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2 text-start pl-16"
                type="text"
                name="name"
                id="name"

              />
              
            </div>

            {/* Email */}

            <div className="relative">
              <label
                htmlFor="room"
                className="block  absolute top-[25px] left-3 font-semibold"
              >
                Email:
              </label>
              <input
                className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2 text-start pl-16"
                type="text"
                name="email"
                id="email"

              />
              
            </div>

            {/* Date */}
            <div className="relative">
              <label
                htmlFor="date"
                className="block  absolute top-[25px] left-3"
              >
                Date:
              </label>
              <input
                className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2 text-end"
                type="date"
                name="date"
                id="date"
              />
            </div>
          

            {/* Guest */}

            <div className="relative">
              <label
                htmlFor="guests"
                className="block  absolute top-[25px] left-3"
              >
                Guests:
              </label>
              <input
                className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2"
                type="text"
                name="guests"
                id="guests"
                disabled
              />
              <div className="flex gap-5 absolute top-[25px] right-5">
                <span
                  className="text-orange-300 cursor-pointer"
                  onClick={handleMinus}
                >
                  -
                </span>
                <span className="text-xl font-semibold">{guest}</span>
                <span
                  className="text-orange-300 cursor-pointer"
                  onClick={handlePlus}
                >
                  +
                </span>
              </div>
            </div>

            <input
              type="submit"
              value="Booking Now"
              className="text-black tracking-wider py-3 rounded cursor-pointer bg-orange-300 font-semibold w-full"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

BookingNow.propTypes = {
  children: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired,
};

export default BookingNow;
