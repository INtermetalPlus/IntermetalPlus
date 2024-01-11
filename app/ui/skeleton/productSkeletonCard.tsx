import styles from './productSkelet.module.scss'


export default function ProductSkeletonCard():JSX.Element {
  return (
    <div className={styles.body}>
      <div className={styles.body_imgPlaceholder}></div>
      <p className={styles.body_titlePlaceholder}></p>
      <p className={styles.body_pricePlaceholder}></p>
      <button className={styles.body_buttonPlaceholder}></button>
    </div>
  )
}

