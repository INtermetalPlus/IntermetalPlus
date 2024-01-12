import { FC } from 'react'
import styles from './productSkelet.module.scss'
import ProductSkeletonCard from './productSkeletonCard'

export default function WrapperSkeleton({ count }: { count: number }): JSX.Element {
  return (
    <div className={styles.container}>
      {Array.from({ length: count }, (_, index) => (
        <ProductSkeletonCard key={index} />
      ))}
    </div>
  )
}