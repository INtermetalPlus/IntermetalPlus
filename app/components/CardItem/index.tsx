import React, { FC } from "react";
import styles from "./CartItem.module.scss";
import cartImage from "../../../public/cart1.png";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id?: number;
  name?: string;
  images1?: string;
  images2?: string;
  images3?: string;
  images4?: string;
  video?: string;
  price?: string;
  description?: string;
  characteristic?: string;
}


export const CartItem:FC<{product:Product}> = ({ product }) => {

  return (

    <div className={styles.cart}>
      <Image 
          src={`${product.images1}`}
          alt="Image cart"
          width={398}
          height={424} />
      <p className={styles.cartName}>{product.name}</p>
      <p className={styles.price}>
        <b>{product.price}</b>
      </p>
      <Link href={`product/${product.id}`}>
      <button className={styles.orderBtn}>    
          Заказать
      </button>
      </Link>
    </div>
  );
};
