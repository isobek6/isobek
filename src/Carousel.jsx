import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1666788167999-c8a60357d8ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "carousel title 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio itaque architecto praesentium maiores sunt natus provident rerum laboriosam ullam! Nobis?",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1713528192259-c3514aa54224?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "carousel title 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio itaque architecto praesentium maiores sunt natus provident rerum laboriosam ullam! Nobis?",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1708261432863-41fdab7b5de9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "carousel title 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio itaque architecto praesentium maiores sunt natus provident rerum laboriosam ullam! Nobis?",
    },
  ];

  return (
    <Swiper
      navigation
      // autoplay={{
      //   delay: 3000,
      // }}
      loop={{ Infinity }}
      pagination={{ type: "progressbar" }}
      modules={[Navigation, Pagination, Autoplay]}
      style={{ marginTop: "100px" }}
    >
      {carouselData.map((carousel) => {
        return (
          <SwiperSlide key={carousel.id}>
            <div className="slide">
              <img
                src={carousel.img}
                alt={carousel.title}
                className="carousel-img"
              />
              <div className="carousel-inner">
                <h1>{carousel.title}</h1>
                <p>{carousel.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
