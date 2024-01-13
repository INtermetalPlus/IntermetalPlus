import styles from "./cartList.module.scss";
import { getProducts } from "@/app/lib/data";
import { CartItem } from "../CardItem";

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

export async function CartList() {
  const products = await getProducts()
 
  return (
    
      <div className={styles.container}> 
      {products && products.map((product: Product) => (
            <CartItem key={product.id} product={product} />
      ))}
    </div>
 
   
  );
};
