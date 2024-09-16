import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow , Autoplay } from 'swiper/modules'; // Import Swiper and modules
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import Navigation module styles
import 'swiper/css/effect-coverflow'; // Import Coverflow effect styles
import './Slide.css'; // Import your custom styles if any

export const Slide = () => {
    const slides = [
        {
            "id": 1,
            "img": "https://flyerpsd.com/wp-content/uploads/2020/07/Restaurant-Promotion-Flyer-Design-PSD-Preview-1-768x1077.jpg"
        },
        {
            "id": 2,
            "img": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-poster-template-design-08482dee43112316d617b9a42cfe92f6_screen.jpg?ts=1637025714"
        },
        {
            "id": 3,
            "img": "https://img.freepik.com/premium-psd/green-food-restaurant-grand-opening-poster-banner-template_361928-720.jpg?w=2000"
        },
        {
            "id": 4,
            "img": "https://th.bing.com/th/id/OIP.iYtGDaSJg1BZnVF6UPXLtQHaKe?rs=1&pid=ImgDetMain"
        },
        {
            "id": 5,
            "img": "https://th.bing.com/th/id/OIP.OBNsfUvvQoM15jFxjJ8T6QHaLl?rs=1&pid=ImgDetMain"
        },
        {
            "id": 6,
            "img": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a696b9103130059.5f464ec8eb377.png"
        },
        {
            "id": 7,
            "img": "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-offer-banner-design-template-b940c4719ef16ecf6f8ce3d0c90b646e_screen.jpg?ts=1676372324"
        }
    ];

    return (
        <div className="swiper-container">
            <Swiper
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    spaceBetween={25}
                    coverflowEffect={{
                        rotate: 15,
                        stretch: 0,
                        depth: 400,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={false}
                    autoplay={{
                        delay: 2000, // Delay between slides in ms
                        disableOnInteraction: false // Continue autoplay after interactions
                    }}
                    loop={true}
                    speed={700}
                >
                    {slides.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="card mx-auto border border-0" style={{ width: '70rem' }}>
                                <div className='mx-auto'>
                                    <img src={item.img} className="card-img" style={{ width: '500px', height: '300px' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </div>
    );
};

export default Slide;
