import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import PrimaryDivider from "./PrimaryDivider";
import { useNavigate } from "react-router-dom";
const SearchRoom = ({ children }) => {
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);
  const navigate = useNavigate()
  const handlePlus = (item) => {
    if (item === "rooms") {
      if (room > 5) {
        return;
      }
      setRoom(room + 1);
    } else if (item === "guests") {
      if (guest > 7) {
        return;
      }
      setGuest(guest + 1);
    }
  };

  const handleMinus = (item) => {
    if (item === "rooms") {
      if (room < 1) {
        return;
      }
      setRoom(room - 1);
    } else if (item === "guests") {
      const newGuest = guest - 1;
      setGuest(newGuest);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const date = formData.get("date");
    const rooms = room;
    const guests = guest;
    navigate('/rooms')
  };

  return (
    <div className="lg:col-span-2 bg-slate-900 p-2 lg:p-5 rounded-md border-4 border-slate-700">
      <form onSubmit={handleSearch}>
        <fieldset className="border p-2 lg:p-5 rounded-md">
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

            <div className="relative">
              <label
                htmlFor="room"
                className="block  absolute top-[25px] left-3"
              >
                Rooms:
              </label>
              <input
                className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2"
                type="text"
                name="room"
                id="room"
                disabled
              />
              <div className="flex gap-5 absolute top-[25px] right-5">
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
                className="block  absolute top-[25px] left-3"
              >
                Guests:
              </label>
              <input
                className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2"
                type="text"
                name="guests"
                id="guests"
              />
              <div className="flex gap-5 absolute top-[25px] right-5">
                <span
                  className="text-orange-300 cursor-pointer"
                  onClick={() => handleMinus("guests")}
                >
                  -
                </span>
                <span className="text-xl font-semibold">{guest}</span>
                <span
                  className="text-orange-300 cursor-pointer"
                  onClick={() => handlePlus("guests")}
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
      </form>
    </div>
  );
};

SearchRoom.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SearchRoom;