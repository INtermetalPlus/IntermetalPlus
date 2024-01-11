import Link from "next/link"
import { FC } from "react"
import styles from 'wrapper.module.scss'

export default function Wrapper({title, text}: {title: string; text: string}) {
    return (
      <div className={styles.about}>
        <p id="about" className={styles.about_title}>
          {title}
        </p>
        <p className={styles.about_text}>
          В наше динамичное время рынок оборудования бывшего употребления приобретает тенденцию роста. Особенно
          это касается рынка Европы, где как известно производятся самые качественные оборудования. Этот рынок
          характеризуется не только предложением, но и растущим спросом. Наша компания была создана
          специально для максимального приближения к потребителю Центральной Азии для оптимального
          решения следующих задач:
          - подбор оптимального сочетания цены, качества и параметров оборудования при выборе. Обеспечения
          кратчайшего времени для проведения демонтажа и транспортировки оборудования в
        </p>
        <button className={styles.about_details}>
          <Link href="#">
            Подробнее...
          </Link>
        </button>
      </div>
    );
  }

