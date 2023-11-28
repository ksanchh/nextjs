'use client'
import { aboutTestimonialList } from '@/data/Data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

const AboutTestimonialSlider = () => {
  return (
    <section className="tl-testimonial tl-2-testimonial pt-120 pb-120">
        <div className="container">
            <div className="tl-2-section-heading">
                <h2 className="tl-2-section-title">What Parents Say About Us</h2>
            </div>

            <Swiper 
            className="tl-testimonial-slider owl-carousel about-testimonial"
            slidesPerView={1.9}
            spaceBetween={60}
            loop={true}
            centeredSlides={true}
            autoplay={{delay:2000}}
            navigation={{
                nextEl: '.tl-testimonial-next',
                prevEl: '.tl-testimonial-prev',
            }}
            modules={[Autoplay,Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
    
                480: {
                    slidesPerView: 1.3,
                    spaceBetween: 10,
                },
    
                576: {
                    slidesPerView: 1.4,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 1.8,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 1.9,
                    spaceBetween: 40,
                },
                1400: {
                    spaceBetween: 60,
                    slidesPerView: 1.9
                }
            }}
            >
                {aboutTestimonialList.map((item) => (
                 <SwiperSlide className="tl-single-testimony tl-2-testimony" key={item.id}>
                    <p className="tl-2-testimony-txt">
                        {item.desc}
                    </p>

                    <div className="tl-2-testimony-reviewer">
                        <img src={item.imgSrc} alt="Person" className="tl-2-testimony-reviewer-img"/>
                        <div className="tl-2-testimony-reviewer-info">
                            <h6 className="tl-2-testimony-reviewer-name">{item.name}</h6>
                            <p className="tl-2-testimony-reviewer-label">{item.label}</p>
                        </div>
                    </div>
                </SwiperSlide>   
                ))}
                

            </Swiper>

            <div className="tl-testimonial-slider-nav">
                <button className="tl-testimonial-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button className="tl-testimonial-next">
                    <i className="fa-regular fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </section>
  )
}

export default AboutTestimonialSlider