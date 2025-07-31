import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './NewArrivalsSlider.css';
import s24Image  from '../assets/s24.jpg'


const newArrivalsData = [
  {
    id: 1,
    subtitle: 'New Flagship',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Experience the latest innovation from Samsung with its powerful performance and stunning camera.',
    image: `${s24Image}`,
  },
  {
    id: 2,
    subtitle: 'Latest from Apple',
    title: 'iPhone 15 Pro Max',
    description: 'The most advanced iPhone ever, with a titanium design and groundbreaking camera capabilities.',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-3.jpg',
  },
  {
    id: 3,
    subtitle: 'Cutting-Edge Technology',
    title: 'Xiaomi 14 Pro',
    description: 'Discover the sleek design and powerful features of Xiaomi\'s newest flagship device.',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-14-pro-1.jpg',
  },
];

const NewArrivalsSlider = () => {
  return (
    <div className="new-arrivals-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        {newArrivalsData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="slide-text">
                <p className="slide-subtitle">{slide.subtitle}</p>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
                <button className="slide-button">Explore Now</button>
              </div>
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivalsSlider;