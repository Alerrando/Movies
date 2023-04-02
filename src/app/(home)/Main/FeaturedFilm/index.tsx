import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { FeaturedFilmType } from "..";
import styles from "./styles.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { getGenre } from "api";

type FeaturedFilmProps = {
  featuredFilm: FeaturedFilmType;
};

type GenreMovies = {
  genres: []
}

type Genre = {
  id: number,
  name: string,
}

export default function FeaturedFilm({ featuredFilm }: FeaturedFilmProps) {
  const [genresTotal, setGenresTotal] = useState<GenreMovies>({} as GenreMovies);
  console.log(featuredFilm);

  useEffect(() => {
    (async function () {
      try {
        const genre = await getGenre();
        setGenresTotal(genre)
      } catch (e) {
        console.error(e);
      }
    })();
  });

  return (
    <section className={styles.featuredFilm}>
      <Image
        loader={() =>
          `https://image.tmdb.org/t/p/w500${featuredFilm.backdrop_path}`
        }
        src={`https://image.tmdb.org/t/p/w500${featuredFilm.backdrop_path}`}
        alt=""
        fill
        quality={100}
      />

      <Tab.Group>
        <Tab.List className={styles.TabList}>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${styles["tabble"]} ${
                  styles[selected ? "open" : "close"]
                }`}
              >
                GENERAL INFORMATION
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`${styles["tabble"]} ${
                  styles[selected ? "open" : "close"]
                }`}
              >
                SIMILAR
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={styles.TabPanel}>
          <Tab.Panel className={styles["panel"]}>
            <AiOutlineStar size={18} />
            <span>{featuredFilm.vote_average}</span>

            <div className={styles["panel-genres"]}>
              {Object.keys(genresTotal).length > 0
                ? genresTotal.genres.map((genre: Genre, index: number) => (
                  <>
                      {featuredFilm.genre_ids.indexOf(genre.id) > -1 ? (
                        <>
                          <span>|</span>
                          <p>{genre.name}</p>
                        </>
                      ) : null}
                    </>
                  ))
                : null}
            </div>
          </Tab.Panel>
          <Tab.Panel className={styles["panel"]}></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
