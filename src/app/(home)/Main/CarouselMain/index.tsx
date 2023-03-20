import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { HiViewfinderCircle } from "react-icons/hi2";
import styles from "./styles.module.scss";
import { getRatedCarousel } from "api";
import { Fragment, useEffect, useState } from "react";
import { FeaturedCarousel } from "..";
import 'css/animation.scss'

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
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={`${styles.mainContainer}`}
    >
      {Object.keys(featuredCarousel).length == 0 ? (
        <div className="spinner"></div>
      ) : (
        featuredCarousel.results.map((item: any, index: number) => {
          return index < 4 ? (
            <div key={`film-rating-id-${item.id}`}>
              <SwiperSlide
                className={styles.mainContainerCarouselImg}
                key={`swiper-slide-rating-movie-${item.id}`}
              >
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
                      <Popover.Button className={styles.more}>
                        <span>+</span>
                      </Popover.Button>

                      <Transition
                        enter={`enter ${styles["enter"]}`}
                        enterFrom={`enter-from ${styles["enter-from"]}`}
                        enterTo={`enter-to ${styles["enter-to"]}`}
                        leave={`leave ${styles["leave"]}`}
                        leaveFrom={`leave-from ${styles["leave-from"]}`}
                        leaveTo={`leave-to ${styles["leave-to"]}`}
                      >
                        <Popover.Panel className={styles["popover-painel"]}>
                          <div className={styles["popover-painel-container"]}>
                            <div className={styles["popover-item"]}>
                              <AiOutlineHeart size={26} />
                              <span>Favorites</span>
                            </div>
                            <div className={styles["popover-item"]}>
                              <HiViewfinderCircle size={26} />
                              <span>Views</span>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
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
