import styles from "./styles.module.scss";
import { GrClose } from "react-icons/gr";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

type FilterProps = {
  setFilterMenu: (filterMenu: boolean) => void;
};

export default function Filter({ setFilterMenu }: FilterProps) {
  return (
    <div className={styles.filter}>
      <div className={styles["filter-container"]}>
        <header className={styles["filter-header"]}>
          <GrClose size={26} onClick={() => setFilterMenu(false)} />
        </header>

        <section className={styles["filter-section-questions-answers"]}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className={styles["filter-question"]}>
                  Genres
                  <ChevronUpIcon
                    className={`${open ? `${styles["close"]}` : ""} ${
                      styles["open"]
                    }`}
                  />
                </Disclosure.Button>

                <Transition
                  enter={styles["enter"]}
                  enterFrom={styles["enter-from"]}
                  enterTo={styles["enter-to"]}
                  leave={styles["leave"]}
                  leaveFrom={styles["leave-from"]}
                  leaveTo={styles["leave-to"]}
                >
                  <Disclosure.Panel className={styles["filter-answers"]}>
                    Yes! You can purchase a license that you can share with your
                    entire team.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </section>
      </div>
    </div>
  );
}
