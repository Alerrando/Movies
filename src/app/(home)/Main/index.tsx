import { MenuBarProps } from "@/app/page";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import { Star } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-element.min.css";
import "swiper/swiper-bundle.min.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "./style.scss";

type MainProps = {
  menuBar: MenuBarProps;
};

type FeaturedCarousel = {
  page: number;
  results: [];
  total_results: number;
  total_pages: number;
};

export function Main(props: MainProps) {
  const [featuredCarousel, setFeaturedCarousel] = useState<FeaturedCarousel>(
    {} as FeaturedCarousel
  );
  const { menuBar } = props;

  useEffect(() => {
    getFeaturedCarousel();
  });

  return (
    <main className={`${menuBar.value}`}>
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="main-container"
      >
        {Object.keys(featuredCarousel).length == 0 ? (
          <div className="spinner"></div>
        ) : (
          featuredCarousel.results.map((item: any, index: number) => {
            return index < 4 ? (
              <>
                <SwiperSlide className="main-container-carousel-img">
                  <div className="main-carousel-img">
                    <Image
                      loader={() =>
                        `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                      }
                      src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      alt=""
                      fill
                    />
                  </div>

                  <div className="main-info-movie">
                    <div className="infos">
                      <h2>{item.original_title}</h2>

                      <div className="rating-country">
                        <div className="rating">
                          <Star size={24} />
                          {item.vote_average}
                        </div>

                        <div className="point"></div>

                        <div className="country">
                          <span className="country-img">US</span>
                          <span>English</span>
                        </div>
                      </div>
                    </div>

                    <div className="movie-more">
                      <button className="btn">View More</button>

                      <Popover className="more-container">
                        <Popover.Button className="more">+</Popover.Button>
                      </Popover>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ) : null;
          })
        )}
      </Swiper>
    </main>
  );

  async function getFeaturedCarousel() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=431be5a1a4d902714410abe0289adf9b&language=en-US&page=1",
      {
        cache: "no-store",
        next: {
          revalidate: 30,
        },
      }
    );

    const repos = await response.json();

    setFeaturedCarousel(repos);
  }
}
