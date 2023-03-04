import { MenuBarProps } from '@/app/page';
import Image from 'next/image';
import React, { Key, useEffect, useState } from 'react';
import './style.scss';

type MainProps = {
  menuBar: MenuBarProps;
};

type FeaturedCarousel = {
  page: number,
  results: [],
  total_results: number,
  total_pages: number
}

export function Main(props: MainProps) {
  const [featuredCarousel, setFeaturedCarousel] = useState<FeaturedCarousel>({} as FeaturedCarousel);
  const { menuBar } = props;

  useEffect(() => {
    getFeaturedCarousel();
  })

  return (
    <main className={`${menuBar.value}`}>
      <div className="main-container">
        {Object.keys(featuredCarousel).length == 0 ? (
          <div className="spinner"></div>
        ): (
          featuredCarousel.results.map((item: any, index: number) => {
            return (
              index < 4 ? (
                <> 
                <div className="main-container-img">
                  <div className="main-img">
                    <Image
                      loader={() => `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                      alt=""
                      fill
                    />
                  </div>
                </div>
              </>
              ) : null
            )
          })
        )}
      </div>
    </main>
  );

  async function getFeaturedCarousel(){
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=431be5a1a4d902714410abe0289adf9b&language=en-US&page=1', {
      cache: 'no-store',
      next: {
        revalidate: 30,
      },
    })

    const repos = await response.json()

    setFeaturedCarousel(repos);
  }
}
