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
            <p>
              Покупая у нас, вы получаете высокое качество продукции, гарантию и
              надежное сервисное обслуживание. Мы делаем онлайн-покупки
              максимально удобными, быстрыми и надежными.
            </p>
            <Link className={styles.mainRef} href="/assort">
              Перейти в ассортименты
              <img src="/img/arrow.svg" alt="arrowImg" />
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

        <div className={styles.products}>
          <h2 className={styles.popularProduct}>Популярные Товары</h2>
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
