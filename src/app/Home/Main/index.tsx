import * as React from 'react';
import { Popover } from '@headlessui/react';
import styles from './style.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-element.min.css';
import 'swiper/swiper-bundle.min.css';
import Image from 'next/image';
import { getFeaturedCarousel } from 'api';
import { MenuBarProps } from '@/app/page';
import { Star } from 'phosphor-react';

type MainProps = {
  menuBar: MenuBarProps;
};

type FeaturedCarousel = {
  page: number;
  results: [];
  total_results: number;
  total_pages: number;
};

export default function Main(props: MainProps) {
  const [featuredCarousel, setFeaturedCarousel] =
    React.useState<FeaturedCarousel>({} as FeaturedCarousel);
  const { menuBar } = props;

  React.useEffect(() => {
    (async function () {
      try {
        const repos: FeaturedCarousel = await getFeaturedCarousel();
        setFeaturedCarousel(repos);
        console.log(featuredCarousel);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <main className={`${menuBar.value} ${styles.main}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
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
              <div>
                <SwiperSlide className={styles.mainContainerCarouselImg}>
                  <div className={styles.mainCarouselImg}>
                    <Image
                      loader={() => `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
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
                          <Star size={26} />
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
                        <Popover.Button className={styles.more}>
                          +
                        </Popover.Button>
                      </Popover>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ) : null;
          })
        )}
      </Swiper>
    </main>
  );
}
