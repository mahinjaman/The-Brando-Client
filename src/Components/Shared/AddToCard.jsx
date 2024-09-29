import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import PrimaryDivider from "./PrimaryDivider";
import useUserContext from "../../Hooks/useUserContext";
import Swal from "sweetalert2";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import useIsAdmin from "../../Hooks/useIsAdmin";
const AddToCart = ({ children, room }) => {

  const [guest, setGuest] = useState(1);
  const secureAxios = useSecureAxios();
  const { user } = useUserContext();
  const [bookDate, setBookDate] = useState(new Date());
  const navigate = useNavigate()
  const currentDate = moment().format('YYYY-MM-DD');

  const [ isAdmin ] = useIsAdmin();

  const ConvertDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handlePlus = () => {
    if (guest >= 7) {
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

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const guests = guest;


    const bookedDate = ConvertDate(bookDate);
    const differentDate = new Date(bookedDate) - new Date(currentDate);
    const differentDay = differentDate / (1000 * 60 * 60 * 24);

    const { thumb, price, status } = room;
    if (status != 'Available') {
      Swal.fire({
        title: 'Room is not available!',
        text: 'Please choose another date or room.',
        icon: 'warning',
        confirmButtonText: 'Okay'
      });
      return;
    }

    if(differentDay > 3){
      Swal.fire({
        title: 'Booking Failed!',
        text: 'Booking date should be within 3 days from today.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      return;
    }

    if(isAdmin){
      Swal.fire({
        title: `Sorry ${user.displayName} !`,
        text: 'Only user can book rooms.',
        icon: 'error',
        confirmButtonText: 'Okay'
      });
      return;
    }

    const data = {
      room_id: room?._id,
      room_name: room?.title,
      name,
      email: user.email,
      bookDate,
      currentDate,
      guests,
      thumb,
      price,
      orderStatus: 'pending'
    }

    secureAxios.post('/booking', data)
      .then((res) => {
        const result = res.data;
        if (result?.insertedId) {
          secureAxios.patch(`/room_status/${room?._id}?status=Booking`)
            .then(res => {
              if (res.data.modifiedCount > 0) {
                Swal.fire({
                  title: 'Booking Successful!',
                  text: 'Your booking has been submitted successfully.',
                  icon: 'success',
                  confirmButtonText: 'Okay'
                });
                form.reset();
                navigate('/rooms')
              }

            })


        }

      })
      .catch(err => {
        console.log(err.message);
        Swal.fire({
          title: 'Error',
          text: 'Failed to book the room. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      });

  };

  return (
    <div className="mt-5 md:mt-0 lg:col-span-2 bg-slate-900 p-5 rounded-md border-4 border-slate-700">
      <form onSubmit={handleBooking}>
        <fieldset className="border p-2 md:p-5 rounded-md">
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
                defaultValue={user?.displayName}

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
                defaultValue={user?.email}
                disabled
              />

            </div>

            {/* Date */}
            <div className="relative w-full">
              <label
                htmlFor="date"
                className="block  absolute top-[25px] left-3 z-20 "
              >
                Date:
              </label>

              <div className="w-full py-4 px-5 rounded bg-slate-800  border border-slate-700 mt-2 text-end">
                <DatePicker isClearable placeholderText="I have been cleared!" selected={bookDate} onChange={(date) => setBookDate(date)} dateFormat='yyyy/MM/dd' className=" z-10 bg-transparent md:w-[410px] outline-none" />
              </div>
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
              value="Add To Cart"
              className="text-black tracking-wider py-3 rounded cursor-pointer bg-orange-300 font-semibold w-full"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

AddToCart.propTypes = {
  children: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired,
};

export default AddToCart;
