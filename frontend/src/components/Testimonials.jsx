import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialData = [
  {
    id: 1,
    name: "Vikrant Khatik",
    role: "CEO, Vonsafepay",
    text: "I've been a customer of this Company for years, and I can't say enough good things about them. Their products are top-notch, their customer service is outstanding, and their attention to detail is unmatched. I'm a loyal customer for life!",
    image: "/assets/icons/happy-client.jpg"
  },
  {
    id: 2,
    name: "Raghavendra Sharma",
    role: "CEO, Abhirant Info. Pvt. Ltd.",
    text: "I've been a customer of this Company for years, and I can't say enough good things about them. Their products are top-notch, their customer service is outstanding, and their attention to detail is unmatched. I'm a loyal customer for life!",
    image: "/assets/icons/happy-client.jpg"
  },
  {
    id: 3,
    name: "Kamlesh Choudhary",
    role: "CEO, Gyanhost",
    text: "I've been a customer of this Company for years, and I can't say enough good things about them. Their products are top-notch, their customer service is outstanding, and their attention to detail is unmatched. I'm a loyal customer for life!",
    image: "/assets/icons/happy-client.jpg"
  },
  {
    id: 4,
    name: "Lalit Yadav",
    role: "CEO, Shantipe",
    text: "I've been a customer of this Company for years, and I can't say enough good things about them. Their products are top-notch, their customer service is outstanding, and their attention to detail is unmatched. I'm a loyal customer for life!",
    image: "/assets/icons/happy-client.jpg"
  },
  {
    id: 5,
    name: "Hemant Jangid",
    role: "CEO, Finpayz",
    text: "I've been a customer of this Company for years, and I can't say enough good things about them. Their products are top-notch, their customer service is outstanding, and their attention to detail is unmatched. I'm a loyal customer for life!",
    image: "/assets/icons/happy-client.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonial-slider py-5 mt-5 bg-dark">
      <div className="container" data-aos="fade-up">
        <div className="title-head text-center mb-5">
          <span>Our Testimonial</span>
          <h3 className="text-white">Hear from Our Happy Customers</h3>
        </div>
      </div>
      <div className="container pb-5">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            }
          }}
          className="mySwiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item px-2 py-4">
                <div className="color_span"></div>
                <div className="single-testimonial-1 h-100 d-flex flex-column justify-content-between">
                  <div className="text p-4">
                    <span><i className="fa-solid fa-quote-left fs-3 text-secondary mb-3"></i></span>
                    <p className="lh-lg" style={{ fontSize: '15px', color: '#ccc' }}>"{item.text}"</p>
                  </div>
                  <div className="bottom-bx d-flex justify-content-end align-items-center flex-wrap p-4 bg-transparent border-0">
                    <div className="client_name text-end me-3">
                      <h5 className="text-white mb-0">{item.name}</h5>
                      <p className="text-secondary mb-0" style={{ fontSize: '13px' }}>{item.role}</p>
                    </div>
                    <div className="client_img overflow-hidden rounded-circle" style={{ width: '60px', height: '60px' }}>
                      <img src={item.image} title="Client" alt="Happy Customers" className="w-100 h-100 object-fit-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
