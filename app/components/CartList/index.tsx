import React, { FC, Suspense, useEffect } from "react";
import styles from "./cartList.module.scss";
import { getProducts } from "@/app/lib/data";
import { CartItem } from "../CardItem";
import { Product } from "@/features/productSlice";
import WrapperSkeleton from "@/app/ui/skeleton/wrapperSkeleton";

export async function CartList() {
  const products = await getProducts()
 
  return (
    <Suspense fallback={<WrapperSkeleton count={products.length} />}>
       <div className={styles.container}> 
      {products && products.map((product: Product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
    </Suspense>
   
  );
};
