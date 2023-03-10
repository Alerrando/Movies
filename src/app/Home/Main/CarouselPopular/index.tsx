import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FeaturedCarousel } from '../../../Home/Main';
import styles from './styles.module.scss';
import { getPopularCarousel } from 'api';

export default function CarouselPopular() {
  const [popularCarousel, setPopularCarousel] = useState<FeaturedCarousel>(
    {} as FeaturedCarousel
  );

  useEffect(() => {
    (async function () {
      try {
        const repos = await getPopularCarousel();
        setPopularCarousel(repos);
        console.log(repos)
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <> 
        <h2>Movies</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={25}
          slidesPerView={6}
          loop={true}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={`${styles['section-container']}`}
        >
        {Object.keys(popularCarousel).length == 0 ? (
            <div className="spinner"></div>
        ) : (
            popularCarousel.results.map((item: any, index: number) => {
            return index < 18 ? (
                <div key={`film-id-${item.id}`}>
                    <SwiperSlide className={styles.containerPopularMovieInfo}>
                      <div className={styles.popularMovieImg}>
                        <Image
                            loader={() =>
                            `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                            }
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                            alt={`film-popular-${item.title}`}
                            height={50}
                            width={50}
                            quality={100}
                        />
                      </div>

                      <div className={styles.popularMovieInfo}>
                          <h4>{item.title}</h4>
                      </div>
                    </SwiperSlide>
                </div>
            ) : null;
            })
        )}
        </Swiper>
    </>
  );
}
