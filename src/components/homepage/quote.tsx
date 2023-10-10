import { cn } from '@/lib/utils';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export function Quote() {
  return (
    <div className={cn('relative max-md:pt-12  gradient')}>
      <div className='container flex gap-6 min-h-[340px] max-md:pb-12 items-center justify-between flex-wrap'>
        <Swiper
          centeredSlides
          loop
          spaceBetween={20}
          grabCursor
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay
          breakpoints={{
            800: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {Array.from(Array(5)).map((el) => (
            <SwiperSlide key={el}>
              <div className='max-w-[320px] mx-auto text-center text-white font-medium  leading-tight'>
                “AggieWorks is great! [Insert a sentence about interviewee’s
                great experience with AggieWorks. Or several sentences. There
                are a lot of great things about AggieWorks.]”
                <>
                  <br />
                  <br />
                </>
                Interesting Coolperson
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img src={'/src/assets/wave.svg'} alt={'wave'} className={'w-full'} />
    </div>
  );
}
