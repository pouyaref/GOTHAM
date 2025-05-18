// src/components/SliderStats.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderStats = () => {
  const slides = [
    {
      title: 'راهکارهای حرفه ای',
      description: 'حل مشکلات شما با آخرین تکنولوژی‌ها',
      image: 'https://source.unsplash.com/random/800x600/?tech'
    },
    {
      title: 'تیم متخصص',
      description: 'متخصصان با تجربه در خدمت شما',
      image: 'https://source.unsplash.com/random/800x600/?office'
    }
  ];

  return (
    <div className="my-8">
      <Swiper
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-64 md:h-96 rounded-lg"
        dir="rtl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-gray-100 flex items-center justify-center">
            <div className="text-center p-4">
              <h2 className="text-2xl font-bold text-gray-800">{slide.title}</h2>
              <p className="mt-2 text-gray-600">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderStats;