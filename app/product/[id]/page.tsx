"use client"
import styles from './product.module.scss'
import ProductSlider from '../../ui/slider/Slider'
import { useState } from 'react';
import { Modal } from '@/app/components/Modal';


export default function Product() {
  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    return (
        <main className={styles.main} >
        <div className={styles.container}>
          <ProductSlider />
          <div className={styles.product}>
            <h2 className={styles.product_title}>SACHMAN milling machine  data sheet</h2>
            <p className={styles.product_model}>Модель: SYM CROX 125 RED</p>
            <p className={styles.product_manufacture}>Производитель: Европа</p>
            <p className={styles.product_serial}>Серийный номер: 09078568483</p>
            <p className={styles.product_material}>Материал изделия: металл, железо, аллюминий</p>
            <div className={styles.product_price}>Цена: 69 000 сом</div>
          </div>
        </div>
  
        <section className={styles.description}>
          <h2 className={styles.description_title}>Описание</h2>
          <p className={styles.description_text}>SYM Motors из Тайваня действительно известна своими надежными и экономичными транспортными средствами. Возможно, вы имеете в виду модель &quot;Sym Symphony&quot; или другие скутеры от этого производителя. Вот несколько характеристик и особенностей, которые часто ассоциируются с скутерами SYM Motors:</p>
          <ol className={styles.description_list}>
            <li className={styles.description_item}>
              Надежность: SYM Motors славится своими транспортными средствами, которые обычно отличаются высоким уровнем надежности и долговечности. Четырехтактные двигатели обеспечивают более стабильную и эффективную работу в сравнении с двухтактными.
            </li>
            <li className={styles.description_item}>
              Экономичность: Четырехтактные двигатели обычно более топлиноэффективны, что приводит к экономии топлива и снижению расходов на его заправку. Это важно для владельцев скутеров, уделяющих внимание экологическим и экономическим аспектам.
            </li>
          </ol>
        </section>
        <section className={styles.review}>
          <h3 className={styles.review_title}>Видео обзор</h3>
          <iframe width="1040" height="711" src="https://www.youtube.com/embed/1aQ5XpHGMu0?si=RMoMFp3UZSHGmy0x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </section>
  
      </main>
    )
}