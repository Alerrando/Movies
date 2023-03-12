import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FeaturedCarousel } from '../../../Home/Main';
import styles from './styles.module.scss';
import { getPopularCarousel } from 'api';
import { AiOutlineStar } from 'react-icons/ai';

export default function CarouselPopular() {
  const [popularCarousel, setPopularCarousel] = useState<FeaturedCarousel>(
    {} as FeaturedCarousel
  );

  useEffect(() => {
    (async function () {
      try {
        const repos = await getPopularCarousel();
        setPopularCarousel(repos);
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <>
      <h2>Movies Popular</h2>
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
          popularCarousel.results.map((item: any, indexCarousel: number) => {
            return indexCarousel < 18 ? (
              <div key={`film-id-${item.id}`}>
                <SwiperSlide
                  className={styles.containerPopularMovieInfo}
                  key={`swiper-slide-movie-popular-${item.id}`}
                >
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

                    <div className={styles.rating}>
                      <div className={styles.containerRating}>
                        <AiOutlineStar size={18} />
                        <span>{item.vote_average}</span>
                      </div>
                    </div>

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
