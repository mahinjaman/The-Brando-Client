// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination , Autoplay} from 'swiper/modules';
import PopularRoomCard from "./PopularRoomCard";


const RoomSlider = ({rooms}) => {

   return (
     <>
       <Swiper
         effect={"coverflow"}
         grabCursor={true}
         centeredSlides={true}
         slidesPerView={"auto"}
         autoplay={{
           delay: 3000,
           disableOnInteraction: false,
         }}
         coverflowEffect={{
           rotate: 40,
           stretch: 1,
           depth: 100,
           modifier: 5,
           slideShadows: true,
         }}
         pagination={true}
         modules={[EffectCoverflow, Pagination, Autoplay]}
         className="mySwipe"
       >
         {rooms.map((room) => {
           return (
             <SwiperSlide key={room._id}>
               <PopularRoomCard item={room}></PopularRoomCard>
             </SwiperSlide>
           );
         })}
       </Swiper>
     </>
   );
};

export default RoomSlider;