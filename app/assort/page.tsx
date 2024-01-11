import { CartItem } from '../components/CardItem';
import styles from './assort.module.scss';
import { Modal2 } from '../components/Modal'

export default function Assort() {
  return (
    <div className={styles.container}>
      <h2 className={styles.assort_title}>Ассортимент</h2>

      <div className={styles.productsCard}>
            {/* {здесь должен быть условный рендер} */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <Modal2 />

          </div>

    </div>
  );
}
