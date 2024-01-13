import { FC } from 'react'
import styles from './productSkelet.module.scss'
import ProductSkeletonCard from './productSkeletonCard'
import { getProducts } from '@/app/lib/data'

export default async function WrapperSkeleton() {
  const product = await getProducts() 
  
  return (
    <div className={styles.container}>
      {Array.from({ length: product.length }, (_, index) => (
        <ProductSkeletonCard key={index} />
      ))}
    </div>
  )
}