import * as React from 'react';
import styles from './style.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-element.min.css';
import 'swiper/swiper-bundle.min.css';
import CarouselMain from '../../home/Main/CarouselMain';
import CarouselPopular from '../../home/Main/CarouselPopular';
import CarouselReleased from './CarouselReleased';
import CarouselTrending from './CarouselTrending';
import { MenuBarProps } from '../page';

type MainProps = {
  menuBar: MenuBarProps;
};

export type FeaturedCarousel = {
  page: number;
  results: [];
  total_results: number;
  total_pages: number;
};

export default function Main(props: MainProps) {
  const { menuBar } = props;

  return (
    <main className={`${menuBar.value} ${styles.main}`}>
      <CarouselMain />
      <CarouselPopular />
      <CarouselReleased />
      <CarouselTrending />
    </main>
  );
}
