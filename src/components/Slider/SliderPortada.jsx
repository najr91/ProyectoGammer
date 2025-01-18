import '../../style/SliderPortada.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SliderPortada = () => {
    return (
        <div className='SliderPortada'>
            <div className='ContanerSlider my-5 container'>
            <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://assetsio.gnwcdn.com/final-fantasy-14-online-dawntrail.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SliderPortada;