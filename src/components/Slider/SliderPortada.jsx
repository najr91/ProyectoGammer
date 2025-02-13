import '../../style/SliderPortada.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const SliderPortada = ({productos = []}) => {
    return (
        <div className='SliderPortada'>
            <div className='ContainerSlider my-5 container'>
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
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow,Pagination,Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2, 
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                      productos.slice(0, 4).map((item) => (
                        <SwiperSlide key={item.id}> 
                          <img src={item?.imagen} alt={item?.nombreJuego} />
                          <div>{item?.nombreJuego}</div>
                        </SwiperSlide>
                      ))
                    }
                    
                  
                </Swiper>
            </div>
        </div>
    );
};

export default SliderPortada;