import React from "react";
import styles from "./CartItem.module.scss";
import cartImage from "../../../public/cart1.png";

export const CartItem = () => {
  return (
    <div className={styles.cart}>
      <img src={cartImage.src} alt="cart" />
      <p className={styles.cartName}>Скутер Мотоцикл SYM Motors Car Ч...</p>
      <p className={styles.price}>
        <b>69 000 сом</b>
      </p>
      <button className={styles.orderBtn}>Заказать</button>
    </div>
  );
};
