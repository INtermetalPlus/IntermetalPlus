import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { CartItem } from "./components/CardItem";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  //Заготовки для стейта товаров
  // const [items, setItems] = useState([])

  //Заготовки для Api
  // useEffect(() => {
  //   try {
  //     axios.get("").then(res => setItems(res.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.mainScreen}>
          <div className={styles.mainScreenLeft}>
            <h1>Найдите лучшее качество оборудования из Европы</h1>
            <Link className={styles.mainRef} href="/assort">
              Перейти в ассортименты
              <Image
                src="/img/arrow.svg"
                alt="arrowImg"
                width={22}
                height={14} />
            </Link>
          </div>
          <div className={styles.mainScreenRight}>
            <Image
              src="/mainPageImage.png"
              alt="MainPageImg"
              width={620}
              height={511}
            />
          </div>
        </div>

        <div className={styles.about}>
          <p id="about" className={styles.about_title}>О нас</p>
          <p className={styles.about_text}>В наше динамичное время рынок оборудования бывшего употребления приобретает
              тенденцию роста. Особенно это касается рынка Европы, где как известно производятся самые качественные оборудования.
              Этот рынок
              характеризуется не только предложением, но и растущим спросом.
              Наша компания была создана специально для максимального приближения к потребителю
              Центральной Азии для оптимального
              решения следующих задач:
              - подбор оптимального сочетания цены, качества и параметров оборудования при выборе.
              Обеспечения кратчайшего времени для
              проведения демонтажа и транспортировки оборудования в</p>
          <button className={styles.about_details}>
            <Link href='#'>
              Подробнее...
            </Link>
          </button>
        </div>

        <div id="assort" className={styles.products}>
          <h2 className={styles.popularProduct}>Ассортимент</h2>
          <div className={styles.productsCard}>
            {/* {здесь должен быть условный рендер} */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
      </div>
    </section>
  );
}
