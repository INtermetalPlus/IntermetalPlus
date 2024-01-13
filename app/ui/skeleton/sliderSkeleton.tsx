import styles from './productSkelet.module.scss' 

export default function SliderSkeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.skeleton_imgPlaceholder}></div>
            <div className={styles.skeleton_container}>
                <div className={styles.skeleton_item}></div>
                <div className={styles.skeleton_item}></div>
                <div className={styles.skeleton_item}></div>
                <div className={styles.skeleton_item}></div>
            </div>
        </div>
    )
}