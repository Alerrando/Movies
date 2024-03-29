import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FeaturedCarousel, FeaturedFilmType } from "..";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

type CarouselPopularProps = {
  setFeaturedFilm: (featuredFilm: FeaturedFilmType) => void,
  infosCarousel: FeaturedCarousel,
  title: string,
}

export default function CarouselPreview({ setFeaturedFilm, infosCarousel, title }: CarouselPopularProps) {
  
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={6}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        className={`${styles["section-container"]}`}
      >
        {Object.keys(infosCarousel).length == 0 ? (
          <div className="spinner"></div>
        ) : (
          infosCarousel.results.map((item: any, indexCarousel: number) => (
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
                    <div className={styles['container-rating']}>
                      <AiOutlineStar size={18} />
                      <span>{item.vote_average}</span>
                    </div>
                  </div>

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
