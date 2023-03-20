import React, { useState, useEffect } from "react";
import { FeaturedCarousel, FeaturedFilmType } from "..";
import { getMoviesReleased } from "api";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import styles from "../CarouselPopular/styles.module.scss";
import Image from "next/image";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";

type CarouselReleasedProps = {
  setFeaturedFilm: (featuredFilm: FeaturedFilmType) => void,
}

export default function CarouselReleased({ setFeaturedFilm }: CarouselReleasedProps) {
  const [releasedMovies, setReleasedMovies] = useState<FeaturedCarousel>(
    {} as FeaturedCarousel
  );

  useEffect(() => {
    (async function () {
      try {
        const repos = await getMoviesReleased();
        setReleasedMovies(repos);
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <>
      <h2>Movies That Released</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={6}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className={`${styles["section-container"]}`}
      >
        {Object.keys(releasedMovies).length == 0 ? (
          <div className="spinner"></div>
        ) : (
          releasedMovies.results.map((item: any, indexCarousel: number) => (
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

                  <div className={styles['views-favorites']}>
                    <div className={styles['container-views-favorites']}>
                      <div className={styles["container-views"]}>
                        <HiOutlineViewfinderCircle size={18} onClick={() => setFeaturedFilm(item)} />
                      </div>
                    <div className={styles['container-favorites']}>
                      <AiOutlineHeart size={18} />
                    </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))
        )}
      </Swiper>
    </>
  );
}
