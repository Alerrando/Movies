import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { FeaturedFilmType } from "..";
import styles from "./styles.module.scss";
import { AiOutlineStar } from 'react-icons/ai'

type FeaturedFilmProps = {
  featuredFilm: FeaturedFilmType;
};

export default function FeaturedFilm({ featuredFilm }: FeaturedFilmProps) {
  console.log(featuredFilm)

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
                className={
                  `${styles['tabble']} ${styles[selected ? "open" : "close"]}`
                }
              >
                GENERAL INFORMATION
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  `${styles['tabble']} ${styles[selected ? "open" : "close"]}`
                }
              >
                SIMILAR
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={styles.TabPanel}>
          <Tab.Panel className={styles['panel']}>
            <AiOutlineStar size={18} />
          </Tab.Panel>
          <Tab.Panel className={styles['panel']}>
            
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
