import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { FeaturedFilmType } from "..";
import styles from "./styles.module.scss";

type FeaturedFilmProps = {
  featuredFilm: FeaturedFilmType;
};

export default function FeaturedFilm({ featuredFilm }: FeaturedFilmProps) {
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
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
