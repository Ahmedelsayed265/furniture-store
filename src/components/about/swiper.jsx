import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "./swiper.css";
import test1 from "./../assest/test1.jpg";
import test2 from "./../assest/test2.jpg";
import test3 from "./../assest/test3.jpg";
const SWIP = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="client">
          <div className="client_img">
            <img src={test1} alt="client1" />
          </div>
          <h6>Bradley Kim / Customer</h6>
          <div className="review">
            <p>
              ″This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur″
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client">
          <div className="client_img">
            <img src={test2} alt="client2" />
          </div>
          <h6>Jessica Brown / Customer</h6>
          <div className="review">
            <p>
              ″This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur″
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="client">
          <div className="client_img">
            <img src={test3} alt="client3" />
          </div>
          <h6>Caleb Hoffman / Customer</h6>
          <div className="review">
            <p>
              ″This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch. Duis aute lorem ipsum is simply free text irure dolor in
              reprehenderit in esse nulla pariatur″
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SWIP;
