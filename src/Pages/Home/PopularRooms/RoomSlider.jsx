import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularRoomCard from "./PopularRoomCard";

const RoomSlider = ({rooms}) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container w-5/6 m-auto">
      <Slider {...settings}>
        {
          rooms?.map(room => {
            return <div className="p-2"><PopularRoomCard item={room}></PopularRoomCard></div>
          })
        }
      </Slider>
    </div>
  );
}


export default RoomSlider;