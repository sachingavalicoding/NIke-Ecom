// import Swiper core and required modules
import img1 from '../../img/slide/1.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='w-full h-full '
        >
            <SwiperSlide><img src={img1} alt='not found' /> </SwiperSlide>
            <SwiperSlide><img src={img1} alt='not found' /> </SwiperSlide>
            <SwiperSlide><img src={img1} alt='not found' /> </SwiperSlide>
            <SwiperSlide><img src={img1} alt='not found' /> </SwiperSlide>


            ...
        </Swiper>
    );
};

export default Slider;