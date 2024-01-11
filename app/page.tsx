import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { CartItem } from "./components/CardItem";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductSkeletonCard from "./ui/skeleton/productSkeletonCard";
import WrapperSkeleton from "./ui/skeleton/wrapperSkeleton";

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
            <Link className={styles.mainRef} href="#assort">
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


        <div id="assort" className={styles.products}>
          <h2 className={styles.popularProduct}>Ассортимент</h2>
          <div className={styles.productsCard}>
            {/* {здесь должен быть условный рендер} */}
            {/* Тут будет скелетон и пропс который будет на основе количества выводить сколько элементов будет */}
         {/* <WrapperSkeleton count={6}/> */}

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
