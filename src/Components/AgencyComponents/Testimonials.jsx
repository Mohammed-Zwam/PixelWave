import React, { useRef, useState, useEffect } from 'react';
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const [numberOfSlides, setNumberOfSlides] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) setNumberOfSlides(1);
            else if (window.innerWidth > 700 && window.innerWidth <= 1200) setNumberOfSlides(2);
            else setNumberOfSlides(3);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const goToNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // Previous button handler
    const goToPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className='testimonials-slider'>
            <button onClick={goToPrev} className="swiper-button-prev hover-element"></button>
            <Swiper
                modules={[Virtual, Navigation, Pagination, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                slidesPerView={numberOfSlides}
                centeredSlides={true}
                spaceBetween={20}
                virtual
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                ref={swiperRef}
            >
                {Array.from({ length: 20 }).map((_, index) => `Slide ${index + 1}`).map((slideContent, index) => (
                    <SwiperSlide
                        key={slideContent}
                        virtualIndex={index}
                        className={activeIndex === index ? 'active-slide' : ''}
                    >
                        <div className='person-icon'>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className='testimonial-content'>
                            <div className='quote-icon-container'>
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem velit cupiditate repellat in cum animi magnam exercitationem eius iusto pariatur! Ut reiciendis tempore officiis illo natus deserunt, veniam optio recusandae.
                            </p>
                            <div className='quote-icon-container'>
                                <FontAwesomeIcon icon={faQuoteRight} />
                            </div>
                        </div>
                        <h2 className='client-name'>Name Here</h2>

                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={goToNext} className="swiper-button-next hover-element"></button>
        </div>
    );
}
