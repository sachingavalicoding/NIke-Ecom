import img1 from '../../img/slide/1.png'
import img2 from '../../img/slide/2.png'
import img3 from '../../img/slide/3.png'
import img4 from '../../img/slide/4.png'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
const HeroPage = () => {
    return (
        <main className="w-screen  h-[95vh] flex flex-col-reverse gap-2 px-5 py-2 items-center justify-center bg-red-500 md:grid grid-flow-col place-items-start">
            <div className='flex gap-5 flex-col items-start justify-start  '>
                <h2 className='text-3xl font-bold text-slate-50 '> Find Your Flow </h2>
                <p className='text-slate-100'>Join us on the mat for a live workout or session on the Nike Training Club App</p>
                <button className="btn-pri transition-all"> Shop Now </button>
            </div>


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}

                scrollbar={false}

                className='w-full '
            >
                <SwiperSlide><img src={img1} alt='not found' /> </SwiperSlide>
                <SwiperSlide><img src={img2} alt='not found' /> </SwiperSlide>
                <SwiperSlide><img src={img3} alt='not found' /> </SwiperSlide>
                <SwiperSlide><img src={img4} alt='not found' /> </SwiperSlide>

                ...
            </Swiper>


        </main>
    )
}

export default HeroPage