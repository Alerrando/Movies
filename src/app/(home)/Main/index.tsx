import * as React from 'react';
import styles from './style.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-element.min.css';
import 'swiper/swiper-bundle.min.css';
import CarouselReleased from './CarouselReleased';
import CarouselTrending from './CarouselTrending';
import { MenuBarProps } from '../page';
import CarouselMain from './CarouselMain';
import CarouselPopular from './CarouselPopular';
import FeaturedFilm from './FeaturedFilm';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

type MainProps = {
  menuBar: MenuBarProps;
};

export type FeaturedCarousel = {
  page: number;
  results: [];
  total_results: number;
  total_pages: number;
};

export type FeaturedFilmType = {
  adult: boolean,
  backdrop_path: string | null,
  duration: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export default function Main(props: MainProps) {
  const { MenuBarAside } = useSelector((root: RootState) => root.Slice)
  const [featuredFilm, setFeaturedFilm] = React.useState<FeaturedFilmType>({} as FeaturedFilmType);
  const { menuBar } = props;

  return (
    <main className={`${menuBar.value} ${styles.main} ${styles[MenuBarAside.value]}`}>
      <CarouselMain />
      <CarouselPopular setFeaturedFilm={setFeaturedFilm} />
      <CarouselReleased setFeaturedFilm={setFeaturedFilm} />
      <CarouselTrending setFeaturedFilm={setFeaturedFilm} />
      {Object.keys(featuredFilm).length > 0 ? <FeaturedFilm featuredFilm={featuredFilm} /> : null}
    </main>
  );
}
