import React from "react";
import styles from "./CartItem.module.scss";
import cartImage from "../../../public/cart1.png";
import Link from "next/link";
import Image from "next/image";

export const CartItem = () => {
  return (

    <div className={styles.cart}>
      <Image 
          src='/cart1.png' 
          alt="cart"
          width={398}
          height={424} />
      <p className={styles.cartName}>Скутер Мотоцикл SYM Motors Car Ч...</p>
      <p className={styles.price}>
        <b>69 000 сом</b>
      </p>
      <Link href='/product/34'>
      <button className={styles.orderBtn}>    
          Заказать
      </button>
      </Link>
    </div>
  );
};
