import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight, FiSmartphone, FiShield, FiHeadphones } from 'react-icons/fi';

const SliderStats = () => {
  const slides = [
    {
  
      image: '/pikcher/slide1.jpg',
      mobileContent: {
        icon: <FiSmartphone className="text-2xl" />,
        text: 'بهینه‌شده برای موبایل'
      }
    },
    {
    
      image:'/pikcher/slid2.jpg',
      mobileContent: {
        icon: <FiShield className="text-2xl" />,
        text: 'تضمین کیفیت'
      }
    },

  ];

  return (
    <div className="my-8">
      {/* Main Slider */}
      <div className="relative">
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-64 md:h-96 rounded-lg"
          dir="rtl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img 
                  src={slide.image} 
                  alt={slide.title || 'Slide image'} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 text-white">
                  {slide.title && <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>}
                  {slide.description && <p className="text-lg md:text-xl max-w-2xl">{slide.description}</p>}
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev hidden md:flex">
            <FiChevronRight className="text-white text-3xl" />
          </div>
          <div className="swiper-button-next hidden md:flex">
            <FiChevronLeft className="text-white text-3xl" />
          </div>
        </Swiper>
      </div>

      {/* Mobile Features - Only shows on small screens */}
      <div className="md:hidden bg-gradient-to-r from-primary to-secondary mt-4">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-3 gap-4 text-white text-center">
            {slides.map((slide, index) => (
              <div key={index} className="flex flex-col items-center p-2">
                <div className="bg-white/20 p-2 rounded-full mb-2">
                  {slide.mobileContent.icon}
                </div>
                <span className="text-sm font-medium">{slide.mobileContent.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section - Shows on all screens */}
      <div className="bg-base-200 mt-6 rounded-box">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: '200+', label: 'مشتریان راضی' },
              { value: '98%', label: 'رضایت مشتری' },
              { value: '24/7', label: 'پشتیبانی' },
              { value: '5+', label: 'سال تجربه' }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm md:text-base text-base-content/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderStats;