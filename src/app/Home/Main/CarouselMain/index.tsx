import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Popover } from '@headlessui/react';
import Image from 'next/image';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './styles.module.scss';
import { getRatedCarousel } from 'api';
import { useEffect, useState } from 'react';
import { FeaturedCarousel } from '..';

export default function CarouselMain() {
  const [featuredCarousel, setFeaturedCarousel] = useState<FeaturedCarousel>(
    {} as FeaturedCarousel
  );

  useEffect(() => {
    (async function () {
      try {
        const repos: FeaturedCarousel = await getRatedCarousel();
        setFeaturedCarousel(repos);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={2}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={`${styles.mainContainer}`}
    >
      {Object.keys(featuredCarousel).length == 0 ? (
        <div className="spinner"></div>
      ) : (
        featuredCarousel.results.map((item: any, index: number) => {
          return index < 4 ? (
            <div key={`film-rating-id-${item.id}`}>
              <SwiperSlide className={styles.mainContainerCarouselImg} key={`swiper-slide-rating-movie-${item.id}`}>
                <div className={styles.mainCarouselImg}>
                  <Image
                    loader={() =>
                      `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                    }
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                    alt=""
                    fill
                    quality={100}
                  />
                </div>

                <div className={styles.mainInfoMovie}>
                  <div className={styles.infos}>
                    <h2>{item.original_title}</h2>

                    <div className={styles.ratingCountry}>
                      <div className={styles.rating}>
                        <AiOutlineStar size={26} />
                        <span>{item.vote_average}</span>
                      </div>

                      <div className={styles.point}></div>

                      <div className={styles.country}>
                        <span className={styles.countryImg}>US</span>
                        <span>English</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.movieMore}>
                    <button className={styles.btn}>View More</button>

                    <Popover className={styles.moreContainer}>
                      <Popover.Button className={styles.more}>+</Popover.Button>
                    </Popover>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ) : null;
        })
      )}
    </Swiper>
  );
}
